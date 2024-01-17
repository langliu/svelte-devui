<script>
	import '$lib/styles/devui-var/index.css';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="layout">
	<Sidebar />
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.layout {
		display: flex;
		min-height: 100vh;
	}

	.content {
		flex: 1;
		padding-left: 2rem;
		margin-left: 250px;
	}

	:global(pre) {
		font-size: 16px;
		line-height: 1.4;
	}
	:global(html, body) {
		margin: 0;
		padding: 0;
	}
</style>
