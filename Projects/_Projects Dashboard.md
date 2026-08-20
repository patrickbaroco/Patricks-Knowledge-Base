---
type: dashboard
about: >-
  Command Center status/staleness dashboard. Two kinds of data live here, and they refresh differently:
  the Dataview blocks below are LIVE — Obsidian recomputes them every time this note opens, from file
  activity in this vault. The Todoist Snapshot section is NOT live — Dataview has no access to Todoist,
  so Command Center writes that section by hand from a live Todoist query, and it's only as current as
  its "Last refreshed" stamp. See Home MOC.md for the cadence rules this implements.
last_touched: 2026-08-10
---

# Projects Dashboard

## Todoist Snapshot (refreshed by Command Center, not live)

*Last refreshed: **2026-08-10** by Command Center. This section only updates when you ask Command Center to refresh it (or as part of the weekly rollup) — say "refresh the dashboard" any time. Dataview can't see Todoist directly, so nothing below auto-updates the way the file-activity sections do.*

| Initiative | Todoist signal | Status |
|---|---|---|
| Declutter (`prj-declutter`) | "Week 1/37" task, due 2026-08-08 | 🔴 2 days overdue — first session not done yet, 2 days after the project launched |
| Meadow Conversion (`prj-meadow`) | "Buy meadow seeds" task, due 2026-08-07 | 🔴 3 days overdue |
| Role Transition (`prj-transition`) | "Schedule Surah intro meeting" task, due 2026-08-10 | 🟡 due today |
| Clinical Quality Framework (`prj-quality`) | No open Todoist task | ⏸️ intentionally on hold — note says "revisit Monday 2026-08-10" (today) |
| Acuity-Based SNF Scheduling (`prj-acuity`) | No open Todoist task | ⏸️ intentionally on hold — note says "revisit Monday 2026-08-10" (today) |
| Meal Planning | "Plan meals for the week," recurring Sun 6pm | 🔴 missed — not completed as of Sun 8/9 (zero task completions logged across the whole account 8/3–8/9) |

**Worth a direct decision today:** both Clinical Quality Framework and Acuity-Based SNF Scheduling deferred their next step to "Monday 8/10" — that's today, and neither has a Todoist task queued yet.

---

## Active Projects — by real file activity

Sorted by the note's own `file.mtime`, not the hand-typed `last_touched` field — the two can drift (see Home MOC → Cadence Rules for why `last_touched` alone isn't trusted).

```dataview
TABLE status, domain, next_action, file.mtime AS "Note last touched", last_touched AS "last_touched (frontmatter)"
FROM "Projects"
WHERE status = "active"
SORT file.mtime DESC
```

## Staleness Flags — multi-file activity check

This is the deeper check from Home MOC's Cadence Rules: for each active project, the *real* last-touched date is the newest file among the project note itself, everything in its `related` frontmatter, and — for Clinical Reasoning specifically — every file in the whole `Clinical Reasoning/` folder (MOC + Episodes), since episode work routinely never touches the tracking note at all.

Flags a 🔴 if nothing in that set has moved in 7+ days, 🟡 at 4–6 days, and separately flags ⚠️ if the frontmatter `last_touched` date disagrees with the real computed date by a day or more (a sign work happened somewhere the tracking note doesn't know about).

```dataviewjs
const pages = dv.pages('"Projects"').where(p => p.status === "active");
const rows = [];

for (const p of pages) {
  let mtimes = [p.file.mtime];

  // related notes — handle both Link objects and plain/bracketed strings
  if (p.related) {
    const relatedArr = Array.isArray(p.related) ? p.related : [p.related];
    for (const r of relatedArr) {
      let name;
      if (r && typeof r === "object" && r.path) {
        name = r.path;
      } else {
        name = String(r).replace(/\[\[|\]\]/g, "").split("|")[0];
      }
      const rp = dv.page(name);
      if (rp && rp.file && rp.file.mtime) mtimes.push(rp.file.mtime);
    }
  }

  // special case: Clinical Reasoning's real work product is the whole folder, not just this note
  if (p.file.name === "Clinical Reasoning") {
    const folderPages = dv.pages('"Clinical Reasoning"');
    for (const fp of folderPages) {
      if (fp.file && fp.file.mtime) mtimes.push(fp.file.mtime);
    }
  }

  const realLastTouched = mtimes.reduce((a, b) => (a.valueOf() > b.valueOf() ? a : b));
  const nowMs = dv.date("now").valueOf();
  const daysSince = Math.floor((nowMs - realLastTouched.valueOf()) / 86400000);

  let mismatch = "";
  if (p.last_touched) {
    const fmDate = dv.date(p.last_touched);
    if (fmDate) {
      const diffDays = Math.abs(Math.floor((fmDate.valueOf() - realLastTouched.valueOf()) / 86400000));
      if (diffDays >= 1) mismatch = "⚠️ frontmatter drift";
    }
  }

  let flag = "🟢";
  if (daysSince >= 7) flag = "🔴 stale";
  else if (daysSince >= 4) flag = "🟡 watch";

  rows.push([p.file.link, realLastTouched.toFormat("yyyy-MM-dd"), daysSince, mismatch, flag]);
}

dv.table(["Project", "Real last touched", "Days since", "Frontmatter check", "Status"], rows);
```

---

## Logbook & Week Ahead Cadence

Logbook expects a daily note for every day — flag if the most recent file isn't dated today or yesterday.

```dataview
TABLE file.name AS "Most recent daily note", file.mtime AS "Last modified"
FROM "Logbook/Daily" AND !"Logbook/Daily/Archive" AND !"Logbook/Daily/Templates"
SORT file.name DESC
LIMIT 1
```

Week Ahead expects a fresh note at the start of each week — flag if the most recent file isn't dated this week's Monday.

```dataview
TABLE file.name AS "Most recent Week Ahead note", file.mtime AS "Last modified"
FROM "Projects/Week Ahead" AND !"Projects/Week Ahead/Archive"
SORT file.name DESC
LIMIT 1
```

---

## Blocked / Waiting

```dataview
TABLE status, domain, next_action, file.mtime AS "Note last touched"
FROM "Projects"
WHERE status = "blocked" OR status = "waiting"
SORT file.mtime ASC
```

## Inbox (unsorted)

```dataview
TASK
FROM "Projects/_Inbox"
WHERE contains(tags, "#unsorted")
```

## Everything else

```dataview
TABLE status, domain, file.mtime AS "Note last touched"
FROM "Projects"
WHERE status != "active" AND status != "blocked" AND status != "waiting"
SORT file.mtime DESC
```
