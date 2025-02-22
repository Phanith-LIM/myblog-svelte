<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  interface TOCItem {
    id: string;
    text: string;
    level: number;
  }

  const toc = writable<TOCItem[]>([]);
  const activeId = writable('');

  let observers = new Map<string, IntersectionObserver>();

  onMount(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3')) as HTMLElement[];
    console.log('Found headings:', headings);

    if (headings.length === 0) {
      console.log('No headings found. TOC will not be populated.');
      return;
    }
    const newToc = headings.map((heading) => ({
      id: heading.id,
      text: heading.textContent ?? '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    toc.set(newToc);

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.set(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      rootMargin: '0px 0px -80% 0px',
      threshold: 1.0,
    };

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.set(heading.id, observer);
      }
    });

    onDestroy(() => {
      observers.forEach((observer) => observer.disconnect());
    });
  });
</script>

{#if $toc.length > 0}
  <aside class="fixed hidden max-w-[192px] motion-safe:animate-enter lg:block" aria-label="Table of contents">
    <ul class="flex flex-col gap-2 text-sm">
      {#each $toc as { id, text, level }}
        <li class={`pl-${(level - 1) * 4}`}>
          <a
            href={`#${id}`}
            class={`block py-0.5 transition-colors duration-200 ease-in-out hover:text-foreground/80 ${
              $activeId === id ? 'font-medium text-foreground/80' : 'text-foreground/40'
            }`}
          >
            {text}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}