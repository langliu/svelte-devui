<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

  /**
   * 链接地址
   */
  export let href: string | undefined = undefined;

  export let type: 'default' | 'light' = 'default';

  export let target: HTMLAttributeAnchorTarget | undefined | null = undefined;
  let className: string = '';
  export { className as class };

  $: defaultClass = type === 'default' ? 'devui-link' : 'devui-link-light';
</script>

<a class="{defaultClass} {className}" {href} {target}>
  <slot />
</a>

<style>
  :root {
    --devui-link: #526ecc;
  }

  .devui-link {
    color: var(--devui-link, #526ecc);
  }

  .devui-link-light {
    color: var(--devui-link-light, #96adfa);
  }
</style>
