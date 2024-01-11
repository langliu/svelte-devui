<script>
	/**
	 * 卡片是否可交互
	 * @type {boolean}
	 */
	export let interactive = false;
	let className = '';
	export { className as class };
</script>

<div class="devui-card {className}" class:interactive>
	<div class="devui-card-header">
		{#if $$slots.avatar}
			<div class="devui-card-avatar">
				<slot name="avatar" />
			</div>
		{/if}
		<div>
			{#if $$slots.title}
				<div class="devui-card-title">
					<slot name="title" />
				</div>
			{/if}
			{#if $$slots.subtitle}
				<div class="devui-card-subtitle">
					<slot name="subtitle" />
				</div>
			{/if}
		</div>
	</div>
	{#if $$slots.content}
		<div class="devui-card-content">
			<slot name="content" />
		</div>
	{/if}
	<slot />
</div>

<style>
	.devui-card {
		position: relative;
		display: block;
		padding: 16px 20px;
		border-radius: var(--devui-border-radius-card);
		box-shadow: var(--devui-shadow-length-base) var(--devui-light-shadow);
		&.interactive {
			cursor: pointer;
			transition: transform var(--devui-animation-duration-slow)
				var(--devui-animation-ease-in-out-smooth) box-shadow var(--devui-animation-duration-slow)
				var(--devui-animation-ease-in-out-smooth);
			&:hover {
				box-shadow: var(--devui-shadow-length-hover) var(--devui-hover-shadow);
				transform: translateY(-5px);
			}
		}
		& .devui-card-title {
			display: block;
			font-size: var(--devui-font-size-card-title);
			font-weight: bold;
			color: var(--devui-text);
			& + .devui-card-subtitle {
				margin-top: var(--card-ele-space, 8px);
			}
		}

		& .devui-card-subtitle {
			display: block;
			font-size: var(--devui-font-size);
			color: var(--devui-aide-text-stress);
		}

		& .devui-card-header {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: var(--card-block-space, 16px);
		}

		& .devui-card-avatar {
			margin-right: var(--card-block-space, 16px);
		}

		& .devui-card-content {
			font-size: var(--devui-font-size);
			color: var(--devui-aide-text-stress);
		}

		& .devui-card-meta {
			width: calc(100% - 40px);
			height: auto;
			margin: 0 -20px var(--card-block-space, 16px) -20px;
			&:first-child {
				margin-top: calc(0px - var(--card-block-space, 16px));
			}
		}
	}
</style>
