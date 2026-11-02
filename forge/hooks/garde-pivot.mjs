// Forge, règle pivot : avant une action difficile à défaire, demander, en deux lignes.
// Hook PreToolUse (forme exec, `node`), donc identique sous macOS, Linux et Windows.
// Il ne bloque jamais : il répond « ask », et Claude Code montre la raison dans la
// demande d'autorisation. Les gardes propres au projet (deny rules, hooks) restent maîtres.
// Écrit par Claude (Forge 0.3) le 02/11/2026.
import { readFileSync } from 'node:fs';

const regles = [
  // [motif sur la commande, ce que ça fait, le risque]
  [/\bgit\s+push\b.*(\s--force\b|\s-f\b|\s--force-with-lease\b|\s\+\S+)/i,
    'Pousse en réécrivant l\'historique distant.', 'Les commits écrasés sont perdus pour tous ceux qui ont la branche.'],
  [/\bgit\s+push\b.*\s--delete\b|\bgit\s+push\b\s+\S+\s+:\S+/i,
    'Supprime une branche ou un tag sur le dépôt distant.', 'La référence distante disparaît pour tout le monde.'],
  [/\bgit\s+push\b.*\b(main|master|prod|production|release)\b/i,
    'Publie des commits sur une branche de production ou principale.', 'Ce qui est poussé peut partir en déploiement.'],
  [/\bgit\s+(reset\s+--hard|clean\s+-\S*f|branch\s+-D|checkout\s+--\s+\.)\b/i,
    'Jette des modifications ou une branche locale.', 'Le travail non commité ou la branche n\'est pas récupérable.'],
  [/\b(rm\s+-\S*r\S*\s|rmdir\s+\/s|Remove-Item\b.*-Recurse|del\s+\/[sq])/i,
    'Supprime des fichiers ou des dossiers.', 'Pas de corbeille : ce qui est supprimé ne revient pas.'],
  [/\b(drop\s+(table|database|schema)|truncate\s+table|delete\s+from\s+\w+\s*;?\s*$)/i,
    'Efface des données ou des tables dans une base.', 'Les données concernées sont perdues sans sauvegarde.'],
  [/\b(prisma\s+migrate\s+(deploy|reset)|supabase\s+db\s+(push|reset)|knex\s+migrate|sequelize\s+db:migrate|alembic\s+upgrade|rails\s+db:migrate|drizzle-kit\s+(push|migrate)|flyway\s+migrate|dbmate\s+up)\b/i,
    'Applique une migration à une base de données.', 'Le schéma change ; un retour arrière n\'est pas toujours possible.'],
  [/\b(vercel(\s+deploy)?\s+--prod|netlify\s+deploy\b.*--prod|fly\s+deploy|railway\s+up|heroku\s+(container:release|releases:rollback)|gcloud\s+\S+\s+deploy|aws\s+\S+\s+deploy|kubectl\s+(apply|delete|rollout)|terraform\s+(apply|destroy)|pulumi\s+(up|destroy)|wrangler\s+deploy|firebase\s+deploy|serverless\s+deploy|sst\s+deploy|cdk\s+deploy)\b/i,
    'Déploie ou modifie un environnement en ligne.', 'Les utilisateurs réels voient le changement tout de suite.'],
  [/\b(npm\s+publish|pnpm\s+publish|yarn\s+(npm\s+)?publish|cargo\s+publish|gem\s+push|twine\s+upload|gh\s+release\s+create|gh\s+pr\s+merge|gh\s+repo\s+delete)\b/i,
    'Publie une version ou fusionne vers l\'extérieur.', 'Ce qui est publié est public et difficile à retirer.'],
  [/\b(stripe\s+\S*(charge|payment|refund|payout|transfer)|api\.stripe\.com|api\.twilio\.com|api\.sendgrid\.com|api\.resend\.com|api\.mailgun\.net)\b/i,
    'Appelle un service qui facture, encaisse, rembourse ou envoie à de vraies personnes.', 'Un paiement ou un envoi réel ne se rattrape pas.'],
  [/\bssh\s+\S+.*\b(rm\s+-\S*r|systemctl\s+(stop|restart|disable)|docker\s+(rm|compose\s+down|system\s+prune)|reboot|shutdown)\b/i,
    'Agit sur un serveur distant.', 'Un service peut s\'arrêter pour de vrais utilisateurs.'],
];

const fichiersSensibles = /(^|[\\/])(\.github[\\/]workflows[\\/]|\.gitlab-ci\.yml$|Jenkinsfile$|\.env(\.|$)|migrations?[\\/]|supabase[\\/]migrations[\\/])/i;

let entree = {};
try { entree = JSON.parse(readFileSync(0, 'utf8') || '{}'); } catch { process.exit(0); }
const outil = entree.tool_name || '';
const saisie = entree.tool_input || {};
let motif = null;

if (outil === 'Bash' || outil === 'PowerShell') {
  const commande = String(saisie.command || '');
  motif = regles.find(([re]) => re.test(commande)) || null;
} else if (outil === 'Edit' || outil === 'Write' || outil === 'MultiEdit') {
  const chemin = String(saisie.file_path || saisie.path || '');
  if (fichiersSensibles.test(chemin)) {
    motif = [null, 'Modifie un fichier de pipeline, de migration ou de secrets.', 'Un changement ici agit sur la production ou sur des données réelles.'];
  }
}

if (!motif) process.exit(0);

const [, fait, risque] = motif;
const reponse = {
  hookSpecificOutput: {
    hookEventName: 'PreToolUse',
    permissionDecision: 'ask',
    permissionDecisionReason: `Forge, règle pivot. Ce que ça fait : ${fait} Le risque : ${risque} Oui pour continuer, non pour arrêter.`,
  },
};
process.stdout.write(JSON.stringify(reponse));
