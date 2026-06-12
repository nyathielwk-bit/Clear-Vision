---
name: clearframe-design
description: Use this skill to generate well-branded interfaces and assets for Clearframe Studio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What Clearframe Studio is
A premium, trustworthy, local web-design studio for Toronto & GTA businesses —
"fast, professional websites, built to convert." Visually: deep navy + warm
off-white, muted sage and warm-gold accents, Playfair Display headings over
Inter, generous whitespace, hairline borders, soft shadows, and exactly one
warm-gold key CTA per view. Calm and conversion-focused; never flashy, techy,
or generic-agency.

## Map of this skill
- `README.md` — the full design guide: brand, voice, color/type/spacing/layout
  systems, component specs, homepage rules, conversion rules, and a cheat sheet
  with the CSS variable names.
- `styles.css` — the single global stylesheet; link it for all tokens + fonts.
- `tokens/` — CSS custom properties (`colors.css`, `aliases.css`, `typography.css`,
  `spacing.css`, `elevation.css`, `fonts.css`, `base.css`).
- `assets/fonts/` — Inter & Playfair Display web fonts (woff2).
- `assets/placeholders/` — clean site-mockup stand-ins (swap for real photos).
- `guidelines/` — specimen cards (type, color, spacing, brand marks).
- `components/` — React UI primitives (`actions/`, `forms/`, `display/`, `editorial/`),
  each with `.jsx`, a `.d.ts` contract, a `.prompt.md`, and a demo card.
- `ui_kits/clearframe/` — the interactive homepage recreation (hero, packages,
  process, FAQ, quote form, footer).

## How to use it
1. Always link `styles.css` and reference **semantic tokens** (`var(--primary)`,
   `var(--surface)`, `var(--text-primary)`, `var(--accent)`) — not raw hex.
2. Playfair Display for headings; Inter for body, UI, and forms. Navy primary
   buttons; one warm-gold key CTA per view; sage for trust ticks.
3. For prototypes/mocks: copy the fonts and any placeholder assets into your
   output folder, then build static HTML. To reuse a component's look, read its
   `.jsx` + `.prompt.md` and reproduce the markup/classes (components use only CSS
   variables — no build step).
4. Write copy in Clearframe's voice: plain, confident, reassuring; sentence case;
   "we"/"you"; ALL-CAPS only for small eyebrows; no emoji. CTAs pair an action
   with reassurance ("Book a free call", "Get a quote"). See README §1 and Content
   Fundamentals.
