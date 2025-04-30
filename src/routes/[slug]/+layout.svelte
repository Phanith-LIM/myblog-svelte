<script lang="ts">
	import '../../styles/prism.css';
	import '../../app.css';
	import Progress from '../../lib/components/progress.svelte';
	import TableContent from '../../lib/components/toc.svelte';
	import CodeBlock from '../../lib/components/code-block.svelte';
	import Giscus from '@giscus/svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { themeStore } from '$lib/themes';

	let { children } = $props();
	

</script>

<Progress />
<div class="flex justify-center">
	<CodeBlock>
		<div class="prose prose-slate max-w-screen-md w-full dark:prose-invert motion-safe:animate-enter md:col-start-2 mx-auto">
			{@render children()}
			<br>
			<Separator />
			<br>
			<Giscus
				id="comments"
				repo="Phanith-LIM/myblog-svelte"
				repoId="R_kgDONvurpQ"
				categoryId="DIC_kwDONvurpc4CpMuR"
				mapping="pathname"
				reactionsEnabled="1"
				emitMetadata="0"
				strict="0"
				inputPosition="top"
				theme={$themeStore === 'system' ? 'preferred_color_scheme' : $themeStore}
				lang="en"
				loading="lazy"
			/>
		</div>
	</CodeBlock>
</div>
<!-- <div class="grid grid-cols-1 lg:grid-cols-[192px_3fr] gap-4">
	<TableContent />
	<CodeBlock>
		<div class="prose prose-slate max-w-screen-md w-full dark:prose-invert motion-safe:animate-enter md:col-start-2 max-auto">
			{@render children()}
			<br>
			<Separator />
			<br>
			<Giscus
				id="comments"
				repo="Phanith-LIM/myblog-svelte"
				repoId="R_kgDONvurpQ"
				categoryId="DIC_kwDONvurpc4CpMuR"
				mapping="pathname"
				reactionsEnabled="1"
				emitMetadata="0"
				strict="0"
				inputPosition="top"
				theme={$themeStore === 'system' ? 'preferred_color_scheme' : $themeStore}
				lang="en"
				loading="lazy"
			/>
		</div>
	</CodeBlock>
</div> -->