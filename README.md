# Tripknot — Next.js + TypeScript + Framer Motion + GSAP

A premium travel-platform landing page rebuilt as a production Next.js 14 (App Router) project.

## Stack

- **Next.js 14** (App Router, RSC where possible)
- **TypeScript** (strict)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (declarative section reveals, hover & viewport animations)
- **GSAP + ScrollTrigger** (custom cursor, magnetic CTAs, phone tilt-in)
- **Lenis** (silky smooth scroll, synced with ScrollTrigger)

## Getting started

```bash
pnpm install        # or npm install / yarn
pnpm dev            # http://localhost:3000
pnpm build && pnpm start
```

## Structure

```
app/
  layout.tsx            # Fonts + global wrappers (Cursor, SmoothScroll)
  page.tsx              # Section composition
  globals.css           # Tokens, base styles, .btn utilities
components/
  Nav.tsx               # Framer Motion: backdrop blur on scroll
  Hero.tsx              # Parallax phone + floating glass cards
  Itinerary.tsx         # Animated SVG route + map card
  Explore.tsx           # Category cards w/ hover lift
  Strangers.tsx         # Stacked rotating trip cards
  ExperienceGrid.tsx    # Bento grid w/ stagger reveal
  HowItWorks.tsx        # 3 step cards
  Destinations.tsx      # Horizontal snap carousel + arrows
  AppShowcase.tsx       # GSAP ScrollTrigger phone tilt-in (uses your mockup PNGs)
  FinalCTA.tsx          # Magnetic CTA
  Footer.tsx
  SmoothScroll.tsx      # Lenis + GSAP ticker
  Cursor.tsx            # Custom GSAP-driven cursor (dot + ring)
  Brand.tsx
lib/
  useReveal.ts          # useReveal() + useMagnetic() GSAP hooks
public/screens/         # Your mobile mockup PNGs
```

## Micro-interactions cheat-sheet

| Where                 | What                                                  | Library        |
|-----------------------|-------------------------------------------------------|----------------|
| Global                | Smooth scroll + custom cursor (dot + ring)            | Lenis + GSAP   |
| Nav                   | Background blur intensifies on scroll                 | Framer Motion  |
| Hero                  | Phone & glass cards parallax on scroll                | Framer Motion  |
| Hero / Final CTA      | Magnetic button on mousemove                          | GSAP quickTo   |
| Itinerary             | Map route path draws in on view                       | Framer Motion  |
| Strangers             | Hover lifts card to z-top, neutralises tilt           | Framer Motion  |
| App showcase          | Phones tilt + ease into place                         | GSAP ScrollTrigger |
| All sections          | Stagger reveal on enter viewport                      | Framer Motion / GSAP |

## Notes

- Replace `public/screens/*.png` with your real screens.
- Add real photography by swapping the gradient `bg-gradient-to-br` blocks in `Explore`, `ExperienceGrid`, and `Destinations` for `<Image fill />` components.
- Tokens live in `:root` (`app/globals.css`) and `tailwind.config.ts`.
