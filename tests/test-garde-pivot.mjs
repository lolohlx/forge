// Vérifie le hook PreToolUse de la règle pivot (forge/hooks/garde-pivot.mjs) :
// il répond « ask » avec deux lignes sur les actions difficiles à défaire, et rien sur le reste.
// Usage : node tests/test-garde-pivot.mjs
// Écrit par Claude (Forge 0.3) le 02/11/2026.
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const script = resolve(import.meta.dirname, '../forge/hooks/garde-pivot.mjs');
let failed = false;
const check = (ok, label) => {
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${label}`);
  if (!ok) failed = true;
};

const lancer = (entree) => {
  const run = spawnSync('node', [script], { input: JSON.stringify(entree), encoding: 'utf8' });
  if (run.status !== 0) return { erreur: run.status };
  if (!run.stdout.trim()) return null;
  return JSON.parse(run.stdout);
};

const doitDemander = [
  ['Bash', { command: 'git push --force origin feature' }],
  ['Bash', { command: 'git push origin main' }],
  ['Bash', { command: 'git push origin :vieille-branche' }],
  ['Bash', { command: 'rm -rf dist' }],
  ['PowerShell', { command: 'Remove-Item -Recurse -Force .\\dist' }],
  ['Bash', { command: 'psql -c "DROP TABLE clients"' }],
  ['Bash', { command: 'npx prisma migrate deploy' }],
  ['Bash', { command: 'supabase db push' }],
  ['Bash', { command: 'vercel --prod' }],
  ['Bash', { command: 'netlify deploy --prod --dir=dist' }],
  ['Bash', { command: 'npm publish' }],
  ['Bash', { command: 'gh release create v1.0.0' }],
  ['Bash', { command: 'curl -X POST https://api.stripe.com/v1/refunds' }],
  ['Bash', { command: 'ssh vps "docker compose down"' }],
  ['Edit', { file_path: '.github/workflows/deploy.yml' }],
  ['Write', { file_path: 'supabase/migrations/0042_clients.sql' }],
  ['Edit', { file_path: 'C:\\Users\\toi\\projet\\.env.production' }],
];

const neDoitRienDire = [
  ['Bash', { command: 'git status' }],
  ['Bash', { command: 'git push origin ma-branche' }],
  ['Bash', { command: 'npm test' }],
  ['Bash', { command: 'ls -la' }],
  ['Bash', { command: 'rm fichier.tmp' }],
  ['Bash', { command: 'npx prisma migrate dev --name essai' }],
  ['Bash', { command: 'vercel dev' }],
  ['Bash', { command: 'git commit -m "wip"' }],
  ['Edit', { file_path: 'src/app.ts' }],
  ['Write', { file_path: 'docs/notes.md' }],
  ['Read', { file_path: '.env' }],
];

for (const [tool_name, tool_input] of doitDemander) {
  const r = lancer({ tool_name, tool_input });
  const ok = r && r.hookSpecificOutput?.permissionDecision === 'ask'
    && /Ce que ça fait/.test(r.hookSpecificOutput.permissionDecisionReason)
    && /Le risque/.test(r.hookSpecificOutput.permissionDecisionReason);
  check(ok, `demande : ${tool_name} ${tool_input.command ?? tool_input.file_path}`);
}
for (const [tool_name, tool_input] of neDoitRienDire) {
  const r = lancer({ tool_name, tool_input });
  check(r === null, `silence : ${tool_name} ${tool_input.command ?? tool_input.file_path}`);
}
check(lancer({}) === null, 'entrée vide : silence');
const brut = spawnSync('node', [script], { input: 'pas du json', encoding: 'utf8' });
check(brut.status === 0 && !brut.stdout.trim(), 'entrée invalide : silence, code 0');

process.exit(failed ? 1 : 0);
