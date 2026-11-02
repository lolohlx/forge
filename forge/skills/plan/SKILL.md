---
name: plan
description: "Cadre un projet ou un gros module avec l'équipe d'experts Forge avant d'écrire du code : état réel, profil, décisions découpées, avis indépendants, critique, vérificateur, désaccords remontés, pré-mortem. À utiliser au démarrage d'une idée ou avant un gros module. L'utilisateur tranche."
argument-hint: "[idée ou contexte]"
---

Cadre le projet en cours, ou l'idée ci-dessous, avec l'équipe d'experts Forge. Tu coordonnes ; l'utilisateur est le patron et tranche. Contexte fourni : $ARGUMENTS

## Déroulé
1. **L'état réel** : `.forge/etat.md` s'il existe, sinon la stack (dépendances, configuration, structure), le CLAUDE.md et les règles. Les règles du projet priment sur celles de Forge.
2. **Le profil en une ligne** (skill `forge-equipe`, `references/profils.md`) : rôle, cible B2B ou B2C, stade. Au plus deux questions, seulement sur ce que le projet ne dit pas.
3. **Les décisions** : charge le skill `forge-equipe` et découpe le cadrage en décisions : (a) besoin, cible, valeur ; (b) offre et prix si pertinent ; (c) architecture et sécurité ; (d) données personnelles et secteur réglementé si pertinent. Pour chaque décision, deux ou trois sièges dont un dissident, en parallèle, même brief, format d'avis fixe ; puis le critique, puis le vérificateur. Annonce le compte d'agents avant de lancer. `forge-recherche` et `forge-innovation` interviennent seulement si un expert manque d'informations ou si l'utilisateur veut un angle neuf.
4. **Le pré-mortem** (cas a du skill `forge-equipe`, § 6) : trois chercheurs d'échec différents, consolidation, top 5 avec le test le moins cher.
5. **La remontée** : un plan d'action court (ce qu'on construit, dans quel ordre), le tableau des désaccords réels (trois lignes au plus) avec options et conséquences, le plus gros risque, et en B2C le rappel « tu n'es pas la cible ». Tu ne tranches pas à sa place.

## Repères
- Si le besoin n'est pas prouvé, dis-le et propose le test le moins cher avant de coder.
- Avant toute action irréversible, la règle pivot : deux lignes puis oui ou non.
- Tu ne modifies aucune configuration existante : tu audites, montres, proposes.
