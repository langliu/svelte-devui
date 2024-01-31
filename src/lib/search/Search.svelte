<script lang="ts">
  /**
   * 输入框的 placeholder
   */
  export let placeholder: string | undefined = undefined;
  /**
   * 输入框的 max-length
   */
  export let maxLength: number = Number.MAX_SAFE_INTEGER;
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
  /**
   * 搜索图标位置，有两种选择'left' / 'right'
   */
  export let iconPosition: 'right' | 'left' = 'right';
  /**
   * 是否显示边框
   */
  export let noBorder: boolean = false;
  let cssClass: string = '';
  export let isKeyupSearch: boolean = false;

  export { cssClass as class };

  function handleSearch() {}
</script>

<div>
  <input
    class={cssClass}
    class:devui-glow-style={showGlowStyle}
    class:devui-gray-style={styleType === 'gray'}
    class:error
    class:devui-text-input-sm={size === 'sm'}
    class:devui-text-input-lg={size === 'lg'}
    class:no-border={noBorder}
    {placeholder}
    {disabled}
    on:change
    on:click
    on:blur
    maxlength={maxLength}
  />
  <button
    class="devui-form-item-suffix"
    on:click={handleSearch}
    class:icon-left={iconPosition === 'left'}
    class:icon-right={iconPosition === 'right'}
  >
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
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  </button>
</div>

<style>
  div:has(input) {
    position: relative;
  }

  div:has(.icon-left) {
    & input {
      padding-left: 32px;
    }
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
    height: 26px;
    font-size: var(--devui-font-size-sm);

    & + button {
      & svg {
        width: 14px;
        height: 14px;
      }
    }
  }

  .devui-text-input-lg {
    height: 46px;
    font-size: var(--devui-font-size-lg);

    & + button {
      & svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .icon-left {
    left: 8px;
  }

  .icon-right {
    right: 0;
  }

  .error {
    background-color: var(--devui-danger-bg);
    border-color: var(--devui-danger-line);
  }

  .devui-form-item-suffix {
    position: absolute;
    top: 50%;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 16px;
    padding-inline-start: 0;
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

  .no-border {
    border: 1px solid transparent;
  }
</style>
