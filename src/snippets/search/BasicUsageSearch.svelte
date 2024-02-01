<script lang="ts">
  import { Search } from 'svelte-devui';
</script>

<div>
  <h5 class="text-muted">Small</h5>
  <Search size="sm" class="search" placeholder="请输入关键字" />
  <h5 class="text-muted">Middle</h5>
  <Search isKeyupSearch={true} placeholder="请输入关键字" class="search" />
  <h5 class="text-muted">Large</h5>
  <Search size="lg" placeholder="请输入关键字" class="search" />
  <h5 class="text-muted" style:margin-top="40px">Disabled</h5>
  <Search isKeyupSearch disabled placeholder="请输入关键字" class="search" />
</div>

<style>
  .text-muted {
    margin-top: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #575d6c;
  }

  :global(.search) {
    width: 200px;
  }
</style>
