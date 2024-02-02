<script>
  import ExampleCard from '$components/ExampleCard.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import BaseAvatar from '$snippets/avatar/BaseAvatar.svelte';
  import BaseOptionAvatar from '$snippets/avatar/BaseOptionAvatar.svelte';
  import SpecialAvatar from '$snippets/avatar/SpecialAvatar.svelte';
</script>

<ExampleCard title="互相独立的单选项">
  <BaseAvatar />
  <CodeBlock snippet="avatar/BaseAvatar.svelte" slot="code" />
</ExampleCard>

<ExampleCard
  title="头像的基本配置"
  description="头像组件可设置宽度，高度，是否为圆形头像，同时可自定义头像的显示字段，传入自定义图片等。"
>
  <BaseOptionAvatar />
  <CodeBlock snippet="avatar/BaseOptionAvatar.svelte" slot="code" />
</ExampleCard>

<ExampleCard
  title="头像的特殊显示"
  description="头像组件会对一些特殊情况进行处理，具体表现为用户不存在或展示默认头像，详细规则参见API。"
>
  <SpecialAvatar />
  <CodeBlock snippet="avatar/SpecialAvatar.svelte" slot="code" />
</ExampleCard>
