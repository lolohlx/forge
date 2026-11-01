// Vérifie que la commande du hook SessionStart restitue PRINCIPES.md intact dans un shell
// donné (accents compris), que principes.json est à jour, et que le texte respecte le
// plafond de 10 000 caractères de la doc Claude Code (marge de sécurité : 8 000).
// Usage : node tests/test-hook.mjs <bash|powershell|pwsh>
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const shells = {
  bash: ['bash', ['-c']],
  powershell: ['powershell', ['-NoProfile', '-Command']],
  pwsh: ['pwsh', ['-NoProfile', '-Command']],
};
const name = process.argv[2] ?? 'bash';
if (!shells[name]) {
  console.error(`shell inconnu : ${name}`);
  process.exit(2);
}

const root = resolve(import.meta.dirname, '..');
const expected = readFileSync(resolve(root, 'forge/PRINCIPES.md'), 'utf8').replace(/\r\n/g, '\n');
let failed = false;
const check = (ok, label) => {
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${label}`);
  if (!ok) failed = true;
};

check([...expected].length < 8000, `taille ${[...expected].length} caractères (< 8000)`);
check(expected.includes('FORGE-PRINCIPES v'), 'marqueur de version présent');
check(spawnSync('node', ['scripts/build-hook.mjs', '--check'], { cwd: root }).status === 0, 'principes.json à jour');

// La commande lue dans hooks.json, avec ${CLAUDE_PLUGIN_ROOT} remplacé comme le fait Claude Code
// (slashs, sauf sous PowerShell).
const hooks = JSON.parse(readFileSync(resolve(root, 'forge/hooks/hooks.json'), 'utf8'));
const template = hooks.hooks.SessionStart[0].hooks[0].command;
const pluginRoot = resolve(root, 'forge');
const command = template.replace('${CLAUDE_PLUGIN_ROOT}', name === 'bash' ? pluginRoot.replaceAll('\\', '/') : pluginRoot);
const [bin, flags] = shells[name];
const run = spawnSync(bin, [...flags, command], { encoding: 'buffer' });
check(run.status === 0, `${name} : code de sortie 0 (reçu ${run.status}${run.error ? `, ${run.error.message}` : ''})`);
let got = null;
try {
  got = JSON.parse((run.stdout ?? Buffer.alloc(0)).toString('utf8').replace(/^﻿/, '')).hookSpecificOutput.additionalContext;
} catch {}
check(got !== null && got.replace(/\r\n/g, '\n') === expected, `${name} : sortie JSON valide, texte identique, accents compris`);
process.exit(failed ? 1 : 0);
