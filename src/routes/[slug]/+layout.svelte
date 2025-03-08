<script lang="ts">
	import '../../styles/prism.css';
	import '../../app.css';
	import Progress from './progress.svelte';
	let { children } = $props();
	import CodeBlock from './code-block.svelte';

</script>
<Progress />
<CodeBlock>
	<div class="prose prose-slate max-w-screen-md w-full dark:prose-invert motion-safe:animate-enter mx-auto">
		{@render children()}
	</div>
</CodeBlock>
<!-- <div class="grid grid-cols-1 lg:grid-cols-[192px_3fr] gap-4">
	<TableContent />
	<CodeBlock>
		<div class="prose prose-slate max-w-screen-xl w-full dark:prose-invert motion-safe:animate-enter md:col-start-2">
			{@render children()}
		</div>
	</CodeBlock>
</div> -->
