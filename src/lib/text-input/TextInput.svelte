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
</script>

<input
  class:devui-glow-style={showGlowStyle}
  class:devui-gray-style={styleType === 'gray'}
  class:error
  class:devui-text-input-sm={size === 'sm'}
  class:devui-text-input-lg={size === 'lg'}
  {placeholder}
  {type}
  {disabled}
  on:change
  on:click
  on:blur
/>

<style>
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
