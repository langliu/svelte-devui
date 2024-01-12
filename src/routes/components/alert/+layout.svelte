<script lang="ts">
	let active: 'demo' | 'api' = 'demo';

	function toggleActive(type: 'demo' | 'api') {
		active = type;
	}
</script>

<h1>Alert 警告</h1>
<p class="doc-header">显示警告信息，需要用户关注的信息的组件。</p>
<div class="tabs">
	<div class="component-icon">
		<img
			src="https://devui.design/components/assets/overview/feedback/alert.png"
			alt="Alert Icon"
		/>
	</div>
	<div class="nav-container">
		<a
			href="/components/alert/demo"
			class="nav-slider"
			tabindex={1}
			on:click={() => toggleActive('demo')}
		>
			Demo
		</a>
		<a
			href="/components/alert/api"
			class="nav-slider"
			tabindex={2}
			on:click={() => toggleActive('api')}
		>
			API
		</a>
		<div class="nav-slider-animation" style:left={active === 'demo' ? '0px' : '50%'}></div>
	</div>
</div>
<slot />

<style>
	h1 {
		position: sticky;
		margin-top: 0;
		margin-bottom: 16px;
		font-size: 36px;
		line-height: 1;
		padding: 32px 0 0 0;
	}

	.doc-header {
		margin-bottom: 24px;
		padding-top: 32px;
		box-sizing: border-box;
		color: var(--devui-aide-text);
		font-size: var(--devui-font-size);
		padding-right: 200px;
	}

	.tabs {
		display: flex;
		align-items: flex-end;
		border-radius: 16px;
		height: 176px;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		margin-bottom: 20px;
		background-image: url('https://devui.design/components/assets/overview/banner/19.png');

		& .nav-container {
			font-size: var(--devui-font-size-lg);
			display: flex;
			align-items: stretch;
			flex-wrap: nowrap;
			border-radius: 0 0 16px 16px;
			background: rgba(242, 242, 243, 0.6);
			backdrop-filter: blur(20px);
			width: 100%;

			& .nav-slider {
				height: 56px;
				line-height: 56px;
				text-align: center;
				font-size: 18px;
				color: var(--devui-text);
				z-index: 2;
				cursor: pointer;
				flex: 1;
				text-decoration: none;
				background: transparent;
			}

			& .nav-slider-animation {
				height: 56px;
				line-height: 56px;
				top: 0;
				border-radius: 0 0 16px 16px;
				box-shadow: 2px 2px 16px #0d275029;
				position: absolute;
				background-color: var(--devui-base-bg);
				width: 50%;
				transition:
					left 0.3s cubic-bezier(0.5, 0.05, 0.5, 0.95),
					width 0.3s cubic-bezier(0.5, 0.05, 0.5, 0.95);
			}
		}

		& .component-icon {
			position: absolute;
			top: -90px;
			right: 24px;
			width: 160px;
			height: 160px;
			background-color: #fff3;
			backdrop-filter: blur(20px);
			border-radius: 20px;
			& img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
