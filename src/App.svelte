<script lang="ts">
  import { getCurrentRoute } from './lib/router.svelte';
  import Home from './pages/Home.svelte';
  import Wrestling from './pages/Wrestling.svelte';
  import NotFound from './pages/NotFound.svelte';
  
  let currentRoute: string = $derived(getCurrentRoute());
</script>

<main>
  <div class="min-h-screen border-red-700 border-[4px]">
    {#if currentRoute === 'home'}
      <Home />
    {:else if currentRoute === 'wrestling'}
      <Wrestling />
    {:else}
      <NotFound />
    {/if}
  </div>
</main>

<style>  
  main {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>