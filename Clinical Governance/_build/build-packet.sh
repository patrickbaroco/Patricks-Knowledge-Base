#!/bin/sh
# Rebuild the Jen packet. Run from this folder; the vault markdown is never edited.
set -e
S="$(cd "$(dirname "$0")/.." && pwd)"
D="$HOME/Library/Mobile Documents/com~apple~CloudDocs/To Share/Clinical Governance"
mkdir -p packet
python3 packet-filter.py "$S/Packet/packet-start-here.md"            packet/00.md
python3 packet-filter.py "$S/Packet/governance-framework-overview.md" packet/01.md --no-standfirst \
  --retitle "What is not yet settled=>Health, impairment and fitness" \
  --drop-first-para "What is not yet settled"
python3 packet-filter.py "$S/Packet/audit-program-explainer.md"       packet/05.md --no-standfirst
python3 packet-filter.py "$S/cqc-member-guide.md"              packet/06.md --drop "What is not settled yet"
python3 packet-filter.py "$S/prc-member-guide.md"              packet/07.md --drop "What is not settled yet"
node md2docx.js packet/00.md "$D/00 - Start Here.docx"                                4F6469 E8EDEE "Clinical Governance — what is in this packet"
node md2docx.js packet/01.md "$D/01 - Framework Overview.docx"                        4F6469 E8EDEE "Clinical Governance Framework — Overview"
node md2docx.js packet/05.md "$D/05 - How a Quality Audit Would Work.docx"            0E6F6B E3EFEE "How a Quality Audit Would Work"
node md2docx.js packet/06.md "$D/06 - Clinical Quality Committee — Member Guide.docx" 0E6F6B E3EFEE "Clinical Quality Committee — a guide for members"
node md2docx.js packet/07.md "$D/07 - Peer Review Committee — Member Guide.docx"      8A4257 F3E7EA "Peer Review Committee — a guide for members"
