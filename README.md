# Forge

**Le collaborateur Claude Code qui te mène de l'idée au produit vendable.**

Forge n'est pas un parcours de dev rigide. C'est un collaborateur adaptatif qui s'assure que tout se passe bien sur **tous les angles** à la fois : cadrage produit, architecture, sécurité, RGPD, qualité, UX/landing et mise en vente. Il se base sur ta stack réelle, détecte ton niveau, ne casse jamais ta config existante, et ne te fait jamais cliquer "oui" sur une action que tu ne comprends pas.

L'objectif final est toujours le même : un produit **vendable**, avec de vraies preuves que ça marche et que ça répond à un vrai besoin. Pour quelqu'un qui veut devenir indépendant grâce à l'IA, sur le marché français.

## Installation

```
/plugin marketplace add lolohlx/forge
/plugin install forge@forge
```

Puis redémarre une session. Forge injecte ses principes à chaque session : le comportement est **identique partout**.

## Ce que tu obtiens

### Comportement permanent (chaque session)
- **Adaptatif, jamais rigide** : part de ta stack, détecte ton niveau, pose des questions si ça galère.
- **Non destructif** : audite, montre, propose. Ne touche jamais ta perso sans accord.
- **Règle pivot** : avant toute action irréversible (migration, deploy, suppression, paiement), 2 lignes en clair (ce que ça fait + le risque) avant le oui/non.
- **Recherche web continue** dès que ça bloque. Doc MCP avant d'utiliser un MCP.
- **À l'ère du temps** : veille techno réelle via web et MCP, pas de solutions périmées.
- **Honnête, pas complaisant.** RGPD par défaut si tu es français. Tests e2e. Vendre par défaut.

### La commande phare
- **`/forge:go`** : l'orchestrateur de bout en bout. D'un prompt vague à un produit vendable : cadrage, équipe planif, build, équipe QA, mise en vente. En autonomie, en s'arrêtant uniquement aux moments irréversibles (règle pivot).

### Les deux équipes d'agents (lançables seules)
- **`/forge:plan`** : équipe PLANIF (6 agents), avant de coder : `forge-product`, `forge-architecte`, `forge-securite`, `forge-recherche`, `forge-innovation`, `forge-critique`.
- **`/forge:qa`** : équipe QA (5 agents), avant le ship : `forge-qa-e2e`, `forge-qa-securite`, `forge-qa-rgpd`, `forge-qa-ux`, `forge-qa-vendabilite`.

### Commande bonus
- **`/forge:audit`** : audit non destructif de ta config Claude Code (CLAUDE.md, rules, settings, skills). Garde le bon, signale les règles nulles, propose ce qui manque.

## Structure

```
forge/
  .claude-plugin/plugin.json
  PRINCIPES.md          # la constitution, injectée à chaque session
  hooks/hooks.json      # SessionStart -> injecte PRINCIPES.md
  agents/               # 6 agents PLANIF + 5 agents QA
  commands/             # /forge:go, /forge:plan, /forge:qa, /forge:audit
  skills/               # onboarding (audit non destructif à l'install)
```

## Philosophie
Pas de checklist figée. Pas de stack imposée. Pas d'action à l'aveugle. Pas de flatterie. Juste un collaborateur qui te dit la vérité et te rend vendable.
