<script lang="ts">
	import { onMount } from 'svelte';
	import { codeToHtml } from 'shikiji';

	export let code: string | undefined = undefined;
	export let lang: string='javascript'
	let html = '';

	onMount(async () => {
		if (code) {
			html = await codeToHtml(code, {
				lang,
				theme: 'nord'
			});
		}
	});
</script>

{#if html}
	{@html html}
{/if}
