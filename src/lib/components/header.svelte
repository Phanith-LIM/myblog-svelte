<script lang="ts">
  import { Button } from '$lib/components/ui/button/index';
  import { Code, Github, AlignJustify, Linkedin, Rss } from 'lucide-svelte';
  import ThemeSwitch from './theme-switch.svelte';
  import * as config from '$lib/config';
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';
  import * as Sheet from '$lib/components/ui/sheet/index';

  const NAV_LIST = [
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about-me' },
    // { name: 'RSS', href: '/rss.xml' },
  ];

  let isSheetOpen: boolean = false;

  function handleSheetOpenChange(isOpen: boolean) {
    isSheetOpen = isOpen;
  }
</script>

<header
  class="sticky top-0 z-50 flex w-full items-center justify-center border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-merriweather"
>
  <div class="flex h-14 w-full max-w-screen-xl items-center justify-between px-8">
    <nav class="flex items-center gap-6 font-geistSans">
      <!-- Logo Section -->
      <a href="/" class="mr-4 flex items-center space-x-2">
        <Code class="h-6 w-6" />
        <span class="inline-block font-bold font-geistMono select-none">{config.header}</span>
      </a>

      <!-- Navigation Links for Medium and Larger Screens -->
      <div class="hidden md:flex items-center gap-6">
        {#each NAV_LIST as navItem}
          <a
            href={navItem.href}
            target={navItem.name === 'RSS' ? '_blank' : null}
            class="{cn('text-sm font-medium text-text/80 hover:text-text/100', $page.url.pathname.startsWith(navItem.href) ? 'text-foreground' : 'text-foreground/60')}"
          >
            {navItem.name}
          </a>
        {/each}
      </div>
    </nav>

    <!-- Action Buttons -->
    <div class="flex items-center gap-3">
     
      <!-- <Button variant="ghost" size="icon" class="h-8 w-8">
        <a href="/rss.xml" target="_blank">
          <Rss class="size-[1.2rem]" />
        </a>
      </Button> -->
      <!-- <Button variant="ghost" size="icon" class="h-8 w-8">
        <a href="https://huggingface.co/PhanithLIM" target="_blank">
          <img src="/hg.svg" alt="Hugging Face" class="h-5 w-5" />
        </a>
      </Button> -->
      <Button variant="ghost" size="icon" class="h-8 w-8">
        <a href="https://github.com/Phanith-LIM" target="_blank">
          <Github class="size-[1.2rem]" />
        </a>
      </Button>
      <ThemeSwitch />
      
      <!-- Mobile Navigation Menu -->
      <div class="md:hidden">
        <Sheet.Root onOpenChange={handleSheetOpenChange} open={isSheetOpen} >
          <Sheet.Trigger>
            <Button variant="ghost" size="icon" class="h-8 w-8">
              <AlignJustify class="size-[1.2rem]" />
            </Button>
          </Sheet.Trigger>
          <Sheet.Content side="bottom">
            <div class="space-y-2">
              {#each NAV_LIST as navItem}
                <a
                  href={navItem.href}
                  target={navItem.name === 'RSS' ? '_blank' : null}
                  on:click={() => handleSheetOpenChange(false)}
                  class={
                    cn(
                        "block text-center text-sm font-medium text-foreground/80 hover:text-foreground",
                        $page.url.pathname.startsWith(navItem.href) ? 'text-foreground' : 'text-foreground/60'
                      )
                    }
                  >
                  {navItem.name}
                </a>
              {/each}
            </div>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    </div>
  </div>
</header>
