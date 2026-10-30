---
name: forge-equipe
description: À charger dès qu'une décision se joue (message, promesse, prix, offre, cible, écran, bouton, fonctionnalité, choix techno, données sensibles) ou avant un lancement, ou quand l'utilisateur demande l'avis des experts, un pré-mortem ou une équipe rouge. Dit quels experts consulter, avec quel skill, quel format de rendu, et comment remonter les désaccords.
---

# Forge, l'équipe d'experts

L'utilisateur est le **patron**. Les experts conseillent, il tranche. Ne charge pas ce skill pour une tâche technique simple (bug, refactor) : pas d'équipe.

## 1. Avant de consulter
1. Lis `.forge/etat.md` s'il existe (profil, décisions déjà prises). Sinon, lis le projet et énonce le profil en une ligne (voir `references/profils.md`). Les décisions déjà prises sont des **contraintes**.
2. Formule la **question de décision** en une phrase et les options connues.
3. Choisis **3 experts maximum** dans la table. Chaque expert coûte du contexte (un système multi-agents consomme de l'ordre de 15 fois les tokens d'un chat, mesure d'Anthropic) : moins vaut mieux.

## 2. Table de routage
Agents : `forge:forge-<nom>`. Skills d'appui : voir `references/skills-appui.md` (absents = l'expert applique la fiche de `references/fiches-methode.md` et le dit).

| Type de tâche | Experts | Rendu |
|---|---|---|
| Cadrer ou pivoter une idée | produit, marche, cible + critique | format + tableau |
| Choisir cible ou segment | cible, marche | format |
| Message, promesse, page d'accueil | cible, copy, offre (+ critique) | format + tableau |
| Prix, offre, paliers | offre, cible, marche | format + tableau |
| Écran ou parcours clé | design, copy, cible | format |
| Quelle fonctionnalité d'abord | produit + cible (B2C) ou marche (B2B) | format |
| Choix techno, architecture | architecte, securite | format |
| Données perso, secteur réglementé | reglementaire, securite | format |
| Préparer des entretiens clients | cible | guide d'entretien |
| Avant lancement ou vente | pré-mortem + équipe rouge (§5), puis `qa-vendabilite`, `qa-e2e` | rapport rouge / orange / vert |
| Reprendre un projet existant | commande `/forge:import` | état |

## 3. Appeler les experts : avis indépendants
- Lance les experts **en parallèle**, chacun avec le **même dossier** : question, options, profil, contraintes, extraits utiles. Ne donne à aucun l'avis d'un autre : un débat entre IA n'est pas plus juste qu'un vote et pousse au consensus.
- Rappelle-leur : preuves sourcées ou "hypothèse", format fixe (250 mots), conclusion qui compte même si elle déplaît.
- Si tu consultes 2 experts ou plus, ajoute `forge:forge-critique` **après** eux : il attaque les avis, il n'a pas le droit à l'accord de façade.

## 4. Remonter à l'utilisateur
- **Accord de tous** : une ligne, avec la recommandation et la preuve principale.
- **Désaccord réel** (recommandations incompatibles, pas des nuances) : un tableau de 3 lignes maximum.

| Question | Expert X dit | Expert Y dit | Option 1 → conséquence | Option 2 → conséquence | Ce qui trancherait (coût) |
|---|---|---|---|---|---|

Puis une ligne **"Reco Forge"**, jamais décisive. L'utilisateur tranche.
- **B2C** : commence par le bandeau : « Tu n'es pas la cible. Les avis ci-dessous sur le message, le prix et les leviers sont des hypothèses tant qu'ils ne sont pas testés auprès de vraies personnes. » Termine par le test le moins cher (entretiens sur faits passés, précommande, prix réellement payé).
- **B2B** : précise le nombre de vrais acheteurs entendus (un seul, le créateur, ne suffit pas) et distingue acheteur et utilisateur.
- Après la décision, propose de la consigner dans `.forge/decisions.md` (date, question, choix, pourquoi, avis dissidents). Crée le fichier **seulement après accord**.

## 5. Pré-mortem et équipe rouge
- **Pré-mortem** : (a) après le cadrage et avant de coder une app ou un gros module ; (b) avant tout lancement, mise en vente, changement de prix ou de promesse publique ; (c) à la demande. Annonce : « Imaginons que dans six mois c'est un échec. Pourquoi ? » Lance trois chercheurs d'échec indépendants (agent `forge:forge-critique` chacun, avec un angle : marché et cible / produit et technique / conformité et exécution), chacun écrit seul ses causes. Un quatrième passage de `forge:forge-critique` consolide : sans doublons, classé probabilité × gravité × détectable tôt, **top 5**, avec le test le moins cher par cause. L'utilisateur choisit quoi traiter.
- **Équipe rouge** : avant toute action irréversible tournée vers l'extérieur (publication, vente, envoi à de vrais clients) : `forge:forge-critique` attaque le plan, `forge:forge-securite` raisonne en attaquant (lecture du code, rien d'exécuté), `forge:forge-qa-vendabilite` joue le prospect hostile (« pourquoi je n'achète pas »). Un seul rapport. Elle ne bloque jamais : l'utilisateur peut passer outre en une ligne, et la règle pivot dit alors « équipe rouge non faite ».

## 6. Coût et limites à dire
Annonce en une ligne combien d'experts tu lances. Les avis d'un modèle ne sont pas des preuves : un persona n'améliore pas la justesse, ce qui compte est la grille de critères et les sources. La preuve, c'est un comportement réel.
