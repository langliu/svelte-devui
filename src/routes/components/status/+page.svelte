<script>
	import { Status } from '$lib';
	import ExampleCard from '../ExampleCard.svelte';
</script>

<h1>Status 状态</h1>

<p>传达交互结果的组件。</p>

<ExampleCard title="基本用法">
	<div>
		<Status type="success">Success</Status>
		<Status type="error">Error</Status>
		<Status type="warning">Warning</Status>
		<Status type="initial">Initial</Status>
		<Status type="waiting">Waiting</Status>
		<Status type="running">Running</Status>
		<Status type="invalid">Invalid</Status>
		<Status type="skipped">Skipped</Status>
		<Status type="canceled">Canceled</Status>
	</div>
</ExampleCard>
