# Krishna Babu Nadella — Portfolio

A 3D, interactive portfolio built with **React + Vite + Tailwind CSS**, featuring a live Three.js
neural-network background, 3D tilt cards, and scroll-triggered motion (Framer Motion).

## Tech stack

- **React 18** + **Vite 5** — app shell & dev server
- **Tailwind CSS 3** — styling / design tokens
- **Three.js** — animated 3D particle/neural-network background (hero + contact sections)
- **Framer Motion** — scroll reveals and micro-interactions
- **lucide-react** — icons

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploying to GitHub Pages (same host as your current portfolio)

1. `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Set `base: '/<repo-name>/'` in `vite.config.js`.
4. Run `npm run deploy`.

Netlify or Vercel also work out of the box — just point them at this repo with build command
`npm run build` and output directory `dist`.

## Editing content

Everything text-based (name, summary, skills, projects, education, certifications, contact info)
lives in one place: **`src/data/portfolioData.js`**. Edit that file and the whole site updates —
no need to touch component files for content changes.

## Project structure

```
src/
  components/
    Navbar.jsx            Fixed glass navbar with mobile menu
    Hero.jsx               Hero section with 3D background + CTAs
    NeuralBackground.jsx   Three.js particle/neural-network canvas
    About.jsx               Summary + pillars
    Skills.jsx               Skill groups (tilt cards)
    Projects.jsx             Project case studies (tilt cards)
    Experience.jsx           Education timeline + achievements
    Certifications.jsx       Certification grid
    Contact.jsx               Contact CTA + 3D background
    Footer.jsx
    TiltCard.jsx              Reusable mouse-based 3D tilt wrapper
    Reveal.jsx                Reusable scroll-reveal wrapper (Framer Motion)
  data/
    portfolioData.js        All resume content in one place
  App.jsx
  main.jsx
  index.css
```
