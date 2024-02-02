<script lang="ts">
  /** 单选项名称 */
  export let name: string;
  /** 单选项值 */
  export let value: string | undefined = undefined;
  /** 是否禁用该单选项 */
  export let disabled: boolean = false;
  /** 是否显示悬浮发光效果 */
  export let showGlowStyle: boolean = true;
  export let group: string | undefined = undefined;
</script>

<div class:devui-glow-style={showGlowStyle}>
  <label class="devui-radio">
    <input type="radio" class="devui-radio-input" {name} {value} {disabled} bind:group />
    <span class="devui-radio-material" />
    <span class="devui-radio-label">
      <slot />
    </span>
  </label>
</div>

<style>
  .devui-glow-style {
    & .devui-radio {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      margin: 0 auto;
      font-size: var(--devui-font-size);
      font-weight: 400;
      line-height: 1.5;
      color: var(--devui-text);
      cursor: pointer;

      & .devui-radio-material {
        box-sizing: border-box;
        display: inline-block;
        width: 16px;
        height: 16px;
        overflow: hidden;
        vertical-align: middle;
        user-select: none;
        border: solid 1px var(--devui-shape-icon-fill, #d7d8da);
        border-radius: var(--devui-border-radius-full, 100px);
        transition: box-shadow var(--devui-animation-duration-slow)
          var(--devui-animation-ease-in-out-smooth);
        transform: translateY(-1px);
      }

      &:not(.disable):hover {
        & .devui-radio-material {
          border-color: var(--devui-brand, #5e7ce0);
          box-shadow: 0 0 0 6px var(--devui-range-item-hover-bg, #e9edfa);
        }
      }

      &:has(input[type='radio']:checked) {
        & .devui-radio-material {
          border-color: var(--devui-brand, #5e7ce0);
          border-width: 4px;
        }
      }
    }
  }

  .devui-radio-input {
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .devui-radio-label {
    margin-left: 8px;
    font-size: var(--devui-font-size, 12px);
    color: var(--devui-text, #252b3a);
  }
</style>
