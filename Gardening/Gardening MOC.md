---
type: hub
about: Index of gardening notes and gardening-related projects
last_touched: 2026-07-26
---

# Gardening MOC

Umbrella index for gardening. Individual plant/bed notes are tagged `topic: gardening` and stay at vault root (no lifecycle/status — they're ongoing, not bounded projects), same shallow-folder pattern as [[Fishing MOC]]. Bounded initiatives with a real lifecycle (a `status`, a `next_action`, an eventual "done") stay tracked as full project notes under `Projects/` and are just linked here.

## Projects
- [[Meadow Conversion]] — native meadow conversion, tracked with full project lifecycle in `Projects/`.

## Notes

```dataview
TABLE type, last_touched
FROM ""
WHERE topic = "gardening"
SORT last_touched DESC
```

## Needs normalization

```dataview
LIST
FROM ""
WHERE topic = "gardening" AND !type
```

## Status
As of 2026-07-26: one note ([[Cherry Tree]]) plus a link to the Meadow Conversion project. No formal type taxonomy yet (unlike Fishing's destination/technique/source/reference) — hold off inventing one until enough notes exist to need cross-note querying (e.g. sprayings or harvests across multiple plants), same approach Fishing took before its convention was written.
