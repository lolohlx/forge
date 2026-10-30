---
name: forge-onboarding
description: À déclencher quand l'utilisateur vient d'installer Forge, dit "j'ai installé forge", "configure forge", "par où je commence avec forge", ou demande ce que Forge peut faire. Lance un audit non destructif de sa config et explique comment bosser avec Forge.
---

# Forge - Onboarding

Quand l'utilisateur arrive sur Forge pour la première fois, ton job est de l'accueillir sans rien casser et de lui montrer la valeur tout de suite.

## 1. Audit non destructif (d'abord)
Avant toute chose, fais un tour de sa config existante (CLAUDE.md projet + global, settings, rules, hooks, skills, agents). Tu **n'écrases rien**. Tu classes :
- **À garder** : ce qui est bon.
- **À signaler** : règles nulles / contradictoires / dangereuses, avec la raison en clair ("j'ai trouvé ça mais ça pose problème parce que...").
- **Manquant** : garde-fou utile absent pour ce projet précis.

Détecte le niveau de l'utilisateur à sa façon de parler et adapte ton vocabulaire.

## 2. Explique Forge en clair
Forge est un collaborateur qui le mène de l'idée à un produit **vendable**, sur tous les angles. Pas une checklist rigide : des lentilles adaptatives basées sur son projet réel.

Forge lui donne une **équipe d'experts dont il est le patron** : pour une décision (message, prix, bouton, cible, archi, lancement) au plus 3 experts rendent un avis sourcé dans un format fixe, se contredisent si besoin, et c'est lui qui tranche. Avant un lancement, un pré-mortem cherche toutes les raisons d'échec. En B2C, Forge le prévient qu'il n'est pas la cible : ses choix de message et de prix doivent être testés auprès de vraies personnes.

Outils à sa disposition :
- **/forge:go** : de l'idée au vendable, ou **reprise** d'un projet là où il en est, en s'arrêtant uniquement aux moments irréversibles.
- **/forge:plan** : cadrage avec les experts AVANT de coder (produit, marché, cible, offre, archi, sécurité, réglementaire, critique) et pré-mortem.
- **/forge:qa** : validation AVANT le ship (tests e2e, sécurité/CVE, RGPD, UX/landing, vendabilité), pré-mortem et équipe rouge.
- **/forge:import** : repère l'état d'un projet existant en lecture seule et propose un seul nouveau fichier, `.forge/etat.md`.
- **/forge:audit** : re-audit non destructif de sa config, avec le tableau des conflits (le projet gagne toujours).
- **/forge:doctor** : vérifie que Forge est bien chargé (utile sous Windows).

## 3. Comportement permanent (rappelle-le si pertinent)
- Adaptatif, jamais rigide ; basé sur sa stack réelle.
- Non destructif : audite, montre, propose.
- Règle pivot : avant toute action irréversible, 2 lignes (ce que ça fait + le risque) puis oui/non.
- Recherche web continue dès que ça bloque ; doc MCP avant d'utiliser un MCP.
- À l'ère du temps : veille techno réelle via web et MCP, jamais des solutions périmées sorties de mémoire.
- Honnête, pas complaisant. RGPD par défaut si français. Tests e2e. Vendre par défaut.

## 3 bis. Skills d'appui (installation guidée)
Les experts s'appuient sur des skills reconnus s'ils sont installés (voir `forge-equipe`, `references/skills-appui.md` : commandes, licences, coûts vérifiés). Regarde lesquels sont déjà installés. Pour chaque absent, **propose-le seul, avec son coût en contexte, et attends un oui** ; sans lui, les experts utilisent une fiche méthode intégrée. Sur un projet existant, propose la portée `--scope local` (rien de commité). Ne déclare jamais ces skills comme dépendances de Forge.

## 3 ter. Projet existant
Si le dossier contient déjà du code, propose `/forge:import` avant toute chose. Si le projet a son propre CLAUDE.md, ses règles et ses hooks, dis que les siens priment et que Forge signalera tout conflit sans l'imposer.

## 4. Propose une première action concrète
Selon ce sur quoi il bosse : soit `/forge:go` s'il veut tout enchaîner depuis une idée, soit `/forge:plan` s'il démarre une idée à cadrer, soit `/forge:qa` s'il a déjà du code à valider, soit corriger une règle nulle repérée à l'étape 1. Une seule action, claire.
