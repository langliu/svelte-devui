<script>
	import { Alert } from '$lib';
	import ExampleCard from '../../ExampleCard.svelte';
	const codeStr = `import { Alert } from 'svelte-devui';`;
	const sd = '<d-alert></d-alert>';
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
	<div style=" display: flex; flex-direction: column; gap: 20px; width: 100%;">
		<Alert type="success" showIcon={false} on:close={() => alert('关闭 Alert')}>success</Alert>
		<Alert type="danger" showIcon={false}>danger</Alert>
		<Alert type="warning" showIcon={false}>warning</Alert>
		<Alert type="info" showIcon={false}>info</Alert>
		<Alert type="simple" showIcon={false}>simple</Alert>
	</div>
</ExampleCard>
