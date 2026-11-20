# Nandu Kumar — Portfolio website

Plain HTML/CSS/JS, no build step. Hosted free on GitHub Pages: https://kumarnandu09-coder.github.io

## Files
- `index.html` — home page content
- `styles.css` — colours, fonts, layout (design tokens at the top)
- `script.js` — mobile menu, testimonial arrows, scroll fade-in
- `assets/` — resume, avatars, icons, About animation, favicon, social preview image
- `work/` — case study pages (added later, one folder per project, e.g. `work/wallet/index.html`)
- `.nojekyll` — tells GitHub Pages to serve files as they are (keep it)

## Go live (one time)
1. Create a public repository named `kumarnandu09-coder.github.io`.
2. **Add file → Upload files** → drag in everything inside this folder → Commit.
3. **Settings → Pages** → Source: Deploy from a branch → Branch `main`, folder `/ (root)` → Save.
4. Live in 1–2 minutes at https://kumarnandu09-coder.github.io

## Updating
- Text: open the file on github.com → pencil icon → edit → Commit. Live in about a minute.
- Images/files: **Add file → Upload files** into the right folder.
- Bigger changes: ask Claude to make them, then upload the changed files (or use Claude Code to push).

## Custom domain (optional, ~₹800–1,200/year)
Buy a domain, then **Settings → Pages → Custom domain** and follow GitHub's DNS steps.
If you do, update the og/canonical URLs at the top of `index.html`.
