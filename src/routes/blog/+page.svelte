<script lang="ts">
    import { onMount } from 'svelte';
    import * as config from '$lib/config';
    import type { PostModel } from '$lib/types.js';


    export let data: { posts: PostModel[] };
    let postsByYear: [string, PostModel[]][] = [];

    onMount(() => {
        const postsMap = new Map<string, PostModel[]>();
        data.posts.forEach((post) => {
            const year = new Date(post.date).getFullYear().toString();
            if (!postsMap.has(year)) {
                postsMap.set(year, []);
            }
            postsMap.get(year)?.push(post);
        });
        postsByYear = Array.from(postsMap.entries());
    });
</script>

<svelte:head>
    <title>Reading..</title>
    <meta name="description" content={config.description} />
</svelte:head>

<div class="max-w-screen-md mx-auto px-2 md:px-0">
    <div class="col-start-2">
        <h2 class="mb-16 font-geistSans font-semibold">Blog</h2>
        <div class="group">
            {#each postsByYear as [year, postList], index}
                <div
                    class="relative border-t border-border/40 motion-safe:animate-enter"
                    style="animation-delay: {index * 100}ms"
                >
                    <h3 class="absolute top-3 text-sm text-foreground/40">{year}</h3>
                    {#each postList as post}
                        <a
                            href={`${post.slug}`} 
                            class="group/item flex transition-opacity group-hover:opacity-40 hover:!opacity-100"
                        >
                            <div class="ml-[20%] flex flex-1 justify-between border-t border-border/40 py-3 group-first-of-type:item:border-t-0">
                                <span>{post.title}</span>
                                <span class="px-2 text-sm text-foreground/40">
                                    {post.date}
                                </span>
                            </div>
                        </a>
                    {/each}
                </div>
            {/each}
        </div>
    </div>    
</div>
