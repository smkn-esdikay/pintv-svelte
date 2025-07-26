<script lang="ts">
  import { getCurrentRoute } from './lib/router.svelte';
  import Home from './pages/Home.svelte';
  import Test from './pages/Test.svelte';
  import Wrestling from './pages/Wrestling.svelte';
  import NotFound from './pages/NotFound.svelte';
  
  let currentRoute: string = $derived(getCurrentRoute());
</script>

<main>
  <div class="min-h-screen">
    {#if currentRoute === 'home'}
      <Home />
    {:else if currentRoute === 'wrestling'}
      <Wrestling />
    {:else if currentRoute === 'test'}
      <Test />
    {:else}
      <NotFound />
    {/if}
  </div>
</main>

<style>  
</style>