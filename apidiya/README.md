<div align="center">

# 🪔 ApiDiya — Website
### The landing page for the ApiDiya extension

**A Postman-style testing workspace for VS Code and Antigravity — send requests, save collections, run test suites, and mock APIs locally, with no cloud and no account.**

[![Live Site](https://img.shields.io/badge/Live_Site-nitinkumar.me%2Fapidiya-0d9488?style=for-the-badge)](https://nitinkumar.me/apidiya)
[![Extension](https://img.shields.io/badge/Extension-v0.2.1-8b5cf6?style=for-the-badge)](https://open-vsx.org/extension/apidiya/api-testing-studio)
[![Stack](https://img.shields.io/badge/Stack-HTML_%7C_CSS_%7C_JS-0f172a?style=for-the-badge)](https://github.com/1nc24cs146-cmyk/code-genie-folio)

[🌐 Visit the page](https://nitinkumar.me/apidiya) •
[✨ Sections](#-whats-on-the-page) •
[🔄 Live numbers](#-how-the-numbers-stay-live) •
[🚀 Preview locally](#-preview-locally)

</div>

---

## 📊 At a glance

| | |
|---|---|
| **Live page** | https://nitinkumar.me/apidiya |
| **Extension** | `apidiya.api-testing-studio` — v0.2.1 on Open VSX |
| **Downloads** | 180 on Open VSX (4 Nov 2026 — the live count is shown on the page itself) |
| **Reviews** | 0 so far — the page links straight to the Open VSX review form |
| **Editors** | VS Code and Antigravity |
| **Stack** | One self-contained `index.html` — HTML, CSS and JS, no build step |

## 🌟 What it is

The public page for ApiDiya: what the extension does, how to install it, the local-only storage promise, what it deliberately does not do, and where to leave a review — all in one page, in the same warm paper design as the AITestNova page.

## ✨ What's on the page

| Section | What you get |
|---|---|
| 🦸 **Hero** | Version pill, the `{ }` logo (large on the page, small in the nav), a panel preview, and a live download box |
| ⚙️ **What it does** | Send requests, save collections, run test suites, and mock APIs — a Postman-style workspace inside the editor |
| 👣 **Three steps, then send** | Install, open the sidebar, send — the short path from zero to first request |
| 🔒 **Stored on your device only** | Collections, environments, suites, runs, mocks and history stay in local storage with no sync keys; auth secrets go to the OS keychain, never into stored requests |
| 🚫 **What it does not do** | The limits, stated plainly, so nobody installs it expecting something else |
| ⬇️ **Get ApiDiya in your sidebar** | Install links and the sidebar download count, which Antigravity's own Installation panel does not show |
| ⭐ **Leave a review** | A button straight to the extension's Open VSX page, where reviews are written (sign-in to Open VSX needed) |

## 🔄 How the numbers stay live

The page fetches `https://open-vsx.org/api/apidiya/api-testing-studio` in the browser on every load and updates the version and download count shown — the numbers in this README are only a snapshot from 4 Nov 2026. If the fetch fails (offline, or the listing is down), the page keeps its fallback text instead of breaking.

## 🎨 Design notes

- Warm paper background, IBM Plex type, teal accent — shared with the AITestNova page
- Tighter layout (1240px wrap, 40px section gaps) with CSS-only 3D animation: floating perspective shapes in the hero, a 3D-tilting panel on hover, a swaying hero logo, and lifting cards — no JavaScript library, shapes hidden on small screens, all animation off under `prefers-reduced-motion`
- The page's paths are lowercase (`apidiya`) because GitHub Pages paths are case-sensitive

## 🚀 Preview locally

```bash
# from this folder — any static server works, or just open the file
python3 -m http.server 8000
# then open http://localhost:8000/
```

## 🌍 Deploy

Hosted on GitHub Pages from this repo. After a push, the live page can lag a few minutes behind the repo — hard-refresh if you just pushed and the page still looks old.

## 👨‍💻 Author

**NitinKumar Hiremath** — [LinkedIn](https://www.linkedin.com/in/nitinkumar-h-701157381/) · [GitHub](https://github.com/1nc24cs146-cmyk)
