---
description: Vérifie que Forge est bien chargé dans cette session (principes injectés au démarrage) et aide à dépanner, notamment sous Windows.
---

Vérifie que Forge fonctionne dans cette session. Ne modifie rien.

## Test
1. **Regarde ton propre contexte** : vois-tu la ligne marqueur `FORGE-PRINCIPES v0.2` et les principes de Forge (règle pivot, "les règles du projet priment") ?
2. Réponds en trois lignes :
   - **Principes chargés** : oui ou non.
   - **Projet** : y a-t-il un `.forge/etat.md` ? un CLAUDE.md ? des hooks dans `.claude/` ?
   - **Skills d'appui installés** (liste via les outils de plugins si disponibles, sinon "non vérifié") parmi `superpowers`, `marketing-skills`, `frontend-design`.

## Si les principes ne sont pas chargés
Les principes arrivent par un hook de démarrage de session. Causes connues (tickets du dépôt anthropics/claude-code, état au 30/10/2026) :
- dossier du projet **non approuvé** : les hooks de plugin ne se chargent qu'après la confiance du dossier ;
- Windows, nom d'utilisateur contenant une espace : #93356 (ouvert) ;
- Windows, application MSIX : #96087 (ouvert) ;
- application de bureau, onglet Chat : le hook de démarrage ne se déclenche pas, #103029 (ouvert) ; sortie du hook non injectée, #73401 (fermé sans correctif) ;
- Windows sans Git Bash : le hook s'exécute dans PowerShell (sortie JSON en ASCII, accents préservés, testé en CI sous 5.1 et 7).
Remède sans dépendre du hook : relance une session depuis le terminal du projet (`claude`), ou demande à Claude de lire `PRINCIPES.md` du plugin. Les commandes `/forge:*` fonctionnent sans le hook : elles répètent l'essentiel.
