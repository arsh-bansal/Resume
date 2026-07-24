# arshbansal.dev

Personal site. Next.js 14 (App Router), TypeScript, hand-written CSS.

```bash
npm install
npm run dev      # localhost:3000
npm run build
```

---

## Do these before you deploy

Search the repo for `TODO(arsh)` — that's the full list. The ones that matter:

1. **Add your CV** at `public/Arsh-Bansal-CV.pdf`. The résumé button currently 404s.
2. **Rewrite the blog posts.** All three in `data/posts.ts` are marked `draft: true` and are hidden in production for that reason. See the note at the top of that file — this is the single most important item.
3. **Replace `public/images/og-image.png`.** The one in here is from the old build and says "Full Stack Developer".
4. **Check the AWS SAA line** in `data/experience.ts`. It's listed as certified. If you haven't sat it, delete the line.
5. **Verify the date ranges** on the MOSAIC and DeepNeuron roles.

---

## Where things live

| Path | What |
|---|---|
| `app/site.css` | The whole design system — tokens, type scale, every component style |
| `data/site.ts` | Name, email, links, the regions plotted in the hero |
| `data/projects.ts` | Project list + detail page content |
| `data/experience.ts` | Roles, education, stack groups, certifications |
| `data/posts.ts` | Blog posts |
| `components/site/` | Masthead, Footer, RegionPlot, ThemeToggle |

There's no CMS. Editing a post means editing `data/posts.ts` — fine at this volume, and one fewer thing to keep running.

## Adding a post

Append to the `posts` array. Set `draft: true` while you're working on it; drafts render in `npm run dev` and are filtered out of the production build. Body blocks are `p`, `h2`, `h3`, `ul`, `code`, `quote`.

## Design notes

Direction is "field survey" — the work is multi-region infrastructure, so the page borrows survey-drawing vocabulary: a metadata rail down the left, hairline rules, monospace annotation, plotted coordinates.

- **Palette**: eucalypt green + brass on charcoal, taken from the EcoLens project rather than a swatch generator. Both themes are in `:root` / `[data-theme="light"]`.
- **Type**: Archivo (display, compressed via its width axis), Instrument Sans (UI), IBM Plex Mono (annotation), Newsreader (long-form prose only — the face changes where the content type changes).
- **Fonts are self-hosted** via Fontsource. No Google Fonts request at runtime.
- **Signature element**: `RegionPlot`. It draws the actual cloud regions the projects deploy into. If the regions change, edit `data/site.ts` and the drawing changes with them.
- **No skill percentage bars.** "React — 90%" is a number nobody can verify and every template has it.

Motion is one orchestrated load sequence plus hover micro-interactions. `prefers-reduced-motion` is respected.

## Deploying

Static output, so anything works. Vercel or Netlify: connect the repo, framework preset Next.js, no env vars needed.

---

© Arsh Bansal. Code MIT (see LICENSE); written content and design are not.
