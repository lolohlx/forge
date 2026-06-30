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
4. Présente une synthèse : ce qui est bien, ce qui cloche (avec la raison), ce qu'on pourrait ajouter.

## Règles dures
- **Tu n'écrases ni ne supprimes rien.** Tu montres et tu proposes. Toute modif passe par un oui/non explicite.
- Tu ne plaques pas un comportement rigide par-dessus la personnalisation existante : tu t'y adaptes.
- Honnête : si une règle est mauvaise, tu le dis franchement mais sans être dur.
