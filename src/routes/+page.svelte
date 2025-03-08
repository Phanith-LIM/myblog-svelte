<script lang="ts">
    import { onMount } from 'svelte';
    import * as config from '$lib/config';
    import type { PostModel } from '$lib/types.js';
    import dayjs from 'dayjs';
    import 'dayjs/locale/km';  // Ensure Khmer locale is imported
    import { languageTag } from '$lib/paraglide/runtime.js';

    import * as m from '$lib/paraglide/messages.js';
	import { cn } from '$lib/utils';

    export let data: { posts: PostModel[] };
    let postsByYear: [string, PostModel[]][] = [];

    function toKhmerNumber(num: number): string {
        const khmerNumeralsMap: { [key: string]: string } = {
            '0': '០',
            '1': '១',
            '2': '២',
            '3': '៣',
            '4': '៤',
            '5': '៥',
            '6': '៦',
            '7': '៧',
            '8': '៨',
            '9': '៩'
        };
        const numStr = num < 10 ? '០' + num : num.toString();
        return numStr.split('').map(digit => khmerNumeralsMap[digit] || digit).join('');
    } 


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

<div class="{cn(
        "max-w-screen-md mx-auto px-2 md:px-0",
        languageTag() == 'kh' ? 'font-Battambang' : ''
    )}">
    <div class="col-start-2">
        <h2 class="mb-16 font-geistSans font-semibold">{ m.blog() }</h2>
        <div class="group">
            {#each postsByYear as [year, postList], index}
                <div
                    class="relative border-t border-border/40 motion-safe:animate-enter"
                    style="animation-delay: {index * 100}ms">
                    <h3 class="absolute top-3 text-sm text-foreground/40 select-none">
                        {languageTag() == 'kh' ? toKhmerNumber(parseInt(year)) : year}
                    </h3>
                    {#each postList as post}
                        <a href={`${post.slug}`} class="group/item flex transition-opacity group-hover:opacity-40 hover:!opacity-100">
                            <div class="ml-[20%] flex flex-1 justify-between border-t border-border/40 py-3 group-first-of-type:item:border-t-0">
                                <span>{post.title}</span>
                                <span class="px-2 text-sm text-foreground/40">
                                    { 
                                        languageTag() == 'kh' 
                                            ? toKhmerNumber(parseInt(dayjs(post.date).format('DD'))) + '-' + dayjs(post.date).locale('km').format('MMM') 
                                            : dayjs(post.date).locale('en').format('DD-MMM') 
                                    }
                                </span>                                
                            </div>
                        </a>
                    {/each}
                </div>
            {/each}
        </div>
    </div>    
</div>
