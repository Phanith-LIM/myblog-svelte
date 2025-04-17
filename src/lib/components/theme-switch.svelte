<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '$lib/components/ui/dropdown-menu/index';
	import { Dot, Monitor, Moon, Sun } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/themes';

	// Theme options
	const THEME_ITEM = [
		{ name: 'Light', value: 'light', icon: Sun },
		{ name: 'Dark', value: 'dark', icon: Moon },
		{ name: 'System', value: 'system', icon: Monitor },
	];

	// // Use writable store for theme
	// const theme = writable('light');


	onMount(() => {
		const cookieTheme = document.cookie.split('; ').find((row) => row.startsWith('theme='));
		if (cookieTheme) {
			themeStore.set(cookieTheme.split('=')[1]);

		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			themeStore.update((currentTheme) => {
				if (currentTheme === 'system') {
					const newSystemTheme = e.matches ? 'dark' : 'light';
					document.documentElement.classList.remove('light', 'dark');
					document.documentElement.classList.add(newSystemTheme);
				}
				return currentTheme;
			});
		});
	});
	
	function setTheme(newTheme: string) {
		themeStore.set(newTheme);
		if (typeof window !== 'undefined') {
			document.documentElement.classList.remove('light', 'dark');
			if (newTheme === 'system') {
				document.cookie = `theme=system;max-age=31536000;path=/`;
				document.documentElement.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
			} else {
				document.documentElement.classList.add(newTheme);
				document.cookie = `theme=${newTheme};max-age=31536000;path=/`;
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
				{#if $themeStore === item.value}
					<Dot />
				{/if}
			</DropdownMenuItem>
		{/each}
	</DropdownMenuContent>
</DropdownMenu>
