// Génère forge/hooks/principes.json à partir de PRINCIPES.md.
// Le hook SessionStart lit ce fichier : JSON en ASCII pur (accents en \uXXXX), donc
// indépendant de l'encodage du shell (PowerShell 5.1 abîme les accents d'un `cat` UTF-8).
// Usage : node scripts/build-hook.mjs            (écrit le fichier)
//         node scripts/build-hook.mjs --check    (échoue s'il est périmé)
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const text = readFileSync(resolve(root, 'forge/PRINCIPES.md'), 'utf8').replace(/\r\n/g, '\n');
const json = JSON.stringify({
  hookSpecificOutput: { hookEventName: 'SessionStart', additionalContext: text },
}).replace(/[\u007f-￿]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, '0')}`);
const out = resolve(root, 'forge/hooks/principes.json');

if (process.argv.includes('--check')) {
  let current = '';
  try { current = readFileSync(out, 'utf8'); } catch {}
  if (current.trimEnd() !== json) {
    console.error('forge/hooks/principes.json est périmé : lancer node scripts/build-hook.mjs');
    process.exit(1);
  }
} else {
  writeFileSync(out, `${json}\n`);
}
