<script lang="ts">
	import { Badge } from "$lib/components/ui/badge/index.js";
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} - My Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="px-6 md:px-0">
	<hgroup class="mb-4 space-y-3 text-center">
		<h1 class="text-4xl font-bold text-primary">{data.meta.title}</h1>
		<p class="text-sm text-gray-500">Published on {data.meta.date}</p>
		<div class="flex justify-center space-x-2">
			{#each data.meta.categories as category}
				<Badge>{category}</Badge>
			{/each}
		</div>
	</hgroup>

	<div class="divider mb-6"></div>

	<div class="pb-10">
		<svelte:component this={data.content} />
	</div>
</article>
