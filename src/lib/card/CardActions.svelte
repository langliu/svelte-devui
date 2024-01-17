<script>
	/**
	 * 操作区域对其方式，分别对应起始对其=齐，尾部对齐，拉伸对齐
	 * @type {'start' | 'end' | 'space-between'}
	 */
	export let align = 'start';
</script>

<div class="devui-card-actions devui-card-actions-align-{align}">
	<slot />
</div>

<style>
	.devui-card-actions {
		display: flex;
		align-items: center;
		margin-top: var(--card-block-space, 16px);
	}

	.devui-card-actions-align-start {
		justify-content: flex-start;
	}

	.devui-card-actions-align-end {
		justify-content: flex-end;
	}

	.devui-card-actions-align-space-between {
		justify-content: space-between;
	}
</style>
