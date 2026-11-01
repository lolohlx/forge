# Changelog

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
