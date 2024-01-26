<script>
  import ExampleCard from '$components/ExampleCard.svelte';
  import TextInputBasicUsage from '$snippets/text-input/TextInputBasicUsage.svelte';
  import TextInputSize from '$snippets/text-input/TextInputSize.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import SpecialAvatar from '$snippets/avatar/SpecialAvatar.svelte';
</script>

<ExampleCard title="基本用法">
  <TextInputBasicUsage />
  <CodeBlock snippet="text-input/TextInputBasicUsage.svelte" slot="code" />
</ExampleCard>

<ExampleCard title="尺寸">
  <TextInputSize />
  <CodeBlock snippet="avatar/TextInputSize.svelte" slot="code" />
</ExampleCard>

<ExampleCard
  title="头像的特殊显示"
  description="头像组件会对一些特殊情况进行处理，具体表现为用户不存在或展示默认头像，详细规则参见API。"
>
  <SpecialAvatar />
  <CodeBlock snippet="avatar/SpecialAvatar.svelte" slot="code" />
</ExampleCard>
