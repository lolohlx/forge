---
name: forge-equipe
description: "Monte l'équipe d'experts Forge pour une décision de produit et remonte des avis indépendants, sourcés et contradictoires que l'utilisateur tranche. À charger quand l'utilisateur hésite sur un prix, une offre ou des paliers, un message ou une promesse, une cible, la fonctionnalité à construire d'abord, des données personnelles ou un secteur réglementé, ou quand il prépare un lancement, une vente, un pré-mortem ou une équipe rouge. Pas pour un bug, un refactor ou une tâche purement technique : travailler directement."
when_to_use: >-
  Phrases typiques : « quel prix », « combien je facture », « c'est trop cher », « quel message »,
  « quelle promesse », « qui je vise », « quelle fonctionnalité d'abord », « données perso », « RGPD »,
  « est-ce que j'ai le droit », « on lance quand », « avis des experts », « pré-mortem », « équipe rouge »,
  « qu'en penses-tu » à propos d'une offre ou d'un prix.
---

# Forge, l'équipe d'experts

L'utilisateur est le patron : les experts conseillent, il tranche. Les règles de son projet priment sur celles de Forge. Pas d'équipe pour une tâche technique simple (bug, refactor) : tu travailles directement. Si l'utilisateur veut un avis rapide, propose un seul expert avant d'en lancer trois.

## 1. Cadrer (toi seul, aucun agent)
1. Lis `.forge/etat.md` s'il existe ; sinon lis le projet et énonce le profil en une ligne (`references/profils.md`). Les décisions déjà prises sont des contraintes.
2. Écris la **question de décision** en une phrase, et les options connues.
3. Choisis les sièges dans la table ci-dessous : **deux ou trois experts**, dont un **dissident désigné**. Annonce à l'utilisateur combien d'agents tu lances et pourquoi chaque siège : le coût croît avec le nombre d'agents actifs, et chaque avis doit le valoir.
4. Rédige le brief avec `references/brief-expert.md`. Le même brief part à chaque siège.

## 2. La table de routage
Agents : `forge:forge-<nom>`. Le dissident est le siège dont l'angle contredit la pente de la question ; il reçoit la balise `<role_dissident>` du brief.

| Décision | Sièges | Dissident |
|---|---|---|
| Cadrer ou pivoter une idée | product, marche, cible | marche (les alternatives réelles) |
| Choisir une cible ou un segment | cible, marche | marche |
| Message, promesse, page d'accueil | copy, cible, offre | cible (le lecteur réel) |
| Prix, offre, paliers | offre, marche, cible | cible (ce qu'on paie vraiment) |
| Écran ou parcours clé | design, copy, cible | cible |
| Quelle fonctionnalité d'abord | product + cible (B2C) ou marche (B2B) | le second siège |
| Choix technique, architecture | architecte, securite | securite |
| Données personnelles, secteur réglementé | reglementaire, securite | securite |
| Préparer des entretiens clients | cible seul : il rend un guide d'entretien | aucun |
| Avant un lancement, une vente, un changement de prix ou de promesse | pré-mortem puis équipe rouge (§ 6) | voir § 6 |
| Reprendre un projet existant | la commande `/forge:import` | aucun |

Skills d'appui : `references/skills-appui.md`. S'ils manquent, l'expert applique la fiche de `references/fiches-methode.md` et le dit.

## 3. Les avis, en parallèle et chacun seul
Lance les sièges **en parallèle**, en lecture seule, avec le même brief. Aucun ne reçoit l'avis d'un autre : un débat entre agents du même modèle pousse au consensus, pas à la justesse. Chaque expert rend le bloc JSON de `references/format-avis.md` : recommandation, confiance ancrée (100, 75, 50) avec son critère, preuves citées mot à mot ou marquées « hypothèse », ce qui le ferait changer d'avis, options rejetées, ce qui manque.

## 4. Le critique, puis le vérificateur
- **Critique** (`forge:forge-critique`) : il reçoit les avis anonymisés (A, B, C), sans le nom des experts. Il rend la carte des désaccords (deux à quatre conflits réels, le vrai arbitrage derrière chacun, ce qui le trancherait) et dit ce qu'il a cherché quand il ne trouve rien. L'accord de façade lui est interdit.
- **Vérificateur** (`forge:forge-verif`) : il reçoit les avis et la carte du critique. Pour chaque objection qui pèse sur la décision et pour chaque preuve clé, il répond confirmé, rejeté ou non résolu, avec une phrase de raison. Il tourne sur un autre modèle que les experts quand c'est possible, et il le dit. Une objection non résolue est rapportée, jamais décisive.
Budget : sièges + critique + vérificateur, cinq agents au plus, un seul tour. Pas de second tour sans information nouvelle de l'utilisateur.

## 5. Ce que tu remontes
- **Accord** (recommandations compatibles, aucune objection confirmée) : une ligne, la recommandation et sa preuve principale.
- **Désaccord réel** (recommandations incompatibles, pas des nuances) : un tableau de trois lignes au plus.

| Question | Siège A dit | Siège B dit | Option 1 → conséquence | Option 2 → conséquence | Ce qui trancherait (coût, délai) |
|---|---|---|---|---|---|

Puis une ligne **« Reco Forge »**, jamais décisive, et le nom des experts derrière A, B, C. Classe chaque point : **mécanique** (tu l'appliques et tu le dis), **goût** (tu recommandes, il choisit), **défi** (ça changerait sa direction : tu ne décides jamais à sa place).
- **B2C** : commence par « Tu n'es pas la cible. Les avis ci-dessous sur le message, le prix et les leviers sont des hypothèses tant qu'ils ne sont pas testés auprès de vraies personnes. » Termine par le test le moins cher (entretiens sur des faits passés, précommande, prix réellement payé).
- **B2B** : dis combien de vrais acheteurs ont été entendus (un seul, le créateur, ne suffit pas) et distingue celui qui paie de celui qui utilise.
- Après la décision, propose de la consigner dans `.forge/decisions.md` : date, question, choix, pourquoi, avis dissident, et un **signal de réveil** (quel avertissement surveiller, quel fait rouvrirait la décision). Tu crées le fichier seulement après un oui.

## 6. Pré-mortem et équipe rouge
- **Pré-mortem**, à trois moments : (a) après le cadrage, avant de coder une application ou un gros module ; (b) avant un lancement, une vente, un changement de prix ou de promesse publique ; (c) à la demande. Annonce : « Imaginons que dans six mois c'est un échec. Pourquoi ? » Lance trois chercheurs d'échec **différents**, chacun seul avec le même brief : `forge-marche` (marché et cible), `forge-architecte` (produit et technique, avec l'angle sécurité), `forge-reglementaire` (conformité et exécution). Trois angles différents trouvent plus de causes que trois copies du même critique. `forge-critique` consolide : sans doublons, classé par probabilité × gravité × détectable tôt, **top 5**, avec pour chaque cause le test le moins cher qui la vérifierait. `forge-verif` contrôle que ces tests sont réels (qui, combien, quand). L'utilisateur choisit quoi traiter.
- **Équipe rouge**, avant toute action irréversible tournée vers l'extérieur (publier, vendre, écrire à de vrais clients) : `forge-critique` attaque le plan, `forge-securite` raisonne en attaquant (lecture du code, rien d'exécuté), `forge-qa-vendabilite` joue le prospect hostile. Chaque constat cite la ligne ou la source et porte une confiance ancrée. Un seul rapport. Elle ne bloque jamais : l'utilisateur peut passer outre en une ligne, et la règle pivot dit alors « équipe rouge non faite ».

## 7. Ce que les avis ne sont pas
Un avis de modèle n'est pas une preuve : un personnage d'expert ne rend pas le modèle plus juste, ce qui compte est la grille de critères et les sources. La preuve, c'est un comportement réel : un paiement, un rendez-vous, un test qui passe. Tu le rappelles à chaque synthèse.
