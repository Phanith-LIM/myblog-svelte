<script lang="ts">
	import '../../styles/prism.css';
	import '../../app.css';
	import Progress from '../../lib/components/progress.svelte';
	import TableContent from '../../lib/components/toc.svelte';
	import CodeBlock from '../../lib/components/code-block.svelte';

	let { children } = $props();
</script>
<Progress />
<div class="grid grid-cols-1 lg:grid-cols-[192px_3fr] gap-4">
	<TableContent />
	<CodeBlock>
		<div class="prose prose-slate max-w-screen-md w-full dark:prose-invert motion-safe:animate-enter md:col-start-2 max-auto">
			{@render children()}
		</div>
	</CodeBlock>
</div>
