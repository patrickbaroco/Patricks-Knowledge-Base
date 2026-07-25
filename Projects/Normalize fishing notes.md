---
project: Normalize Fishing Notes
status: active
domain: personal
started: 2026-07-25
next_action: "Decide whether Bay Flats and Southern Way need best_months/water_temp fields next time either is touched"
todoist_label: prj-fishing
stakeholders: []
related: []
last_touched: 2026-07-25
---

## Context

Bounded project to bring the vault's four fishing notes (Bay Flats Lodge, Jurassic Lake Fishing, Southern Way Charters, Leader Formulas) plus the Troutbitten dry-fly clipping into a consistent structure, per a prior chat's advice about MOC/project splits, type taxonomies, and folder shallowness — validated against how this vault already does it elsewhere (`Clinical Reasoning MOC` vs. `Projects/Clinical Reasoning.md`, `Projects/_Todoist Link Convention.md` as the one-convention-per-topic model). The permanent hub is [[Fishing MOC]] (now filed in `Fishing/`); the rules live in [[_Fishing Notes Convention]]; this note is the bounded log and closes when the pass is done.

## Decisions

- `Fishing MOC.md` moved from vault root into `Fishing/`; the four content notes stay at vault root (folder depth buys nothing Dataview doesn't already give — same reasoning the vault already applies to Clippings).
- Type taxonomy: `destination`, `technique`, `source`, `reference`. `destination`/`technique` notes keep that type regardless of authorship; the `author` field (present vs. absent), not `type`, distinguishes self-authored from consulted material. Leader Formulas stays `type: technique` rather than being reclassified to `reference`.
- Frontmatter keys use underscores, not hyphens, going forward (`best_months`, `water_temp`) — locked in now, before any note needs those fields.
- Removed three dangling wikilinks (`[[redfish]]`, `[[saltwater fly fishing]]`, `[[Louisiana fly fishing]]`) from Southern Way Charters — none resolved to real notes, and ad hoc topical links are redundant with `topic: fishing` + the MOC's Dataview queries.
- Vault was not under version control before this pass — `git init` + a baseline commit were done first so the whole pass is reversible.

## Open questions

- Whether Bay Flats Lodge and Southern Way Charters ever warrant richer fields (`best_months`, `water_temp`, guide contact info) — holding off until one of them gets real content beyond a link and a one-liner.

## Log

- 2026-07-25: Reviewed the four existing fishing notes, the empty `Fishing MOC.md` stub, the Troutbitten clipping, and the vault's existing conventions (`_Todoist Link Convention.md`, `Clinical Reasoning MOC.md` / `Projects/Clinical Reasoning.md`). Ran `git init` + baseline commit. Created `Fishing/` and moved the MOC into it, populated with Dataview queries over `topic: fishing`. Drafted `Projects/_Fishing Notes Convention.md` capturing the type taxonomy and folder rules. Cleaned the three dangling wikilinks out of Southern Way Charters. Opened this project log.
