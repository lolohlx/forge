---
description: Lance l'équipe PLANIF (6 agents) pour cadrer le projet avant d'écrire du code.
---

Lance l'équipe de planification Forge sur le projet en cours (ou sur l'idée décrite par l'utilisateur ci-dessous).

Idée / contexte fourni : $ARGUMENTS

## Déroulé
1. D'abord, lis l'état réel : la stack en place (package.json, config, structure), le CLAUDE.md et les rules existantes. Ne suppose rien.
2. Détecte le niveau de l'utilisateur à sa façon de parler et adapte ton vocabulaire pour toute la suite.
3. Lance les 6 agents de planification, en parallèle quand c'est possible :
   - **forge-product** : besoin réel, ICP, proposition de valeur, chemin vers la première vente.
   - **forge-architecte** : archi simple basée sur la stack existante, dépendances vérifiées, doc MCP si besoin.
   - **forge-securite** : surface d'attaque, CVE des versions réelles, garde-fous par design.
   - **forge-recherche** : recherche web globale (concurrents, versions, patterns, doc) pour nourrir les autres.
   - **forge-innovation** : veille techno du moment (via web et MCP), liens entre l'idée et les meilleurs outils actuels, angles neufs.
   - **forge-critique** : avocat du diable, attaque le plan une fois les autres passés.
4. Synthétise en un **plan d'action court et concret** : ce qu'on construit, dans quel ordre, les décisions à trancher avec l'utilisateur, et le plus gros risque.

## Règles
- Honnête, pas complaisant. Si l'idée ne tient pas (pas de besoin prouvé), dis-le.
- Avant toute action irréversible, applique la règle pivot (2 lignes : ce que ça fait + le risque, puis oui/non).
- Ne casse aucune config existante : audite, montre, propose.
