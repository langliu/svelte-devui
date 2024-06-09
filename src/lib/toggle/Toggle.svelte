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
    position: relative;
    box-sizing: content-box;
    display: inline-block;
    width: fit-content;
    width: 36px;
    height: 18px;
    padding: 0;
    margin: 0;
    overflow: visible;
    font-size: 0;
    line-height: 1;
    vertical-align: middle;
    cursor: pointer;
    background: var(--devui-line);
    border: 1px solid var(--devui-line);
    border-radius: var(--devui-border-radius-full);
    transition: var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth) all;

    &:not(.devui-checked):hover {
      background-color: var(--devui-gray-40);
      border-color: var(--devui-gray-40);
    }

    & .devui-toggle-inner-wrapper {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding-left: 14px;
      font-size: var(--devui-font-size-sm);
      line-height: 18px;

      & .devui-toggle-inner {
        width: 100%;
        height: 100%;
        color: var(--devui-light-text);
        text-align: center;
      }
    }

    &.devui-checked .devui-toggle-inner-wrapper {
      padding-right: 14px;
      padding-left: unset;
    }

    & small {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 12px;
      height: 12px;
      background: var(--devui-light-text);
      border-radius: var(--devui-border-radius-full);
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
        padding-left: 24px;
        font-size: var(--devui-font-size-modal-title);
        line-height: 30px;
      }

      &.devui-checked .devui-toggle-inner-wrapper {
        padding-right: 24px;
        padding-left: unset;
      }

      & small {
        top: 4px;
        left: 4px;
        width: 22px;
        height: 22px;

        &.mouseDown {
          width: 26px;
        }
      }

      &.devui-checked small {
        left: 32px;
        background: var(--devui-light-text);

        &.mouseDown {
          left: 28px;
        }
      }
    }

    &.devui-toggle-sm {
      width: 30px;
      height: 14px;

      & .devui-toggle-inner-wrapper {
        padding-left: 12px;
        font-size: var(--devui-font-size-sm);
        line-height: 14px;
      }

      &.devui-checked .devui-toggle-inner-wrapper {
        padding-right: 12px;
        padding-left: unset;
      }

      & small {
        position: absolute;
        top: 2px;
        left: 3px;
        width: 10px;
        height: 10px;

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
