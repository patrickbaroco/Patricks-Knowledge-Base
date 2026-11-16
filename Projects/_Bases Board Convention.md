---
type: convention
about: How the Bases kanban board works — what a .base file is, how _Projects Board.base is built line by line, and the rules that keep the board honest.
related:
  - "[[_Projects Dashboard]]"
  - "[[_Todoist Link Convention]]"
last_touched: 2026-09-04
---

# Bases Board Convention

## What a Base actually is

A `.base` file is **a saved query plus a set of ways to look at it**. It is not a
container and it does not hold your notes — the notes stay exactly where they are in
`Projects/`. The base just says "find every file matching these conditions, and draw
them like this."

That matters for one reason: **the board is a mirror, not a place.** Dragging a card
edits the note's frontmatter. Editing the note's frontmatter moves the card. There is
no second copy of the truth, which is the failure mode of the old Kanban plugin (a
board file that drifted out of sync with the notes it described).

Three moving parts:

| Part | What it does |
|---|---|
| `filters` | Which notes are in the base at all |
| `formulas` / `properties` | Computed and re-labelled fields available to every view |
| `views` | One dataset, drawn several ways — table, cards, list, kanban, map |

## Why kanban works for this vault

A kanban view takes **one property** and turns each distinct value into a column. Your
project template already carries the right property:

```yaml
status: active # active | blocked | waiting | done | shelved
```

So the columns come free — no new field, no migration. And because dragging a card
rewrites `status:` in the note, the board is an *input* to the vault, not just a
readout of it.

## The board: `_Projects Board.base`, line by line

### Scope

```yaml
filters:
  and:
    - file.inFolder("Projects")
    - '!status.isEmpty()'
```

`inFolder` includes subfolders, so `_Parked/` and `Week Ahead/` are in scope by
folder — but the second condition drops anything without a `status:` field. That is
what keeps `_Inbox`, `_Projects Dashboard`, the declutter cheat sheets and the
convention notes off the board. **The `status` field is the membership test.** If a
note should appear on the board, give it a status; if it should not, don't.

### Computed fields

```yaml
formulas:
  touched: 'file.mtime.relative()'
```

Renders as "3 days ago". Deliberately built on `file.mtime` and not the hand-typed
`last_touched:` frontmatter, for the same reason the Dashboard's Dataview blocks are —
the two drift, and mtime is the one that can't be wrong.

```yaml
properties:
  next_action:
    displayName: Next action
```

Cosmetic only: gives the column a human label instead of the raw property name.

### The views

The base's top-level filter also admits `type == "goal"` notes, and each project view re-applies
`!status.isEmpty()` so goals reach the file but stay out of the project views — see *Goals are not
projects* below.

**Board** — the kanban.

```yaml
  - type: kanban
    name: Board
    groupBy:
      property: status
      direction: ASC
    order:
      - file.name
      - next_action
      - domain
      - formula.touched
```

`groupBy` is what makes it a kanban; everything else is card contents. In `order`, the
**first entry becomes the card title** and the rest become the fields printed on the
card face. So every card shows: project name, its next action, professional/personal,
and how long since anything moved.

**All projects** — the same data as a flat table, for when you want to scan or sort
across columns rather than within them.

**Stale actives** — a table filtered to `status == "active"` and untouched for a week:

```yaml
        - 'file.mtime < now() - "1 week"'
```

Date arithmetic takes duration strings (`"1 week"`, `"3d"`, `"1M"`). This is a thin
version of the Dashboard's staleness check — it looks only at the project note itself,
not at its `related` files, so treat it as a first pass and the Dashboard's `dataviewjs`
block as the real audit.

## Opening it

Click `_Projects Board.base` in the file explorer. The view switcher is the tab strip
at the top left of the base — **Board / All projects / Stale actives**.

To embed the board inside another note (the Dashboard is the obvious candidate):

```
![[_Projects Board.base#Board]]
```

## Doing this without writing YAML

Everything above is reachable from the UI, and the UI writes the same file:

1. **New base** — right-click a folder → *New base*, or the command palette.
2. **Filters** — the funnel icon. Add condition → property → operator → value.
3. **Make it a kanban** — the view dropdown → *Kanban*.
4. **Columns** — the sort/group toolbar button → *Group by* → `status`.
5. **Card fields** — the *Properties* menu. First one listed is the title.
6. **Column order** — drag the column headers. Alphabetical is the default, which is
   why the board reads *active, blocked, done, shelved, waiting* rather than in
   workflow order. Right-click restores the original order.
7. **More views** — the `+` at the end of the view tabs. Views share the base's
   top-level filters and add their own on top.

Reading the YAML afterwards is the fastest way to learn the syntax — build it by
clicking, then open the `.base` file as text and see what changed.

## Rules that keep it honest

1. **`status` is now load-bearing.** It was previously decorative — the Dashboard
   narrates real state in prose. As of today all ten project notes say
   `status: active`, while the Dashboard describes Acuity-Based SNF Scheduling as
   shelved, and Clinical Quality Framework and Clinical Handbook as on hold. The board
   will show that fiction as five cards in one column. Fixing those three notes is
   what makes the board worth opening.
2. **The vocabulary is closed.** `active | blocked | waiting | done | shelved` — a typo
   creates a new column silently. The template comment is the canonical list.
3. **`waiting` vs `blocked`** — worth a written distinction, since the board makes the
   difference visible for the first time. Suggested: *waiting* = the ball is in someone
   else's court and there is a name attached; *blocked* = something must be decided or
   built before work can continue.
4. **Todoist still owns tasks.** The board moves projects between states; it does not
   track steps. `todoist_label` remains the link — see `_Todoist Link Convention.md`.
5. **Drag-and-drop needs a real property.** Cards can only be dragged when grouped by a
   frontmatter property. Group by a formula or a `file.*` field and the board becomes
   read-only.

## Goals are not projects

Added 2026-09-04, with [[Clinical Quality Framework]] as the first of the type.

A **goal** is something projects hang off — too large to have a next step of its own. Clinical Quality
Framework spent five of its first six weeks on hold across three successive deferrals, not because it
was neglected but because it was a goal filed as a project: it accumulates settled decisions
continuously and never produces a next action, and the system kept flagging it for the thing it was
never going to have.

Goal notes carry `type: goal` and, deliberately, **no `status` and no `next_action`.** That is not an
omission — it is the mechanism. The board's membership test is `!status.isEmpty()`, and the Dashboard's
Dataview blocks filter on `status = "active"`, so a note with no status is automatically absent from
both without either needing a special case written into it. The base's top-level filter was widened to
`status is not empty OR type == "goal"` so goals still reach the file, and each project view re-applies
the status test so goals stay out of the kanban columns. They surface in their own **Goals** view.

Goals carry a `projects:` list instead of a next action, and no `todoist_label` — a goal owns no tasks;
its projects do.

**Inpatient readmissions** was identified 2026-09-04 as the next note of this type, when it becomes real.

## Extending it

- **Hide finished work** — add `'status != "done"'` to the view's own `filters` (view
  filters stack on top of the base's).
- **Split by domain** — duplicate the Board view, add `'domain == "professional"'`.
  Two boards, one dataset.
- **Column swim lanes by something else** — change `groupBy` to `domain`, or add a
  `stage:` property if you ever want a pipeline (idea → scoped → in flight → done)
  layered on top of health.
- **Aging colour** — a formula like `'if(file.mtime < now() - "2 weeks", "stale", "")'`
  added to `order` prints a marker on the card face.
- **Cards view** — same base, `type: cards`, for a gallery with cover images. Useful for
  Clippings, not for projects.

## Version note

Kanban exists twice: natively in **Obsidian 1.14** (early access at time of writing) and
via the **Base Board** community plugin, which you already have installed and enabled
(v2.5.1, works from 1.10.2). Both register the same view type, `kanban`, so this file
works either way — but once 1.14 ships to general release, disable Base Board so the two
don't compete to register the same view.
