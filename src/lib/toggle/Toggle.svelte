<script lang="ts">
  /**
   * 是否禁用开关
   */
  export let disabled: boolean = false;
  /**
   * 开关是否打开，默认关闭
   */
  export let checked: boolean = false;
  /**
   * 开关尺寸大小
   */
  export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<input type="checkbox" {checked} {disabled} on:change />

<style>
  .devui-toggle {
    display: inline-block;
    width: fit-content;
    font-size: 0;
    line-height: 1;
    vertical-align: middle;
    width: 36px;
    height: 18px;
    border-radius: var(--devui-border-radius-full);
    background: var(--devui-line);
    border: 1px solid var(--devui-line);
    position: relative;
    box-sizing: content-box;
    overflow: visible;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth) all;

    &:not(.devui-checked):hover {
      background-color: var(--devui-gray-40);
      border-color: var(--devui-gray-40);
    }

    & .devui-toggle-inner-wrapper {
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: var(--devui-font-size-sm);
      line-height: 18px;
      padding-left: 14px;

      & .devui-toggle-inner {
        width: 100%;
        height: 100%;
        text-align: center;
        color: var(--devui-light-text);
      }
    }

    &.devui-checked .devui-toggle-inner-wrapper {
      padding-left: unset;
      padding-right: 14px;
    }

    & small {
      width: 12px;
      height: 12px;
      background: var(--devui-light-text);
      border-radius: var(--devui-border-radius-full);
      position: absolute;
      top: 3px;
      left: 3px;
      transition: var(--devui-animation-duration-base) var(--devui-animation-ease-in-out-smooth) all;

      &.mouseDown {
        width: 15px;
      }
    }

    &.devui-checked small {
      left: 21px;

      &.mouseDown {
        left: 18px;
      }
    }

    &.devui-toggle-lg {
      width: 58px;
      height: 30px;

      & .devui-toggle-inner-wrapper {
        font-size: var(--devui-font-size-modal-title);
        line-height: 30px;
        padding-left: 24px;
      }

      &.devui-checked .devui-toggle-inner-wrapper {
        padding-left: unset;
        padding-right: 24px;
      }

      & small {
        width: 22px;
        height: 22px;
        top: 4px;
        left: 4px;

        &.mouseDown {
          width: 26px;
        }
      }

      &.devui-checked small {
        background: var(--devui-light-text);
        left: 32px;

        &.mouseDown {
          left: 28px;
        }
      }
    }

    &.devui-toggle-sm {
      width: 30px;
      height: 14px;

      & .devui-toggle-inner-wrapper {
        font-size: var(--devui-font-size-sm);
        line-height: 14px;
        padding-left: 12px;
      }

      &.devui-checked .devui-toggle-inner-wrapper {
        padding-left: unset;
        padding-right: 12px;
      }

      & small {
        width: 10px;
        height: 10px;
        position: absolute;
        top: 2px;
        left: 3px;

        &.mouseDown {
          width: 12px;
        }
      }

      &.devui-checked small {
        left: 17px;

        &.mouseDown {
          left: 15px;
        }
      }
    }

    &.devui-checked {
      background: var(--devui-brand);
      border-color: var(--devui-brand);

      &:hover {
        background: var(--devui-primary-hover);
        border-color: var(--devui-primary-hover);
      }

      &:active {
        background: var(--devui-primary-hover);
        border-color: var(--devui-primary-hover);
      }
    }

    &.devui-disabled {
      &,
      &:hover,
      &:active,
      &.devui-checked {
        cursor: not-allowed;
      }

      &,
      &:hover,
      &:active {
        background-color: var(--devui-disabled-line);
        border-color: var(--devui-disabled-line);

        & small {
          background-color: var(--devui-unavailable);
        }
      }

      &.devui-checked {
        background-color: var(--devui-icon-fill-active-disabled);
        border-color: var(--devui-icon-fill-active-disabled);

        & small {
          background-color: var(--devui-light-text);
        }
      }
    }
  }
</style>
