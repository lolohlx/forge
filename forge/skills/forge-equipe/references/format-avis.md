# Le format d'un avis d'expert

Chaque expert rend un seul bloc JSON, rien avant, rien après. Le coordinateur le lit, le critique le reçoit anonymisé, le vérificateur le contrôle, et seule la synthèse arrive à l'utilisateur. La longueur suit la substance : pas de remplissage, pas de plafond de mots.

```json
{
  "expert": "forge-offre",
  "recommandation": "Une phrase : l'action que tu recommandes.",
  "confiance": 75,
  "confiance_critere": "Pourquoi ce niveau, en une phrase.",
  "preuves": [
    { "fait": "Ce que tu avances.", "source": "URL ou fichier:ligne, avec la date de la source", "citation": "La phrase exacte de la source, ou le mot hypothèse" }
  ],
  "ce_qui_me_ferait_changer": "Le fait précis qui renverserait ta recommandation.",
  "options_rejetees": [
    { "option": "L'option écartée.", "pourquoi": "La raison, en une phrase." }
  ],
  "ce_qui_manque": "Ce qu'il faudrait savoir pour trancher, comment l'obtenir, à quel coût.",
  "b2c_a_valider": true
}
```

## Les niveaux de confiance
- **100** : fait vérifié dans une source datée que tu cites mot à mot.
- **75** : source citée, inférence directe.
- **50** : hypothèse plausible, à tester.
- En dessous de 50 : ne pas en faire une preuve ; le dire dans `ce_qui_manque`.

Si tu ne peux pas citer la source, tu ne peux pas dépasser 50. Zéro preuve solide est une réponse valable : tu le dis, et ta recommandation devient « tester d'abord ».

## Ce que le bloc ne contient pas
Ton raisonnement détaillé (le coordinateur ne le demande pas), des conseils génériques sans conséquence concrète, des préoccupations hors de la question posée.

## `b2c_a_valider`
`true` quand la cible est le grand public et que l'avis porte sur le message, le prix ou un levier psychologique : il reste une hypothèse jusqu'au test auprès de vraies personnes. `false` sinon.
