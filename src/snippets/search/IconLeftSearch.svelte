<script lang="ts">
  import { Search } from 'svelte-devui';
</script>

<div>
  <h5 class="text-muted">Small</h5>
  <Search size="sm" class="search" placeholder="请输入关键字" iconPosition="left" />
  <h5 class="text-muted">Middle</h5>
  <Search isKeyupSearch={true} placeholder="请输入关键字" iconPosition="left" class="search" />
  <h5 class="text-muted">Large</h5>
  <Search size="lg" placeholder="请输入关键字" iconPosition="left" class="search" />
</div>

<style>
  h5 {
    margin-top: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #575d6c;
  }
</style>
