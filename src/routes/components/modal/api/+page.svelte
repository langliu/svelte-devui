<script>
  import ExampleCard from '$components/ExampleCard.svelte';
  const codeStr = `import { Modal } from 'svelte-devui';`;
  const sd = '<Modal title="Modal"></Modal>';
</script>

<ExampleCard title="如何使用" description="在 module 中引入：">
  <div>
    <pre>
		<code>{codeStr}</code>
	</pre>
    <p>在页面中使用：</p>
    <code>{sd}</code>
  </div>
</ExampleCard>
