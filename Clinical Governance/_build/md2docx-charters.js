// Clinical Governance — markdown to Word, in the project's design system
// (Spectral/Public Sans unavailable offline; Georgia/Calibri stand in.)
const fs = require('fs');
const path = require('path');
const D = require('docx');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  Footer, PageNumber, LevelFormat, convertInchesToTwip
} = D;

const INK = '131F1E', MUTED = '5B6E6C', LINE = 'D3DDDB', LINE2 = 'BCC9C7';
const SERIF = 'Georgia', SANS = 'Calibri';

// ---------- inline markdown -> TextRuns ----------
function runs(text, base = {}) {
  const out = [];
  // split on **bold** and *italic*
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ ...base, text: text.slice(last, m.index) }));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(new TextRun({ ...base, text: tok.slice(2, -2), bold: true }));
    else out.push(new TextRun({ ...base, text: tok.slice(1, -1), italics: true }));
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({ ...base, text: text.slice(last) }));
  return out.length ? out : [new TextRun({ ...base, text: '' })];
}

const bodyBase = { font: SANS, size: 21, color: INK }; // 10.5pt

// ---------- block parsing ----------
function parse(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();

    if (line === '') { i++; continue; }

    if (line === '---' || line === '***') { blocks.push({ t: 'hr' }); i++; continue; }

    let h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) { blocks.push({ t: 'h', level: h[1].length, text: h[2].trim() }); i++; continue; }

    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(lines[i].trim()); i++; }
      // a separator row must actually contain a dash — `| | |` is an empty
      // header row, not a separator, and mistaking it promotes the first real
      // row to a repeating header
      const isSep = r => /^\|[\s:|-]*-[\s:|-]*\|$/.test(r);
      const sepAt = rows.findIndex(isSep);
      const split = r => r.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
      let head = sepAt >= 0 ? rows.slice(0, sepAt).map(split) : [];
      const body = (sepAt >= 0 ? rows.slice(sepAt + 1) : rows).map(split);
      // an all-empty header row is a layout device; drop it
      head = head.filter(r => r.some(c => c !== ''));
      blocks.push({ t: 'table', cells: [...head, ...body], hasHeader: head.length > 0 });
      continue;
    }

    let li = /^([-*])\s+(.*)$/.exec(line);
    if (li) {
      const items = [];
      while (i < lines.length) {
        const l = lines[i];
        const m2 = /^([-*])\s+(.*)$/.exec(l.trim());
        if (m2 && !l.startsWith('  ')) { items.push({ text: m2[2].trim(), cont: [] }); i++; }
        else if (l.startsWith('  ') && l.trim() !== '' && items.length) { items[items.length - 1].cont.push(l.trim()); i++; }
        else if (l.trim() === '' && i + 1 < lines.length && (/^\s*[-*]\s+/.test(lines[i + 1]) || (items.length && lines[i + 1].startsWith('  ') && lines[i + 1].trim() !== ''))) { i++; }
        else break;
      }
      if (!items.length) { blocks.push({ t: 'ul', items: [{ text: li[2].trim(), cont: [] }] }); i++; continue; }
      blocks.push({ t: 'ul', items });
      continue;
    }

    let ol = /^(\d+)\.\s+(.*)$/.exec(line);
    if (ol) {
      const items = [];
      while (i < lines.length) {
        const l = lines[i];
        const m2 = /^(\d+)\.\s+(.*)$/.exec(l.trim());
        if (m2 && !l.startsWith('  ')) { items.push({ text: m2[2].trim(), cont: [] }); i++; }
        else if (l.startsWith('  ') && l.trim() !== '' && items.length) { items[items.length - 1].cont.push(l.trim()); i++; }
        else if (l.trim() === '' && i + 1 < lines.length && (/^\s*\d+\.\s+/.test(lines[i + 1]) || (items.length && lines[i + 1].startsWith('  ') && lines[i + 1].trim() !== ''))) { i++; }
        else break;
      }
      blocks.push({ t: 'ol', items });
      continue;
    }

    // paragraph (may be an indented continuation of a list item)
    const indented = raw.startsWith('  ');
    const buf = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== '' && !/^(#{1,4}\s|\||\s*[-*]\s|\s*\d+\.\s)/.test(lines[i].trim()) && lines[i].trim() !== '---') {
      buf.push(lines[i].trim()); i++;
    }
    blocks.push({ t: 'p', text: buf.join(' '), indented });
  }
  return blocks;
}

// ---------- rendering ----------
function build(blocks, opts) {
  const ACCENT = opts.accent, WASH = opts.wash;
  const children = [];
  let seenTitle = false, subtitleDone = false;

  const hr = () => new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: LINE, space: 1 } },
    children: [new TextRun({ text: '', size: 2 })],
  });

  for (const b of blocks) {
    if (b.t === 'h' && b.level === 1 && !seenTitle) {
      seenTitle = true;
      children.push(new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: b.text, font: SERIF, size: 46, bold: true, color: ACCENT })],
      }));
      continue;
    }
    if (b.t === 'h') {
      const lvl = b.level;
      if (lvl === 2) {
        children.push(new Paragraph({
          spacing: { before: 360, after: 120 }, keepNext: true,
          children: [new TextRun({ text: b.text, font: SERIF, size: 28, bold: true, color: ACCENT })],
        }));
      } else {
        children.push(new Paragraph({
          spacing: { before: 260, after: 90 }, keepNext: true,
          children: [new TextRun({ text: b.text, font: SANS, size: 23, bold: true, color: INK })],
        }));
      }
      continue;
    }

    if (b.t === 'hr') { children.push(hr()); continue; }

    if (b.t === 'p') {
      // the opening italic line is the document's standfirst
      if (seenTitle && !subtitleDone && /^\*[^*].*\*$/.test(b.text)) {
        subtitleDone = true;
        children.push(new Paragraph({
          spacing: { after: 200 },
          children: runs(b.text.slice(1, -1), { font: SANS, size: 20, italics: true, color: MUTED }),
        }));
        continue;
      }
      subtitleDone = true;
      children.push(new Paragraph({
        spacing: { after: 160, line: 276 },
        indent: b.indented ? { left: convertInchesToTwip(0.3) } : undefined,
        children: runs(b.text, bodyBase),
      }));
      continue;
    }

    if (b.t === 'ul' || b.t === 'ol') {
      b.items.forEach(it => {
        children.push(new Paragraph({
          spacing: { after: 110, line: 276 },
          ...(b.t === 'ul'
            ? { bullet: { level: 0 } }
            : { numbering: { reference: 'steps', level: 0 } }),
          children: runs(it.text, bodyBase),
        }));
        it.cont.forEach(c => { const sub = /^[-*]\s+(.*)$/.exec(c); children.push(sub
          ? new Paragraph({ spacing: { after: 90, line: 276 }, bullet: { level: 1 }, children: runs(sub[1], bodyBase) })
          : new Paragraph({
          spacing: { after: 120, line: 276 },
          indent: { left: convertInchesToTwip(0.55) },
          children: runs(c, bodyBase),
        })); });
      });
      continue;
    }

    if (b.t === 'table') {
      const cols = Math.max(...b.cells.map(r => r.length));
      const total = 9360; // 6.5in in DXA
      // size columns by the text they carry, so a prose column is not squeezed
      // to the width of a column holding "—"
      const plain = s => (s || '').replace(/\*/g, '');
      const weight = Array.from({ length: cols }, (_, ci) => {
        const lens = b.cells.map(r => plain(r[ci]).length);
        const mean = lens.reduce((a, c) => a + c, 0) / lens.length;
        const max = Math.max(...lens);
        return Math.max(4, Math.min(mean * 0.6 + max * 0.4, 90));
      });
      const sum = weight.reduce((a, c) => a + c, 0);
      // a column must at least fit its longest unbreakable word, or Word
      // hyphen-less-ly snaps it ("Coordina / tor")
      const longestWord = ci => Math.max(0, ...b.cells.map(r =>
        Math.max(0, ...plain(r[ci]).split(/[\s—–/]+/).map(w => w.length))));
      const mins = Array.from({ length: cols }, (_, ci) =>
        Math.min(2600, Math.max(520, longestWord(ci) * 135 + 260)));
      let widths = weight.map((w, ci) => Math.max(mins[ci], Math.floor((w / sum) * total)));
      // renormalise after the minimum-width floor
      const over = widths.reduce((a, c) => a + c, 0) - total;
      if (over > 0) {
        const slack = widths.map((w, ci) => w - mins[ci]);
        const slackSum = slack.reduce((a, c) => a + c, 0) || 1;
        widths = widths.map((w, ci) => w - Math.floor((slack[ci] / slackSum) * over));
      }
      widths[widths.length - 1] += total - widths.reduce((a, c) => a + c, 0);

      const border = { style: BorderStyle.SINGLE, size: 2, color: LINE };
      const rows = b.cells.map((r, ri) => new TableRow({
        tableHeader: ri === 0 && b.hasHeader,
        cantSplit: true,
        children: Array.from({ length: cols }, (_, ci) => {
          const txt = r[ci] || '';
          const isHead = ri === 0 && b.hasHeader;
          return new TableCell({
            width: { size: widths[ci], type: WidthType.DXA },
            shading: isHead ? { type: ShadingType.CLEAR, fill: WASH, color: 'auto' } : undefined,
            margins: { top: 90, bottom: 90, left: 120, right: 120 },
            children: [new Paragraph({
              spacing: { after: 0, line: 264 },
              children: runs(txt, { ...bodyBase, size: 20, bold: isHead || undefined }),
            })],
          });
        }),
      }));

      children.push(new Table({
        columnWidths: widths,
        width: { size: total, type: WidthType.DXA },
        borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
        rows,
      }));
      children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: '', size: 2 })] }));
      continue;
    }
  }

  return new Document({
    numbering: {
      config: [{
        reference: 'steps',
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.25) } } },
        }],
      }],
    },
    styles: { default: { document: { run: { font: SANS, size: 21, color: INK } } } },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: convertInchesToTwip(0.9), bottom: convertInchesToTwip(0.9), left: convertInchesToTwip(1), right: convertInchesToTwip(1) },
        },
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            tabStops: [{ type: D.TabStopType.RIGHT, position: 9360 }],
            border: { top: { style: BorderStyle.SINGLE, size: 2, color: LINE, space: 6 } },
            children: [
              new TextRun({ text: opts.footer, font: SANS, size: 16, color: MUTED }),
              new TextRun({ text: '\t', font: SANS, size: 16 }),
              new TextRun({ children: [PageNumber.CURRENT], font: SANS, size: 16, color: MUTED }),
            ],
          })],
        }),
      },
      children,
    }],
  });
}

// ---------- main ----------
const [, , src, out, accent, wash, footer] = process.argv;
const md = fs.readFileSync(src, 'utf8');
const doc = build(parse(md), { accent, wash, footer });
Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(out, buf);
  console.log('wrote', path.basename(out), buf.length, 'bytes');
});
