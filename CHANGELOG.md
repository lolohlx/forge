# Changelog

## 0.3.0 (02/11/2026)

Forge vit dans l'environnement au lieu de s'imposer à chaque session. Conçu à partir de trois recherches du 02/11/2026 (doc officielle Claude Code, plugins de référence, recherche sur les systèmes multi-agents) et de deux essais réels sur Claude Code 2.1.309.

### Changé
- **Le démarrage tient en quatre lignes** (`hooks/demarrage.md`, 583 caractères au lieu de 4 400) : marqueur de version, les règles du projet priment, « charge `forge-equipe` avant une décision de produit », lis `.forge/etat.md`. Essai du 02/11 : le skill se charge sur une question de prix avec ou sans hook, et pas sur une faute de frappe.
- **Les principes deviennent un skill** (`skills/principes`), chargé quand il faut. Ton réécrit à l'explicatif : la règle et sa raison, plus de « non négociable », de « JAMAIS » ni de « brutalement ».
- **Les commandes deviennent des skills** (`skills/go`, `plan`, `qa`, `import`, `audit`, `doctor`). `go`, `qa` et `import` ne se déclenchent que par l'utilisateur (`disable-model-invocation`).
- **Les experts** : personas « Tu es l'expert X » remplacés par un périmètre et une grille ; brief d'entrée en balises (question, options, profil, contraintes, extraits, format, limites) ; format d'avis en JSON à huit champs avec confiance ancrée (100 fait cité, 75 inférence directe, 50 hypothèse) ; modèle par rôle (Opus pour le jugement, Sonnet pour la collecte) ; `maxTurns` ; ligne `tools` sur les 18 (sept héritaient de l'écriture).
- **L'équipe** (`forge-equipe`) : un dissident désigné par ligne de routage ; le critique reçoit les avis anonymisés ; pré-mortem avec trois chercheurs d'angles différents (marché, architecte, réglementaire) au lieu de trois critiques ; chaque point classé mécanique, goût ou défi ; décision consignée avec son signal de réveil ; budget : cinq agents au plus, un seul tour.
- **`/forge:go`** : liste des fonctionnalités dans `.forge/features.json` (`passes: false`), une à la fois, prouvée par son test avant d'être cochée, avancement dans `.forge/progress.md` ; la boucle de re-vérification à chaque ligne est retirée.
- Repère de coût : le « quinze fois » de juin 2025 remplacé par la règle actuelle (le coût croît avec le nombre d'agents actifs ; la doc 2026 mesure sept fois pour des équipes en mode plan).
- Manifeste complété (`displayName`, `homepage`, `repository`, `license`), description de marketplace remise à jour.

### Ajouté
- **`forge-verif`** : un vérificateur, sur un autre modèle que les experts, qui confirme, rejette ou laisse non résolu chaque objection et chaque preuve clé avant la synthèse.
- **Hook « règle pivot »** (`hooks/garde-pivot.mjs`, PreToolUse, forme exec `node`) : avant une action difficile à défaire (push forcé ou sur la branche principale, migration, déploiement, publication, suppression récursive, service qui facture ou envoie, fichier de pipeline ou de migration), il demande en deux lignes. Il n'interdit jamais. 30 cas de test, CI sur cinq shells.
- **Six cas d'eval** (`evals/`) pour `claude plugin eval` : `forge-equipe` doit se charger sur prix, promesse et données, pas sur bug, refactor et faute de frappe.
- Bloc de cinq lignes pour le CLAUDE.md d'un projet, proposé par `/forge:doctor` et l'onboarding, jamais écrit sans accord.

### Vérifié le 02/11/2026
- Un CLAUDE.md de projet l'emporte sur le contexte d'un hook SessionStart quand ils se contredisent (six essais sur six, Claude Code 2.1.309), et Claude signale la contradiction.
- La description du skill `forge-equipe` suffit à le charger au bon moment, hook ou pas.

### Non vérifié
- Chargement par Claude Desktop sous Windows.
- Aucune étude contrôlée d'un pré-mortem mené par des agents ; aucune étude des personas sur Claude.

## 0.2.0 (30/10/2026)

Nouveau profil : l'expert de son métier qui construit son propre logiciel (B2B ou B2C).

### Ajouté
- **Équipe d'experts** : 6 agents (`forge-marche`, `forge-cible`, `forge-offre`, `forge-copy`, `forge-design`, `forge-reglementaire`), en lecture seule, format de rendu fixe (avis, preuves, inconnues, ce qui ferait changer d'avis, recommandation), avis indépendants, 3 experts maximum par décision.
- **Skill `forge-equipe`** : table de routage, remontée des désaccords en tableau court, pré-mortem (Klein), équipe rouge, avertissement B2C "tu n'es pas la cible". Détail en `references/` (profils, skills d'appui, fiches méthode) chargé à la demande.
- **Détection du profil** par lecture du projet (rôle, B2B / B2C, stade) ; deux questions au plus.
- **`/forge:import`** : repérage d'un projet existant en lecture seule, un seul nouveau fichier `.forge/etat.md` après accord ; `/forge:go` en mode reprise.
- **`/forge:doctor`** : vérifie le chargement de Forge, dépannage Windows.
- Test `tests/test-hook.mjs` et workflow GitHub Actions (Linux, macOS, Windows : Git Bash, PowerShell 5.1, PowerShell 7).

### Modifié
- `PRINCIPES.md` : règle "les règles du projet priment", profil, équipe d'experts, marqueur de version, vente adaptée à la cible. Moins de 4 500 caractères (plafond de Claude Code : 10 000).
- Hook SessionStart : ajout de `compact` (les principes sont réinjectés après une compaction). Il lit `hooks/principes.json` (JSON ASCII généré par `scripts/build-hook.mjs`) : le test sous Windows PowerShell 5.1 a montré que `cat` sur le fichier UTF-8 abîmait les accents.
- `forge-product` recentré (le marché va à `forge-marche`, le prix à `forge-offre`) ; `forge-critique` : accord de façade interdit, chef du pré-mortem ; `forge-securite`, `forge-architecte` : format de rendu fixe. `forge-qa-ux` : le design system du projet prime sur ses goûts par défaut.
- `/forge:plan`, `/forge:go`, `/forge:qa`, `/forge:audit` (tableau des conflits), skill d'onboarding (installation guidée des skills d'appui, portée `local` recommandée).
- Conventions de style (tiret cadratin) : défauts, plus des règles dures.

### Non vérifié
- Priorité réelle entre CLAUDE.md et contexte du hook : la doc ne la définit pas ; la règle est instruite et testée sur un projet fictif.
- Application de bureau Windows et injection réelle du contexte dans Claude Code sous Windows (la commande du hook est prouvée par le workflow, pas Claude Code lui-même).

## 0.1.0
Première version : principes, 11 agents (PLANIF et QA), commandes go, plan, qa, audit, onboarding.
