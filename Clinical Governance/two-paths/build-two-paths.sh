#!/bin/sh
# Build the CEO-path documents (B1, B2) into To Share. Path A archived 2026-09-28. Run from this folder.
set -e
B="$(cd "$(dirname "$0")/../_build" && pwd)"
D="${D:-$HOME/Library/Mobile Documents/com~apple~CloudDocs/To Share/Clinical Governance/Two Paths}"
mkdir -p "$D"
node "$B/md2docx.js" B1-how-it-works-ceo.md      "$D/B1 - How It Works (CEO Path).docx"      4F6469 E8EDEE "Clinical Governance at Eventus: How It Works (Path B)"
node "$B/md2docx.js" B2-ceo-authorization.md     "$D/B2 - CEO Authorization.docx"            4F6469 E8EDEE "Authorization of the Clinical Quality Committee and the Peer Review Committee"
