<!-- src/App.svelte -->
<script lang="ts">
  import { getCurrentRoute, navigate } from './lib/router.ts';
  import Home from './pages/Home.svelte';
  import NotFound from './pages/NotFound.svelte';
  
  // Get reactive route
  let currentRoute = $derived(getCurrentRoute());
</script>

<main>
  <nav>
    <div class="nav-brand">
      <h2>My App</h2>
    </div>
    <div class="nav-links">
      <a href="#home" class:active={currentRoute === 'home'}>Home</a>
      <button onclick={() => navigate('home')}>Navigate Home</button>
    </div>
  </nav>

  <div class="content">
    {#if currentRoute === 'home'}
      <Home />
    {:else}
      <NotFound />
    {/if}
  </div>
</main>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #1a1a1a;
    border-bottom: 1px solid #333;
  }
  
  .nav-brand h2 {
    margin: 0;
    color: #ff3e00;
  }
  
  .nav-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .nav-links a {
    color: #ccc;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.2s;
  }
  
  .nav-links a:hover,
  .nav-links a.active {
    background: #333;
    color: white;
  }
  
  .nav-links button {
    background: transparent;
    color: #646cff;
    border: 1px solid #646cff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .nav-links button:hover {
    background: #646cff;
    color: white;
  }
  
  .content {
    min-height: calc(100vh - 80px);
  }
  
  main {
    width: 100%;
  }
</style>