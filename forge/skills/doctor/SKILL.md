---
name: doctor
description: "Vérifie que Forge est bien chargé dans cette session (contexte de démarrage, hooks, skills) et aide à dépanner, notamment sous Windows. À utiliser après l'installation, après une mise à jour, ou au moindre doute."
---

Vérifie que Forge fonctionne dans cette session. Ne modifie rien.

## Ce que tu vérifies
1. **Le démarrage** : vois-tu dans ton contexte la ligne `FORGE v0.3 est actif dans cette session` ? Oui ou non.
2. **Les skills** : `forge-equipe`, `principes`, `plan`, `audit`, `doctor` et `forge-onboarding` sont-ils dans ta liste de skills ? `go`, `qa` et `import` n'y figurent jamais : ils ne se lancent que par l'utilisateur, donc leur description n'est pas dans ton contexte. Ils apparaissent dans le menu `/` de l'utilisateur ; dis-le-lui plutôt que de les chercher.
3. **Le projet** : y a-t-il un `.forge/etat.md` ? un CLAUDE.md ? des hooks ou des règles dans `.claude/` ? Dis en une ligne comment Forge va cohabiter avec eux : leurs règles priment.
4. **Les skills d'appui** installés parmi `superpowers`, `marketing-skills`, `frontend-design` (sinon « non vérifié ») : sans eux, les experts appliquent leurs fiches.

Réponds en quatre lignes, une par point. Puis, si le projet a un CLAUDE.md et qu'il ne mentionne pas Forge, propose le bloc de l'onboarding (cinq lignes, voir le skill `forge-onboarding`) sans l'écrire.

## Si le démarrage n'est pas chargé
Le contexte arrive par un hook de démarrage. Causes connues (tickets du dépôt anthropics/claude-code, vérifiés le 02/11/2026) :
- dossier du projet **non approuvé** : les hooks d'un plugin ne se chargent qu'après la confiance du dossier ;
- application de bureau, **onglet Chat** : le hook de démarrage ne se lance pas, seul l'onglet Code le fait (#103029, ouvert) ;
- Windows, nom d'utilisateur **avec une espace**, Git Bash installé : tous les hooks échouent (#93356, ouvert) ;
- Windows, application installée par le Store (MSIX), plugin ajouté par l'application : fichiers invisibles aux programmes extérieurs (#96087, ouvert).
Remèdes : ouvrir une nouvelle session dans l'onglet Code sur le dossier du projet ; installer par la ligne de commande (`claude plugin install forge@forge --scope local`) ; sinon demander à Claude de charger le skill `forge:principes`. Les skills de Forge fonctionnent sans le hook : ils répètent l'essentiel.

## Pour mesurer
En terminal, `claude plugin details forge@forge` donne ce que Forge ajoute à chaque session ; dans une session, `/skill-doctor` dit ce que chaque skill coûte et s'il a servi.
