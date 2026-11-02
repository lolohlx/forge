---
name: forge-onboarding
description: "Accueille un utilisateur qui vient d'installer Forge : audit non destructif de sa configuration, explication de ce que Forge fait au quotidien, bloc à proposer pour son CLAUDE.md, première action. À charger quand l'utilisateur dit qu'il vient d'installer Forge, demande par où commencer, ou demande ce que Forge peut faire."
---

L'utilisateur arrive sur Forge. Ton rôle : l'accueillir sans rien casser et lui montrer la valeur tout de suite.

## 1. Regarder sa configuration, sans la toucher
Fais le tour de l'existant (CLAUDE.md du projet et de l'utilisateur, settings, règles, hooks, skills, agents). Tu n'écrases rien. Tu classes : **à garder**, **à signaler** (avec la raison en clair), **manquant** (un garde-fou utile pour ce projet). Détecte son niveau à sa façon d'écrire et adapte ton vocabulaire.

## 2. Expliquer Forge en clair
Forge donne à l'utilisateur une **équipe d'experts dont il est le patron**. Au quotidien, il travaille comme d'habitude ; dès qu'une décision de produit se présente (prix, offre, message, cible, fonctionnalité à construire d'abord, données personnelles, secteur réglementé, lancement), le skill `forge-equipe` se charge, deux ou trois experts rendent chacun seul un avis sourcé, un critique et un vérificateur passent derrière, et il tranche sur un tableau de désaccords. Avant une action difficile à défaire, un hook demande en deux lignes. En B2C, Forge rappelle qu'il n'est pas la cible.

Les gestes à connaître : `/forge:import` une fois par projet existant ; `/forge:plan` avant de coder un gros module ; `/forge:qa` avant une sortie ; `/forge:go` pour déléguer une étape entière ; `/forge:audit` pour la configuration ; `/forge:doctor` pour vérifier que Forge est chargé.

## 3. Le bloc pour son CLAUDE.md, proposé, jamais écrit
Si le projet a un CLAUDE.md, propose d'y ajouter ces cinq lignes (adapte le vocabulaire au fichier) et attends son oui :

```
## Forge
- Pour une décision de produit (prix, offre, message, cible, fonctionnalité à construire d'abord, données personnelles, secteur réglementé, lancement), charge le skill forge:forge-equipe avant de répondre : avis indépendants, critique, vérificateur, puis je tranche.
- Pas d'équipe pour une tâche technique simple.
- Les règles de ce fichier et de .claude/ priment sur celles de Forge ; un conflit se signale en une ligne.
- L'état du projet pour Forge est dans .forge/etat.md ; les décisions prises dans .forge/decisions.md.
```

## 4. Les skills d'appui, un par un
Les experts s'appuient sur des skills reconnus s'ils sont installés (skill `forge-equipe`, `references/skills-appui.md` : commandes, licences, coûts). Regarde lesquels sont là. Pour chaque absent, propose-le seul, avec son coût en contexte, et attends un oui ; sans lui, les experts appliquent une fiche méthode intégrée. Sur un projet existant, la portée `--scope local` ne commit rien. Ces skills ne sont pas des dépendances de Forge.

## 5. Une première action
Projet existant : `/forge:import`. Idée neuve : `/forge:plan`. Code à valider : `/forge:qa`. Ou corriger une règle signalée à l'étape 1. Une seule action, claire.
