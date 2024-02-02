<script lang="ts">
  import { Radio } from 'svelte-devui';
  const items = ['Item1', 'Item2', 'Item3'];
  const chosenItem = 'Item1';
</script>

{#each items as item}
  <Radio name="basic-radio" value={item}>
    <span>The Radio item is: {item}</span>
  </Radio>
{/each}
