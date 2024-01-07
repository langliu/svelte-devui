<script>
	import { Badge } from '$lib';
	import ExampleCard from '../ExampleCard.svelte';
</script>

<h1>Badge 徽标</h1>
<p>图标右上角的圆形徽标数字。</p>
<ExampleCard title="基本徽章" description="基本徽章类型，当有包裹元素时在右上角显示徽章和数目。">
	<Badge count={6} status="success">
		<div class="demo-card"></div>
	</Badge>
	<Badge count={14} status="waiting">
		<div class="demo-card"></div>
	</Badge>
	<Badge count={6} status="danger">
		<div class="demo-card"></div>
	</Badge>
	<Badge count={14} maxCount={10} status="warning">
		<div class="demo-card"></div>
	</Badge>
</ExampleCard>

<style>
	.demo-card {
		width: 90px;
		height: 42px;
		line-height: 42px;
		border-radius: var(--devui-border-radius-card);
		background: var(--devui-global-bg);
		font-size: var(--devui-font-size-card-title);
		text-align: center;
		display: inline-block;
	}

	.title {
		font-size: var(--devui-font-size-card-title);
		margin-bottom: 8px;
		font-weight: bold;
	}
</style>
