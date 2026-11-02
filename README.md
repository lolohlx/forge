# Forge

**L'équipe d'experts de ton Claude Code, pour décider de ce qui fait vendre.**

Avec Claude Code, le code avance vite. Les décisions qui font vendre, elles, restent dans ta tête : quel prix, quelle promesse, qui viser en premier, quelle règle s'applique à tes données. Forge les fait passer par une équipe d'experts dont tu es le patron : des avis indépendants et sourcés, un critique, un vérificateur, et c'est toi qui tranches. Pour le marché français par défaut.

## Pour qui
- **L'expert de son métier qui construit son propre logiciel**, en B2B dans son secteur ou en B2C, déjà à l'aise avec Claude Code. Forge reprend son projet là où il en est et respecte ses règles.
- **L'indépendant qui se lance grâce à l'IA** : Forge le mène de l'idée au produit, avec `/forge:go`.

Forge lit le projet pour savoir à qui il a affaire (rôle, B2B ou B2C, stade). **La différence compte** : en B2B tu es souvent ta propre cible et tu peux juger seul (Forge te rappelle que c'est un échantillon de un) ; en B2C tu n'es pas la cible, et un avis sur le message, le prix ou un levier reste une hypothèse jusqu'au test auprès de vraies personnes.

## Installation

En terminal, depuis le dossier du projet :

```
claude plugin marketplace add lolohlx/forge
claude plugin install forge@forge --scope local
```

Puis une nouvelle session, et `/forge:doctor`. La portée `local` active Forge dans ce dossier seulement, pour toi, sans rien commiter (`.claude/settings.local.json`). `--scope user` l'active partout ; `--scope project` l'écrit dans `.claude/settings.json`, partagé à l'équipe. Les hooks d'un plugin ne se chargent qu'après que tu as approuvé le dossier. Mise à jour : `claude plugin update forge@forge`.

Tu peux aussi laisser ton Claude le faire : « Installe le plugin Forge depuis lolohlx/forge, en portée locale, puis dis-moi d'ouvrir une nouvelle session. »

## Au quotidien
Tu travailles comme d'habitude. Forge ne se voit pas, sauf quatre lignes au démarrage.

1. **Quand une décision de produit se présente** (prix, offre, message, cible, fonctionnalité à construire d'abord, données personnelles, secteur réglementé, lancement), le skill `forge-equipe` se charge seul. Claude annonce les deux ou trois experts qu'il consulte et pourquoi, dont un **dissident désigné**. Ils rendent chacun seul un avis au même format (recommandation, confiance ancrée, preuves citées ou « hypothèse », ce qui les ferait changer d'avis, ce qui manque). Un **critique** cherche les vrais désaccords, un **vérificateur** d'un autre modèle remonte aux sources. Tu reçois une ligne s'ils sont d'accord, un tableau de trois lignes sinon, et tu tranches. La décision se consigne dans `.forge/decisions.md` si tu le veux, avec le signal qui la rouvrirait.
2. **Avant une action difficile à défaire** (pousser en force ou sur la branche principale, migrer une base, déployer, publier, supprimer, appeler un service qui facture ou envoie), un hook demande en deux lignes : ce que ça fait, le risque. Il demande, il n'interdit jamais : les gardes de ton projet restent maîtres.
3. **Trois gestes** pour le reste : `/forge:import` une fois par projet existant, `/forge:qa` avant une sortie, `/forge:go` pour déléguer une étape entière.
4. **Ton CLAUDE.md** : `/forge:doctor` et l'onboarding te proposent cinq lignes à y ajouter, et ne les écrivent jamais sans ton oui. Tes règles priment sur celles de Forge ; en cas de conflit, Claude applique les tiennes et le dit (vérifié : sur une consigne contradictoire, le CLAUDE.md l'emporte six fois sur six).

## L'équipe

| Expert | Regarde | Modèle | Skill d'appui (optionnel) |
|---|---|---|---|
| `forge-product` | besoin réel, client précis, valeur, première vente | Opus | brainstorming (Superpowers) |
| `forge-marche` | concurrents, alternatives, avis publics, taille avec source | Sonnet | competitor-profiling, customer-research |
| `forge-cible` | pourquoi on achète, acheteur contre utilisateur, entretiens | Sonnet | customer-research, marketing-psychology |
| `forge-offre` | positionnement, prix, paliers, garanties | Opus | pricing, offers, product-marketing |
| `forge-copy` | promesse, mots du client, preuves, appel à l'action | Sonnet | copywriting, copy-editing, cro |
| `forge-design` | direction visuelle, parcours, design system existant | Sonnet | frontend-design |
| `forge-architecte` | structure la plus simple sur ta stack | Opus | writing-plans (Superpowers) |
| `forge-securite` | surface d'attaque, failles des versions exactes | Opus | OWASP |
| `forge-reglementaire` | règles du secteur, données personnelles et de tiers | Opus | sources officielles (régulateur, CNIL) |
| `forge-critique` | désaccords réels, hypothèses prises pour des faits ; pré-mortem, équipe rouge | Opus | pré-mortem (Gary Klein) |
| `forge-verif` | confirme, rejette ou laisse non résolu chaque objection et preuve clé | Sonnet | |
| `forge-qa-*` (5) | bout en bout, sécurité, données, interface, vendabilité avant la sortie | selon le rôle | verification-before-completion |
| `forge-recherche`, `forge-innovation` | soutien, sur demande | Sonnet | |

Tous lisent, cherchent sur le web et ne modifient rien (`forge-qa-e2e` écrit des tests). Les skills d'appui ne sont **pas** des dépendances : s'ils manquent, l'expert applique une fiche méthode intégrée et le dit ; Forge propose de les installer un à un, avec leur coût (`forge/skills/forge-equipe/references/skills-appui.md`).

**Le pré-mortem** (« imaginons que dans six mois c'est un échec ») lance trois chercheurs d'échec d'angles différents, consolidés par le critique en un top 5 avec le test le moins cher par cause. **L'équipe rouge** attaque le plan avant toute action tournée vers l'extérieur ; elle ne bloque jamais.

## Les commandes
- **`/forge:import`** : repère l'état d'un projet existant en lecture seule, propose un seul fichier, `.forge/etat.md`.
- **`/forge:plan`** : cadrage avec les experts avant de coder, désaccords remontés, pré-mortem.
- **`/forge:qa`** : les agents QA dont le périmètre existe, pré-mortem et équipe rouge si la sortie est tournée vers l'extérieur, vérificateur sur les constats bloquants, rapport rouge, orange, vert.
- **`/forge:go`** : de l'idée au vendable, ou reprise d'un projet. Liste des fonctionnalités dans `.forge/features.json`, une à la fois, chacune prouvée par son test avant d'être cochée.
- **`/forge:audit`** : audit non destructif de ta configuration, tableau des conflits (le projet gagne toujours).
- **`/forge:doctor`** : vérifie que Forge est chargé, aide à dépanner, propose le bloc CLAUDE.md.
- `/forge:principes` : les principes de fonctionnement, que les skills chargent quand il faut.

`import`, `qa` et `go` ne se lancent que par toi : Claude ne les déclenche pas seul.

## Windows
Forge n'a aucun script `.sh`. Le hook de démarrage lit un JSON en ASCII avec `cat` ; le hook « règle pivot » est un script `node` lancé en forme exec, donc sans shell. Les deux sont testés en CI sous Linux, macOS, Windows Git Bash, PowerShell 5.1 et PowerShell 7 ; la CI prouve les commandes, pas Claude Code lui-même. Travaille dans l'onglet **Code** de Claude Desktop, pas dans l'onglet Chat, et installe par la ligne de commande : `/forge:doctor` liste les cas connus.

## Mesurer
- `claude plugin details forge@forge` : ce que Forge ajoute à chaque session.
- `/skill-doctor` dans une session : ce que chaque skill coûte et s'il a servi.
- `claude plugin eval ./forge --disallow-tools Agent --no-publish` : six cas vérifient que `forge-equipe` se charge sur une décision (prix, promesse, données) et pas sur un bug, un refactor ou une faute de frappe.

## Structure

```
forge/
  .claude-plugin/plugin.json
  hooks/hooks.json          # SessionStart (quatre lignes) et PreToolUse (règle pivot)
  hooks/demarrage.md        # le contexte de démarrage ; principes.json en est la forme JSON ASCII
  hooks/garde-pivot.mjs     # la règle pivot : demande, n'interdit jamais
  agents/                   # 18 experts, un fichier chacun
  skills/principes/         # les principes, chargés quand il faut
  skills/forge-equipe/      # routage, dissident, format d'avis, brief, pré-mortem, équipe rouge
  skills/{go,plan,qa,import,audit,doctor,forge-onboarding}/
  evals/                    # six cas de déclenchement pour claude plugin eval
scripts/build-hook.mjs      # génère principes.json depuis demarrage.md
tests/                      # hook de démarrage dans chaque shell, règle pivot (30 cas)
```

**Modifier le démarrage** : éditer `forge/hooks/demarrage.md`, puis `node scripts/build-hook.mjs`. Le test échoue si `principes.json` est périmé ou si le texte dépasse 1 500 caractères.

## Ce qui est vérifié, et ce qui ne l'est pas
Vérifié le 02/11/2026 sur Claude Code 2.1.309 : le skill `forge-equipe` se charge sur une question de prix et pas sur une faute de frappe, avec ou sans hook de démarrage ; un CLAUDE.md de projet l'emporte sur le contexte d'un hook quand ils se contredisent. Non vérifié : le chargement par Claude Desktop sous Windows ; aucune étude contrôlée d'un pré-mortem mené par des agents. Les sources sont dans `forge/skills/forge-equipe/references/fiches-methode.md`.

## Philosophie
Pas de liste à cocher. Pas de stack imposée. Pas d'action à l'aveugle. Pas de flatterie. Un avis de modèle n'est pas une preuve : la preuve, c'est un comportement réel. Un collaborateur qui te dit ce que les preuves disent et te laisse décider.

## Sources et licences
Forge s'appuie, sans les recopier, sur Superpowers (MIT), marketingskills (MIT), `frontend-design` d'Anthropic (Apache 2.0). Méthodes : pré-mortem de Gary Klein, Jobs-to-be-Done, esprit du Mom Test, Lean Startup (paraphrasés). Licence de Forge : MIT.
