# dharwism — ragas & ghazals

A static site built with [Eleventy](https://www.11ty.dev/), deployable to Cloudflare Pages.

## Run locally
```
npm install
npm run dev        # live preview at http://localhost:8080
npm run build      # outputs the finished site to _site/
```

## Add a ghazal
Edit `src/_data/ghazals.json` — add an object with:
- `title`, `poet`, `slug` (url-safe, e.g. "ranjish-hi-sahi")
- `stanzas`: array of stanzas, each an array of lines
- `glossary`: array of `{ "term": "...", "meaning": "..." }`
- `raga` + `ragaSlug`: optional; links the ghazal to a raga page (leave "" if none)
- `youtube`: optional YouTube video id (the part after `?v=`), e.g. "abc123". Embeds a player.

A new page builds itself at `/ghazals/<slug>/`. No template editing needed.

## Add a raga
Edit `src/_data/ragas.json` — add an object with `name`, `slug`, `thaat`,
`samay`, `samayStart` (0–23, hour the raga begins, used to draw the time-dial),
`aroha`, `avaroha`, `vadi`, `samvadi`, `pakad`, `mood`, `notes`.
Page builds at `/ragas/<slug>/`. Any ghazal whose `ragaSlug` matches is listed automatically.

## Deploy to Cloudflare Pages (Git path)
Push this folder to GitHub (the `.gitignore` keeps `node_modules/` and `_site/` out),
connect the repo in Cloudflare Pages, and set:
- Build command: `npx @11ty/eleventy`
- Build output directory: `_site`
- Framework preset: Eleventy

Every `git push` then rebuilds and publishes automatically.

## Design notes
- Display: Fraunces · Body: Spectral · Utility: Inter (all Google Fonts)
- Palette is a twilight-manuscript theme (ragas live in time-of-day)
- Ghazal pages carry four shimmering "tanpura strings" down the verse margin
- Raga pages carry a "prahar dial" showing the hour the raga is sung
- All colors are CSS variables at the top of `src/assets/styles.css`
