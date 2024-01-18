<script>
  import CodeBlock from '$components/CodeBlock.svelte';
  import StatusExample from '$snippets/status/StatusExample.svelte';
  import ExampleCard from '$components/ExampleCard.svelte';
</script>

<ExampleCard title="基本用法">
  <StatusExample />
  <CodeBlock snippet="status/StatusExample.svelte" slot="code" />
</ExampleCard>
