<script lang="ts">
	import '../../app.css';
	import Progress from './progress.svelte';
	import TableContent from './toc.svelte';
	let { children } = $props();
</script>
<Progress />
<div class="grid grid-cols-1 lg:grid-cols-[192px_1fr] gap-4">
	<TableContent />
	<div class="prose prose-slate max-w-none dark:prose-invert motion-safe:animate-enter">
		{@render children()}
	</div>
</div>
