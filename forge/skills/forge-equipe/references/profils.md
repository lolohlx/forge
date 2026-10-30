# Détecter le profil du projet (sans le demander)

Trois axes, évalués **par projet** (une même personne peut avoir un B2B et un B2C).
- **Rôle** : A, indépendant qui se lance grâce à l'IA / B, expert de son métier qui construit son propre logiciel.
- **Cible** : B2B (vend à des entreprises), B2C (vend à des particuliers), mixte.
- **Stade** : idée, prototype, avancé (en production ou presque).

## Ce qui se lit dans le projet
| Signal | Indique |
|---|---|
| CLAUDE.md, README, noms de modules avec le vocabulaire d'un métier précis | rôle B (expert du métier) |
| Modèle de données avec organisation, tenant, rôles, sièges, multi-établissements | B2B |
| Facturation par siège, par organisation, devis, factures clients | B2B |
| Compte individuel, abonnement ou achat par un particulier, boutiques d'applications, parcours d'inscription grand public | B2C |
| Contenus personnels de l'utilisateur ou de tiers (enregistrements, photos, documents), livraison de produits physiques | B2C, données sensibles ou de tiers |
| Historique git long, tests, déploiement configuré, `.claude/` avec hooks et skills | stade avancé, utilisateur avancé |
| Peu de fichiers, pas de tests, pas de déploiement | idée ou prototype |
| Aucun code, une idée dans la conversation | rôle A probable, stade idée |

## Ce qu'on demande (2 questions maximum, seulement si le projet ne le dit pas)
1. Qui **paie** et qui **utilise** (ils diffèrent souvent en B2B) ?
2. Y a-t-il déjà de **vrais clients ou utilisateurs** (combien, depuis quand) ?

## Comment l'annoncer
Une ligne : « Je lis ça comme : <B2B vertical | B2C>, <avancé | prototype>, <projet existant | nouvelle idée>. Corrige-moi si je me trompe. » Un indice n'est pas une preuve : en cas de doute, dis-le.
