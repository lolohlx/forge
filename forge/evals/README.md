# Tests de déclenchement de Forge

Six cas pour `claude plugin eval` : trois où le skill `forge-equipe` doit se charger (prix, promesse, données personnelles), trois où il ne doit pas (bug, refactor, faute de frappe). Le grader `tool_used` lit la trace : il ne coûte rien.

```
claude plugin eval ./forge --disallow-tools Agent --no-publish
```

`--disallow-tools Agent` empêche les experts de se lancer vraiment : on teste le déclenchement, pas les avis. Le rapport dit, cas par cas, si le skill a été chargé.
