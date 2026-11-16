#!/bin/sh
# PDF export (seat map, How a Review Unfolds) is a separate step: _build/export-pdfs.js, run in the cloud workspace with @fontsource fonts; see its header.
# Rucci packet, 2026-09-29: both charters (operative text only) + CEO-path B1/B2 + seat map + How a Review Unfolds.
# Open items back matter is cut at build time; the vault charters are never edited.
# md2docx-charters.js = md2docx.js plus nested bullets and blank-line list continuations (the charters need both).
set -e
S="$(cd "$(dirname "$0")/.." && pwd)"; B="$S/_build"; T="${TMPDIR:-/tmp}"
D="${D:-$HOME/Library/Mobile Documents/com~apple~CloudDocs/To Share/Clinical Governance/For Dr. Rucci — 2026-09-29}"
TS="$(dirname "$D")"; mkdir -p "$D"
for c in cqc prc; do python3 - "$S/$c-charter-draft.md" "$T/$c.md" <<'PY'
import sys,re
t=open(sys.argv[1]).read(); body=t[:t.index('\n# Open items in this draft')].rstrip()
body=re.sub(r'\n---\s*$','',body).rstrip()+'\n'
body=body.replace('*Bracketed values are drafting defaults; see "Open items in this draft" at the end.*','*Bracketed values are drafting defaults.*')
assert 'Open items' not in body; open(sys.argv[2],'w').write(body)
PY
done
node "$B/md2docx-charters.js" "$T/cqc.md" "$D/1 - Clinical Quality Committee Charter.docx" 0E6F6B E3EFEE "Clinical Quality Committee — Charter"
node "$B/md2docx-charters.js" "$T/prc.md" "$D/2 - Peer Review Committee Charter.docx"      8A4257 F3E7EA "Peer Review Committee — Charter"
cp "$TS/Two Paths/B1 - How It Works (CEO Path).docx" "$D/3 - How It Works (CEO Path).docx"
cp "$TS/Two Paths/B2 - CEO Authorization.docx"       "$D/4 - CEO Authorization.docx"
cp "$S/Packet/Clinical Governance 1 - Seat Map.pdf"                  "$D/5 - Seat Map.pdf"
cp "$S/Packet/Clinical Governance 2 - How a Review Unfolds.pdf" "$D/6 - How a Review Unfolds.pdf"
cp "$S/Packet/Clinical Governance 4 - Review Flow.pdf"        "$D/7 - Review Flow (one page).pdf"
cp "$S/Packet/Clinical Governance 4 - Review Flow.png"        "$D/7 - Review Flow (one page).png"
