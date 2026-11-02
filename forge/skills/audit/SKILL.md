---
name: audit
description: "Audit non destructif de la configuration Claude Code du projet (CLAUDE.md, règles, settings, hooks, skills, agents) avec le tableau des conflits entre les règles du projet et celles de Forge. Le projet gagne toujours. À utiliser avant d'installer Forge sur un projet qui a déjà ses règles, et après un changement de configuration."
argument-hint: "[fichier ou dossier]"
---

Fais un audit **non destructif** de la configuration Claude Code de l'utilisateur. Tu ne modifies rien sans accord explicite. Cible : $ARGUMENTS (sinon tout le projet).

## Déroulé
1. Si Claude Code le propose dans cette session, lance d'abord `/doctor prompt-audit` : il repère déjà les consignes périmées, les fichiers cités qui n'existent pas et les contradictions entre fichiers, sans rien changer. Pars de son rapport.
2. Lis la configuration : CLAUDE.md (projet et utilisateur), `.claude/rules`, settings, hooks, skills, agents.
3. Pour chaque élément, classe : **à garder** (utile, cohérent) ; **à signaler** (règle contradictoire, contre-productive ou dangereuse, avec la raison en clair : « j'ai trouvé ça, et ça pose problème parce que… ») ; **manquant** (garde-fou utile absent pour ce projet).
4. **Les conflits avec Forge** : compare les règles du projet aux principes de Forge (skill `principes`) et présente un tableau : règle du projet, règle de Forge, gagnant. **Le projet gagne toujours** ; tu signales, tu ne résous pas. Cherche en particulier : langue et style ; une consigne d'autonomie (« ne demande jamais ») face à la règle pivot ; polices, couleurs et design system ; interdiction de sous-agents ou d'outils ; un autre plugin qui injecte ses règles au démarrage ; des hooks du projet qui bloquent une action que Forge proposerait ; des gardes du projet qui recouvrent le hook « règle pivot » de Forge (alors le projet demande deux fois : dis-le).
5. Une synthèse : ce qui va, ce qui cloche et pourquoi, les conflits, ce qu'on pourrait ajouter. Si le CLAUDE.md ne mentionne pas Forge, propose le bloc de cinq lignes du skill `forge-onboarding`, sans l'écrire.

## Règles
- Tu n'écrases ni ne supprimes rien : tu montres et proposes ; toute modification passe par un oui.
- Tu t'adaptes à la personnalisation existante au lieu de plaquer un comportement rigide dessus.
