# Mintlify Design System

## Overview

Mintlify is a documentation platform for developer-facing products — teams write their docs, API references, and changelogs in Mintlify and Mintlify renders them as a polished, fast documentation site. This design system captures Mintlify's public-facing brand: the marketing site (homepage, startups program page, pricing page) and the live documentation product surface itself (e.g. `/docs/components/tabs`).

The brand runs two registers at once. Marketing surfaces (home, startups) open with cinematic, atmospheric hero bands — soft gradient skies with cloud illustrations, dark teal-to-mint gradients with a rocket launch — that read like premium SaaS landing pages. Everything beneath that (pricing comparison tables, live documentation pages) collapses into dense, information-rich layouts: a 3-column docs grid, syntax-highlighted code, 14–16px long-form prose. The signature mint green is deployed sparingly and decisively — accent CTAs, checkmarks, active-state indicators — while black-pill buttons and Inter/Geist Mono typography carry the rest of the system.

**Source**: this system was built from a structured brand-guideline document (colors, typography, layout, components, do's/don'ts, responsive rules) covering four pages — homepage, `/startups`, `/pricing`, `/docs/components/tabs` — supplied directly to this project. No Figma file, codebase, or asset export was attached; there is no logo file or icon export to draw from, so this system contains no logo mark (see "Iconography" below) and icons are sourced from a CDN substitute (Lucide) rather than copied from Mintlify's own icon set.

## Sources
- Brand guideline notes (pasted text, not a linkable file) — token tables for color/type/spacing/radius/elevation, component inventory, do's/don'ts, responsive behavior.
- No Figma link, GitHub repo, or codebase path was provided. If you have access to Mintlify's live site, Figma files, or component source, attach them and this system can be tightened to exact values (currently colors or exact hex values not given in the source are reasoned approximations described below).

## Content Fundamentals

Tone drawn from the sample copy in the brand notes (hero headline "The intelligent Knowledge Platform", section headline "Built for the intelligence age", pricing headline "Pricing on your terms", startups headline "Apply to the Mintlify startup program", testimonial "Every YC batch we consistently see the top performing startups use Mintlify to build their docs.").

- **Confident, declarative, short.** Headlines state a claim rather than ask a question or hedge ("Pricing on your terms," not "Find the plan that's right for you"). No exclamation points.
- **Second person in UI, third person in proof.** Buttons and functional copy speak directly to the reader ("Get started," "Talk to us"); testimonials and case-study copy speak about the customer in third person.
- **Sentence case throughout** — headlines, buttons, nav labels. No title case, no all-caps except intentional micro-labels (sidebar section headers, "REQUIRED" tags) which are a deliberate uppercase treatment for scannability, not a copy tone choice.
- **No emoji.** The brand's only decorative language is typographic (weight, color, mono contrast) and illustrative (hero gradients + line-art scenes) — emoji would undercut the developer-tool register.
- **Technical vocabulary used plainly.** "Knowledge Platform," "intelligence age," component/property names in monospace — the copy assumes a technical reader without over-explaining.
- **Social proof leans on name recognition and specificity** rather than generic superlatives — a named customer (Cursor), a named cohort (YC batch), not "trusted by thousands."

## Visual Foundations

**Color.** Two registers: a controlled neutral system (canvas white, charcoal/steel/slate text, hairline borders) for 90% of the UI, and a small, disciplined accent set — mint green (CTAs, checkmarks, active states), a blue tag color (docs reference chips), red (errors/required), and one deliberate outlier: a warm coral-orange reserved solely for testimonial cards, to break rhythm for emotional impact. Mint never appears on body text or large surfaces — it's a signal, not a fill.

**Type.** Inter for every UI surface; Geist Mono exclusively for code and type/property signatures. No third typeface, no italics anywhere — emphasis comes from weight and color, never slant. Display sizes carry tight, negative letter-spacing (hero at -2px) that relaxes toward 0 as size drops — a magazine-display feel at the top of the scale, a neutral document feel at the bottom. Documentation body text is fixed at 16px/1.50 line-height and is never compressed, even where layout density is otherwise high.

**Backgrounds.** Two atmospheric gradient hero bands are the brand's only "scenic" moments: a sky-blue-to-cream vertical gradient with cloud illustration on the homepage, and a dark teal-to-mint diagonal gradient with a rocket-launch illustration on the startups page. Every other surface is flat — white canvas or light-gray section tints (`--color-surface`, `--color-surface-soft`). No repeating patterns or textures; no photography beyond the two hero illustrations and testimonial headshots.

**Elevation.** Runs flat by default — most cards use a 1px hairline border and zero shadow. Shadow is reserved for two situations: a soft card-lift (`--shadow-2`) on standard feature cards, and a deep, diffuse drop (`--shadow-3`) exclusively on the homepage hero product-mockup image — the one moment the brand wants to feel dimensional. A faint mint-tinted glow (`--shadow-4`) marks the featured pricing tier. Docs surfaces carry no shadow at all; density and hairlines do the work instead.

**Corners.** A disciplined two-mode scale: every button, pill, tab, and badge is fully rounded (`--radius-full`); every rectangular card, panel, and mockup frame is `--radius-lg` (12px), with `--radius-md` (8px) reserved for compact controls (search pill, inputs, code blocks). The brand deliberately never softens a corner between 8px and 12px on the same component family — there is no "in-between" card radius.

**Animation.** Not enumerated in the source material. Recommend 150–200ms ease transitions for hover/focus states, consistent with the brand's otherwise restrained, non-bouncy visual language — no springs, no elaborate entrance choreography implied anywhere in the notes.

**Hover / press states.** Not documented in the source ("no-hover policy" — the guideline explicitly captures default and pressed/active states only, not hover). Primary black pill button has a defined pressed state (deepens to `--color-charcoal`); default → disabled state uses hairline background + muted text. Treat hover as a subtle opacity or tint step, not a documented brand signal.

**Borders.** A single hairline color (`--color-hairline`) does nearly all bordering work — cards, inputs, dividers, the top-nav bottom edge. A softer `--color-hairline-soft` handles quieter internal dividers (table rows, TOC separators) so primary structural lines stay slightly more present than internal ones.

**Transparency / blur.** Not used decoratively anywhere in the source — no frosted-glass panels, no backdrop blur. The one rgba usage is a functional tint (`badge-tag` background, the mint-tinted shadow glow) — always a low-opacity color wash, never a blur effect.

**Imagery color vibe.** Cool and clean — sky-blue/mint/teal hero gradients, white/gray-neutral product surfaces. No grain, no warm filters, no black-and-white treatment. The one warm exception is the testimonial-orange card, used exactly once as an intentional rhythm break.

**Layout rules.** Marketing pages: 1280px max-width container, 32px gutters, generous vertical rhythm (96px between major bands, 120px hero padding). Documentation pages: strict 3-column grid (240px sidebar / ~720px max-width prose / 200px TOC), section gaps compress to 32px, table rows to 16px. The same brand runs "spacious cinematic" and "dense technical" without ever mixing the two within one page.

## Iconography

The source brand notes describe icon *usage* (green checkmarks in feature lists, chevrons in FAQ accordions, copy/close/arrow glyphs in circular icon buttons, a language label + copy icon in code-block headers) but include no icon export, icon font, or SVG sprite — Mintlify's actual icon system was not provided.

**No Mintlify icon assets exist in this project.** Per this system's policy, we do not hand-draw or approximate a company's icon set from memory. Icons in the component set and UI kit below are substituted from **Lucide** (lucide.dev, ISC-licensed, CDN-loaded via `unpkg` — see `assets/ICONS.md`), chosen for its neutral geometric stroke style (matching the plain, technical register the brand notes describe) at 1.5–2px stroke weight. **This is a flagged substitution** — if you have access to Mintlify's actual icon set or logo files, please attach them so this system can be corrected.

No emoji are used anywhere in the brand (see Content Fundamentals). No unicode glyphs are used as icons.

## Logo

**No logo file was provided.** Per policy, this system never draws or reconstructs a company's logo/wordmark from memory. Everywhere a mark would appear (nav, footer, UI kit header), the brand name renders as plain type — `Mintlify` in Inter 600 — with a short code comment noting the omission. If you have the actual logo (SVG/PNG), attach it and it will be dropped into `assets/logo/` and wired into the nav/footer/UI kit automatically.

## Known Gaps (carried from source + build notes)

- No dark-mode token values (canvas/surface/ink/hairline) — brand has not published a dark-mode palette.
- No animation/transition timings specified — using 150–200ms ease as a reasonable default.
- No form validation success-state values beyond standard green-border assumptions.
- Full code syntax-highlighting palette is not enumerated — only isolated tokens (`brand-tag`, `brand-annotate`, `brand-warn`) are named.
- Exact brand hex values were not given in the source (only token *names* and *usage*, e.g. "Mintlify Mint," "Deep Mint"). Hex values in `tokens/colors.css` are reasoned approximations based on the described usage and general Mintlify brand familiarity — **flag for correction** if you have exact values.
- No logo or icon assets were provided (see Iconography/Logo above) — Lucide icons substituted and flagged.
- Fonts (Inter, Geist Mono) are loaded via Google Fonts `@import` in `tokens/typography.css` rather than self-hosted `@font-face` + binaries, since no font files were provided and both are freely available on Google Fonts.

## Index

- `styles.css` — root stylesheet; imports every token file below. Link this one file from any consumer.
- `tokens/colors.css` — brand, surface, text, semantic color custom properties.
- `tokens/typography.css` — font family + full type-scale tokens; loads Inter & Geist Mono from Google Fonts.
- `tokens/spacing.css` — 4px-based spacing scale + container/grid widths.
- `tokens/radius.css` — border-radius scale.
- `tokens/shadow.css` — elevation/shadow scale.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadow) shown in the Design System tab.
- `assets/ICONS.md` — icon sourcing notes (Lucide CDN substitution).
- `components/` — reusable React UI primitives, grouped by concern:
  - `components/buttons/` — **Button** (variants: primary, accent-green, on-dark, secondary, ghost, link, icon-circular)
  - `components/badges/` — **Badge** (variants: discount, required, type, tag)
  - `components/cards/` — **Card** (variants: base, feature, pricing, pricing-featured, testimonial)
  - `components/forms/` — **TextInput**, **SearchPill**
  - `components/tabs/` — **Tabs** module: SegmentedTabs, PillTabs, MonthlyYearlyToggle
  - `components/code/` — **CodeBlock**, **InlineCode**
  - `components/docs/` — **Docs** module: SidebarNav, TocList, PropertyRow, FeatureComparisonTable
  - `components/navigation/` — **Navigation** module: MarketingNav, DocsNav, FooterRegion, FaqAccordionItem, LogoWall
  - `components/hero/` — **Hero** module: HeroSky, HeroDark, ProductMockup
- `ui_kits/marketing-site/` — click-through recreation of the homepage, pricing, startups, and docs pages (`index.html` switches between all four).
- `SKILL.md` — portable skill definition for use in Claude Code / other agent environments.
