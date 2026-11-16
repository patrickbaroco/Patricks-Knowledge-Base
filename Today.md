---
type: dashboard
cssclasses:
  - today-dash
about: >-
  Daily dashboard. Opens on startup (Homepage plugin). Order: header and capture bar, top 3, schedule and brief,
  tasks due today and the next three days, projects, overdue, forecasts and fishing, For Claude.
  The capture bar appends to today's daily note (creating it from Logbook/Templates/Daily if needed) or to
  Logbook/For Claude. Top 3 is the Todoist label @top3, applied at the end-of-day review.
  The brief is rewritten each morning by Claude into Logbook/Today Brief.md.
  Todoist blocks are live through the Todoist Sync plugin. Do not hand-edit the query blocks.
---

```dataviewjs
// ---------- Header, quick links, capture bar ----------
const today = dv.date("today");
const iso = today.toFormat("yyyy-MM-dd");
const dailyPath = `Logbook/Daily/${iso}-${today.toFormat("ccc").slice(0, 2)}.md`;
const monday = today.minus({ days: today.weekday - 1 }).toFormat("yyyy-MM-dd");
const weekAhead = dv.page(`Projects/Week Ahead/${monday}`);
const weeklies = dv.pages('"Logbook/Weekly"')
  .where(p => /^\d{4}-W\d{2}$/.test(p.file.name))
  .sort(p => p.file.name, "desc");
const handoff = weeklies.length ? weeklies[0] : null;

dv.header(1, today.toFormat("cccc, LLLL d"));

const btn = (parent, label, fn) => {
  const b = parent.createEl("button", { text: label });
  b.addEventListener("click", fn);
  return b;
};

// Quick links
const bar = dv.el("div", "", { cls: "today-links" });
const hasDaily = !!app.vault.getAbstractFileByPath(dailyPath);
btn(bar, hasDaily ? "📓 Today's log" : "📓 Start today's log",
    () => app.commands.executeCommandById("periodic-notes:open-daily-note"));
btn(bar, "➕ Todoist task", () => app.commands.executeCommandById("todoist-sync-plugin:add-task"));
btn(bar, "🗺️ Home MOC", () => app.workspace.openLinkText("Home MOC", "", false));
btn(bar, "📊 Projects", () => app.workspace.openLinkText("Projects/_Projects Dashboard", "", false));
if (weekAhead) btn(bar, "🗓️ Week Ahead", () => app.workspace.openLinkText(weekAhead.file.path, "", false));
if (handoff) btn(bar, `🤝 ${handoff.file.name} Handoff`, () => app.workspace.openLinkText(handoff.file.path, "", false));

// ---------- Capture: append a line without leaving the page ----------
const SECTIONS = ["Where", "Today's focus", "Tasks", "Work", "Personal", "Inbox", "Outcome", "Tomorrow's top 3"];
const headerName = (l) => {
  const m = l.trim().replace(/’/g, "'").match(/^\*\*(.+?)\*\*$/);
  return m && SECTIONS.includes(m[1]) ? m[1] : null;
};
const placeholder = (l) => /^-\s*$/.test(l.trim()) || /^-\s+(nothing( logged)?|none)\.?$/i.test(l.trim());

async function ensureDaily() {
  const f = app.vault.getAbstractFileByPath(dailyPath);
  if (f) return f;
  const tpl = app.vault.getAbstractFileByPath("Logbook/Templates/Daily.md");
  const body = tpl
    ? (await app.vault.read(tpl)).replace(/\{\{date(?::([^}]+))?\}\}/g, (_, fmt) => window.moment().format(fmt || "YYYY-MM-DD"))
    : `${today.toFormat("cccc")}\n`;
  return await app.vault.create(dailyPath, body);
}

async function appendDaily(section, text) {
  const f = await ensureDaily();
  await app.vault.process(f, (src) => {
    const lines = src.split("\n");
    const start = lines.findIndex(l => headerName(l) === section);
    const entry = section === "Inbox" ? `- ${text}` : text;
    if (start < 0) return src.replace(/\s*$/, "") + `\n\n**${section}**\n${entry}\n`;
    let end = lines.findIndex((l, i) => i > start && headerName(l));
    if (end < 0) end = lines.length;
    const body = lines.slice(start + 1, end);
    let block;
    if (section === "Inbox") {
      block = [...body.filter(l => l.trim() && !placeholder(l)), entry, ""];
    } else {
      const kept = body.join("\n").trim();
      block = ["", ...(kept ? [kept, ""] : []), entry, "", ""];
    }
    return [...lines.slice(0, start + 1), ...block, ...lines.slice(end)].join("\n");
  });
}

async function appendClaude(text) {
  const path = "Logbook/For Claude.md";
  let f = app.vault.getAbstractFileByPath(path);
  if (!f) f = await app.vault.create(path, "# For Claude\n\n## Done\n");
  await app.vault.process(f, (src) => {
    const i = src.search(/^## Done[ \t]*$/m);
    const head = (i < 0 ? src : src.slice(0, i)).replace(/\s*$/, "");
    const sep = /^- \[[ xX]\] /.test(head.split("\n").pop()) ? "\n" : "\n\n";
    return head + sep + `- [ ] ${text}` + (i < 0 ? "\n" : "\n\n" + src.slice(i));
  });
}

// Draft and status survive Dataview's re-render when the vault changes.
const S = (window.__todayCapture ??= { draft: "", status: "" });
const cap = dv.el("div", "", { cls: "today-capture" });
const input = cap.createEl("input", { type: "text", placeholder: "Capture a line, then choose where it goes (Enter = Inbox)" });
input.value = S.draft;
input.addEventListener("input", () => { S.draft = input.value; });
const row = cap.createEl("div", { cls: "today-capture-buttons" });
const status = cap.createEl("div", { cls: "today-capture-status", text: S.status });
S.status = "";

const send = async (label, fn) => {
  const text = input.value.trim().replace(/\s*\n\s*/g, " ");
  if (!text) { input.focus(); return; }
  try {
    await fn(text);
    S.draft = ""; input.value = "";
    S.status = `✓ Added to ${label}`;
  } catch (e) {
    S.status = `Couldn't add: ${e.message}`;
  }
  status.setText(S.status);
};
const targets = [
  ["Work", t => appendDaily("Work", t)],
  ["Personal", t => appendDaily("Personal", t)],
  ["Inbox", t => appendDaily("Inbox", t)],
  ["Ask Claude", t => appendClaude(t)],
];
for (const [label, fn] of targets) btn(row, label, () => send(label === "Ask Claude" ? "For Claude" : label, fn));
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.isComposing) { e.preventDefault(); send("Inbox", targets[2][1]); }
});
```

## Today's top 3

```todoist
name: "Top 3"
filter: "@top3"
autorefresh: 300
sorting:
  - priority
show:
  - due
  - project
view:
  noTasksMessage: "No @top3 tasks. They're tagged at the end-of-day review."
```

```dataviewjs
// The written record of the top 3 lives in the previous daily note; carried Inbox comes from there too.
const iso = dv.date("today").toFormat("yyyy-MM-dd");
const prior = dv.pages('"Logbook/Daily"')
  .where(p => /^\d{4}-\d{2}-\d{2}/.test(p.file.name) && p.file.name.slice(0, 10) < iso)
  .sort(p => p.file.name, "desc");

const section = (text, heading) => {
  const re = new RegExp(`\\*\\*${heading}\\*\\*[ \\t]*\\n([\\s\\S]*?)(?=\\n\\*\\*[^*\\n]+\\*\\*[ \\t]*\\n|$)`);
  const m = text.match(re);
  return m ? m[1] : "";
};
const isPlaceholder = (t) => !t || /^_.*_$/.test(t) || /^(nothing( logged)?|none)\.?$/i.test(t);

if (prior.length) {
  const src = prior[0];
  const text = await dv.io.load(src.file.path);
  const top = section(text, "Tomorrow[’']s top 3").split("\n")
    .map(l => l.match(/^\s*\d+\.\s+(.+)$/)).filter(Boolean).map(m => m[1].trim()).filter(t => !isPlaceholder(t));
  const inbox = section(text, "Inbox").split("\n")
    .map(l => l.match(/^\s*-\s+(.+)$/)).filter(Boolean).map(m => m[1].trim()).filter(t => !isPlaceholder(t));

  const out = [];
  if (top.length) {
    out.push(`> [!note]- As written in ${src.file.name}\n` + top.map((t, i) => `> ${i + 1}. ${t}`).join("\n"));
  }
  if (inbox.length) {
    out.push(`> [!inbox]- Carried Inbox (${inbox.length})\n` + inbox.map(t => `> - ${t}`).join("\n"));
  }
  if (out.length) dv.paragraph(out.join("\n\n"));
  dv.paragraph(`<small>${top.length ? "Written" : "No top 3 written"} in [[${src.file.path}|${src.file.name}]]. Change the three by moving the @top3 label in Todoist.</small>`);
}
```

## Schedule and brief

```dataviewjs
// Everything in Logbook/Today Brief.md after "## Today" (schedule, worth knowing, For Claude).
const brief = dv.page("Logbook/Today Brief");
const today = dv.date("today").toFormat("yyyy-MM-dd");
if (!brief) {
  dv.paragraph("> [!warning] No brief yet\n> Ask Claude in Command Center: *write today's brief*.");
} else {
  const d = brief.brief_date ? dv.date(brief.brief_date).toFormat("yyyy-MM-dd") : null;
  if (d !== today) {
    dv.paragraph(`> [!warning] This brief is from ${d ?? "an unknown date"}\n> The morning run didn't land today (Mac asleep or the Claude app closed). Ask Command Center to *refresh today's brief*.`);
  }
  const text = (await dv.io.load(brief.file.path)).replace(/^---\n[\s\S]*?\n---\n/, "");
  const m = text.match(/^## Today[ \t]*\n([\s\S]*)$/m);
  const body = m ? m[1] : text.replace(/^## Forecasts[ \t]*\n[\s\S]*?(?=^## |(?![\s\S]))/m, "");
  dv.el("div", body.trim(), { cls: "today-brief" });
}
```

## Tasks

```todoist
name: "Due today"
filter: "today"
autorefresh: 300
sorting:
  - priority
  - date
groupBy: project
show:
  - due
  - labels
view:
  noTasksMessage: "Nothing due today."
```

```todoist
name: "Next three days"
filter: "next 4 days & !today & !overdue"
autorefresh: 900
sorting:
  - date
  - priority
show:
  - due
  - project
view:
  noTasksMessage: "Nothing scheduled in the next three days."
```

## Projects

```dataviewjs
// One list: each active project's next_action with its quiet flag, gated projects after.
// Merges the former "Next by project" and "Project pulse" (2026-10-05). Same rules:
// cadence: untracked is never flagged; gated_until suppresses flags until the gate date,
// then the quiet clock starts from it; activity = latest mtime of the note and its `related` notes.
const compact = (s) => {
  s = String(s ?? "").trim();
  const abbrev = /(?:\b(?:Dr|Mr|Mrs|Ms|St|vs|No|e\.g|i\.e|approx))$/;
  const re = /[.!?](\*{0,2})(?=\s|$)/g;
  let m, cut = s.length;
  while ((m = re.exec(s)) !== null) {
    if (m.index < 25 || abbrev.test(s.slice(0, m.index))) continue;
    cut = m.index + 1 + m[1].length;
    break;
  }
  if (cut > 200) cut = s.lastIndexOf(" ", 200);
  let out = s.slice(0, cut).replace(/[\s,;:—·]+$/, "");
  if (((out.match(/\*\*/g) || []).length) % 2) out += "**";
  if (((out.match(/`/g) || []).length) % 2) out += "`";
  return out + (cut < s.length ? " …" : "");
};

const todayD = dv.date("today");
const nowMs = dv.date("now").valueOf();
const all = dv.pages('"Projects"').where(p => !p.file.name.startsWith("_"));
const active = all.where(p => p.status === "active");
const waiting = all.where(p => p.status === "waiting" || p.status === "blocked").length;

const rows = [], gated = [];
let untracked = 0;
for (const p of active) {
  if (p.cadence === "untracked") { untracked++; continue; }
  const gate = p.gated_until ? dv.date(p.gated_until) : null;
  if (gate && gate.valueOf() >= todayD.valueOf()) { gated.push({ p, gate }); continue; }
  const mt = [p.file.mtime];
  if (gate) mt.push(gate);
  if (p.related) {
    for (const r of (Array.isArray(p.related) ? p.related : [p.related])) {
      const name = (r && r.path) ? r.path : String(r).replace(/\[\[|\]\]/g, "").split("|")[0];
      const rp = dv.page(name);
      if (rp && rp.file) mt.push(rp.file.mtime);
    }
  }
  const last = mt.reduce((a, b) => (a.valueOf() > b.valueOf() ? a : b));
  const days = Math.floor((nowMs - last.valueOf()) / 86400000);
  rows.push({ p, days, flag: days >= 7 ? "🔴" : days >= 4 ? "🟡" : "🟢" });
}

const quiet = rows.filter(r => r.days >= 4).sort((a, b) => b.days - a.days);
const moving = rows.filter(r => r.days < 4).sort((a, b) => a.p.file.name.localeCompare(b.p.file.name));
const next = (p) => compact(p.next_action) || "*no next action*";

dv.paragraph(`🟢 ${moving.length} moving · 🟡/🔴 ${quiet.length} quiet · 🚦 ${gated.length} gated · ⏳ ${waiting} waiting · ⏸️ ${untracked} untracked`);
const lines = [
  ...quiet.map(r => `- ${r.flag} ${r.p.file.link} · ${r.days}d quiet · ${next(r.p)}`),
  ...moving.map(r => `- ${r.flag} ${r.p.file.link} · ${next(r.p)}`),
  ...gated.sort((a, b) => a.gate.valueOf() - b.gate.valueOf())
    .map(({ p, gate }) => `- 🚦 ${p.file.link} · until ${gate.toFormat("ccc MMM d")}${p.gate ? " · " + compact(p.gate) : ""}`),
];
dv.paragraph(lines.length ? lines.join("\n") : "*No active projects.*");
dv.paragraph("<small>File activity only. Home MOC's per-project exceptions (e.g. Insulin reviewed weekly with no task) still apply; the full check is in [[Projects/_Projects Dashboard|Projects Dashboard]].</small>");
```

## Overdue

```todoist
name: "Overdue, oldest first"
filter: "overdue"
autorefresh: 900
sorting:
  - date
show:
  - due
  - project
  - labels
view:
  noTasksMessage: "Nothing overdue."
```

## Forecasts

```dataviewjs
// Weather: "## Forecasts" section of Logbook/Today Brief.md (local and Snowshoe), written each morning by Claude.
// The stale-brief warning lives in "Schedule and brief" above.
const brief = dv.page("Logbook/Today Brief");
if (brief) {
  const text = (await dv.io.load(brief.file.path)).replace(/^---\n[\s\S]*?\n---\n/, "");
  const m = text.match(/^## Forecasts[ \t]*\n([\s\S]*?)(?=^## |(?![\s\S]))/m);
  if (m && m[1].trim()) dv.el("div", m[1].trim(), { cls: "today-brief" });
}
```

```dataviewjs
// Fishing, compact: flow and today in the open, everything else folded.
// Fishing/South River Forecast.md is rewritten each morning (~5:50am) by a scheduled Claude task from the NOAA gauges
// (WAYV2 primary), AccuWeather Waynesboro and the current Mossy Creek note. It is the South River that runs
// Greenville -> Waynesboro -> Port Republic, never the Vesuvius/Maury South River.
// Fishing/Forecasts/<Monday>.md is written Monday evening (Tuesday 6am retry) from the Mossy Creek weekly post.
// Day sections there are "## Monday" ... "## Sunday", plus "## Weekend".
const today = dv.date("today");
const iso = today.toFormat("yyyy-MM-dd");
const monday = today.minus({ days: today.weekday - 1 }).toFormat("yyyy-MM-dd");
const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const tomorrow = today.plus({ days: 1 });
const sat = today.plus({ days: 6 - today.weekday }).toFormat("LLL d");
const sun = today.plus({ days: 7 - today.weekday }).toFormat("LLL d");
// On Saturday and Sunday, Today/Tomorrow already cover this weekend, so the South River note's Weekend is next weekend.
const nOff = today.weekday >= 6 ? 7 : 0;
const nSat = today.plus({ days: 6 - today.weekday + nOff }).toFormat("LLL d");
const nSun = today.plus({ days: 7 - today.weekday + nOff }).toFormat("LLL d");

const section = (text, heading) => {
  const re = new RegExp(`^## ${heading}[ \\t]*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, "m");
  const m = text.match(re);
  return m ? m[1].trim() : "";
};
const NA = "*Not covered.*";
const fold = (title, parts) =>
  `> [!abstract]- ${title}\n` + parts.map(([h, b]) => `**${h}.** ${b || NA}`).join("\n\n").split("\n").map(l => `> ${l}`).join("\n");

// Mossy Creek weekly note
const notes = dv.pages('"Fishing/Forecasts"')
  .where(p => p.type === "fishing-forecast" && /^\d{4}-\d{2}-\d{2}$/.test(p.file.name) && p.file.name <= iso)
  .sort(p => p.file.name, "desc");
const mc = notes.length && notes[0].file.name === monday ? notes[0] : null;
const mcText = mc ? await dv.io.load(mc.file.path) : "";
const mcDay = (d) => section(mcText, dayNames[d.weekday - 1]);

// South River daily note
const sr = dv.page("Fishing/South River Forecast");
const srDate = sr && sr.forecast_date ? dv.date(sr.forecast_date).toFormat("yyyy-MM-dd") : null;
const srText = sr ? (await dv.io.load(sr.file.path)).replace(/^---\n[\s\S]*?\n---\n/, "") : "";
const fresh = sr && srDate === iso;

const flow = fresh && sr.flow_cfs != null ? ` · ${sr.flow_cfs} cfs at Waynesboro` : "";
const out = [`**Fishing, South River**${flow}`];

if (fresh) {
  out.push(section(srText, "Today") || NA);
  const parts = [
    ["Now", section(srText, "Now")],
    [`Tomorrow · ${tomorrow.toFormat("ccc LLL d")}`, section(srText, "Tomorrow")],
    [`${nOff ? "Next weekend" : "Weekend"} · ${nSat} to ${nSun}`, section(srText, "Weekend")],
  ];
  if (mc) parts.push([`Mossy Creek · ${today.toFormat("cccc")}`, mcDay(today)]);
  out.push(fold("Now, tomorrow, weekend" + (mc ? ", Mossy Creek" : ""), parts));
} else {
  out.push(`<small>⚠️ ${sr ? `South River forecast is from ${srDate ?? "an unknown date"}` : "No South River forecast yet"}. Ask Command Center to *refresh the South River forecast*.</small>`);
  if (mc) {
    out.push(`**Mossy Creek today.** ${mcDay(today) || NA}`);
    out.push(fold("Mossy Creek tomorrow and weekend", [
      [`Tomorrow · ${tomorrow.toFormat("ccc LLL d")}`, today.weekday === 7 ? "Next week's forecast posts Monday." : mcDay(tomorrow)],
      [`Weekend · ${sat} to ${sun}`, section(mcText, "Weekend")],
    ]));
  }
}
if (!mc) {
  const last = notes.length ? notes[0] : null;
  out.push(`<small>This week's Mossy Creek post isn't in yet (checked Monday evening, retried Tuesday 6am).${last ? ` Last: [[${last.file.path}|week of ${last.file.name}]].` : ""}</small>`);
}
dv.paragraph(out.join("\n\n"));

const links = [];
if (sr) links.push(`[[Fishing/South River Forecast|South River note]]`);
links.push(`[Gauge](https://water.noaa.gov/gauges/WAYV2)`);
if (mc) links.push(`[[${mc.file.path}|Mossy Creek forecast]]`);
if (mc && mc.source) links.push(`[Blog post](${mc.source})`);
if (mc && mc.video) links.push(`[Video](${mc.video})`);
dv.paragraph(`<small>${links.join(" · ")}</small>`);
```

## For Claude

Open requests in [[Logbook/For Claude]], picked up by the next morning brief. Add one with **Ask Claude** in the capture bar.

```dataview
TASK
FROM "Logbook/For Claude"
WHERE !completed
```
