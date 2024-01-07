<script>
	/**
	 * 卡片标题
	 * @type {string}
	 */
	export let title = '';
	/**
	 * 卡片描述
	 * @type {string}
	 */
	export let description = '';
</script>

<div class="card">
	<h3>{title}</h3>
	{#if description}
		<p>{description}</p>
	{/if}
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.card {
		border: 1px solid var(--devui-dividing-line);
		margin-bottom: 20px;
		padding: 20px;
		border-radius: 20px;
		& h3 {
			margin-top: 0;
			margin-bottom: 12px;
			font-size: var(--devui-font-size-page-title, 16px);
			font-weight: var(--devui-font-title-weight, bold);
			line-height: var(--devui-line-height-base, 1.5);
			color: var(--devui-text, #252b3a);
			height: 24px;
		}

		& p {
			margin: 0;
			font-size: var(--devui-font-size, 12px);
			font-weight: var(--devui-font-content-weight, normal);
			line-height: var(--devui-line-height-base, 1.5);
			color: var(--devui-text, #252b3a);
		}

		& .content {
			border-bottom: 1px dashed var(--devui-dividing-line);
			padding: 16px 0;
			display: flex;
			align-items: center;
			gap: 16px;
		}
	}
</style>
