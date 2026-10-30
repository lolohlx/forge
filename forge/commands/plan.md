---
description: Cadre le projet avec l'équipe d'experts avant d'écrire du code (ou avant un gros module). Lit l'état existant, consulte les bons experts, remonte les désaccords, lance un pré-mortem.
---

Cadre le projet en cours (ou l'idée décrite ci-dessous) avec l'équipe d'experts Forge. Tu es le coordinateur : l'utilisateur est le patron et il tranche.

Idée / contexte fourni : $ARGUMENTS

## Déroulé
1. **Lis l'état réel** : `.forge/etat.md` s'il existe, sinon la stack (package.json, config, structure), le CLAUDE.md et les rules. Ne suppose rien. Les règles du projet priment sur celles de Forge.
2. **Énonce le profil en une ligne** (voir `forge-equipe`, `references/profils.md`) : rôle, cible B2B ou B2C, stade. Pose au plus 2 questions, seulement sur ce que le projet ne dit pas.
3. **Charge le skill `forge-equipe`** et découpe le cadrage en décisions : (a) besoin, cible, valeur ; (b) offre et prix si pertinent ; (c) architecture et sécurité ; (d) données personnelles et secteur réglementé si pertinent. Pour chaque décision, **3 experts maximum** selon la table de routage, en parallèle, avis indépendants, format de rendu fixe. `forge-recherche` et `forge-innovation` interviennent en soutien, seulement si un expert manque d'informations ou si l'utilisateur veut un saut qualitatif.
4. **Ajoute `forge-critique`** après les experts, puis lance le **pré-mortem** (cas a de `forge-equipe`, §5).
5. **Remonte à l'utilisateur** : un plan d'action court (ce qu'on construit, dans quel ordre), le tableau des désaccords réels (3 lignes max) avec options et conséquences, le plus gros risque, et en B2C le bandeau « tu n'es pas la cible ». Ne tranche pas à sa place.

## Règles
- Honnête, pas complaisant. Si le besoin n'est pas prouvé, dis-le et propose le test le moins cher.
- Annonce combien d'experts tu lances.
- Avant toute action irréversible, règle pivot (2 lignes : ce que ça fait + le risque, puis oui/non).
- Ne casse aucune config existante : audite, montre, propose.
