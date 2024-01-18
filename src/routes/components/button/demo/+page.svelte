<script>
  import { Alert } from '$lib';
  import CodeBlock from '$components/CodeBlock.svelte';
  import PrimaryButton from '$snippets/button/PrimaryButton.svelte';
  import ExampleCard from '$components/ExampleCard.svelte';
</script>

<ExampleCard title="主要按钮">
  <PrimaryButton />
  <CodeBlock snippet="button/PrimaryButton.svelte" slot="code" />
</ExampleCard>

<ExampleCard title="可关闭的提示" description="显示关闭按钮，点击可关闭提示。">
  <div style=" display: flex; flex-direction: column; gap: 20px;width: 100%;">
    <Alert type="success" on:close={() => alert('关闭 Alert')}>success</Alert>
    <Alert type="danger">danger</Alert>
    <Alert type="warning">warning</Alert>
    <Alert type="info">info</Alert>
    <Alert type="simple">simple</Alert>
  </div>
</ExampleCard>

<ExampleCard title="不使用默认图标" description="不使用默认的类型图标。">
  <div style=" display: flex; flex-direction: column; gap: 20px;width: 100%;">
    <Alert type="success" showIcon={false} on:close={() => alert('关闭 Alert')}>success</Alert>
    <Alert type="danger" showIcon={false}>danger</Alert>
    <Alert type="warning" showIcon={false}>warning</Alert>
    <Alert type="info" showIcon={false}>info</Alert>
    <Alert type="simple" showIcon={false}>simple</Alert>
  </div>
</ExampleCard>
