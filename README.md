# Maison Verde — Restaurant Landing Page

A polished, fully responsive restaurant landing page built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

## Live Preview

Open `Restaurant.html` directly in any modern browser.

## Features

- **Hero section** — full-screen background image with a parallax scroll effect and a "Tonight's Special" panel
- **Quick info bar** — hours, address, and phone number in a floating card
- **Experience section** — three-column feature cards (market plates, open-fire cooking, polished service)
- **Atmosphere band** — dark editorial layout with a two-image gallery
- **Menu section** — six dish cards filterable by category (All / Starters / Mains / Desserts), each opening a detailed modal with ingredients, dietary notes, and pairing suggestions
- **Private dining band** — full-bleed image with descriptive copy
- **Guest reviews** — three quote cards
- **Reservation form** — six-field booking form with client-side confirmation message
- **Visit / contact section** — phone, email, and hours in a dark footer band
- **Scroll-reveal animations** — elements fade and slide in via `IntersectionObserver`
- **Sticky header** — transparent over the hero, frosted-glass when scrolled
- **Mobile hamburger nav** — collapses at 920 px, single-column layout at 620 px
- **Accessibility** — ARIA labels, keyboard navigation for menu cards and modal (`Enter`, `Space`, `Escape`), `role="dialog"` on the modal, `prefers-reduced-motion` support

## Project Structure

```
Restaurant/
├── Restaurant.html   # Markup and page structure
├── Restaurant.css    # All styles (custom properties, responsive breakpoints)
└── Restaurant.js     # Interactivity (nav, filters, modal, scroll reveal, form)
```

## Tech Stack

| Layer      | Detail                                      |
|------------|---------------------------------------------|
| Markup     | Semantic HTML5                              |
| Styles     | Vanilla CSS with custom properties (no preprocessor) |
| Scripts    | Vanilla JavaScript (ES2020, no libraries)   |
| Images     | Unsplash CDN                                |
| Fonts      | Inter via system font stack                 |

## Design Tokens (CSS custom properties)

| Variable        | Value     | Usage                    |
|-----------------|-----------|--------------------------|
| `--ink`         | `#171410` | Body text                |
| `--muted`       | `#756d62` | Secondary text           |
| `--paper`       | `#f8f3ea` | Page background          |
| `--forest`      | `#23473d` | Primary green accent     |
| `--forest-dark` | `#122b25` | Dark sections            |
| `--tomato`      | `#a94235` | CTA buttons, highlights  |
| `--gold`        | `#d3a95b` | Labels, links on dark bg |

## Menu Items

| Dish                  | Category | Price |
|-----------------------|----------|-------|
| Burrata Verde         | Starter  | $16   |
| Garden Citrus Salad   | Starter  | $14   |
| Handmade Pappardelle  | Main     | $27   |
| Oak-Grilled Ribeye    | Main     | $42   |
| Vanilla Panna Cotta   | Dessert  | $12   |
| Dark Chocolate Torte  | Dessert  | $13   |

## Responsive Breakpoints

| Breakpoint | Layout changes                                              |
|------------|-------------------------------------------------------------|
| `≤ 920px`  | Hamburger nav, single-column sections, 2-col menu grid      |
| `≤ 620px`  | Single-column menu grid, stacked form fields, full-width buttons |

## Getting Started

No build step required.

```bash
# Clone or download the repo, then open the file:
open Restaurant.html       # macOS
start Restaurant.html      # Windows
xdg-open Restaurant.html   # Linux
```

Or drag `Restaurant.html` into any browser window.

## Customisation

- **Restaurant name / branding** — edit `<title>`, `.brand`, and footer text in `Restaurant.html`
- **Menu items** — add or remove `<article class="menu-card" …>` blocks; all dish data lives in `data-*` attributes
- **Color palette** — change the CSS custom properties in the `:root` block at the top of `Restaurant.css`
- **Reservation form** — the submit handler in `Restaurant.js` (`reservationForm.addEventListener`) currently shows a client-side confirmation; replace it with a `fetch` call to your backend or a service like Formspree
- **Images** — swap the Unsplash URLs with your own hosted images

## Browser Support

Works in all evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `backdrop-filter` (no fallback on older Firefox) and `IntersectionObserver` (available in all modern browsers).
