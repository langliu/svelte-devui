<script lang="ts">
	export const type: 'button' | 'submit' | 'reset' = 'button';
	export const style: 'primary' | 'common' | 'text' | 'danger' = 'primary';
	export const size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export const bordered: boolean = false;
</script>

<button>
	<slot />
</button>
