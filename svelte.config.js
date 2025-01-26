import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug'; 

/** @type {import('@sveltejs/kit').Config} */

const mdsvexOptions = {
	extensions: ['.md', '.mdx'],
	rehypePlugins: [
		rehypeSlug, 
		
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
			entries: ['/code-highlight-style', '/elements', '/neural-network-design']
		},		  
	},
	extensions: ['.svelte', '.svx', '.md', '.mdx'],
};

export default config;
