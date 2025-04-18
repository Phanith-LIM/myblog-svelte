
# គេហទំព័រផ្ទាល់ខ្លួនដោយប្រើ SvelteKit

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

## លក្ខណៈពិសេស

- **SvelteKit**: ក្របខ័ណ្ឌខាងមុខទំនើប និងលឿន។
- **Tailwind CSS**: ការរចនាបែបឧបករណ៍សម្រាប់ចំណុចប្រទាក់ស្អាត។
- **ShadCN-Svelte**: សមាសធាតុរចនាជាមុនសម្រាប់រូបរាងប្រកបដោយភាពទាក់ទាញ។
- **គាំទ្រ Markdown**: ការបង្កើត និងបោះពុម្ពអត្ថបទបានយ៉ាងងាយស្រួល។
- **របៀបងងឹត**: រកឃើញចំណូលចិត្តប្រព័ន្ធដោយស្វ័យប្រវត្តិ។
- **Prism.js**: ការបន្លិចវាក្យសម្ព័ន្ធសម្រាប់ប្លុកកូដ។
- **Clipboard.js**: ចម្លងកូដដោយចុចតែម្តង។
- **Katex**: ការបង្ហាញសមីការដោយប្រើ LaTeX។
- **រចនាដើម** [next-shadcn-blog](https://github.com/2wndrhs/next-shadcn-blog)

## ចាប់ផ្តើម

### តម្រូវការជាមុន

- [Node.js](https://nodejs.org/) (ណែនាំ v16+)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/) (ស្រេចចិត្ត ណែនាំ)

### ការដំឡើង

ចម្លងឃ្លាំង និងដំឡើងភាពអាស្រ័យ៖

```bash
git clone https://github.com/Phanith-LIM/myblog-svelte.git
cd myblog-sveltekit
pnpm i
```

## ការអភិវឌ្ឍ

ដំណើរការម៉ាស៊ីនមេអភិវឌ្ឍ៖

```bash
pnpm run dev
# បើកក្នុងកម្មវិធីរុករក
pnpm run dev -- --open
```

## ការបង្កើត និងមើលជាមុន

```bash
pnpm run build  # ការបង្កើតសម្រាប់ផលិតកម្ម
pnpm run preview  # មើលជាមុននៅលើម៉ាស៊ីនមូលដ្ឋាន
```

## ការដាក់ឱ្យប្រើប្រាស់

ដាក់ឱ្យប្រើប្រាស់ដោយប្រើអាដាប់ទ័រ SvelteKit៖

| វេទិកា       | អាដាប់ទ័រ                        |
|----------------|--------------------------------|
| Netlify        | `@sveltejs/adapter-netlify`    |
| Vercel         | `@sveltejs/adapter-vercel`     |
| Cloudflare     | `@sveltejs/adapter-cloudflare` |
| ការបង្ហោះឋិតិវន្ត | `@sveltejs/adapter-static`     |

ដំឡើងអាដាប់ទ័រ និងធ្វើបច្ចុប្បន្នភាព `svelte.config.js`៖

```bash
pnpm i -D @sveltejs/adapter-vercel
```

## ការរចនាចំណុចប្រទាក់

រចនាដើម [next-shadcn-blog](https://github.com/2wndrhs/next-shadcn-blog) ជាប្រើប្រាស់ NextJs ប៉ុន្តែបង្កើតដោយប្រើប្រាស់ SvelteKit។ នឹងអនុញ្ញាតអ្នកអាច Copy កូដពីគេហទំព័រដើមបានយ៉ាងងាយស្រួល។ ជាមួយគ្នានេះក៏គេហទំព័រនេះក៏មានការបង្ហាញសមីការដោយប្រើ LaTeX ដែលអាចបង្ហាញសមីការដោយប្រើ LaTeX បានយ៉ាងងាយស្រួល។