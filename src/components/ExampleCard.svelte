<script>
  import { fly } from 'svelte/transition';
  import { Code } from 'lucide-svelte';
  /**
   * 卡片标题
   * @type {string}
   */
  export let title = '';
  /**
   * 卡片描述
   * @type {string}
   */
  export let description = '';
  let showCode = false;

  function toggleCodeShow() {
    showCode = !showCode;
  }
</script>

<div class="card">
  <h3>{title}</h3>
  {#if description}
    <p>{description}</p>
  {/if}
  <div class="content">
    <slot />
  </div>
  <div>
    <button
      class="code-icon"
      style:transform={showCode ? 'rotate(90deg)' : ''}
      on:click={toggleCodeShow}
    >
      <Code size={18} />
    </button>
    {#if showCode}
      <div transition:fly={{ y: -50 }}>
        <slot name="code" />
      </div>
    {/if}
  </div>
</div>

<style>
  .card {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--devui-dividing-line);
    border-radius: 20px;

    & h3 {
      height: 24px;
      margin-top: 0;
      margin-bottom: 12px;
      font-size: var(--devui-font-size-page-title, 16px);
      font-weight: var(--devui-font-title-weight, bold);
      line-height: var(--devui-line-height-base, 1.5);
      color: var(--devui-text, #252b3a);
    }

    & p {
      margin: 0;
      font-size: var(--devui-font-size, 12px);
      font-weight: var(--devui-font-content-weight, normal);
      line-height: var(--devui-line-height-base, 1.5);
      color: var(--devui-text, #252b3a);
    }

    & .content {
      padding: 16px 0;
      border-bottom: 1px dashed var(--devui-dividing-line);
    }
  }

  .code-icon {
    margin-top: 10px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: transform 0.2s;
  }
</style>
