<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '$lib/components/ui/dropdown-menu/index';
	import { Dot, Monitor, Moon, Sun } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	// Theme options
	const THEME_ITEM = [
		{ name: 'Light', value: 'light', icon: Sun },
		{ name: 'Dark', value: 'dark', icon: Moon },
		{ name: 'System', value: 'system', icon: Monitor },
	];

	export const theme = writable('system');
	function setTheme(newTheme: string) {
		theme.set(newTheme);
		if (typeof window !== 'undefined') {
			document.documentElement.classList.remove('light', 'dark');
			if (newTheme === 'system') {
				const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				document.documentElement.classList.add(systemTheme);
			} else {
				document.documentElement.classList.add(newTheme);
			}
		}
	}
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="ghost" size="icon" class="h-8 w-8 relative">
			<Sun class="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon class="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent align="end">
		{#each THEME_ITEM as item (item.value)}
			<DropdownMenuItem class="flex cursor-pointer items-center gap-2" onSelect={() => setTheme(item.value)}>
				<item.icon class="h-4 w-4" />
				<span>{item.name}</span>
				{#if $theme === item.value}
					<Dot />
				{/if}
			</DropdownMenuItem>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
