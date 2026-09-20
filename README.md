# 🌐 Dynamic 7-Day Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Site-Vercel-black?style=for-the-badge&logo=vercel)](https://krishna59-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-dkrishna--59-181717?style=for-the-badge&logo=github)](https://github.com/dkrishna-59)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Krishna-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/krishnarasu-d-6860b5301/)

A high-performance, responsive developer portfolio featuring a **7-Day Dynamic UI Engine** that automatically switches design systems based on the user's current day of the week, complete with tactile feedback, spring physics, and manual theme testing controls.

---

## 🚀 Live Demo

Check out the live website deployed on Vercel:  
👉 **[krishna59-portfolio.vercel.app](https://krishna59-portfolio.vercel.app/)**

---

## 🎨 The 7-Day UI Engine

The core highlight of this portfolio is its daily adaptive design system. Built with vanilla JavaScript and CSS Custom Properties, it evaluates `new Date().getDay()` to style the interface without any runtime framework overhead:

| Day | UI Design System | Key Visual Characteristics |
| :--- | :--- | :--- |
| **Sunday** | **Material You (M3)** | Dynamic pastel palettes, soft squircle cards (28px radius), pill badges, fluid spring physics |
| **Monday** | **Bento Grid** | Modular asymmetric content blocks, clean borders, modern SaaS aesthetic |
| **Tuesday** | **Glassmorphism** | Deep frosted glass blur (`backdrop-filter: blur(20px)`), translucent layers, sleek borders |
| **Wednesday**| **Neubrutalism** | High-contrast 3px solid borders, hard 4px unblurred drop shadows, high-energy pop accents |
| **Thursday** | **Swiss Minimalism** | Monochromatic black & white palette, rigid typography grid, generous whitespace |
| **Friday** | **Claymorphism** | Soft 3D inflated surfaces, layered inner/outer shadows, pill-soft curvature |
| **Saturday** | **Linear Dark Mode** | Obsidian matte dark surfaces, neon gradient borders, hairline dividers, monospace accents |

> *A floating theme dock at the bottom of the screen allows visitors to manually test and toggle across all 7 styles on any day.*

---

## 🛠️ Built With

* **Markup:** Semantic HTML5 with accessibility attributes and Open Graph metadata
* **Styling:** CSS3, Custom Properties (CSS variables), Flexbox, CSS Grid, Media Queries
* **Animations:** Cubic-bezier spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`), CSS Keyframes
* **Interactivity:** Vanilla JavaScript (ES6+), DOM Manipulation, LocalStorage, IntersectionObserver
* **Tooling & IDE:** Android Studio (IntelliJ IDEA Engine)
* **Version Control:** Git & GitHub
* **Deployment & CI/CD:** Vercel (Continuous Deployment from `main`)

---

## 📂 Project Structure

```text
portfolio/
├── index.html        # Semantic layout, sections, navigation & interactive dock
├── style.css         # Android 17 design tokens, animations & 7-day theme rules
├── script.js         # Date engine, manual theme override HUD & ripple interactions
├── resume.pdf        # Downloadable resume asset
└── README.md         # Documentation & setup guide
