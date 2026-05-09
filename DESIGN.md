# Design System: Modern Heritage — Ganova

> Source of truth: Google Stitch project `projects/1710514635094612555`
> Design name: **Modern Heritage**
> Language: Indonesian (id)
> Device: Desktop-first, responsive

---

## Brand & Style

**"Klasik Tapi Beda Kasta"** — Classic But a Different Class.

This design system bridges mid-century artisanal craftsmanship with contemporary premium retail. The brand personality is warm, indulgent, and authoritative. The visual style uses a **Corporate / Modern** framework infused with **Retro** editorial influences. The emotional goal is "approachable luxury" and "timeless reliability."

---

## Color Palette

### Primary Colors
| Token                   | Value     | Usage                                      |
|-------------------------|-----------|---------------------------------------------|
| `primary`               | `#271310` | Brand elements, headlines, buttons          |
| `on-primary`            | `#ffffff` | Text on primary backgrounds                 |
| `primary-container`     | `#3e2723` | Deep chocolate containers                   |
| `on-primary-container`  | `#ae8d87` | Text on primary containers                  |
| `primary-fixed`         | `#ffdad4` | Light fixed primary                         |
| `primary-fixed-dim`     | `#e3beb8` | Dimmed fixed primary (footer text)          |
| `inverse-primary`       | `#e3beb8` | Inverse contexts                            |

### Secondary Colors
| Token                   | Value     | Usage                                      |
|-------------------------|-----------|---------------------------------------------|
| `secondary`             | `#625f4c` | Secondary text, accents                     |
| `on-secondary`          | `#ffffff` | Text on secondary                           |
| `secondary-container`   | `#e8e3cb` | Hover backgrounds for nav links             |

### Tertiary Colors
| Token                   | Value     | Usage                                      |
|-------------------------|-----------|---------------------------------------------|
| `tertiary`              | `#081c17` | Dark green accent                           |
| `tertiary-container`    | `#1d312b` | Dark green containers                       |

### Surface Colors
| Token                       | Value     | Usage                                  |
|-----------------------------|-----------|----------------------------------------|
| `surface`                   | `#fff8f6` | Main page background                   |
| `surface-container-low`     | `#faf2f0` | About section background               |
| `surface-container-lowest`  | `#ffffff` | Card backgrounds                       |
| `surface-container`         | `#f4eceb` | Mid-level containers                   |
| `surface-container-high`    | `#eee6e5` | Elevated containers                    |
| `surface-container-highest` | `#e8e1df` | Highest containers                     |
| `surface-variant`           | `#e8e1df` | Image placeholder backgrounds          |
| `background`                | `#fff8f6` | Body background                        |

### Text Colors
| Token                | Value     | Usage                                     |
|----------------------|-----------|-------------------------------------------|
| `on-surface`         | `#1e1b1a` | Primary body text                         |
| `on-surface-variant` | `#504442` | Secondary body text, descriptions         |
| `on-background`      | `#1e1b1a` | Body text default                         |
| `outline`            | `#827472` | Portion labels, muted text                |
| `outline-variant`    | `#d3c3c0` | Borders, dividers (often at 20-30% opacity)|

### Error Colors
| Token             | Value     |
|-------------------|-----------|
| `error`           | `#ba1a1a` |
| `on-error`        | `#ffffff` |
| `error-container` | `#ffdad6` |

---

## Typography

### Font Families
- **Headlines & Display**: `Newsreader` (serif)
- **Body & Labels**: `Plus Jakarta Sans` (sans-serif)

### Type Scale
| Token         | Font Family         | Size  | Weight | Line Height | Letter Spacing |
|---------------|---------------------|-------|--------|-------------|----------------|
| `display-lg`  | Newsreader           | 48px  | 700    | 56px        | -0.02em        |
| `headline-lg` | Newsreader           | 32px  | 600    | 40px        | —              |
| `headline-md` | Newsreader           | 24px  | 600    | 32px        | —              |
| `body-lg`     | Plus Jakarta Sans    | 18px  | 400    | 28px        | —              |
| `body-md`     | Plus Jakarta Sans    | 16px  | 400    | 24px        | —              |
| `label-sm`    | Plus Jakarta Sans    | 13px  | 600    | 18px        | 0.05em         |

---

## Spacing

| Token            | Value    | Usage                        |
|------------------|----------|------------------------------|
| `base`           | `8px`    | Base unit                    |
| `gutter`         | `24px`   | Grid gap                     |
| `margin-mobile`  | `20px`   | Horizontal padding (mobile)  |
| `margin-desktop` | `64px`   | Horizontal padding (desktop) |
| `container-max`  | `1200px` | Max container width          |

---

## Border Radius

| Token     | Value      | Usage                     |
|-----------|------------|---------------------------|
| `DEFAULT` | `0.25rem`  | Chips, small elements     |
| `lg`      | `0.5rem`   | Buttons, inputs           |
| `xl`      | `0.75rem`  | Feature cards             |
| `16px`    | `16px`     | Menu cards (custom)       |
| `full`    | `9999px`   | Logo image (circular)     |

---

## Elevation & Shadows

### Ambient Shadow (`.ambient-shadow`)
```css
box-shadow: 0 10px 25px -5px rgba(62, 39, 35, 0.05),
            0 8px 10px -6px rgba(62, 39, 35, 0.02);
```
- Used on feature cards and menu cards
- Warm-tinted (Deep Chocolate at low opacity), never gray

---

## Section Order (Top to Bottom)

1. **Header / Navbar** (fixed, `bg-surface/95`, backdrop-blur)
2. **Hero Section** (`#beranda`, `bg-surface`)
3. **Tentang Kami / About** (`#tentang-kami`, `bg-surface-container-low`)
4. **Menu Kami / Our Menu** (`#menu`, `bg-surface`)
5. **Footer** (`bg-primary`, dark background)

---

## Component Specifications

### Navbar
- Fixed to top, `bg-surface/95` with `backdrop-blur-md`
- Border bottom: `border-outline-variant/20`
- Logo: `headline-lg` font, bold, `text-primary`
- Nav links: `headline-md` font, semibold. Active link has `border-b-2 border-primary`
- CTA button: `bg-primary text-on-primary`, `label-sm` font, `px-6 py-3`, `rounded-lg`
- Desktop: horizontal layout. Mobile: nav links hidden, CTA stays visible

### Hero
- Min height: `80vh`, flex centered
- Desktop: 2-column grid (`grid-cols-2`), text left + logo image right
- Mobile: stacked, image on top (order-1), text below (order-2)
- H1: `display-lg` text, `text-primary`
- Subtitle: `headline-lg`, `text-primary-container/80`, italic
- Body: `body-lg`, `text-on-surface-variant`, `max-w-lg`
- Two buttons: Primary (`bg-primary`) + Secondary (`border border-primary`, transparent bg)
- Logo image: `w-64 md:w-96`, `rounded-full`, `drop-shadow-xl`

### About / Tentang Kami
- Background: `bg-surface-container-low`
- Section title centered, `headline-lg`
- Description centered, `body-lg`, `max-w-2xl`
- 3-column card grid (`grid-cols-3` on desktop)
- Each card: `bg-surface-container-lowest`, `p-8`, `rounded-xl`, ambient shadow
- Card border: `border-outline-variant/30`
- Material icon (filled), `text-4xl text-primary`
- Card title: `headline-md`
- Card description: `body-md`, `text-on-surface-variant`

### Menu Cards
- 4-column grid on desktop (`lg:grid-cols-4`), 2-column on tablet (`sm:grid-cols-2`), 1 on mobile
- Card: `bg-surface-container-lowest`, `rounded-[16px]`, ambient shadow
- Card border: `border-outline-variant/20`
- Image container: `aspect-square`, `bg-surface-variant`, image `object-cover`
- Card body: `p-6`
- Title row: title (`headline-md`) + optional badge chip (`bg-primary/5 text-primary`)
- Description: `body-md`, `text-on-surface-variant`
- Price row: portion label (`label-sm text-outline`) + price (`headline-md text-primary font-semibold`)
- CTA button: full width, `border border-primary`, transparent bg, with WhatsApp icon
- Hover: `hover:bg-primary hover:text-on-primary`

### Footer
- Background: `bg-primary` (dark chocolate)
- Padding: `py-12`
- Desktop: flex row, `justify-between`
- Mobile: flex column, centered
- Logo: `headline-md`, `text-primary-fixed`
- Links: `text-primary-fixed-dim/80`, hover to `text-primary-fixed`
- Copyright: `text-on-primary`, `body-md`

### Buttons
- Primary: `bg-primary text-on-primary`, `rounded-lg`, `px-8 py-4`
- Secondary: `bg-transparent border border-primary text-primary`, `rounded-lg`, `px-8 py-4`
- Nav CTA: `px-6 py-3`
- Card CTA: `w-full py-3`, outline style with hover fill

### Chips / Badges
- Background: `bg-primary/5`
- Text: `text-primary`, `label-sm`
- Padding: `px-2 py-1`
- Border radius: default (4px)

---

## Responsive Behavior

### Breakpoints
- Mobile: default (< 640px)
- Tablet: `sm:` (≥ 640px)
- Desktop: `md:` (≥ 768px) and `lg:` (≥ 1024px)

### Mobile Adaptations
- Navbar: hide nav links, show only logo + CTA button (add hamburger for mobile menu)
- Hero: single column, image on top, text below
- About cards: single column stack
- Menu cards: single column
- Footer: column layout, centered text
- Horizontal padding: `px-margin-mobile` (20px)

### Desktop Adaptations
- Navbar: show all links horizontally
- Hero: 2-column grid
- About cards: 3-column grid
- Menu cards: 4-column grid (2 on tablet)
- Footer: row layout, space-between
- Horizontal padding: `px-margin-desktop` (64px)
