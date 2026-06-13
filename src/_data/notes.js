// Loads optional per-ghazal "Notes & Background" markdown files.
// Each file in src/ghazals/notes/<slug>.md becomes notes[<slug>] = { html, updated }.
// Templates look up notes by the ghazal's slug; if absent, no section renders.

const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

const md = markdownIt({ html: false, linkify: true, typographer: true });

module.exports = function () {
  const dir = path.join(__dirname, "..", "ghazals", "notes");
  const out = {};

  let files = [];
  try {
    files = fs.readdirSync(dir).filter(
      (f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md"
    );
  } catch (e) {
    return out; // notes folder may not exist yet — that's fine
  }

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const full = path.join(dir, file);
    const raw = fs.readFileSync(full, "utf8").trim();
    if (!raw) continue; // skip empty files

    const stat = fs.statSync(full);
    out[slug] = {
      html: md.render(raw),
      // last-modified date of the file, formatted e.g. "June 2026"
      updated: stat.mtime.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      }),
    };
  }

  return out;
};
