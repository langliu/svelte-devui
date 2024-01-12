<script>
	import { Alert } from '$lib';
	import ExampleCard from '../../ExampleCard.svelte';
</script>

<ExampleCard title="基本用法" description="共有四种样式：success、danger、warning、info。">
	<div style="width: 100%; display: flex; flex-direction: column; gap: 20px;">
		<Alert type="success" closeable={false}>success</Alert>
		<Alert type="danger" closeable={false}>danger</Alert>
		<Alert type="warning" closeable={false}>warning</Alert>
		<Alert type="info" closeable={false}>info</Alert>
		<Alert type="simple" closeable={false}>simple</Alert>
	</div>
</ExampleCard>

<ExampleCard title="可关闭的提示" description="显示关闭按钮，点击可关闭提示。">
	<div style="width: 100%; display: flex; flex-direction: column; gap: 20px;">
		<Alert type="success" on:close={() => alert('关闭 Alert')}>success</Alert>
		<Alert type="danger">danger</Alert>
		<Alert type="warning">warning</Alert>
		<Alert type="info">info</Alert>
		<Alert type="simple">simple</Alert>
	</div>
</ExampleCard>

<ExampleCard title="不使用默认图标" description="不使用默认的类型图标。">
	<div style="width: 100%; display: flex; flex-direction: column; gap: 20px;">
		<Alert type="success" showIcon={false} on:close={() => alert('关闭 Alert')}>success</Alert>
		<Alert type="danger" showIcon={false}>danger</Alert>
		<Alert type="warning" showIcon={false}>warning</Alert>
		<Alert type="info" showIcon={false}>info</Alert>
		<Alert type="simple" showIcon={false}>simple</Alert>
	</div>
</ExampleCard>
