---
type: reference
about: How Obsidian project notes link to Todoist tasks
last_touched: 2026-07-25
---

# Todoist ↔ Obsidian Link Convention

Obsidian tracks **projects** (macro, with a lifecycle and a log). Todoist tracks **specific tasks**. This note defines how the two stay connected.

## The mapping: one Todoist *label* per project

Each active project gets a Todoist **label** named `prj-<slug>` (e.g. `prj-meadow`). Tasks belonging to that project carry the label and live in whatever context project fits them (Work, Personal-Fishersville, Personal-Snowshoe, Inbox) — the label, not a dedicated Todoist project, is what groups them.

Why labels instead of a Todoist project per initiative: Todoist here is organized by life-area/context, not by initiative, and most projects only ever have a few live tasks. A label rides on top of that structure and a single filter (`@prj-<slug>`) pulls the whole initiative together across contexts. Only spin up a dedicated Todoist project if one initiative ever grows a large, ongoing, multi-section task load — rare.

## Rules

1. **Declare the link in frontmatter.** Every project note sets `todoist_label: prj-<slug>`. This is the key tying the note to its tasks, readable from the Obsidian side.
2. **Label the tasks.** Every Todoist task for the project carries its `prj-<slug>` label. Routine recurring admin (Clinisign, orders, notes) stays **unlabeled** — it's operational, not project work.
3. **`next_action` = one live task.** A note's `next_action` always corresponds to exactly one open, labeled Todoist task — the on-deck item, flagged `p2`. When it's done, the next review promotes the new next action.
4. **Reconcile at the weekly review.** Read the weekly note's incomplete tasks, promote any that qualify into project notes, sync each active project's `next_action` ↔ its on-deck Todoist task, and refresh `last_touched`.
5. **Optional saved filters.** A per-project or master "Project tasks" filter in Todoist gives an at-a-glance view. Build as needed.

## Worked example (illustrative)

Project note **Native Meadow Conversion** sets `todoist_label: prj-meadow`. Its next action ("Mark out where we want the meadow") is one `p2` Todoist task labeled `prj-meadow`. Any further meadow tasks get the same label. A `@prj-meadow` filter then shows the whole initiative.

## Status

As of 2026-07-25 the convention is live. Active labels: `prj-transition`, `prj-quality`, `prj-acuity`, `prj-meadow`. Two projects — **Clinical Handbook** (`prj-handbook`) and **Clinical Reasoning** (`prj-reasoning`) — declare their labels in frontmatter but are intentionally kept **out of Todoist** and tracked in their project notes only (off-hours scholarship).
