<script lang="ts">
	import { onMount } from 'svelte';
	import { codeToHtml } from 'shikiji';

	export let code: string | undefined = undefined;
	let html = '';

	onMount(async () => {
		if (code) {
			html = await codeToHtml(code, {
				lang: 'javascript',
				theme: 'nord'
			});
		}
	});
</script>

{#if html}
	{@html html}
{/if}
