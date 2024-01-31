<script>
  import ExampleCard from '$components/ExampleCard.svelte';
  import CodeBlock from '$components/CodeBlock.svelte';
  import BasicUsageSearch from '$snippets/search/BasicUsageSearch.svelte';
  import IconLeftSearch from '$snippets/search/IconLeftSearch.svelte';
</script>

<ExampleCard title="基本用法">
  <BasicUsageSearch />
  <CodeBlock snippet="search/BasicUsageSearch.svelte" slot="code" />
</ExampleCard>

<ExampleCard title="搜索图标左置">
  <IconLeftSearch />
  <CodeBlock snippet="search/IconLeftSearch.svelte" slot="code" />
</ExampleCard>
