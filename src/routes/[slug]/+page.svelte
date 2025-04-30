<script lang="ts">
import { Separator } from "$lib/components/ui/separator/index.js";
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

<p class="text-3xl font-semibold text-center text-primary">
	{data.meta.title}
	<br>
	<span class="text-sm text-gray-500 font-normal space-x-2">
		<span>{ dayjs(data.meta.date).format('DD MMM, YYYY') } </span>
		<span> | </span>
		<span>{ data.meta.readingTime?.text } </span>
	</span>
	
	<!-- <span class="flex justify-center space-x-2 pt-2">
		{#each data.meta.categories as category}
			<Badge variant="secondary">&num;{category}</Badge>
		{/each}
	</span> -->
</p>

<Separator />
<article class="px-2 md:px-0">
	<div class="max-w-screen-lg mx-auto">
		<svelte:component this={data.content} />
	</div>
</article>