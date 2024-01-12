<script>
	/**
	 * 设置基本徽章和计数徽章中显示的数目
	 * @type {number | undefined}
	 */
	export let count = undefined;
	/**
	 * 设置基本徽章和计数徽章最大可显示数量，当 count > maxCount 时显示maxCount
	 * @type {number}
	 */
	export let maxCount = 99;
	/**
	 * true时为点状徽章(有包裹)或状态徽章(无包裹)，false时为基本徽章(有包裹)或计数徽章(无包裹)
	 * @type {boolean}
	 */
	export let showDot = false;
	/**
	 * 状态色
	 * @type {undefined | 'danger' | 'warning' | 'waiting' | 'success' | 'info' | 'common'}
	 */
	export let status = undefined;
	/**
	 * 徽标位置
	 * @type {'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'}
	 */
	export let position = 'top-right';
	/**
	 * 有包裹时徽标位置偏移量，格式为[x,y]，单位为px。x为相对right偏移量(right: -x px)，y为相对top偏移量(top: y px)
	 * @type {[number, number] | undefined}
	 */
	export let offset = undefined;
	/**
	 * 自定义徽标色，此时status参数设置的徽章状态色失效
	 * @type {string | undefined}
	 */
	export let bgColor = undefined;
	/**
	 * 可自定义徽标文字颜色
	 * @type {string | undefined}
	 */
	export let textColor = undefined;

	function parseCountToNumber() {
		if (count === undefined) {
			return -1;
		} else if (typeof count === 'number') {
			return count;
		} else {
			const parseNumber = parseInt(count);
			return isNaN(parseNumber) ? -1 : parseNumber;
		}
	}
</script>

<span class="devui-badge">
	<slot />
	{#if $$slots.default}
		<span
			class={`devui-badge-content devui-badge-content-${status} devui-badge-content-${position}`}
			style:background={bgColor}
			style:color={textColor}
			style:right={offset && offset[0] ? -offset[0] + 'px' : null}
			style:top={offset && offset[1] ? offset[1] + 'px' : null}
			class:devui-badge-content-count={!showDot}
			class:devui-badge-content-dot={showDot}
		>
			{#if !showDot && parseCountToNumber() <= maxCount}
				{count}
			{:else}
				{maxCount}+
			{/if}
		</span>
	{:else if showDot}
		<span class={`devui-badge-status devui-badge-status-${status}`}></span>
	{:else if !showDot}
		<span
			style:background={bgColor}
			style:color={textColor}
			class={`devui-badge-count devui-badge-count-${status}`}
		>
			{count}
		</span>
	{/if}
</span>

<style>
	.devui-badge {
		position: relative;
		display: inline-block;
		line-height: 1;
	}
	.devui-badge-content {
		position: absolute;
		box-sizing: border-box;
		&.devui-badge-content-count {
			background: var(--devui-brand);
			color: var(--devui-light-text);
			min-width: 16px;
			height: 16px;
			font-size: var(--devui-font-size-sm);
			line-height: 16px;
			text-align: center;
			padding: 0 4px;
			border-radius: var(--devui-border-radius-full);
		}
		&.devui-badge-content-dot {
			width: 6px;
			height: 6px;
			border-radius: 100%;
			background: var(--devui-danger);
		}
		&.devui-badge-content-top-left {
			top: 0;
			left: 0;
			transform: translate(-50%, -50%);
		}
		&.devui-badge-content-top-right {
			top: 0;
			right: 0;
			transform: translate(50%, -50%);
		}
		&.devui-badge-content-bottom-left {
			bottom: 0;
			left: 0;
			transform: translate(-50%, 50%);
		}
		&.devui-badge-content-bottom-right {
			bottom: 0;
			right: 0;
			transform: translate(50%, 50%);
		}
		&.devui-badge-content-danger {
			background: var(--devui-danger);
		}
		&.devui-badge-content-warning {
			background: var(--devui-warning);
		}
		&.devui-badge-content-waiting {
			background: var(--devui-waiting);
		}
		&.devui-badge-content-success {
			background: var(--devui-success);
		}
		&.devui-badge-content-info {
			background: var(--devui-info);
		}
		&.devui-badge-content-common {
			background: var(--devui-unavailable);
			color: var(--devui-aide-text);
		}
	}

	.devui-badge-status {
		line-height: inherit;
		vertical-align: baseline;
		position: relative;
		display: inline-block;
		top: -1px;
		width: 6px;
		height: 6px;
		border-radius: 100%;
		&.devui-badge-content-danger {
			background: var(--devui-danger);
		}
		&.devui-badge-content-warning {
			background: var(--devui-warning);
		}
		&.devui-badge-content-waiting {
			background: var(--devui-waiting);
		}
		&.devui-badge-content-success {
			background: var(--devui-success);
		}
		&.devui-badge-content-info {
			background: var(--devui-info);
		}
		&.devui-badge-content-common {
			background: var(--devui-unavailable);
			color: var(--devui-aide-text);
		}
	}
</style>
