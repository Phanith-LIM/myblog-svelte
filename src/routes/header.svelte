<script>
    import { Button } from '$lib/components/ui/button/index';
    import { Code, Github } from 'lucide-svelte';
    import ThemeSwitch from './theme-switch.svelte';
    import * as config from '$lib/config';
    import { page } from '$app/stores';  
    import { cn } from '$lib/utils';


    const NAV_LIST = [
      { name: 'Blog', href: '/blog' },
      { name: "About", href: "/about-me" },
    ];
  </script>
  
  <header
    class="sticky top-0 z-50 flex w-full items-center justify-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="flex h-14 w-full max-w-screen-xl items-center justify-between px-8">
      <nav class="flex items-center gap-6 font-geistSans">
        <a href="/" class="mr-4 flex items-center space-x-2">
          <Code class="h-6 w-6" />
          <span class="inline-block font-bold"> { config.title } </span>
        </a>
        {#each NAV_LIST as navItem}
        <a
          href={navItem.href}
          class="{cn('text-sm font-medium text-text/80 hover:text-text/100', $page.url.pathname.startsWith(navItem.href) ? 'text-foreground' : 'text-foreground/60')}"
        >
          {navItem.name}
        </a>
      {/each}      
      </nav>
      <div class="flex items-center gap-3">
        <ThemeSwitch />
        <Button variant="ghost" size="icon" class="h-8 w-8">
          <a href="https://github.com/Phanith-LIM" target="_blank">
            <Github class="size-[1.2rem]" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" class="h-8 w-8">
          <a href="https://huggingface.co/PhanithLIM">
            <img src='/hg.svg' alt="Hugging Face"  class="size-[1.2rem]" />
          </a>
        </Button>
      </div>
    </div>
  </header>
  