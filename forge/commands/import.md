---
description: Repère l'état d'un projet existant (stack, avancement, décisions déjà prises, règles et hooks en place) en lecture seule, puis propose d'écrire un seul nouveau fichier, .forge/etat.md. Ne réécrit rien.
---

Fais le repérage d'un projet **existant** pour que Forge le reprenne là où il en est. Cible éventuelle (sinon le dossier courant) : $ARGUMENTS

## Garanties
- **Lecture seule** pendant tout le repérage. Tu n'exécutes pas le projet, tu ne modifies, déplaces ni ne supprimes aucun fichier.
- Le seul fichier que tu peux créer est `.forge/etat.md`, **nouveau**, et seulement après un oui. S'il existe déjà, tu proposes une mise à jour, tu n'écrases pas.
- Les règles du projet priment : tu les inventories, tu ne les juges pas.

## Repérage
1. **Stack et versions** : fichiers de dépendances, runtime, framework, base de données, hébergement, avec les versions réelles lues.
2. **Structure** : modules principaux, où vit la logique métier, où sont les données.
3. **État** : présence et résultat des tests (ne les lance pas sans accord), déploiement configuré ou non, âge et cadence de l'historique git, fonctionnalités terminées, à moitié faites, absentes.
4. **Décisions déjà prises** : lues dans CLAUDE.md, README, docs, ADR, messages de commit. Pour chacune : la décision, sa source. Ce sont des **contraintes** que les experts respectent ; elles ne se contestent que par un désaccord explicite remonté à l'utilisateur.
5. **Règles, hooks, skills, agents en place** (`.claude/`, CLAUDE.md, settings) : inventaire seul. Signale les conflits possibles avec Forge sans rien changer (voir `/forge:audit`).
6. **Hypothèses non vérifiées** : ce que tu supposes mais que le projet ne prouve pas. Étiquette-les "hypothèse".
7. **Profil lu** (voir le skill `forge-equipe`, `references/profils.md`) : rôle, B2B ou B2C, stade, en une ligne, avec les indices.

## Rendu
Affiche une synthèse courte avec ces sept rubriques. Puis demande, selon la règle pivot (2 lignes : ce que ça fait + le risque, oui/non) : « Je crée le fichier `.forge/etat.md` avec ce repérage. Rien d'autre n'est modifié. Je l'ajoute aussi à ton `.gitignore` ? » (propose, ne fais pas sans oui). Le journal des décisions `.forge/decisions.md` n'est créé qu'à la première décision, avec accord.

Ne cherche pas à "améliorer" le projet pendant l'import : le but est de comprendre.
