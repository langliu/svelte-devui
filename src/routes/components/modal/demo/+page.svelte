<script>
  import CodeBlock from '$components/CodeBlock.svelte';
  import ExampleCard from '$components/ExampleCard.svelte';
  import BasicModal from '$snippets/modal/BasicModal.svelte';
</script>

<ExampleCard title="标准对话框">
  <BasicModal />
  <CodeBlock snippet="modal/BasicModal.svelte" slot="code" />
</ExampleCard>
