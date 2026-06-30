---
description: Lance l'équipe QA (5 agents) pour valider le produit avant le ship.
---

Lance l'équipe QA Forge sur le projet en cours, avant la mise en vente.

Contexte / focus éventuel : $ARGUMENTS

## Déroulé
1. Lis le code et l'état réel du produit. Identifie le parcours critique.
2. Lance les 5 agents QA, en parallèle quand c'est possible :
   - **forge-qa-e2e** : tests end-to-end du parcours critique, vrais cas limites.
   - **forge-qa-securite** : revue de code + CVE des versions réelles, pas de faux positifs ni de loupés.
   - **forge-qa-rgpd** : conformité données perso (par défaut si FR), consentement, mentions, hébergement.
   - **forge-qa-ux** : audit landing/UX anti-slop + Core Web Vitals, parcours cliquable.
   - **forge-qa-vendabilite** : verdict final, preuve de besoin, pricing, acquisition, frictions de vente.
3. Consolide en un **rapport de pre-ship** : ce qui bloque le ship (rouge), ce qui est à corriger ensuite (orange), ce qui est OK (vert). Verdict global : peut-on shipper et vendre, oui ou non.

## Règles
- Honnête, pas complaisant. Pas de "c'est bon" sans preuve.
- Si un élément n'est pas finalisable (backend non branché, pages légales manquantes), signale-le explicitement à l'utilisateur.
- Avant toute action irréversible (deploy, migration, tests qui écrivent en prod), applique la règle pivot.
