<div align="center">

# 🌐 Portfolio Website — nitinkumar.me
### The GitHub Pages site behind the extension pages

**One repo, two extension pages: AITestNova and ApiDiya, in a shared design.**

[![Live Site](https://img.shields.io/badge/Live_Site-nitinkumar.me-0d9488?style=for-the-badge)](https://nitinkumar.me)
[![Stack](https://img.shields.io/badge/Stack-HTML_%7C_CSS_%7C_JS-0f172a?style=for-the-badge)](https://github.com/1nc24cs146-cmyk/code-genie-folio)

[🌐 Visit the site](https://nitinkumar.me) •
[📄 Pages](#-pages) •
[🎨 Shared design](#-shared-design) •
[🚀 Preview locally](#-preview-locally)

</div>

---

## 📄 Pages

| Page | Extension | Live URL | README |
|---|---|---|---|
| 🧪 **AITestNova** | `aitestnova.aitestnova` v0.3.3 | https://nitinkumar.me/aitestnova | [aitestnova/README.md](aitestnova/README.md) |
| 🪔 **ApiDiya** | `apidiya.api-testing-studio` v0.2.1 | https://nitinkumar.me/apidiya | [apidiya/README.md](apidiya/README.md) |

The repo also serves the portfolio homepage at https://nitinkumar.me. Each page is a single self-contained `index.html` — HTML, CSS and JS, no build step — and each folder has its own README with that page's details.

## 🎨 Shared design

- Warm paper background, IBM Plex type, teal accent, sticky nav with a version pill
- Each page has its own logo inlined as SVG: the AI-chart mark for AITestNova, the `{ }` mark for ApiDiya — small in the nav wordmark, large in the hero
- Tighter layout (1240px wrap, 40px section gaps) with CSS-only 3D animation: floating perspective shapes in the hero, 3D-tilting panels on hover, swaying hero logos, lifting cards — no JavaScript library, shapes hidden on small screens, all animation off under `prefers-reduced-motion`
- Every page has a **Leave a review** section linking straight to its extension's Open VSX page (reviews are written there; no separate review URL exists), and a live download box that fetches the current count from the Open VSX API on every load
- Page paths are lowercase (`aitestnova`, `apidiya`) because GitHub Pages paths are case-sensitive

## 🚀 Preview locally

```bash
# from the repo root — any static server works
python3 -m http.server 8000
# then open http://localhost:8000/aitestnova/ or http://localhost:8000/apidiya/
```

## 🌍 Deploy

Hosted on GitHub Pages from this repo (`main` branch). After a push, the live pages can lag a few minutes behind the repo — hard-refresh if you just pushed and a page still looks old.

## 👨‍💻 Author

**NitinKumar Hiremath** — [LinkedIn](https://www.linkedin.com/in/nitinkumar-h-701157381/) · [GitHub](https://github.com/1nc24cs146-cmyk)
