<script lang="ts">
	import { Badge } from "$lib/components/ui/badge/index.js";
	export let data;
	import { onMount } from "svelte";
	import { Button } from '$lib/components/ui/button/index';

	// let codeBlocks: NodeListOf<HTMLElement>;
	// onMount(() => {
	//   const pres: NodeListOf<HTMLPreElement> = document.querySelectorAll("pre");
	//   pres.forEach((pre) => {
	// 	if (![...pre.classList].some((el) => el.startsWith("language-"))) {
	// 	  return;
	// 	}
  
	// 	const text = pre.innerText;
	// 	let copyButton = document.createElement("button");
	// 	copyButton.addEventListener("click", async () => {
	// 	  try {
	// 		await navigator.clipboard.writeText(text);
	// 		copyButton.innerHTML = "Copied!";
	// 		setTimeout(() => (copyButton.innerText = "Copy"), 2000);
	// 	  } catch (err) {
	// 		console.error("Failed to copy text", err);
	// 	  }
	// 	});
	// 	copyButton.className = "copy bg-primary text-white p-2 rounded-full absolute top-2 right-2 cursor-pointer z-10 text-xs";
	// 	copyButton.innerText = "Copy";
	// 	pre.style.position = "relative";  // Ensures the button is positioned relative to the pre element
	// 	pre.appendChild(copyButton);
	//   });
	// });
</script>
  
<svelte:head>
	<title>{data.meta.title} - My Blog</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="px-2 md:px-0">
	<hgroup class="mb-4 space-y-3 text-center">
	  <h1 class="text-4xl font-bold text-primary">{data.meta.title}</h1>
	  <p class="text-sm text-gray-500">Published on {data.meta.date}</p>
	  <div class="flex justify-center space-x-2">
		{#each data.meta.categories as category}
		  <Badge>&num;{category}</Badge>
		{/each}
	  </div>
	</hgroup>
	<div class="pb-10 max-w-screen-lg mx-auto">
	  <svelte:component this={data.content} />
	</div>
</article>
