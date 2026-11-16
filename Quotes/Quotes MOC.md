---
type: moc
tags:
  - moc
  - quote
---
# Quotes MOC

One note per quotation, built from the [[Commonplace Book]] (Evernote, 2009–2022) and quotes captured since. New quotes go in this folder with the same frontmatter: `type: quote`, `author`, `source`, `captured`, `tags` (always `quote`, plus one or two themes). Add `revisit: YYYY-MM-DD` to a quote that should resurface on a date.

**Themes** come from a closed list: courage, curiosity, freedom, history, humility, humor, inspirational, justice, language, leadership, medicine, mortality, power, reasoning, relationships, work. Two functional tags sit alongside them: `term` marks a phrase rather than a full quotation, and `turning-50` feeds [[Turning 50]].

**Sources** are written to be citable: work and year, or the book note as a link (`source: "[[Mortality]] (2012)"`). An `attribution` field records doubts or corrections, and `verified: false` marks a quote whose origin could not be confirmed. A quote with an empty source or `verified: false` stays off the page until it is checked.

[[_Quotes.base]] gives the same notes as views: All Quotes, By Theme, Terms, Unverified and Coming Due.

## Coming due

```dataview
TABLE author, revisit
FROM "Quotes"
WHERE type = "quote" AND revisit
SORT revisit ASC
```

## All quotes

```dataview
TABLE author, source, captured, file.etags AS themes
FROM "Quotes"
WHERE type = "quote"
SORT author ASC
```
