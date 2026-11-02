---
name: qa
description: "Lance l'équipe QA de Forge avant une mise en production ou une mise en vente : tests de bout en bout, sécurité, données personnelles, interface, vendabilité, puis pré-mortem et équipe rouge si la sortie est tournée vers l'extérieur. Rapport rouge, orange, vert. Coûte jusqu'à cinq agents, plus l'équipe rouge. À lancer soi-même quand le produit est jugé prêt."
disable-model-invocation: true
argument-hint: "[périmètre]"
---

Lance l'équipe QA de Forge sur le projet en cours, avant la sortie. Périmètre ou point d'attention : $ARGUMENTS

## Déroulé
1. **L'état réel** du produit et le parcours critique. Lis `.forge/etat.md` et les décisions prises : les agents QA les reçoivent dans leur brief, avec les chemins utiles. Les règles du projet priment ; aucun test n'écrit sur des données réelles sans la règle pivot.
2. **Les agents QA**, en parallèle quand c'est possible, chacun avec le même brief et en annonçant le compte :
   - `forge-qa-e2e` : tests de bout en bout du parcours critique, sortie des commandes à l'appui ;
   - `forge-qa-securite` : revue du code écrit et failles connues des versions réelles ;
   - `forge-qa-rgpd` : données personnelles (par défaut si le marché est français) ;
   - `forge-qa-ux` : parcours cliquable, mesures, cohérence avec le design system du projet ;
   - `forge-qa-vendabilite` : verdict sur preuves, prix, canal, frictions.
   Lance seulement ceux dont le périmètre existe dans le projet (pas d'audit d'interface sans interface).
3. **Si la sortie est tournée vers l'extérieur** (publication, vente, vrais clients) : le pré-mortem (cas b) puis l'équipe rouge du skill `forge-equipe`, § 6. Elles ne bloquent jamais ; le rapport dit si elles ont été faites.
4. **Le vérificateur** (`forge-verif`) passe sur les constats bloquants avant la synthèse : confirmé, rejeté, non résolu.
5. **Le rapport de sortie** : rouge (bloque la sortie, confirmé), orange (à corriger ensuite, ou non résolu), vert. Chaque point cite le fichier, la ligne ou la mesure. Verdict : on peut sortir et vendre, oui ou non. Un élément non finalisable (paiement non branché, pages légales absentes) se signale, il ne se bricole pas.

« Tous les tests passent » sans la sortie des commandes ne vaut pas un vert.
