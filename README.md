# PERSONAL WEBSITE USING SVELTEKIT

<img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white" /> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />

## Preview


## 📌 Features

- ⚡ **SvelteKit** – Modern and fast frontend framework.
- 🎨 **Tailwind CSS** – Utility-first styling for a sleek UI.
- 🧩 **ShadCN-Svelte** – Beautifully designed components for a polished look.
- 📝 **Markdown Support** – Write and publish articles with ease.
- 🌙 **Dark Mode** – Auto-detects system preferences.
- 🔹 **Prism.js** – Syntax highlighting for code blocks.
- 📋 **Clipboard.js** – One-click copy for code snippets.
- 🚀 **Optimized for Performance** – Fast builds and server-side rendering (SSR).
- 🎭 **Minimalist UI** – Inspired by [`next-shadcn-blog`](https://github.com/2wndrhs/next-shadcn-blog).

---

## 🛠️ Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/) *(optional, but recommended)*

---

### 🚀 Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/yourusername/myblog-sveltekit.git
cd myblog-sveltekit
pnpm i
```

## 🏗️ Development
Run the development server:
```
pnpm run dev

# Start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## 📦 Build & Preview
```bash
pnpm run build  # Production build
pnpm run preview  # Preview build locally
```

## 🌍 Deployment
You can deploy the app to various platforms using SvelteKit adapters:
| Platform | Adapter |
| --- | --- |
| Netlify | `@sveltejs/adapter-netlify`
| Vercel | `@sveltejs/adapter-vercel`
| Cloudflare | `@sveltejs/adapter-cloudflare`
| Static Hosting | `@sveltejs/adapter-static`

To use an adapter, install it and update `svelte.config.js`:
```bash
pnpm i -D @sveltejs/adapter-vercel
```

## 🎨 UI Design
The UI is heavily inspired by [`next-shadcn-blog`](https://github.com/2wndrhs/next-shadcn-blog), but adapted to SvelteKit.

Key Differences:
- Rewritten in Svelte instead of Next.js.
- Uses shadcn-svelte for UI components.
- Optimized for SvelteKit SSR & SPA.
- Improved performance and lightweight setup.

### 🔥 Key Updates:
- **UI Design section** → Credits [`next-shadcn-blog`](https://github.com/2wndrhs/next-shadcn-blog).
- **Key Differences** → Highlights SvelteKit’s advantages over Next.js.
- **Better Formatting** → Improved readability.
