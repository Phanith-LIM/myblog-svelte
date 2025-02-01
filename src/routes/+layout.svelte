<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
	let { children } = $props();
</script>
  
<Header />
<div class="py-16 pl-safe-left pr-safe-right">
	<div class="mx-auto w-full max-w-page">
	  {@render children()}
	</div>
</div>