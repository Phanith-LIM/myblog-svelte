import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug'; 
import readingTime from "mdsvex-reading-time";

import remarkMath from 'remark-math';
import rehypeKatexSvelte from "rehype-katex-svelte";

/** @type {import('@sveltejs/kit').Config} */

const mdsvexOptions = {
	extensions: ['.md', '.mdx'],
	remarkPlugins: [
		remarkMath,
		readingTime,
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
			entries: [
				'/c-translate',
				'/reflex-your-self',
				'/neural-network-design',
				'/linear-regression',
				'/7-segment',
				'/audio-augmentation',
				'/pydantic-llm',
				'/run-llm'
			],
			handleHttpError: 'warn',
		},		  
	},
	extensions: ['.svelte', '.svx', '.md', '.mdx'],
};

export default config;
