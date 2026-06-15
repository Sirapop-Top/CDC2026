# CDC 2026 — Systematic Trading Pre-Study Dashboard

A bilingual (EN/TH) interactive learning platform for the **CDC 2026 Systematic Trading curriculum**, covering trader psychology, technical analysis, system design, risk management, Bitcoin fundamentals, and investment planning.

---

## Features

- **6 Learning Modules** covering the full CDC 2026 pre-study syllabus
- **10 Reference Books** with expanded 10-point key insights (English & Thai)
- **Bilingual Support** — full EN/TH toggle throughout the dashboard
- **Progress Tracking** — persistent book-read and module-completion tracking via `localStorage`
- **Interactive Tools** built into each module:
  - M1: Psychology self-assessment quiz
  - M2: Interactive chart pattern gallery
  - M3: Monte-Carlo trade expectancy simulator with equity curve chart
  - M4: Position sizing / CPR risk calculator
  - M5: BTC / Satoshi / USD / THB live converter
  - M6: SIP compound-interest visualizer with animated chart

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Icons | Lucide React |
| Deployment | GitHub Pages via `gh-pages` |

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Type-check + production build
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at **http://localhost:5173/** by default.

---

## Deployment to GitHub Pages

```bash
# Build and push to gh-pages branch
npm run deploy
```

This runs `npm run build` first (via the `predeploy` hook) then pushes the `dist/` folder to the `gh-pages` branch.

---

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx    — Main progress overview + book catalog
│   ├── Module1.tsx      — Awakening: Money & Mindset (+ Quiz)
│   ├── Module2.tsx      — Foundation: Technical Analysis (+ Pattern Gallery)
│   ├── Module3.tsx      — Builder: System Design (+ Expectancy Simulator)
│   ├── Module4.tsx      — Manager: Risk Management (+ Position Sizer)
│   ├── Module5.tsx      — Bitcoin & Markets (+ BTC Converter)
│   ├── Module6.tsx      — Pro Tools: Cash Flow (+ SIP Visualizer)
│   ├── Navbar.tsx       — Top navigation bar
│   └── Sidebar.tsx      — Left sidebar with module links
├── data/
│   └── content.ts       — All bilingual text, book data, quiz Qs, and chart patterns
├── App.tsx              — Root component with state management and routing
├── main.tsx             — React entry point
└── index.css            — Global styles and Tailwind CSS theme tokens
```

---

## Content Data

All content (text, books, quiz questions, chart patterns) is centralised in [`src/data/content.ts`](src/data/content.ts).

- **10 Reference Books** — each with a bilingual summary and 10 key insights
- **5 Quiz Questions** — scenario-based psychology assessment for Module 1
- **10 Chart Patterns** — validation and invalidation rules for Module 2

---

## License

© 2026 Chaloke.com — CDC Systematic Trading Curriculum. All rights reserved.
