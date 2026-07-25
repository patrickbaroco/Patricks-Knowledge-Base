---
type: moc
tags:
  - fishing
  - map-of-content
---

# Fishing — Map of Content

The hub for fishing notes: destinations you've fished or are considering, techniques and systems you've built or collected, and clippings worth returning to. Content notes stay at vault root (folder depth doesn't buy anything Dataview filtering on `topic`/`type` doesn't already give); this folder holds only this MOC. See [[_Fishing Notes Convention]] for how notes here are typed and tagged.

## Destinations

```dataview
TABLE location, water
FROM ""
WHERE topic = "fishing" AND type = "destination"
SORT location ASC
```

## Techniques

```dataview
TABLE author
FROM ""
WHERE topic = "fishing" AND type = "technique"
SORT file.name ASC
```

## Clippings

Clipped material stays in `Clippings/` regardless of topic — this just surfaces the fishing-tagged ones.

```dataview
TABLE author, source
FROM "Clippings"
WHERE topic = "fishing"
SORT file.name ASC
```

## Notes to build

Nothing flagged yet — the vault currently holds 4 destination/technique notes plus 1 clipping, all normalized as of 2026-07-25.
