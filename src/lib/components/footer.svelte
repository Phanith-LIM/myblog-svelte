<script lang="ts">
    import * as config from '$lib/config';
    const links = [
        { name: 'Youtube', href: 'https://www.youtube.com/@itsphanith' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/phanithlim' },
        { name: 'Github', href: 'https://github.com/Phanith-LIM' },
        { name: 'Hugging Face', href: 'https://huggingface.co/PhanithLIM' },
        { name: 'Medium', href: 'https://itsphanith.medium.com' },
        { name: 'RSS', href: '/rss.xml' },
    ];
</script>

<footer class="w-full text-xs text-gray-500 dark:text-gray-400 ho">
  <div class="mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      © 2025 {config.header}
    </div>

    <nav class="flex gap-4">
      {#each links as link}
        <a
          href={link.href}
          class="hover:underline underline-offset-8"
          target={link.href.startsWith('http') || link.href.startsWith('www') ? '_blank' : '_self'}
          rel="noopener"
        >
          {link.name}
        </a>
      {/each}
    </nav>
  </div>
</footer>