---
type: convention
about: How book notes in Books/ are named and structured, what each property means, how Claude adds a book on request, and how reading is tracked now that the vault replaces Goodreads.
related:
  - "[[_Bases Board Convention]]"
last_touched: 2026-10-31
---

# Book Notes Convention

One book is one note in `Books/`, named for the book's main title without subtitle or series. When that name collides with a note elsewhere in the vault, the book note takes a `(book)` suffix: *Project Hail Mary (book)*, because the film already lives in `Movies/`. Two books with the same title take the author's surname, as with *Snow (Pamuk)* and *Snow (Banville)*. `_Books.base` reads every note in the folder, so nothing else belongs there except the base itself.

## Properties

| Property | Contents |
|---|---|
| `title` | Full title with subtitle; series removed |
| `author` | First Last, plain text |
| `series`, `series_number` | Only when the book belongs to a series |
| `year` | Original publication year, not the edition's |
| `pages` | Page count of the edition Goodreads lists |
| `category` | `fiction` or `nonfiction` |
| `genre` | Up to three Goodreads genres, lowercase, skipping catch-alls (fiction, nonfiction, novels, literature, audiobook, book club, adult) |
| `kindle_collections` | The book's Kindle Collections, as a list of their exact names; only on books owned on Kindle |
| `status` | `want to read`, `currently reading`, or `read` |
| `my_rating` | 1 to 5; blank until rated |
| `date_started`, `date_finished`, `date_added` | ISO dates |
| `goodreads_rating` | Goodreads community average |
| `cover` | Goodreads cover image URL; feeds the Shelf view |
| `goodreads` | Link to the book's Goodreads page |

The `status` vocabulary is closed. A typo creates a new column on the Board view, the same failure the [[_Bases Board Convention]] describes for projects. A blank template is at `_Templates/Book Note Template.md`.

## The vault is the record

As of 2026-10-25 this folder replaces Goodreads. Patrick no longer keeps shelves there, nothing is re-imported, and Goodreads serves only as a public source of book data. When it cannot be reached, Claude fills the same properties from other published sources and leaves `goodreads_rating` and `goodreads` blank.

## Adding a book

When Patrick names a book, Claude looks it up on Goodreads and takes the main English edition rather than a study guide, box set or reissue with missing data. It fills every property and writes the note directly into `Books/`. The body follows the movie notes: one sentence of synopsis in Claude's own words, never publisher copy, and a credit line where one applies (a translator, for instance). `status` defaults to `want to read` and `date_added` to the day of the request unless Patrick says he has started or finished the book. If the book already has a note, Claude updates it instead of creating a second one.

## Tracking reading

Starting a book sets `status: currently reading` and `date_started`. Finishing one sets `status: read`, `date_finished`, and `my_rating` when Patrick gives one. Abandoning one moves it back to `want to read` unless he says to delete the note. Anything he says about a book in his own words goes in the body under `## My review`, verbatim, below the synopsis; Claude does not write reviews for him.

## Kindle

The household Kindle library is filed into Kindle Collections on Amazon, and [[Kindle Library]] at the vault root lists every Kindle book by Collection, linking to the note here where one exists. A note for a book owned on Kindle carries `kindle_collections`. When a Kindle book gets a note, Claude fills `kindle_collections` from Amazon; when Collections change on Amazon, both the index and the property are refreshed together.

## Quotes and terms

A line or phrase worth keeping from a book becomes its own note in `Quotes/`, following the [[Quotes MOC]]: `type: quote`, `author`, `captured`, and `tags` (always `quote`, plus one or two themes; `term` marks a phrase rather than a full quotation). For a book in this folder, `source` is a link to its note, such as `source: "[[The Glass Hotel]]"`, so the book note's backlinks gather its quotes. Patrick supplies the exact wording; Claude does not quote passages from copyrighted books into the vault on its own.

## History

The folder was built on 2026-10-24 from a Goodreads import of 359 books: 190 read, 166 currently reading, 3 want to read. Thirty-five cookbooks were deleted the same night; *American Tacos* stayed as food history. Goodreads' Currently Reading shelf had become a to-read pile over the years, and its 166 books carried over unchanged. The June 2018 bulk import left 107 read books without finish dates, and they group as undated in the Read view.
