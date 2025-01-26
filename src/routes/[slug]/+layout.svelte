<script lang="ts">
	import '../../styles/prism.css';
	import '../../app.css';
	import Progress from './progress.svelte';
	import TableContent from './toc.svelte';
	let { children } = $props();
</script>
<Progress />
<div class="grid grid-cols-1 lg:grid-cols-[192px_3fr] gap-4">
	<TableContent />
	<div class="prose prose-slate max-w-screen-xl w-full dark:prose-invert motion-safe:animate-enter md:col-start-2">
		{@render children()}
	</div>
</div>
