# Le brief envoyé à chaque expert

Les experts ne voient ni la conversation ni les avis des autres. Tout ce dont ils ont besoin est dans ce brief, identique pour tous les sièges d'une même décision. Remplis chaque balise ; une balise vide se dit vide.

```
<objectif>
Rendre un avis sur la question ci-dessous, dans le format demandé, sans élargir ni réduire la question.
</objectif>

<question>
La décision en une phrase. Exemple : « À quel prix vendre le pack X, et sous quelle forme (prix unique, abonnement) ? »
</question>

<options>
Les options déjà sur la table, une par ligne. Écris « aucune » s'il n'y en a pas.
</options>

<profil>
Rôle (indépendant qui se lance, ou expert de son métier) ; cible B2B ou B2C ; stade (idée, prototype, en production) ; nombre de vrais clients ou utilisateurs connus.
</profil>

<contraintes>
Les décisions déjà prises (lues dans .forge/etat.md, CLAUDE.md, README) : ce sont des contraintes, pas des sujets à rouvrir. Les règles du projet qui s'appliquent à cet avis.
</contraintes>

<extraits>
Chemins des fichiers utiles, ou passages courts. Les experts lisent les fichiers eux-mêmes.
</extraits>

<format>
Le bloc JSON de references/format-avis.md, recopié ici.
</format>

<limites>
Lecture seule : tu ne modifies rien. Pas de sous-agent. Recherche web avec l'année en cours quand une donnée peut avoir changé. Si une information manque, nomme l'hypothèse que tu fais, propose le défaut, et continue : tu ne poses pas de question en retour. Rends le bloc JSON seul.
</limites>
```

Pour le **dissident désigné**, ajoute une balise :

```
<role_dissident>
Ton siège est celui qui contredit la pente de la question. Cherche d'abord ce qui ferait échouer la recommandation la plus évidente, avec des preuves. Tu peux conclure dans le même sens que les autres si les preuves t'y mènent : ce qui compte, c'est d'avoir cherché le contraire.
</role_dissident>
```
