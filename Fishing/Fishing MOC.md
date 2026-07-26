---
type: moc
tags:
  - fishing
  - map-of-content
---

# Fishing — Map of Content

The hub for fishing notes: destinations you've fished or are considering, techniques and systems you've built or collected, and clippings worth returning to. Content notes stay at vault root (folder depth doesn't buy anything Dataview filtering on `topic`/`type` doesn't already give); this folder holds only this MOC. See [[_Fishing Notes Convention]] for how notes here are typed and tagged, how crosslinking works, and how a freshly-jotted note gets picked up here before it's fully filled in.

## Destinations

```dataview
TABLE location, water, best_months, peak_months
FROM ""
WHERE topic = "fishing" AND type = "destination"
SORT location ASC
```

## Where to fish, by month

`best_months` and `peak_months` are stored as `"MM-Mon"` strings (e.g. `"11-Nov"`) so they sort chronologically as plain text — no extra date parsing needed. This groups every destination by the months it's worth targeting; scroll to the month you care about.

```dataview
TABLE rows.file.link as Destinations
FROM ""
WHERE topic = "fishing" AND type = "destination"
FLATTEN best_months as month
GROUP BY month
SORT month ASC
```

Narrower — only the standout **peak** months per destination:

```dataview
TABLE rows.file.link as "Peak destinations"
FROM ""
WHERE topic = "fishing" AND type = "destination"
FLATTEN peak_months as month
GROUP BY month
SORT month ASC
```

To ask "where can I fish in November" directly, drop a one-off query anywhere (swap `"11-Nov"` for the month you want — see [[_Fishing Notes Convention]] for the full month-code list):

```dataview
LIST
FROM ""
WHERE topic = "fishing" AND type = "destination" AND contains(best_months, "11-Nov")
```

## Techniques database

Every technique note, and which destinations it's crosslinked to via a `## Related destinations` / `## Related techniques` section (see [[_Fishing Notes Convention]] for the crosslinking rule). `Uses` counts inbound wikilinks from other fishing notes — a rough proxy for how central a technique is.

```dataview
TABLE author, length(file.inlinks) as Uses
FROM ""
WHERE topic = "fishing" AND type = "technique"
SORT file.name ASC
```

**Technique concepts (not yet their own notes):** the Troutbitten clipping mentions several named sub-techniques as inline wikilinks that don't have notes yet — normal for a single-use mention (see the vault's own rule for this in `Clinical Reasoning MOC`: build a hub once 2+ notes reference the same concept, let single-use specifics stay red). Tracking them here so a second reference promotes one to a real note instead of it just quietly reappearing red.

| Concept | Appears in | Status |
|---|---|---|
| [[crash cast]] | Dry Flies in Fast Water | red — single mention |
| [[hop mends]] | Dry Flies in Fast Water | red — single mention |
| [[grease the tippet]] | Dry Flies in Fast Water | red — single mention |

**Built:**
- [[lagging curve]] — was tracked here as a single mention, promoted to its own note once [[Fishing Angles - Upstream or Downstream]] independently described the same cast (as a "candy-cane cast").
- **George Harvey dry-fly leader** — didn't need its own note; the actual formula (researched from Troutbitten's write-ups) got added as a section directly inside [[Leader Formulas]], since it's a concrete taper formula that belongs alongside the other formulas there rather than a standalone concept page. The clipping's inline mention now links straight to that section.

## Clippings

Clipped material stays in `Clippings/` regardless of topic — this just surfaces the fishing-tagged ones.

```dataview
TABLE author, source
FROM "Clippings"
WHERE topic = "fishing"
SORT file.name ASC
```

## Needs normalization

Anything tagged `topic: fishing` that's still missing a `type`, or a destination still missing `best_months`, shows up here. That's the whole point of tagging `topic: fishing` on a quick note the moment you jot it: it doesn't need to be fully filled in yet, but it becomes visible here until it is.

```dataview
TABLE type, location, best_months
FROM ""
WHERE topic = "fishing" AND (!type OR (type = "destination" AND !best_months))
```

## Notes to build

Nothing flagged yet beyond the technique concepts above — the vault currently holds 5 destination notes (3 vault-root + 2 clippings), 2 non-clipping technique notes ([[Leader Formulas]], [[lagging curve]]), and 9 clippings (7 `type: technique`, 2 `type: destination`), all normalized as of 2026-07-26. Two new casting-technique clippings (Best Double Haul, Probably the Best Casting Video Ever Made — both Simon Gawesworth/Far Bank) were typed `technique` this pass but left uncrosslinked: they're general casting-fundamentals instruction, not tied to a specific leader formula or destination the way the existing technique notes are, so forcing a `## Related techniques` link would be tenuous per the crosslinking rule.
