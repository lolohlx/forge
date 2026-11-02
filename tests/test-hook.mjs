// Vérifie que la commande du hook SessionStart restitue forge/hooks/demarrage.md intact dans
// un shell donné (accents compris), que principes.json est à jour, et que le contexte de
// démarrage reste court (moins de 1 500 caractères : il est lu à chaque session).
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
const expected = readFileSync(resolve(root, 'forge/hooks/demarrage.md'), 'utf8').replace(/\r\n/g, '\n');
let failed = false;
const check = (ok, label) => {
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${label}`);
  if (!ok) failed = true;
};

check([...expected].length < 1500, `taille ${[...expected].length} caractères (< 1500)`);
check(expected.includes('FORGE v0.3'), 'marqueur de version présent');
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
