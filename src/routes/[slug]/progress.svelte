<script lang="ts">
  import { onMount } from 'svelte';
  import { Progress } from '$lib/components/ui/progress/index';
  let scrollProgress = 0;
  const onScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      console.log(scrollHeight); // This will log the total scrollable height
      scrollProgress = (currentScrollY / scrollHeight) * 100;
  };
  onMount(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', onScroll);
      };
  });
</script>

<Progress
class="fixed left-0 right-0 top-0 z-50 h-0.5 rounded-none"
value={scrollProgress} 
/>
