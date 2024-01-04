<script>
	/**
	 * @type {'success' | 'error' | 'warning' | 'waiting' | 'running' | 'invalid' | 'initial' | 'skipped' | 'canceled'}
	 */
	export let type = 'initial';
</script>

<span class={`devui-status devui-status-bg-${type}`}>
	<slot />
</span>

<style>
	.devui-status {
		line-height: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		&::before {
			display: inline-block;
			content: '';
			width: 10px;
			height: 10px;
			margin-right: 5px;
			border-radius: 100%;
		}

		&.devui-status-bg-success::before {
			background-color: var(--devui-success);
		}
		&.devui-status-bg-error::before {
			background-color: var(--devui-danger);
		}
		&.devui-status-bg-warning::before {
			background-color: var(--devui-warning);
		}
		&.devui-status-bg-waiting::before {
			background-color: var(--devui-waiting);
		}
		&.devui-status-bg-running::before {
			background-color: var(--devui-info);
		}
		&.devui-status-bg-invalid::before {
			background-color: var(--devui-dividing-line);
		}
		&.devui-status-bg-initial::before {
			background-color: var(--devui-initial);
		}
		&.devui-status-bg-skipped::before {
			background-color: var(--devui-feedback-overlay-text);
		}
		&.devui-status-bg-canceled::before {
			background-color: var(--devui-icon-fill-weak);
		}
	}
</style>
