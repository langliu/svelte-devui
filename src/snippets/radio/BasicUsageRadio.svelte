<script lang="ts">
  import { Radio } from 'svelte-devui';
  const items = ['Item1', 'Item2', 'Item3'];
  const chosenItem = 'Item1';
</script>

<div class="basic-usage">
  {#each items as item}
    <Radio name="basic-radio" value={item} group={chosenItem}>
      <span>The Radio item is: {item}</span>
    </Radio>
  {/each}
</div>

<style>
  .basic-usage {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
