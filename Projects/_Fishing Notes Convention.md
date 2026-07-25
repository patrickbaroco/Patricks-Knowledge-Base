---
type: reference
about: How fishing notes are typed, tagged, and organized in this vault
last_touched: 2026-07-25
---

# Fishing Notes Convention

Fishing notes are plain vault-root notes tagged `topic: fishing`, connected through [[Fishing MOC]] via Dataview rather than folder placement. This note defines the taxonomy so future notes stay consistent with the four already on disk (Bay Flats Lodge, Jurassic Lake Fishing, Southern Way Charters, Leader Formulas) plus the Troutbitten dry-fly clipping.

## The `type` field

Four values are in use:

- `destination` — a place you've fished or are considering (Bay Flats, Jurassic Lake, Southern Way).
- `technique` — a method, skill, or technical system (Leader Formulas; the Troutbitten dry-fly clipping).
- `source` — a general fishing-knowledge note (not tied to a specific destination or technique) that you wrote or synthesized yourself.
- `reference` — a general fishing-knowledge note you go consult that someone else wrote.

**`destination` and `technique` don't get reclassified to `reference` just because the note is clipped or externally authored.** Leader Formulas stays `type: technique` even though it's your own synthesis, and the Troutbitten clipping also stays `type: technique` even though it's someone else's video — they're the same *kind* of content (a technique), just different in authorship. Authorship is a separate axis, tracked by the `author` field: present (e.g. `author: "[[Troutbitten]]"`) means external/consulted, absent means self-authored. Only reach for `type: source` / `type: reference` on a note that isn't naturally a destination or technique in the first place.

## Frontmatter keys use underscores, not hyphens

`best_months`, `water_temp`, etc. — matches the rest of the vault's Dataview-queryable properties.

## Folder shallowness

Destination and technique notes live at vault root, same as everything else — no `Fishing/` subfolder for content. `Fishing/` holds only [[Fishing MOC]]. Clippings stay in `Clippings/` regardless of subject, matching the vault's existing rule (the Troutbitten clipping lives there, not in a topic folder). `topic: fishing` plus the MOC's Dataview queries do the linking work that folder structure would otherwise be asked to do.

## How a new note gets flagged for normalization

The only thing a new fishing note needs *the moment you jot it* is `topic: fishing` in the frontmatter — that's the one property every Dataview query in [[Fishing MOC]] filters on, so it's what makes the note visible to the system at all. It doesn't need `type`, `location`, or `best_months` filled in yet.

The MOC's **Needs normalization** table does the rest: it surfaces any `topic: fishing` note that's missing `type`, or that's `type: destination` but still missing `best_months`. A half-finished note sits there, visible, until you (or a future normalization pass) fill in the rest — it doesn't silently fall through the cracks, and it doesn't need its own status field to track "done vs. not done" the way a Projects-folder note does.

## Worked example

- `Bay Flats Lodge.md` — `topic: fishing`, `type: destination`, `location: USA`, `water: saltwater`, `best_months: "Oct–Nov, Mar–Jun (peaks); good year-round"`.
- `Leader Formulas.md` — `topic: fishing`, `type: technique`, no `author` (self-authored).
- `Clippings/Dry Flies in Fast Water - Fly Fishing Tips.md` — `topic: fishing`, `type: technique`, `author: "[[Troutbitten]]"` (external, consulted), stays in `Clippings/`.

## Status

As of 2026-07-25 the convention is live. All four fishing notes plus the one clipping conform, including `best_months` on the three destination notes. `Southern Way Charters.md` had three dangling wikilinks (`[[redfish]]`, `[[saltwater fly fishing]]`, `[[Louisiana fly fishing]]`) pointing at notes that don't exist — removed in favor of the `topic: fishing` tag doing that discovery work, consistent with the folder-shallowness rule above. See [[Normalize fishing notes]] for the project log.
