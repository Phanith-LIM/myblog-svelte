<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import Giscus from "@giscus/svelte";
	import dayjs from "dayjs";

	export let data;

	let giscusTheme = "light"; // change based on your theme logic if needed
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

<article class="px-4 md:px-0 max-w-3xl mx-auto">
	<h1 class="text-3xl font-bold text-primary mb-2">{data.meta.title}</h1>
	<p class="text-sm text-gray-500 mb-4">
		Published on {dayjs(data.meta.date).format("dddd, DD-MM-YYYY")}
	</p>

	<div class="flex flex-wrap gap-2 mb-4">
		{#each data.meta.categories as category}
			<Badge># {category}</Badge>
		{/each}
	</div>

	<hr class="my-6" />

	<div class="prose dark:prose-invert max-w-none pb-10">
		<svelte:component this={data.content} />
	</div>

	<hr class="my-10" />

	<Giscus
		id="comments"
		repo="Phanith-LIM/myblog-svelte"
		repoId="R_kgDONvurpQ"
		category="Announcements"
		categoryId="DIC_kwDOF1L2fM4B-hVS"
		mapping="pathname"
		reactionsEnabled="1"
		emitMetadata="1"
		inputPosition="bottom"
		theme='dark'
		lang="en"
		strict="0"
		loading="lazy"
	/>
</article>
