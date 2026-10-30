// Vérifie que la commande du hook SessionStart restitue PRINCIPES.md octet pour octet
// dans un shell donné, et que le fichier respecte le plafond de 10 000 caractères
// de la doc Claude Code (marge de sécurité : 8 000).
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

const file = resolve(import.meta.dirname, '../forge/PRINCIPES.md');
const expected = readFileSync(file);
const text = expected.toString('utf8');
let failed = false;
const check = (ok, label) => {
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${label}`);
  if (!ok) failed = true;
};

check([...text].length < 8000, `taille ${[...text].length} caractères (< 8000)`);
check(text.includes('FORGE-PRINCIPES v'), 'marqueur de version présent');

// Claude Code remplace ${CLAUDE_PLUGIN_ROOT} par un chemin (slashs, sauf sous PowerShell).
const path = name === 'bash' ? file.replaceAll('\\', '/') : file;
const [bin, flags] = shells[name];
const run = spawnSync(bin, [...flags, `cat "${path}"`], { encoding: 'buffer' });
check(run.status === 0, `${name} : code de sortie 0 (reçu ${run.status}${run.error ? `, ${run.error.message}` : ''})`);
const got = run.stdout ?? Buffer.alloc(0);
const norm = (b) => b.toString('utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n').trimEnd();
check(norm(got) === norm(expected), `${name} : sortie identique au fichier, accents compris`);
process.exit(failed ? 1 : 0);
