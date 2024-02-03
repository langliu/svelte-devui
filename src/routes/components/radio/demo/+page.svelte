<script>
  import ExampleCard from '$components/ExampleCard.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import SpecialAvatar from '$snippets/avatar/SpecialAvatar.svelte';
  import BasicUsageRadio from '$snippets/radio/BasicUsageRadio.svelte';
  import DisabledRadio from '$snippets/radio/DisabledRadio.svelte';
</script>

<ExampleCard title="互相独立的单选项">
  <BasicUsageRadio />
  <CodeBlock snippet="radio/BasicUsageRadio.svelte" slot="code" />
</ExampleCard>

<ExampleCard title="禁用">
  <DisabledRadio />
  <CodeBlock snippet="radio/DisabledRadio.svelte" slot="code" />
</ExampleCard>

<ExampleCard
  title="头像的特殊显示"
  description="头像组件会对一些特殊情况进行处理，具体表现为用户不存在或展示默认头像，详细规则参见API。"
>
  <SpecialAvatar />
  <CodeBlock snippet="avatar/SpecialAvatar.svelte" slot="code" />
</ExampleCard>
