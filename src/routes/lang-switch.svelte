<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '$lib/components/ui/dropdown-menu/index';
	import { writable } from 'svelte/store';
	import { Dot } from 'lucide-svelte';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { setLanguageTag, languageTag } from '$lib/paraglide/runtime';
	import { cn } from '$lib/utils';


	onMount(() => {
		console.log($lang);
	});

	// Language options
	const LANG_ITEM: { name: string, value: AvailableLanguageTag }[] = [
		{ name: 'ខ្មែរ', value: 'kh' },
		{ name: 'English', value: 'en' },
	];

	export const lang = writable<AvailableLanguageTag>('en');
	let currentLang = $derived(languageTag());

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
		setLanguageTag(newLanguage);
	}
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="ghost" size="icon" class="h-8 w-8 relative">
			{#if currentLang === 'kh'}
				<h1>ខ្មែរ</h1>
			{:else}
				<h1>EN</h1>
			{/if}
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent align="end">
		{#each LANG_ITEM as item (item.value)}
			<!-- svelte-ignore attribute_quoted -->
			<DropdownMenuItem 
				onclick={() => switchToLanguage(item.value)}
				class="{cn(
					"flex cursor-pointer items-center gap-2",
					item.value === 'kh' ? 'font-Battambang' : ''
				)}"
				>
				<span>{item.name}</span>
				{#if currentLang === item.value}
					<Dot />
				{/if}
			</DropdownMenuItem>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
