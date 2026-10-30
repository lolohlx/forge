# Skills d'appui (installation guidée, jamais automatique)

Forge s'appuie sur ces skills s'ils sont installés, sans les recopier ni en dépendre. Vérifié le 30/10/2026 (versions et licences lues dans les dépôts). Propose chaque installation **une à une**, avec son coût, et attends un oui.

| Skill | Pour quel expert | Source, licence | Installation | Coût à annoncer |
|---|---|---|---|---|
| brainstorming, writing-plans, verification-before-completion | produit, architecte, vendabilité | Superpowers v7.0.1, MIT | `/plugin install superpowers@claude-plugins-official` | Son hook de démarrage injecte aussi un bloc de règles ; son brainstorming s'impose avant tout travail créatif, ce qui peut contredire l'autonomie de `/forge:go`. |
| competitor-profiling, customer-research, marketing-psychology, pricing, offers, product-marketing, copywriting, copy-editing, cro | marché, cible, offre, copy | marketingskills v2.13.10, MIT (Corey Haines) | `/plugin marketplace add coreyhaines31/marketingskills` puis `/plugin install marketing-skills@marketingskills` | 52 skills : leurs descriptions s'ajoutent au contexte de chaque session. Orienté SaaS et marché américain. Contient des partenaires sponsorisés. |
| frontend-design | design | anthropics/skills, Apache 2.0 | `/plugin install frontend-design@claude-plugins-official` (nom vu dans le marketplace officiel, commande non essayée) ; ou `/plugin marketplace add anthropics/skills` puis `example-skills@anthropic-agent-skills` (12 skills) | Le second installe 12 skills au lieu d'un. |

Aucun skill reconnu n'a été trouvé pour le réglementaire et la sécurité : les experts s'appuient sur les sources officielles (régulateur, CNIL) et OWASP.

Portée d'installation : sur un projet existant, préfère `--scope local` (`claude plugin install <nom>@<marketplace> --scope local`, écrit `.claude/settings.local.json`, non commité). `--scope project` écrit `.claude/settings.json`, commité et partagé à l'équipe : montre le diff avant.

Ne déclare pas Superpowers ni marketingskills comme dépendances du plugin Forge : dans un autre marketplace, la doc exige une autorisation explicite dans le marketplace de Forge, sinon Forge risque de ne plus se charger.
