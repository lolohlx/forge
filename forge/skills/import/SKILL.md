---
name: import
description: "Repère l'état d'un projet existant en lecture seule (stack, avancement, décisions déjà prises, règles et hooks en place) et propose d'écrire un seul fichier, .forge/etat.md, pour que Forge reprenne le projet là où il en est. À lancer soi-même, une fois par projet, avant toute autre commande Forge."
disable-model-invocation: true
argument-hint: "[dossier]"
---

Fais le repérage d'un projet **existant** pour que Forge le reprenne là où il en est. Cible : $ARGUMENTS (sinon le dossier courant).

## Garanties
- **Lecture seule** pendant tout le repérage : tu n'exécutes pas le projet, tu ne modifies, déplaces ni ne supprimes aucun fichier.
- Le seul fichier que tu peux créer est `.forge/etat.md`, **nouveau**, et seulement après un oui. S'il existe déjà, tu proposes une mise à jour, tu n'écrases pas.
- Les règles du projet priment : tu les inventories, tu ne les juges pas.

## Repérage
1. **Stack et versions** : fichiers de dépendances, runtime, framework, base de données, hébergement, avec les versions réelles lues.
2. **Structure** : modules principaux, où vit la logique métier, où sont les données.
3. **État** : tests présents et leur dernier résultat connu (tu ne les lances pas sans accord), déploiement configuré ou non, âge et cadence de l'historique git, fonctionnalités terminées, à moitié faites, absentes.
4. **Décisions déjà prises**, lues dans CLAUDE.md, README, docs, messages de commit : pour chacune, la décision et sa source. Ce sont des contraintes que les experts respectent ; elles ne se contestent que par un désaccord explicite remonté à l'utilisateur.
5. **Règles, hooks, skills, agents en place** (`.claude/`, CLAUDE.md, settings) : inventaire seul. Signale les conflits possibles avec Forge sans rien changer (voir `/forge:audit`).
6. **Hypothèses non vérifiées** : ce que tu supposes et que le projet ne prouve pas, étiqueté « hypothèse ».
7. **Profil lu** (skill `forge-equipe`, `references/profils.md`) : rôle, B2B ou B2C, stade, en une ligne, avec les indices.

## Rendu
Une synthèse courte en sept rubriques. Puis la règle pivot, deux lignes puis oui ou non : « Je crée `.forge/etat.md` avec ce repérage. Rien d'autre n'est modifié. Je l'ajoute aussi à ton `.gitignore` ? » Le journal `.forge/decisions.md` n'est créé qu'à la première décision, avec accord. Tu ne cherches pas à améliorer le projet pendant l'import : le but est de le comprendre.
