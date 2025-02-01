<script lang="ts">
    import { page } from '$app/state';
</script>

<div class="max-w-screen-md mx-auto px-4 md:px-0">
    <div class="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <h1 class="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl"> {page.status} </h1>
        <p class="mt-4 text-lg text-muted-foreground">
            {#if page.status === 404}
              Oops, it looks like the page you're looking for doesn't exist.
            {:else}
                An error occurred. Please try again later.
            {/if}
          </p>
        <div class="mt-8 flex items-center space-x-4">
            <a href="/" class="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Go to Homepage
        </a>
        </div>
    </div>
</div>