<script>
  import '$lib/styles/devui-var/index.css';
  // Supports weights 100-800
  import '@fontsource-variable/jetbrains-mono';
  import Sidebar from './Sidebar.svelte';
</script>

<div class="layout">
  <Sidebar />
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .layout {
    display: flex;
    min-height: 100vh;
  }

  .content {
    flex: 1;
    padding-left: 2rem;
    margin-left: 250px;
  }

  :global(pre) {
    padding: 1rem;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 0.5em;
  }

  :global(code) {
    font-family: 'JetBrains Mono Variable', sans-serif;
  }

  :global(html, body) {
    padding: 0;
    margin: 0;
  }
</style>
