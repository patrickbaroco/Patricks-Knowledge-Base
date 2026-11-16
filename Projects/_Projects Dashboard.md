---
type: dashboard
about: >-
  Command Center status/staleness dashboard. Everything on this page is live and recomputes each time
  the note opens: the Todoist blocks through the Todoist Sync plugin, the rest through Dataview from
  file activity in this vault. Nothing here is written by hand. See Home MOC.md for the cadence rules
  this implements, and Today.md for the daily view.
last_touched: 2026-09-23
---

# Projects Dashboard

## Initiatives in Todoist

Every open task carrying a `prj-` label, grouped by label. Live through the Todoist Sync plugin (replaced the hand-written Todoist Snapshot on 2026-09-23). A `prj-` label with no row here has no open task; Home MOC → Open items → Label hygiene says which of those are expected.

```todoist
name: "Open tasks by initiative"
filter: "@prj-*"
autorefresh: 600
groupBy: labels
sorting:
  - date
  - priority
show:
  - due
  - project
view:
  noTasksMessage: "No open prj- tasks."
```

Undated `prj-` tasks created more than two weeks ago (Home MOC's "gone quiet" proxy):

```todoist
name: "Undated and older than two weeks"
filter: "@prj-* & no date & created before: -14 days"
autorefresh: 600
groupBy: labels
show:
  - labels
view:
  noTasksMessage: "None."
```

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

**Gates:** a project whose frontmatter carries `gated_until: YYYY-MM-DD` (with an optional `gate:` saying what it waits for) shows 🚦 and is not flagged until that date. After it, days-since counts from the gate date, so a gate that passes with nothing done turns 🟡 at four days and 🔴 at seven.

**Exception:** a project carrying `cadence: untracked` in its frontmatter is listed but never flagged — it shows ⏸️ and no days-since figure. Some projects (Clinical Handbook) progress at their own pace by design, and measuring them against a rhythm they were never given produces false staleness.

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

  // gated_until: nothing is due before this date. While it is in the future, show 🚦 and no flag;
  // once it passes, the quiet clock starts from the gate date rather than the last edit.
  const gate = p.gated_until ? dv.date(p.gated_until) : null;
  if (gate && gate.valueOf() >= dv.date("today").valueOf()) {
    const lt = mtimes.reduce((a, b) => (a.valueOf() > b.valueOf() ? a : b));
    rows.push([p.file.link, lt.toFormat("yyyy-MM-dd"), "—", "", `🚦 gated until ${gate.toFormat("yyyy-MM-dd")}${p.gate ? " — " + p.gate : ""}`]);
    continue;
  }
  if (gate) mtimes.push(gate);

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

  // projects marked `cadence: untracked` progress at their own pace — never flag them
  if (p.cadence === "untracked") {
    rows.push([p.file.link, realLastTouched.toFormat("yyyy-MM-dd"), "—", "", "⏸️ untracked — no expected cadence"]);
    continue;
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
