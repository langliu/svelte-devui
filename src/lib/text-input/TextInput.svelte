<script lang="ts">
  export let placeholder: string | undefined = undefined;
  /**
   * 输入框类型
   */
  export let type: 'text' | 'password' = 'text';
  /**
   * 是否禁用输入
   */
  export let disabled: boolean = false;
  /**
   * 文本框是否出现输入错误
   */
  export let error: boolean = false;
  /**
   * 文本框尺寸，有三种选择'lg','md','sm'
   */
  export let size: 'sm' | 'md' | 'lg' = 'md';
  /**
   * 是否显示悬浮发光效果
   */
  export let showGlowStyle: boolean = true;
  /**
   * default为默认有线框白底风格，gray为无线框灰底风格
   */
  export let styleType: 'default' | 'gray' = 'default';
  let showPassword = false;
  $: lastType = type === 'text' ? type : !showPassword ? 'password' : 'text';

  function toggleShowPassword() {
    showPassword = !showPassword;
  }
</script>

<div>
  <input
    class:devui-glow-style={showGlowStyle}
    class:devui-gray-style={styleType === 'gray'}
    class:error
    class:devui-text-input-sm={size === 'sm'}
    class:devui-text-input-lg={size === 'lg'}
    {placeholder}
    type={lastType}
    {disabled}
    on:change
    on:click
    on:blur
  />
  {#if type === 'password'}
    <button class="devui-form-item-suffix" on:click={toggleShowPassword}>
      {#if showPassword}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-eye"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-eye-off"
        >
          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
          <line x1="2" x2="22" y1="2" y2="22" />
        </svg>
      {/if}
    </button>
  {/if}
</div>

<style>
  div:has(input) {
    position: relative;
  }

  .devui-glow-style {
    &:not(:disabled):focus {
      border-color: var(--devui-form-control-line-active);
      box-shadow: 0 0 0 4px var(--devui-form-control-interactive-outline);
    }
  }

  .devui-gray-style {
    &:not(:disabled) {
      transition: all var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth);

      &:not(:focus) {
        background-color: var(--devui-gray-form-control-bg);
        border-color: var(--devui-gray-form-control-bg);
      }
    }
  }

  .devui-text-input-sm {
    font-size: var(--devui-font-size-sm);
  }

  .devui-text-input-lg {
    font-size: var(--devui-font-size-lg);
  }

  .error {
    background-color: var(--devui-danger-bg);
    border-color: var(--devui-danger-line);
  }

  .devui-form-item-suffix {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 16px;
    text-align: center;
    pointer-events: auto;
    visibility: visible;
    background: transparent;
    border: none;
    transform: translateY(-50%);

    & svg {
      cursor: pointer;
    }
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding: 4px 8px;
    margin: 10px 0;
    font-size: var(--devui-font-size);
    color: var(--devui-text, #252b3a);
    vertical-align: middle;
    background-color: var(--devui-form-control-bg, #fff);
    border: 1px solid var(--devui-form-control-line, #d7d8da);
    border-radius: var(--devui-border-radius);
    outline: none;
    box-shadow: 0 0 0 0 var(--devui-form-control-interactive-outline);
    transition:
      border-color 0.3s var(--devui-animation-ease-in-out-smooth),
      box-shadow var(--devui-animation-duration-base) var(--devui-animation-ease-in);

    &:disabled {
      color: var(--devui-disabled-text);
      cursor: not-allowed;
      background-color: var(--devui-disabled-bg);
      border-color: var(--devui-disabled-line);
    }
  }
</style>
