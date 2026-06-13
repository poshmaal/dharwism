# Adding "Notes & Background" to a ghazal

Each ghazal page can have an optional **Notes & Background** section at the bottom —
a place for evolving commentary, background, recording notes, etc.

## How to add or edit notes

1. Find the ghazal's **slug** (its URL: `/ghazals/<slug>/`, e.g. `ranjish-hi-sahi`).
2. Create or edit the file `src/ghazals/notes/<slug>.md`.
   - To add notes to "Aaj Jaane Ki Zid Na Karo": create `src/ghazals/notes/aaj-jaane-ki-zid-na-karo.md`
3. Write in **Markdown** — plain paragraphs, with optional formatting:
   - `**bold**`, `*italic*`
   - `### A sub-heading`
   - `[link text](https://example.com)`
   - `> a blockquote`
   - `- bullet lists`
4. Save, preview with `npm run dev`, then commit and push.

## Behaviour

- If a notes file exists for a ghazal, the section appears automatically.
- If there's no file (or it's empty), no section shows — no empty headings.
- The **"Last updated"** date is taken automatically from the file's
  last-modified date, so every time you edit and push, it refreshes.
- Notes files are NOT turned into their own pages — they only appear
  inside the matching ghazal page.

## Tip

Good things to put here over time: the poet and when/why the ghazal was written,
the story behind a famous recording, comparisons between renditions, a subtle
point about a couplet that the glossary can't capture. Adding to these
periodically keeps each page fresh — good for readers and for search ranking.
