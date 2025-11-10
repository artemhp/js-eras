# JavaScript Through the Ages — Astro Presentation

An interactive Astro site that turns Artem Deikun’s talk “JavaScript Through the Ages: From Handwritten HTML to AI-Generated UI” into a scrollable timeline. Each slide (intros, eras, transitions, quotes, and the closing call-to-action) lives as Markdown inside a typed content collection, making it easy to edit or extend the story.

## Project Structure

```text
/
├── public/                  # Static assets (favicon, future images, etc.)
├── src/
│   ├── content/
│   │   ├── config.ts        # Zod schema for presentation slides
│   │   └── slides/*.md      # Source Markdown for eras + interludes
│   ├── layouts/Layout.astro # Global shell + typography + theming
│   └── pages/index.astro    # Timeline navigation + card rendering
├── package.json
└── package-lock.json
```

## Editing the Story

- Each Markdown file starts with frontmatter containing a `title`, `order`, and `category`.
- Update the prose directly in Markdown—Astro will handle rendering automatically.
- To add a new section, drop another `.md` file into `src/content/slides/`, give it an `order` number, and update the `category` to control styling (`introduction`, `era`, `transition`, `interlude`, `conclusion`, or `bonus`).

## Local Development

```bash
npm install          # already run, but keeps dependencies in sync
ASTRO_TELEMETRY_DISABLED=1 npm run dev   # start the local server on :4321
ASTRO_TELEMETRY_DISABLED=1 npm run build # production build (required once)
```

> Tip: Setting `ASTRO_TELEMETRY_DISABLED=1` avoids Astro trying to write config files in protected environments.

## Presentation Mode

- Visit `/slides/presentation-introduction` (or click “Start presentation” on the homepage) to enter slide-by-slide mode.
- Each Markdown file becomes its own page; press `space`, `enter`, or `→` to advance, and `←` to go back.
- The final slide links back to the timeline view so you can jump around afterward.

## Next Ideas

- Break sections into dedicated routes (e.g., `/era/4`) if you want shareable deep links.
- Layer in scroll-driven animations or audio snippets per era for more immersion.
- Deploy to Netlify, Vercel, or GitHub Pages once you're happy with the flow—no changes needed to the build output.
