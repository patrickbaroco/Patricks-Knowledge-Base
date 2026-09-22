#!/usr/bin/env python3
"""Derive a packet copy of a source document.

The vault markdown is the source of truth and is never edited. This strips the
things that should not circulate in a packet — the draft standfirst, the
open-items sections — so a rebuild always starts from the live source.

  packet-filter.py in.md out.md \
      --no-standfirst \
      --drop "What is not settled yet" \
      --retitle "Old heading=>New heading" \
      --drop-first-para "Some heading"
"""
import argparse
import re
import sys

HEADING = re.compile(r'^(#{1,4})\s+(.*)$')


def split_sections(lines):
    """[(heading_line_or_None, level, [body lines]), ...] — preamble first."""
    out, cur = [], (None, 0, [])
    for ln in lines:
        m = HEADING.match(ln.strip())
        if m and len(m.group(1)) <= 2:
            out.append(cur)
            cur = (ln, len(m.group(1)), [])
        else:
            cur[2].append(ln)
    out.append(cur)
    return out


def heading_text(line):
    m = HEADING.match(line.strip())
    return m.group(2).strip() if m else ''


def trim(lines):
    """Drop leading/trailing blank lines and a trailing rule."""
    while lines and lines[0].strip() == '':
        lines.pop(0)
    while lines and (lines[-1].strip() == '' or lines[-1].strip() == '---'):
        lines.pop()
    return lines


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src')
    ap.add_argument('out')
    ap.add_argument('--no-standfirst', action='store_true')
    ap.add_argument('--drop', action='append', default=[])
    ap.add_argument('--retitle', action='append', default=[])
    ap.add_argument('--drop-first-para', action='append', default=[])
    a = ap.parse_args()

    text = open(a.src, encoding='utf-8').read().replace('\r', '')
    sections = split_sections(text.split('\n'))
    renames = dict(r.split('=>', 1) for r in a.retitle)

    missing = set(a.drop) | set(renames) | set(a.drop_first_para)
    kept = []
    standfirst_done = False
    for head, level, body in sections:
        title = heading_text(head) if head else None
        missing.discard(title)

        if title in a.drop:
            # take the rule that separated this section with it
            while kept and kept[-1].strip() in ('', '---'):
                kept.pop()
            kept.append('')
            continue

        if a.no_standfirst and not standfirst_done and any(l.strip() for l in body):
            # the standfirst is the first wholly italic paragraph of the document,
            # which sits in the body of the title heading rather than a preamble
            standfirst_done = True
            body = list(body)
            for i, ln in enumerate(body):
                s = ln.strip()
                if s and re.fullmatch(r'\*[^*].*\*', s):
                    del body[i]
                    while i < len(body) and body[i].strip() == '':
                        del body[i]
                    break
                if s and not s.startswith('#'):
                    break

        if title in a.drop_first_para:
            body = trim(list(body))
            i = 0
            while i < len(body) and body[i].strip() == '':
                i += 1
            while i < len(body) and body[i].strip() != '':
                i += 1
            body = body[i:]

        if title in renames:
            head = '#' * level + ' ' + renames[title]

        if head is not None:
            kept.append(head)
        kept.extend(body)

    if missing:
        sys.exit('packet-filter: heading(s) not found: ' + ', '.join(sorted(missing)))

    result = re.sub(r'\n{3,}', '\n\n', '\n'.join(kept)).strip() + '\n'
    open(a.out, 'w', encoding='utf-8').write(result)
    print('filtered ->', a.out)


if __name__ == '__main__':
    main()
