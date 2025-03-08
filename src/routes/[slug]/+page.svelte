<script lang="ts">
import { Badge } from "$lib/components/ui/badge/index.js";
import dayjs from "dayjs";
import { languageTag } from "$lib/paraglide/runtime.js";
export let data;

$: lang = languageTag()
$: if (lang) {
	
}

</script>

<svelte:head>
	<title>{data.meta.title} - My Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
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