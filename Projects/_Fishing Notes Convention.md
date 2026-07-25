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

## `best_months` / `peak_months` — narrative and queryable at once

Destination notes carry the "when to go" info two ways, and they're meant to reinforce each other rather than duplicate effort:

- **A "Best time to fish" prose section in the body** — the nuance: why, which sub-location, trade-offs (solitude vs. trophy size, weather risk, etc.), with sources cited.
- **`best_months` (and optionally `peak_months`) as frontmatter list fields** — the queryable version, so you can ask "where can I fish in November" and get a table instead of re-reading four notes.

Both fields are lists of `"MM-Mon"` strings — zero-padded month number plus three-letter abbreviation, e.g. `"11-Nov"`. That format is the trick that makes this work in plain Dataview (no DataviewJS needed): a normal alphabetical string sort on `"01-Jan"` … `"12-Dec"` already comes out in calendar order, so `SORT` and `GROUP BY` just work.

- `best_months` — every month worth targeting this destination (inclusive; if it's genuinely good year-round, list all twelve, like Bay Flats and Southern Way).
- `peak_months` — the standout subset, when a destination has a real peak vs. shoulder-season difference worth flagging (Bay Flats: fall + spring; Southern Way: the July–March window when both its lodges are firing). Skip this field if the destination doesn't really have a "lesser" season — Jurassic Lake's whole Nov–Apr season is strong for different reasons, so it only sets `best_months`.

The month-code list: `01-Jan 02-Feb 03-Mar 04-Apr 05-May 06-Jun 07-Jul 08-Aug 09-Sep 10-Oct 11-Nov 12-Dec`.

**Ad hoc "where to fish in <month>" query** — paste this anywhere and swap the month code:

```dataview
LIST
FROM ""
WHERE topic = "fishing" AND type = "destination" AND contains(best_months, "11-Nov")
```

[[Fishing MOC]] also keeps a standing "Where to fish, by month" table so you don't have to write this query yourself for the common case of just browsing.

## Frontmatter keys use underscores, not hyphens

`best_months`, `peak_months`, `water_temp`, etc. — matches the rest of the vault's Dataview-queryable properties.

## Folder shallowness

Destination and technique notes live at vault root, same as everything else — no `Fishing/` subfolder for content. `Fishing/` holds only [[Fishing MOC]]. Clippings stay in `Clippings/` regardless of subject, matching the vault's existing rule (the Troutbitten clipping lives there, not in a topic folder). `topic: fishing` plus the MOC's Dataview queries do the linking work that folder structure would otherwise be asked to do.

## Crosslinking pass

Normalizing a fishing note isn't just frontmatter — it also means checking whether the note has a genuine relationship to other notes already in the corpus and adding explicit wikilinks for it, under a `## Related destinations` and/or `## Related techniques` heading. This is different from — and in addition to — the blanket discovery that `topic: fishing` + the MOC's Dataview queries already give every note for free. A destination and a technique note both being tagged `topic: fishing` doesn't automatically make them "related" in the sense that matters here; a real relationship is something like "you'd use *this* leader formula at *this* destination," or "this clipping's leader design is the same idea as that technique note." Dangling links to something that doesn't exist and isn't a real relationship (the old Southern Way Charters links) still get removed, per the folder-shallowness rule above — this rule is about adding *real* links, not adding links for their own sake.

When a new note doesn't obviously connect to anything yet, that's fine — leave it unlinked rather than forcing a tenuous connection. The **Techniques database** section of [[Fishing MOC]] also tracks named sub-technique concepts mentioned inside notes (e.g. a clipping name-drops "the hop mend") that don't have their own note yet. Leave those as plain wikilinks (they'll render red until a note exists) rather than skipping them — the same rule the vault already uses in `Clinical Reasoning MOC`: build a hub note once 2+ sources reference the same concept, and let single-use specifics stay red so the long tail doesn't turn into busywork.

**Promoting a concept doesn't always mean a new note.** When a concept is a distinct *idea* that gets referenced from multiple angles (like [[lagging curve]] — a cast, described independently by two different clippings), it earns its own note. When a concept is a concrete formula/recipe that belongs alongside others just like it (the George Harvey dry-fly leader is a leader taper, and [[Leader Formulas]] already exists as the place leader tapers live), add it as a section inside the existing note instead and point the inline mention at that heading (`[[Note#Heading|display text]]`) rather than spinning up a near-duplicate page. Ask which is true before creating a new note: does this deserve its own hub, or does it belong as a row/section in a hub that already exists?

## Naming and casing

Wikilinks resolve case-insensitively in Obsidian, but keep casing consistent with however the concept was first mentioned in its source note (e.g. `[[lagging curve]]`, lowercase, matching the original clippings) so a second mention doesn't accidentally create a near-duplicate file.

## How a new note gets flagged for normalization

The only thing a new fishing note needs *the moment you jot it* is `topic: fishing` in the frontmatter — that's the one property every Dataview query in [[Fishing MOC]] filters on, so it's what makes the note visible to the system at all. It doesn't need `type`, `location`, or `best_months` filled in yet.

The MOC's **Needs normalization** table does the rest: it surfaces any `topic: fishing` note that's missing `type`, or that's `type: destination` but still missing `best_months`. A half-finished note sits there, visible, until you (or a future normalization pass) fill in the rest — it doesn't silently fall through the cracks, and it doesn't need its own status field to track "done vs. not done" the way a Projects-folder note does.

## Worked example

- `Bay Flats Lodge.md` — `topic: fishing`, `type: destination`, `location: USA`, `water: saltwater`, `best_months` = all twelve months, `peak_months` = `["10-Oct","11-Nov","03-Mar","04-Apr","05-May","06-Jun"]`, `## Related techniques` linking [[Leader Formulas]].
- `Leader Formulas.md` — `topic: fishing`, `type: technique`, no `author` (self-authored), `## Related techniques` linking the Troutbitten clipping (shared leader-taper concept) and `## Related destinations` linking all three destination notes (each uses a different formula from the note).
- `Clippings/Dry Flies in Fast Water - Fly Fishing Tips.md` — `topic: fishing`, `type: technique`, `author: "[[Troutbitten]]"` (external, consulted), stays in `Clippings/`, `## Related techniques` linking back to [[Leader Formulas]].

## Status

As of 2026-07-25 the convention is live. All four fishing notes plus the one clipping conform, including `best_months`/`peak_months` on the three destination notes in the queryable `"MM-Mon"` list format, and a first crosslinking pass connecting [[Leader Formulas]] to all three destinations and to the Troutbitten clipping. `Southern Way Charters.md` had three dangling wikilinks (`[[redfish]]`, `[[saltwater fly fishing]]`, `[[Louisiana fly fishing]]`) pointing at notes that don't exist — removed in favor of the `topic: fishing` tag doing that discovery work, consistent with the folder-shallowness rule above. See [[Normalize fishing notes]] for the project log.
