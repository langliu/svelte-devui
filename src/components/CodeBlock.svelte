<script lang="ts">
  import { page } from '$app/stores';
  export let snippet: string = '';
  const code = $page.data?.codes?.[snippet];
</script>

{#if code}
  <div>{@html code}</div>
{:else}
  <div><strong>无效的代码片段：{snippet}</strong></div>
{/if}
