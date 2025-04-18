# Personal Website Using SvelteKit

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

## Features

- SvelteKit: Fast, modern frontend framework.
- Tailwind CSS: Utility-first styling for clean UI.
- ShadCN-Svelte: Pre-designed components for a polished look.
- Markdown Support: Easy article creation and publishing.
- Dark Mode: Auto-detects system preferences.
- Prism.js: Syntax highlighting for code blocks.
- Clipboard.js: One-click code snippet copying.
- Performance: Optimized with server-side rendering (SSR).
- Minimalist UI: Inspired by [next-shadcn-blog](https://github.com/2wndrhs/next-shadcn-blog).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/) (optional, recommended)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Phanith-LIM/myblog-svelte.git
cd myblog-sveltekit
pnpm i
```

## Development

Run the development server:

```bash
pnpm run dev
# Open in browser
pnpm run dev -- --open
```

## Build & Preview

```bash
pnpm run build  # Production build
pnpm run preview  # Preview locally
```

## Deployment

Deploy using SvelteKit adapters:

| Platform       | Adapter                        |
|----------------|--------------------------------|
| Netlify        | `@sveltejs/adapter-netlify`    |
| Vercel         | `@sveltejs/adapter-vercel`     |
| Cloudflare     | `@sveltejs/adapter-cloudflare` |
| Static Hosting | `@sveltejs/adapter-static`     |

Install an adapter and update `svelte.config.js`:

```bash
pnpm i -D @sveltejs/adapter-vercel
```

## UI Design

Inspired by [next-shadcn-blog](https://github.com/2wndrhs/next-shadcn-blog), but built with SvelteKit.

### Key Differences

- Uses Svelte instead of Next.js.
- Integrates shadcn-svelte for UI components.
- Optimized for SvelteKit SSR and SPA.
- Lightweight and performant setup.

### Updates

- Credits to [next-shadcn-blog](https://github.com/2wndrhs/next-shadcn-blog).
- Highlights SvelteKit’s advantages over Next.js.
- Improved formatting for readability.
