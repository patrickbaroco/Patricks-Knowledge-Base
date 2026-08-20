---
type: moc
about: Structural map for the Command Center — domain → Todoist mapping + cadence rules for staleness detection
last_touched: 2026-08-10
---

# Home MOC

This note is the knowledge base for the **Command Center** Claude Project. It doesn't hold live data — Todoist, queried live via the Command Center's Todoist connector, is the source of truth for "what's next" and "what's due." What this note supplies is the map (which domain lives where in Todoist) and the cadence rules that turn raw Todoist/vault state into "what's lingering."

See `Projects/_Todoist Link Convention.md` for the underlying `prj-<slug>` label mechanics this table relies on.

## Domain → Todoist / Vault Mapping

| Domain | Where it lives | Label(s) | Notes |
|---|---|---|---|
| **Project Management** (incl. Declutter) | Todoist — spread across Personal-Fishersville, Personal-Snowshoe, Work (life-context, not initiative-specific) | One `prj-<slug>` label per initiative: `prj-declutter`, `prj-meadow`, `prj-acuity`, `prj-transition` | Query live via `@prj-<slug>` filters. Declutter is the concrete stagnation test case (see below). |
| **Meal Planning** | Todoist — Personal-Fishersville | none (routine, unlabeled — not a multi-task initiative) | Single recurring task: "Plan meals for the week," every Sunday 6pm. Task id `6hFWG732WCWRWj8w`. |
| **Clinical Reasoning** | **Not in Todoist.** Tracked in `Projects/Clinical Reasoning.md`, but the actual work product lives in the `Clinical Reasoning/` folder (MOC + `Episodes/`) | `prj-reasoning` declared in the note's frontmatter but intentionally never applied to a Todoist task | "What's next" = the note's `next_action` frontmatter field. "What's due/lingering" = computed from folder mtimes, **not** the note's `last_touched` field — see Cadence Rules below for why. Same treatment applies to `Projects/Clinical Handbook.md` (`prj-handbook`) if/when it's brought into Command Center scope. |
| **Logbook** | `Logbook/Daily/` (daily entries, written in Logbook project), `Logbook/Weekly/` + `Logbook/Monthly/` (rollups + Handoff, now generated **from Command Center** — see 2026-08-10 decision below) | n/a — spans all domains, doesn't carry its own label | "What's due" = whether today's (or yesterday's) daily note exists. Daily entry-writing stays in the standalone Logbook Claude Project; periodic synthesis moved here. |
| **Week Ahead** | `Projects/Week Ahead/` (prospective priorities/calendar/Todoist snapshot) | n/a | Stays a standalone Claude Project (calendar-photo intake). Reads the Weekly Handoff note directly from file as one of its inputs — now produced by Command Center rather than the Logbook project, same file-based connection point either way. |

## Cadence Rules (what makes something "lingering")

### Primary signal: live file mtimes, not frontmatter `last_touched`

**Do not trust the `last_touched` frontmatter field as the source of truth for staleness.** Patrick has said directly he'll rarely remember to update it by hand, and it's already been caught drifting: on 2026-08-08, seven new Clinical Reasoning episode notes (CPS 146, 160, 167, 174, 175, 179, 186) were added to `Clinical Reasoning/Episodes/` between 9:22–10:17pm, but `Projects/Clinical Reasoning.md`'s `last_touched` still read 2026-07-26 and the MOC hadn't been touched since 2026-07-25 — real work happened, and the tracking field never moved. Treat `last_touched` as narrative color in the Log, never as evidence of inactivity on its own.

The actual "last acted on" date for a domain is the **most recent file mtime** across the files that make up its real work product — checked live (`device_list_dir`, not a cached listing) before concluding anything is stale:

- **Project Management initiatives**: max mtime across the project note in `Projects/`, every file listed in its `related` frontmatter, and any dedicated content folder (e.g. Declutter's supporting reference notes).
- **Clinical Reasoning**: max mtime across *everything* in the `Clinical Reasoning/` folder — MOC, indices, and all files in `Episodes/`. Checking only `Projects/Clinical Reasoning.md` will miss real activity, since episode work routinely doesn't touch that note at all.
- **Meal Planning**: the Todoist task's completion history — already live via the connector, no file check needed.
- **Logbook**: the most recent filename in `Logbook/Daily/`.
- **Week Ahead**: the most recent filename in `Projects/Week Ahead/` (check `Archive/` too if the current week hasn't triggered yet).

If a frontmatter `last_touched` date and the computed file-mtime date disagree, say so explicitly rather than picking one silently — that mismatch is itself worth surfacing (it usually means work happened somewhere the tracking note doesn't know about yet).

### Secondary proxies (still useful on top of the mtime check)

- **Sequenced/recurring tasks with a counter** (e.g. Declutter's "Week X/37"): expected pace is 1 unit per calendar week from the task's `addedAt`/start date. Flag if elapsed weeks since start exceeds the counter — i.e., behind pace. Declutter started 2026-08-08 at Week 1/37, so by week N the counter should read N.
- **No due date + old creation date**: for any task carrying a `prj-<slug>` label, flag if it has no due date and was created more than ~2 weeks ago — it's gone quiet.
- **Repeatedly rescheduled tasks**: not overdue, but functionally stagnant. Check via `find-activity` for reschedule events on labeled tasks; flag at 3+ reschedules.
- **Meal Planning**: flag if the "Plan meals for the week" recurring task is still open past Sunday night.
- **Clinical Reasoning**: expect at least one touch per calendar week (per file mtimes above, not `last_touched`).
- **Logbook**: expect a daily note for every day. Flag if the most recent file in `Logbook/Daily/` isn't dated today or yesterday.

## Decisions log

- **2026-08-08 — Logbook architecture, resolved (revised).** An earlier pass at this decision recommended merging Logbook and Week Ahead into one project ("Weekly Operations"), on the assumption that the two couldn't see each other and Patrick was hand-copying context between them. That assumption was wrong: Week Ahead's actual project instructions show it already reads Logbook's prior-week Handoff note **directly from the file** (`Logbook/Weekly/YYYY-Www.md`, Input 3) as part of its documented workflow — not via chat history. Week Ahead's own instructions explicitly state the two projects "are not merged," for good reason: different triggers (calendar photo vs. daily narration), different inputs (image vs. narrated text), different time direction (forward-looking vs. backward-looking). This is the same file-based-connection philosophy Command Center itself is built on, so there's nothing to fix by merging.
  - **Final decision: Logbook and Week Ahead both stay standalone Claude Projects**, connected via Week Ahead's existing file-based read of Logbook's Handoff note. No Claude Projects consolidation needed.
  - **Optional follow-up (not required):** the connection currently runs one direction only — Week Ahead reads Logbook's Handoff, but Logbook's own instructions don't reference Week Ahead's priorities when writing daily entries or the retrospective rollup. Could add a symmetric file read if useful; not acted on yet.
  - Logbook's role as "connective daily record across all domains" is served by Command Center (via the daily-entry cadence check in this note) and by Week Ahead's file-based read — not by any project merge.

- **2026-08-08 — Staleness detection redesigned around file mtimes.** Caught via the Clinical Reasoning example above: relying on manually-maintained `last_touched` frontmatter produces false "lingering" flags when real work happens in a location that doesn't get logged back to the tracking note. Patrick confirmed he won't reliably keep `last_touched` current by hand. Fix: Cadence Rules above now treat live file mtimes as the primary signal and `last_touched` as secondary/narrative only.

- **2026-08-10 — Periodic synthesis (rollups + Handoff) moved into Command Center; daily capture and Week Ahead intake stay put.** Revises, but doesn't reverse, the 2026-08-08 "stay fully standalone" call. Trigger: the week of 8/3–8/9 was a travel week and Logbook's own end-of-week review never ran, so no W32 Weekly note existed — Week Ahead's 2026-08-10 note had to patch around the gap by reusing W31's stale Handoff instead of blocking. The two-project split only works if the file handoff between Logbook and Week Ahead actually gets exercised every week, and it didn't.
  - **What moved here:** generating the weekly rollup + Handoff note (`Logbook/Weekly/YYYY-Www.md`), and monthly/quarterly/annual rollups on the same logic (`Logbook/Monthly/`, etc.), per the cadence in `logbook-system-reference.md`. The monthly Daily-folder archive sweep is triggered off "the first weekly review after a month closes" (see that file), so it moves here too — it has no other trigger to hang off of otherwise.
  - **What stayed put and why:** daily entry-writing (Logbook project) and Week Ahead's calendar-photo intake (Week Ahead project) are voice/template-sensitive and run on their own interaction rhythm (narrated text; a photo) that's a poor fit for Command Center's status-query mode — moving those risked the instruction-bloat and mode-confusion problems a full merge would cause, without fixing the actual failure (a periodic step landing in a project nobody was visiting at the week boundary).
  - **Mechanics:** Command Center now needs read access to `Logbook/Daily/` (that week's entries) and any `Projects/` notes touched that week, plus write access to `Logbook/Weekly/` and `Logbook/Monthly/` — not just the Todoist connector read access described above.
  - First run under the new arrangement: `Logbook/Weekly/2026-W32.md`, drafted 2026-08-10 to cover the missed 8/3–8/9 week.

## Open items

- ~~**Command Center Claude Project** — not yet created.~~ **Done.** Confirmed set up and in active use as of 2026-08-10: knowledge = this note (via the vault connected as project context), tools = Todoist connector (live) + read/write file access to `Logbook/Daily/`, `Logbook/Weekly/`, `Logbook/Monthly/`, and `Projects/` (used to draft `Logbook/Weekly/2026-W32.md` this session).
- **Meal Planning** — intentionally kept minimal (one recurring task, no label, no project note). Revisit only if it grows beyond a single weekly task.
