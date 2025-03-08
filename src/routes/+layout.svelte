<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'
	import '../app.css';
	import Header from './header.svelte';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header />
	<div class="py-16 pl-safe-left pr-safe-right">
		<div class="mx-auto w-full max-w-page">
		{@render children()}
		</div>
	</div>
</ParaglideJS>