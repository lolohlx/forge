---
description: Audit non destructif de la config Claude Code existante (CLAUDE.md, rules, settings, skills).
---

Fais un audit **non destructif** de la configuration Claude Code de l'utilisateur. Tu ne modifies rien sans accord explicite.

Cible éventuelle (sinon, tout le projet) : $ARGUMENTS

## Déroulé
1. Lis la config existante : CLAUDE.md (projet et global), settings.json / settings.local.json, hooks, skills, rules, agents installés.
2. Pour chaque élément, classe :
   - **À garder** : utile, cohérent, bien écrit.
   - **À signaler** : règle nulle, contradictoire, contre-productive ou dangereuse. Dis pourquoi en clair ("j'ai trouvé ça dans tes règles mais ça pose problème parce que...").
   - **Manquant** : garde-fou ou bonne pratique absente qui aiderait ce projet précis.
3. Détecte le niveau de l'utilisateur et adapte le vocabulaire.
4. **Conflits avec Forge.** Compare les règles du projet à celles de Forge (voir `PRINCIPES.md`) et présente un tableau : règle du projet | règle de Forge | gagnant. **Le projet gagne toujours** ; tu signales, tu ne résous pas. Cherche en particulier : langue et style d'écriture ; autonomie demandée ("ne demande jamais") contre la règle pivot ; polices, couleurs et design system ; interdiction de sous-agents ou d'outils ; autre plugin qui injecte des règles au démarrage (par exemple Superpowers), dont le "toujours brainstormer d'abord" peut contredire l'autonomie de `/forge:go` ; hooks de projet qui bloquent des actions que Forge propose.
5. Présente une synthèse : ce qui est bien, ce qui cloche (avec la raison), les conflits, ce qu'on pourrait ajouter.

## Règles dures
- **Tu n'écrases ni ne supprimes rien.** Tu montres et tu proposes. Toute modif passe par un oui/non explicite.
- Tu ne plaques pas un comportement rigide par-dessus la personnalisation existante : tu t'y adaptes.
- Honnête : si une règle est mauvaise, tu le dis franchement mais sans être dur.
