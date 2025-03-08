import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug'; 

import remarkMath from 'remark-math';
import rehypeKatexSvelte from "rehype-katex-svelte";

/** @type {import('@sveltejs/kit').Config} */

const mdsvexOptions = {
	extensions: ['.md', '.mdx'],
	remarkPlugins: [
		remarkMath,
	],
	rehypePlugins: [
		rehypeSlug, 
		rehypeKatexSvelte,
		{
			macros: {
			  "\\CC": "\\mathbb{C}",
			  "\\vec": "\\mathbf",
			},
		},
	],
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*',
		},
		prerender: {
			entries: ['/src/posts']
		},		  
	},
	extensions: ['.svelte', '.svx', '.md', '.mdx'],
};

export default config;
