<script lang="ts">
import { Badge } from "$lib/components/ui/badge/index.js";
import dayjs from "dayjs";

export let data;

</script>

<svelte:head>
	<title>{data.meta.title} - My Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="article:published_time" content={data.meta.date} />
	{#if data.meta.thumbnail}
		<meta property="og:image" content={data.meta.thumbnail} />
	{/if}
</svelte:head>

<article class="px-2 md:px-0">
	<hgroup class="text-center">
		<h1 class="text-3xl font-bold text-primary">{data.meta.title}</h1>
		<p class="text-sm text-gray-500">Published on { dayjs(data.meta.date).format('dddd, DD-MM-YYYY') }</p>
		<div class="flex justify-center space-x-2">
			{#each data.meta.categories as category}
				<Badge>&num;{category}</Badge>
			{/each}
		</div>
	</hgroup>
	<hr>
	<div class="pb-10 max-w-screen-lg mx-auto">
		<svelte:component this={data.content} />
	</div>
</article>