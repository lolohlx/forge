---
max_turns: 4
allowed_tools: [Read, Glob, Grep, Skill]
tags: [pas]
---

Dans src/leads/importer.ts, la fonction parseRow plante avec « Cannot read properties of undefined (reading 'email') » quand la colonne email est vide. Corrige le bug et ajoute un test.
