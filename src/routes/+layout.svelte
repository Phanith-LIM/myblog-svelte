<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/header.svelte'
    import Footer from '$lib/components/footer.svelte'

    let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-1 py-16 pl-safe-left pr-safe-right font-merriweather">
        <div class="mx-auto w-full max-w-page">
            {@render children()}
        </div>
    </div>
    <Footer />
</div>