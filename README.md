# Forge

**Le collaborateur Claude Code qui te mène de l'idée au produit vendable.**

Forge n'est pas un parcours de dev rigide. C'est un collaborateur adaptatif qui s'assure que tout se passe bien sur **tous les angles** à la fois : cadrage produit, architecture, sécurité, RGPD, qualité, UX et mise en vente. Il se base sur ta stack réelle, détecte ton niveau, ne casse jamais ta config existante, et ne te fait jamais cliquer "oui" sur une action que tu ne comprends pas.

L'objectif est toujours le même : un produit **vendable**, avec de vraies preuves que ça marche et que ça répond à un vrai besoin. Pour le marché français par défaut.

## Pour qui

- **L'indépendant qui se lance grâce à l'IA** : Forge le mène de l'idée au produit.
- **L'expert de son métier qui construit son propre logiciel** (B2B dans son secteur, ou B2C), déjà à l'aise avec Claude Code. Il est le patron, Forge lui fournit une **équipe d'experts**. Au lieu de deviner seul si tel message, tel prix ou tel bouton est le bon, la décision passe par les experts du domaine, qui s'appuient sur des skills reconnus, rendent un avis sourcé dans un format fixe, se contredisent quand il le faut, et **le laissent trancher**. Avant de lancer quoi que ce soit, l'équipe cherche toutes les raisons pour lesquelles ça pourrait échouer. Forge reprend ton projet là où il en est et respecte tes règles.

Forge lit ton projet pour savoir à qui il a affaire (rôle, B2B ou B2C, stade). Ce qui se lit dans le projet ne se demande pas.

**B2B ou B2C, la différence compte.** En B2B tu es souvent ta propre cible et tu peux juger seul (Forge te rappelle que c'est un échantillon de un). En B2C tu n'es pas la cible : message, prix et leviers psychologiques se valident auprès de vraies personnes, et Forge t'en avertit.

## Installation

```
/plugin marketplace add lolohlx/forge
/plugin install forge@forge
```

Puis redémarre une session. Forge injecte ses principes à chaque session.

**Sur un projet existant**, installe-le à la portée du projet : en terminal, `claude plugin install forge@forge --scope local` (réglage personnel, rien n'est commité) ou `--scope project` (écrit `.claude/settings.json`, partagé à l'équipe : regarde le changement avant). Les hooks d'un plugin ne se chargent qu'après que tu as approuvé le dossier. Vérifie que tout est chargé avec `/forge:doctor`.

## Ce que tu obtiens

### Comportement permanent
- **Les règles de ton projet priment** (CLAUDE.md, rules, hooks). Forge signale un conflit, ne l'impose jamais.
- **Non destructif** : audite, montre, propose. **Règle pivot** : avant toute action irréversible, deux lignes en clair puis oui/non.
- Recherche web continue, honnêteté (pas de flatterie), RGPD par défaut en France, tests e2e, vendre par défaut.

### L'équipe d'experts (skill `forge-equipe`)
Pour une décision, **3 experts maximum** (un système multi-agents consomme de l'ordre de 15 fois les tokens d'un chat, selon Anthropic). Chaque expert rend, en 250 mots, dans un format fixe : **avis, preuves sourcées (sinon "hypothèse"), ce qu'il ne sait pas, ce qui lui ferait changer d'avis, recommandation**. Ils ne voient pas les avis des autres. Les vrais désaccords te remontent dans un tableau de 3 lignes avec options et conséquences. Tu tranches.

| Expert | Regarde | Skill d'appui (optionnel) |
|---|---|---|
| `forge-product` | besoin réel, ICP, valeur, première vente | brainstorming (Superpowers) |
| `forge-marche` | concurrents, alternatives, avis publics | competitor-profiling, customer-research |
| `forge-cible` | emploi à accomplir, objections, entretiens sans orienter | customer-research, marketing-psychology |
| `forge-offre` | positionnement, prix, paliers | pricing, offers, product-marketing |
| `forge-copy` | promesse, clarté, preuves, appel à l'action | copywriting, copy-editing, cro |
| `forge-design` | direction visuelle, parcours, design system existant | frontend-design |
| `forge-architecte` | structure la plus simple sur ta stack | writing-plans (Superpowers) |
| `forge-securite` | surface d'attaque, CVE des versions exactes | OWASP |
| `forge-reglementaire` | règles du secteur, données personnelles et de tiers | sources officielles (régulateur, CNIL) |
| `forge-critique` | avocat du diable, **accord de façade interdit**, pré-mortem | pré-mortem (Gary Klein) |
| `forge-qa-*` (5) | e2e, sécurité, RGPD, UX, vendabilité avant le ship | verification-before-completion (Superpowers) |
| `forge-recherche`, `forge-innovation` | soutien, sur demande | |

Les skills d'appui ne sont **pas** des dépendances : s'ils manquent, l'expert applique une fiche méthode intégrée et le dit. Forge te propose de les installer un à un, avec leur coût (voir `forge/skills/forge-equipe/references/skills-appui.md` pour les commandes, versions et licences vérifiées).

### Les commandes
- **`/forge:go`** : de l'idée au vendable, ou **reprise** d'un projet existant là où il en est. S'arrête aux moments irréversibles.
- **`/forge:plan`** : cadrage avec les experts avant de coder, désaccords remontés, pré-mortem.
- **`/forge:qa`** : validation avant le ship, avec pré-mortem et équipe rouge (elle ne bloque jamais, la règle pivot dit si elle a été faite).
- **`/forge:import`** : repère l'état d'un projet existant en **lecture seule** (stack, avancement, décisions déjà prises, règles et hooks) et propose d'écrire un seul nouveau fichier, `.forge/etat.md`. Rien n'est réécrit.
- **`/forge:audit`** : audit non destructif de ta config, avec le tableau des conflits (le projet gagne toujours).
- **`/forge:doctor`** : vérifie que Forge est bien chargé et aide à dépanner.

## Windows
Le hook de démarrage utilise `cat` sans script `.sh`, la forme la plus sûre selon les tickets connus. Plusieurs problèmes de Claude Code lui-même subsistent sous Windows (nom d'utilisateur avec espace, application MSIX, onglet Chat de l'application de bureau) : `/forge:doctor` les liste. Le dépôt contient un test (`tests/test-hook.mjs`) et un workflow GitHub Actions qui vérifient la commande du hook sous Git Bash, PowerShell 5.1 et PowerShell 7 ; ils prouvent la commande, pas Claude Code. Non vérifié : l'affichage des accents sous PowerShell 5.1 avant le premier passage du workflow.

## Structure

```
forge/
  .claude-plugin/plugin.json
  PRINCIPES.md          # la constitution (courte), injectée à chaque session
  hooks/hooks.json      # SessionStart -> injecte PRINCIPES.md
  agents/               # 17 experts (6 PLANIF, 6 nouveaux, 5 QA)
  commands/             # go, plan, qa, import, audit, doctor
  skills/forge-equipe/  # routage, format de rendu, pré-mortem (détail chargé à la demande)
  skills/forge-onboarding/
tests/test-hook.mjs     # taille de PRINCIPES + commande du hook
```

## Philosophie
Pas de checklist figée. Pas de stack imposée. Pas d'action à l'aveugle. Pas de flatterie. Un avis d'IA n'est pas une preuve : la preuve, c'est un comportement réel. Un collaborateur qui te dit la vérité et te rend vendable.

## Sources et licences
Forge s'appuie, sans les recopier, sur Superpowers (MIT), marketingskills (MIT), anthropics/skills `frontend-design` (Apache 2.0) ; il s'inspire de BMAD Method (MIT, marque « BMad » réservée) sans l'installer. Méthodes : pré-mortem de Gary Klein, Jobs-to-be-Done, esprit du Mom Test, Lean Startup (paraphrasés, sources dans `references/fiches-methode.md`). Licence de Forge : MIT.
