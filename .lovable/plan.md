## Plan: One-page site Diëtiste Ümran Güney

Build a modern, responsive one-page site in TanStack Start using the "Natural serenity" direction (sage green #8BA888, cream #F5F2ED, terracotta #D68C7A, dark #2D3436, Inter font).

### Design tokens
- Add sage/cream/terracotta tokens to `src/styles.css` (`--primary`, `--secondary`, `--accent`, background/foreground) using oklch conversions, matching the prototype.
- Load Inter via `<link>` tags in `src/routes/__root.tsx` head; set `--font-sans: Inter`.
- Update root head metadata: title "Diëtiste Ümran Güney — Voedingsadvies Antwerpen-Hoboken", meta description, og/twitter tags.

### Structure
- Replace placeholder in `src/routes/index.tsx` with the full page composed of section components under `src/components/site/`:
  - `Navbar.tsx` — fixed nav, logo left, 5 anchor links, "Maak een afspraak" pill CTA. Mobile: hamburger with sheet.
  - `Hero.tsx` — 2-col grid; headline "Jouw eerste stap naar een betere levensstijl" with italic sage accent; subtitle; two CTAs; profile image (generated).
  - `OverMij.tsx` — 12-col grid, circular portrait (generated) left, "Wie ben ik?" / "Wat kun je verwachten?" text with italic pull-quote card. Full user-provided copy.
  - `Werkwijze.tsx` — 3-card grid (Eerste / Tweede / Vervolgconsult) with 01/02/03 badges + duration line. Intro sentence self-written.
  - `Tarieven.tsx` — dark section (rounded-t-[3rem]) with two columns: tarieven list (€60/€45/€30) and mutualiteit table (CM, Solidaris, Liberale, Helan, Vlaams & Neutraal).
  - `Contact.tsx` — 2 cols: contact info with Lucide icons (MapPin, Phone, Mail) + form (Naam, Email, Telefoon, Bericht) using shadcn Input/Textarea/Button. Toast on submit (no backend wiring — form is presentational, showing a success toast).
  - `Footer.tsx` — copyright + social icon links (Instagram, Facebook, LinkedIn from Lucide).
- Section IDs (`home`, `over-mij`, `werkwijze`, `tarieven`, `contact`) for smooth-scroll nav; add `scroll-behavior: smooth` and `scroll-margin-top` on sections.

### Icons & images
- Use `lucide-react` icons (MapPin, Phone, Mail, Menu, Instagram, Facebook, Linkedin, ArrowRight).
- Generate two images with `imagegen` and save to `src/assets/`:
  1. Hero: warm professional portrait of a female dietitian in a bright office with plants (portrait aspect).
  2. Over Mij: aesthetic composition of healthy ingredients (avocado, nuts, veg) on a light table (square).
- Import as ES6 image imports.

### Animations
- Small `useInView` hook (IntersectionObserver) that toggles a class to trigger `animate-fade-in` (already in project animation utilities) for section reveals. Subtle hover lift on cards via `transition-transform hover:-translate-y-1`.

### Responsive
- Mobile-first with breakpoints at `md:` and `lg:`. Nav collapses to a hamburger menu (shadcn Sheet) on `<md`. All grids stack on mobile. Follow the responsive-layout-patterns guidance (min-w-0, shrink-0, truncate) for the nav.

### Technical notes
- All colors via semantic tokens in `styles.css`; no hardcoded hex in components.
- No backend needed — contact form shows a toast on submit (`sonner` already available). If the user later wants real email delivery, we'd add Lovable Cloud + a server function.
- No new routes; homepage only.
