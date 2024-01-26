<script>
  import ExampleCard from '$components/ExampleCard.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import TextInputBasicUsage from '$snippets/text-input/TextInputBasicUsage.svelte';
  import TextInputSize from '$snippets/text-input/TextInputSize.svelte';
  import TextInputPassword from '$snippets/text-input/TextInputPassword.svelte';
</script>

<ExampleCard title="基本用法">
  <TextInputBasicUsage />
  <CodeBlock snippet="text-input/TextInputBasicUsage.svelte" slot="code" />
</ExampleCard>

<ExampleCard title="尺寸">
  <TextInputSize />
  <CodeBlock snippet="text-input/TextInputSize.svelte" slot="code" />
</ExampleCard>

<ExampleCard title="密码框">
  <TextInputPassword />
  <CodeBlock snippet="text-input/TextInputPassword.svelte" slot="code" />
</ExampleCard>
