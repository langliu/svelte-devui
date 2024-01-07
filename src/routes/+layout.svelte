<script>
	import '../styles/devui-var/index.css';
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
	}
</style>
