# Clearframe Studio — Design System

> **Fast, professional websites for Toronto businesses. Clean, credible, and built to convert.**
> Tagline: *Get online fast. Look credible from day one.*

Clearframe Studio designs and ships polished websites quickly for small and
service businesses across Toronto and the GTA. This design system makes every
page — homepage, service pages, pricing, forms — feel premium, trustworthy, and
conversion-focused, without looking flashy, techy, or like a generic agency.

**Type:** Playfair Display (headings) + Inter (body/UI), shipped as web fonts in
`assets/fonts/`. **Palette:** deep navy, slate blue-gray, warm off-white, muted
sage, warm gold.

---

## 1. Brand summary

Clearframe is the calm, capable local studio that gets your business online fast
and makes it look credible from the first visit. It speaks plainly, prices
clearly, and designs with restraint — premium through quality and whitespace, not
decoration. It feels like hiring a careful professional, not a trendy startup.

**Keywords:** premium · trustworthy · clear · efficient · local

**Do**
1. Lead with clarity and proof — plain language, real outcomes, fixed pricing.
2. Use generous whitespace and strong hierarchy; let one idea lead each section.
3. Reserve warm gold for the single most important action on a screen.

**Don't**
1. Don't use purple gradients, glows, loud colors, or busy animation.
2. Don't crowd sections or stack three identical icon-in-a-circle feature blocks.
3. Don't sound salesy, jargon-y, or vague-creative — no "unlock / supercharge".

---

## 2. Color system

All colors are CSS custom properties (see `tokens/colors.css`). Reference the
**semantic** names in product code; the numbered ramps exist for fine-tuning.

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#162238` | Deep navy. Primary buttons, headers, footer, headings on light. |
| `--primary-hover` | `#20304D` | Hover state for navy buttons/links. |
| `--secondary` | `#5B6B84` | Slate blue-gray. Secondary text, captions, supporting UI. |
| `--background` | `#F7F5F1` | Warm off-white page background (never pure white). |
| `--surface` | `#FFFFFF` | Cards, nav, inputs, raised content. |
| `--surface-alt` | `#F1EEE7` | Alternating sections, wells, quiet bands. |
| `--surface-inverse` | `#162238` | Dark sections (final CTA), footer base. |
| `--border` | `#E8E3DA` | Default hairline borders and dividers. |
| `--border-strong` | `#D8D2C6` | Input borders, stronger separation. |
| `--text-primary` | `#162238` | Primary body & headings on light surfaces. |
| `--text-secondary` | `#5B6B84` | Secondary/supporting text. |
| `--text-muted` | `#8C8576` | Captions, hints, meta. |
| `--text-inverse` | `#FAF8F4` | Text on navy/dark surfaces. |
| `--accent` | `#C88B3A` | Warm gold. The **one** key CTA per view + highlights. |
| `--accent-hover` | `#A9722A` | Gold hover state. |
| `--sage` | `#7D9277` | Muted sage. Success ticks, calm trust accents. |
| `--success` / `--success-bg` | `#4E7A57` / `#E2EDE4` | Positive states, confirmations. |
| `--warning` / `--warning-bg` | `#C88B3A` / `#F6EBD6` | Cautions, "limited" notices. |
| `--error` / `--error-bg` | `#B4493C` / `#F6E2DE` | Errors, destructive states. |

**CTA button rules**
- **Primary action = navy** (`--primary`, white text). Trust first.
- **The single most important conversion CTA = gold** (`--accent`, navy text) —
  one per view (hero, pricing-featured, final CTA). More than one gold button
  dilutes it.
- **Secondary = outline** (transparent, `--border-strong`, navy text).
- Never two competing high-emphasis buttons side by side.

**Background pairing rules**
- Page is `--background`; cards sit on it as `--surface` with a `--border` hairline.
- Alternate sections between `--background` and `--surface-alt` for rhythm; use
  `--surface-inverse` (navy) once or twice as punctuation (final CTA, footer).
- Gold is an accent only — never a section background.

**Text contrast rules**
- On light: headings/body `--text-primary`, support `--text-secondary`, meta `--text-muted`.
- On navy: `--text-inverse` (≈AA on `#162238`); gold `--gold-300` for eyebrows.
- Gold text only at `--gold-700` (`#855820`) on light for body-size legibility;
  large gold is for fills, not small text.

---

## 3. Typography system

Families (`tokens/typography.css`):
- `--font-display`: **"Playfair Display"**, Georgia, serif — headings & display.
- `--font-sans`: **"Inter"**, system-ui fallback — body, UI, forms, labels.
- `--font-mono`: `ui-monospace, SFMono-Regular, Menlo` — code/specimens only.

Weights: `--weight-regular 400`, `--weight-medium 500`, `--weight-semibold 600`,
`--weight-bold 700`, `--weight-black 900`.

Scale (rem @ 16px base) and where to use it:

| Token | Size | Font / use |
|---|---|---|
| `--text-5xl` | 84px | Playfair — XL hero display (rare). |
| `--text-4xl` | 64px | Playfair — H1 / hero headline. |
| `--text-3xl` | 48px | Playfair — H2 section headings, prices. |
| `--text-2xl` | 36px | Playfair — H3 / large stats. |
| `--text-xl` | 28px | Playfair — H4 / FAQ questions. |
| `--text-lg` | 22px | Inter 600 / Playfair — titles. |
| `--text-md` | 18px | Inter — lead paragraphs, large body. |
| `--text-base` | 16px | Inter — default body, inputs. |
| `--text-sm` | 14px | Inter — secondary text, captions, buttons. |
| `--text-xs` | 12px | Inter — meta, eyebrows, badges. |

Line heights: `--leading-tight 1.12` (display), `--leading-snug 1.28` (titles),
`--leading-normal 1.5` (UI), `--leading-relaxed 1.65` (long body).
Letter spacing: display pulls in (`--tracking-tight -0.015em`,
`--tracking-tighter -0.03em`); eyebrows push out (`--tracking-widest 0.22em`).

Roles: headings = Playfair regular with tight tracking; **eyebrows** = Inter 600,
uppercase, `0.22em`, gold; body = Inter 400 @16/1.65; buttons = Inter 500 @14–16.

---

## 4. Spacing system (8px base)

`tokens/spacing.css`. `--space-1`=4 · `--space-2`=8 (sm) · `--space-3`=12 ·
`--space-4`=16 (md) · `--space-5`=24 (lg) · `--space-6`=32 (xl) · `--space-7`=40 ·
`--space-8`=48 (2xl) · `--space-9`=64 (3xl) · `--space-10`=80 · `--space-11`=104 (4xl) · `--space-12`=128.

Layout spacing rules:
- **Section padding:** `--space-11` (104px) top & bottom on desktop; `--space-9`
  on mobile. Airy by default.
- **Card padding:** `--space-7` (40px) for pricing/feature cards; `--space-5`
  (24px) for compact cards.
- **Hero:** `--space-10`/`--space-11` vertical; `--space-9` gap between columns.
- **Form spacing:** `--space-4` (16px) between fields; `7px` label→field.
- **Button padding:** `0.62em 1.15em` (md); `0.8em 1.5em` (lg).

---

## 5. Layout system

- **Max content width:** `--container-lg` 1200px (primary). `--container-md` 960px
  for focused sections; `--container-reading` ≈44rem for prose/FAQ.
- **Gutters:** `--gutter-lg` 48px desktop, 24px mobile.
- **Grid:** 12-col mental model; in practice CSS grid with `gap`. Common splits:
  hero 1.05fr/0.95fr; why-us 0.9fr/1.1fr; packages 3×1fr; trust 4×1fr.
- **Breakpoints:** desktop ≥ 940px; below 940px collapse multi-column to one and
  hide inline nav for a menu. Mobile-first, tested to 360px.
- **Section rhythm:** alternate `--background` / `--surface-alt`; punctuate with a
  navy section. One clear idea per section.
- **Alignment:** left-aligned content blocks; center only short intros and the
  testimonial. Whitespace is generous — when unsure, add more.
- **One vs two columns:** one column for reading and short intros; two columns
  for hero, "why us", and the final CTA (copy + form). Three/four columns only
  for parallel items (packages, stats, steps).

---

## 6. Component system

Reusable React primitives live in `components/` (each has `.jsx`, a `.d.ts`
contract, a `.prompt.md`, and a demo card). Styling references CSS variables.

- **Primary button** — navy `--primary`, white text, `--radius-md`, no border,
  `--shadow`none; hover darkens to `--primary-hover`, active nudges + `--primary-press`;
  focus = navy ring. Full-width on mobile.
- **Accent button** — warm gold `--accent`, navy text, semibold; the one key CTA.
- **Secondary button** — transparent, `--border-strong`, navy text; hover light wash.
- **Ghost / link** — quiet text actions; link is navy with a gold underline.
- **Pricing cards** (`.pkg`) — `--surface`, `--border`, `--radius-lg`,
  `--shadow-sm`, 40px padding; featured card gets a navy border, `--shadow-lg`,
  and a gold "Most popular" badge. Sage check rows. CTA pinned to the bottom.
- **Testimonial** (`Pullquote`) — Playfair italic quote, gold rule, attribution.
- **FAQ accordion** — hairline-divided rows; Playfair question + rotating ＋ icon;
  smooth max-height expand; one open at a time.
- **Form inputs** — `--surface`, `--border-strong`, `--radius-sm`, 0.62em padding;
  hover darkens border, focus = navy border + ring; error = `--error` border.
  Labels Inter 500; hint/error below.
- **Labels** — Inter 500 @14, `--text-primary`; optional "Optional" tag muted.
- **Nav bar** — sticky, `--background` at 85% with blur, `--border` bottom; framed
  wordmark, text links, phone, one gold CTA. Collapses on mobile.
- **Footer** — `--navy-900`, gold eyebrow headings, light links, brand + contact.
- **Badges** — small pills; `accent` (gold highlight), `success` (sage), neutral,
  `solid` for "Most popular". `--radius-sm`.
- **Section headers** — gold eyebrow + Playfair H2 + secondary intro, centered or
  left; `--space-8` below.

Each component defines purpose, background, text, radius, border, shadow, spacing,
hover/focus, and mobile behavior in its `.prompt.md` and `.d.ts`.

---

## 7. Visual language

- **Photography:** real, warm, natural-light photos of work, workspace, and people;
  clean website mockups on devices. No glossy stock, no neon, no abstract 3D.
  Treat full-bleed or inside a `--radius-lg` card with a soft shadow.
- **Icons:** **Lucide** (https://lucide.dev) — outlined, ~1.6px stroke,
  `currentColor`, sized to text. Never filled-in colored circles, never emoji.
  *(Lucide is a documented substitute; no bespoke set was supplied.)*
- **Illustration:** minimal line work only — e.g. the browser-frame motif that
  echoes the "frame" in Clearframe. No mascots or busy scenes.
- **Background treatment:** flat warm off-white and navy blocks. No gradients,
  glows, or patterns; at most a barely-there paper grain.
- **Lines, dividers, cards:** 1px `--border` hairlines and 1.5px gold rules do the
  separating. Cards are white, hairline-bordered, `--radius-lg`, soft `--shadow-sm`,
  lifting slightly on hover.
- **Logo:** the wordmark **Clearframe** (Playfair/Inter 600) inside thin corner
  brackets — a literal "clear frame". Monogram **CF** in a framed or solid navy
  tile, or a gold ring. See `guidelines/brand-*` cards. Type-based; no pictorial mark.

---

## 8. Homepage design rules

| Section | Layout | Background | Heading | Support | CTA | Density |
|---|---|---|---|---|---|---|
| **Hero** | 2-col: copy + site mockup | `--background` | Playfair 48–60 | 18px secondary | Gold "Book a free call" + outline "See packages" | Airy |
| **Trust strip** | 4 stats in a row | `--surface` | Playfair 36 stats | 14 secondary | none | Compact band |
| **Packages** | 3 cards, featured center | `--background` | Playfair 48, centered | 18 secondary | Navy CTAs; gold on featured | Airy |
| **Why us** | 2-col: intro + 2×2 points | `--surface-alt` | Playfair 48 | 14 secondary | none | Medium |
| **Process** | 4 numbered steps | `--background` | Playfair 48, centered | 14 secondary | none | Airy |
| **Testimonial** | centered quote | `--surface-alt` | Playfair italic | — | none | Airy |
| **FAQ** | accordion, reading width | `--background` | Playfair 48, centered | — | none | Medium |
| **Final CTA** | 2-col: copy + quote form | `--surface-inverse` (navy) | Playfair 32–46 white | 18 light | Gold "Book a free call" | Focused |
| **Footer** | 4 columns | `--navy-900` | gold eyebrows | 14 light | none | Compact |

---

## 9. Conversion rules

- **CTA placement:** a gold CTA in the hero, on the featured package, and in the
  final CTA — plus the persistent gold "Get a quote" in the sticky nav. The visitor
  is never more than a scroll from an action.
- **Button hierarchy:** exactly one gold (key) action per view; navy for normal
  actions; outline/ghost for secondary. Never compete.
- **Trust signals:** put proof early — a trust strip of stats right under the hero,
  a testimonial mid-page, and review/credibility cues near pricing and the form.
- **Form placement:** the quote form is the final CTA, short (name, email, business,
  package, one checkbox). Above it, three reassurance ticks ("free consult",
  "fixed quote", "real replies").
- **Pricing presentation:** three fixed "from" prices, featured middle option,
  benefit-led check lists, and a CTA per card — clear, never a wall of features.
- **Reduce friction:** few form fields, plain labels, inline validation, click-to-call
  in the nav, and a one-business-day reply promise.
- **Premium without expensive:** whitespace, restraint, real numbers, and fixed
  quotes signal quality and remove risk — premium feel, accessible promise.

---

## 10. Cheat sheet

**Design direction summary (reuse in prompts):**
> Clearframe Studio: premium, trustworthy, local web-design brand for Toronto
> businesses. Deep navy + warm off-white, muted sage and warm-gold accents.
> Playfair Display headings over Inter body. Generous whitespace, strong
> hierarchy, hairline borders and soft shadows, `--radius-md/lg` corners. Navy
> primary buttons; one warm-gold key CTA per view. No gradients, glows, emoji,
> or colored-circle icon blocks. Calm, clear, conversion-focused.

**Color CSS variables:** `--primary` `--primary-hover` `--secondary`
`--background` `--surface` `--surface-alt` `--surface-inverse` `--border`
`--border-strong` `--text-primary` `--text-secondary` `--text-muted`
`--text-inverse` `--accent` `--accent-hover` `--sage` `--success` `--warning`
`--error` (+ `-bg` variants).

**Spacing CSS variables:** `--space-1`(4) `--space-2`(8) `--space-3`(12)
`--space-4`(16) `--space-5`(24) `--space-6`(32) `--space-7`(40) `--space-8`(48)
`--space-9`(64) `--space-10`(80) `--space-11`(104) `--space-12`(128);
containers `--container-md/lg/xl`, `--gutter-lg`, `--section-y`.

**Typography CSS variables:** families `--font-display` `--font-sans` `--font-mono`;
sizes `--text-xs … --text-5xl`; weights `--weight-regular … --weight-black`;
`--leading-*`, `--tracking-*`; role shorthands `--type-h1/h2/h3`, `--type-body`,
`--type-lead`, `--type-label`, `--type-eyebrow`.

---

## Content fundamentals (voice)

- **Voice:** the calm, capable professional. Plain, confident, reassuring. Short
  sentences. No hype, no jargon, no exclamation pile-ups.
- **Person:** "we" (Clearframe) and "you" (the owner). Direct and personal.
- **Casing:** sentence case for headlines and UI; ALL-CAPS only for small spaced
  eyebrows ("TORONTO & GTA WEB DESIGN", "PACKAGES").
- **CTAs:** action + reassurance — "Book a free call", "Get a quote", "See packages".
  Avoid "Buy now", "Sign up free", "Unlock".
- **Numbers & money:** state prices plainly ("from $1,500 CAD"), use real figures
  ("~3-day launch", "40+ sites"). No vague superlatives.
- **No emoji.** Minimal, purposeful punctuation; em dashes and proper quotes.

---

## Visual foundations (quick reference)

Warm off-white page, white cards, navy structure, gold for the one key action,
sage for trust. Playfair headlines (tight tracking) over Inter. Hairline borders,
soft warm shadows (`--shadow-sm`→`xl`), `--radius-md (8px)`/`lg (14px)` corners.
Motion is short and composed (120–220ms, `--ease-standard`); quiet fades, gentle
card lifts, accordion expands — no bounce, parallax, or glow. Hover: navy darkens,
cards lift; press: subtle scale; focus: navy ring. `prefers-reduced-motion` honored.

---

## Iconography

**Lucide**, loaded from CDN (`https://unpkg.com/lucide@latest`) or inline SVG
paths (as the kit does). Outlined only, ~1.6 stroke, `currentColor`, sized to cap
height. **No emoji.** A few typographic glyphs are used as ornament: the arrow `→`
in links, `·`/`—` separators, the `＋` in the FAQ. The logo and monogram are
type-based with the corner-bracket "frame" device — there is no pictorial icon set.

---

## Index — what's in this system

**Foundations**
- `styles.css` — global entry point (consumers link this); `@import`s only.
- `tokens/colors.css` — navy / stone / sage / gold ramps + semantic aliases.
- `tokens/aliases.css` — compatibility layer mapping internal names to the palette.
- `tokens/typography.css`, `tokens/spacing.css`, `tokens/elevation.css`, `tokens/base.css`.
- `tokens/fonts.css` — `@font-face` for Inter & Playfair Display.

**Specimen cards** (`guidelines/*.html`) — Type, Colors, Spacing, Brand cards in the
Design System tab.

**Components** (`components/<group>/`)
- `actions/` — `Button` (primary/accent/secondary/ghost/link), `IconButton`
- `forms/` — `Input`, `Checkbox`, `Switch`
- `display/` — `Card`, `Badge`, `Tag`, `Avatar`
- `editorial/` — `Pullquote` (testimonials), `Rule`

**UI kit** (`ui_kits/clearframe/`) — the interactive Clearframe site:
**Home** (hero, trust strip, packages, why-us, process, testimonial, FAQ, quote form),
**Services** (detailed tiers, care & maintenance plans, process), and **Contact**
(details + quote form). `index.html` is the interactive gallery card; `card-services.html`
and `card-contact.html` open straight to those pages.

**Template** (`templates/clearframe-website/`) — the same three-page site packaged as
a reusable starting point. `index.html` carries the `@template` tag and loads the
design system via `ds-base.js` (one line to repoint in a consuming project).

**Assets** (`assets/`) — web fonts in `fonts/`; clean site-mockup placeholders in
`placeholders/` (swap for real photography).

**`SKILL.md`** — makes this system usable as a downloadable Agent Skill.

---

## Hosting & care (business note)

Clearframe builds static sites and deploys them on fast, secure infrastructure
(e.g. GitHub + a static host's free tier). **Do not resell free hosting as a line
item.** Instead, monetize ongoing value through the **Care & Maintenance** plans on
the Services page (hosting + monitoring, content edits, updates & backups). Project
payment terms: Launch Page 100% upfront; Business & Growth 50% upfront, 50% before
launch.

---

## Using the system

1. Link the stylesheet: `<link rel="stylesheet" href="styles.css">`.
2. Use **semantic tokens** (`var(--surface)`, `var(--text-primary)`, `var(--primary)`,
   `var(--accent)`), not raw hex.
3. Load the component bundle and read from the namespace:
   `const { Button } = window.AureliaDesignSystem_df5d1c;` *(the runtime namespace
   is fixed to the project id; the brand is Clearframe Studio — see any component card)*.
4. Headlines in Playfair, everything else in Inter. Navy primary, one gold CTA per
   view, sage for trust, and let the page breathe.
