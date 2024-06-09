<script>
  /**
   * @type {'button' | 'submit' | 'reset'}
   */
  export let type = 'button';
  /**
   * @type {'primary' | 'common' | 'text' | 'danger'}
   */
  export let style = 'primary';
  /**
   * @type {'lg' | 'md' | 'sm' | 'xs'}
   */
  export const size = 'md';
  /**
   * @type {boolean}
   */
  export let bordered = false;
  /**
   * @type {boolean} [false] 可选，是否禁用 button
   */
  export let disabled = false;
</script>

<button
  {type}
  class="devui-btn devui-btn-{style} devui-btn-{size}"
  {disabled}
  class:bordered
  on:click
  on:dblclick
>
  <slot />
</button>

<style>
  .devui-btn {
    --devui-btn-loading-color: var(--devui-text);
    --devui-btn-xs-padding: 0 4px;
    --devui-btn-xs-height: 24px;
    --devui-btn-icon-xs-min-width: 24px;
    --devui-btn-xs-min-width: 48px;
    --devui-btn-sm-padding: var(--devui-btn-sm-padding, 16px);
    --devui-btn-sm-min-width: 56px;
    --devui-btn-icon-sm-min-width: 24px;
    --devui-btn-sm-height: 24px;
    --devui-btn-min-width: 64px;
    --devui-btn-height: 28px;
    --devui-btn-padding: 0 16px;
    --devui-btn-lg-padding: var(--devui-btn-lg-padding, 24px);
    --devui-btn-lg-min-width: 72px;
    --devui-btn-icon-lg-min-width: 32px;
    --devui-btn-lg-height: 32px;
    --devui-btn-xs-font-size: var(--devui-font-size-sm);
    --devui-btn-sm-font-size: var(--devui-font-size-sm);
    --devui-btn-font-size: var(--devui-font-size-md);
    --devui-btn-lg-font-size: var(--devui-font-size-lg);
    --devui-btn-line-height: var(--devui-line-height-base);

    position: relative;
    height: var(--devui-btn-height);
    padding: var(--devui-btn-padding, 0 20px);
    overflow: hidden;
    font-size: var(--devui-btn-font-size);
    line-height: var(--devui-btn-line-height);
    background-color: transparent;
    border-color: transparent;
    border-width: 1px;
    border-radius: var(--devui-border-radius);
    transform: scale(1);

    &.devui-btn-common {
      min-width: var(--devui-btn-min-width);
      color: var(--devui-text);
      background-color: var(--devui-btn-common-bg) var(--devui-base-bg);
      border-color: var(--devui-btn-common-border-color) var(--devui-line);

      &:disabled {
        color: var(--devui-disabled-text);
        background: var(--devui-disabled-bg);
        border-color: var(--devui-btn-common-border-disabled);
      }
    }

    &.devui-btn-danger {
      &:disabled {
        color: var(--devui-disabled-text);
        background: var(--devui-disabled-bg);
        border: 1px solid var(--devui-disabled-line);
      }
    }

    &.devui-btn-text-dark {
      &:disabled {
        color: var(--devui-disabled-text);
      }
    }

    &.devui-btn-text {
      &:disabled {
        color: var(--devui-disabled-text);
      }
    }

    &.bordered {
      &.devui-btn-common {
        color: var(--devui-text);
        border-color: transparent;

        &:hover,
        &:focus {
          border-color: var(--devui-primary-hover);
        }

        &:active {
          border-color: var(--devui-primary-active);
        }
      }

      &.devui-btn-stress,
      &.devui-btn-primary {
        color: var(--devui-brand);
        background-color: var(--devui-block);
        border-color: var(--devui-brand);
      }

      &.devui-btn-success {
        color: var(--devui-success);
        background-color: var(--devui-block);
        border-color: var(--devui-success);
      }

      &.devui-btn-warning {
        color: var(--devui-warning);
        background-color: var(--devui-block);
        border-color: var(--devui-warning);
      }

      &.devui-btn-danger {
        color: var(--devui-danger);
        background-color: var(--devui-danger);
        border-color: var(--devui-danger);
      }
    }

    &.d-btn-icon:not(.devui-btn-primary, .devui-btn-danger, .devui-btn-common) {
      &:hover,
      &:focus {
        background-color: var(--devui-list-item-hover-bg);
        border: 1px solid var(--devui-list-item-hover-bg);
      }

      &:disabled {
        background-color: var(--devui-disabled-bg);
      }
    }

    &:not(:disabled) {
      & .devui-btn-text,
      .devui-btn-text-dark {
        &.d-btn-icon-wrap {
          color: var(--devui-text);

          &.devui-icon-fix {
            color: var(--devui-icon-fill);
          }

          &:hover {
            color: var(--devui-icon-fill-hover);

            &.devui-icon-fix {
              color: var(--devui-icon-fill-hover);
            }
          }
        }
      }
    }

    &.mouseDown:not(:disabled) {
      transform: scale(0.95);
    }
  }

  .devui-loading {
    &.devui-loading-default-spinner {
      & div {
        background-color: var(--devui-text);
      }
    }
  }

  .devui-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-style: solid;
    transition:
      background-color var(--devui-animation-duration-slow)
        var(--devui-animation-ease-in-out-smooth),
      border-color var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth),
      color var(--devui-animation-duration-slow) var(--devui-animation-ease-in-out-smooth);

    &:disabled,
    &[disabled] {
      cursor: not-allowed;
    }

    &.d-btn-icon {
      min-width: unset;
      padding: 8px;
      line-height: 1em;
      border: 1px solid transparent;

      &:not(.devui-btn-common) {
        border: 1px solid transparent;
      }

      &.devui-btn-xs,
      &.devui-btn-sm {
        padding: 4px;
      }

      &.devui-btn-xs {
        min-width: var(--devui-btn-icon-xs-min-width);
      }

      &.devui-btn-sm {
        min-width: var(--devui-btn-icon-sm-min-width);
      }

      &.devui-btn-lg {
        &.icon {
          font-size: var(--devui-font-size-icon);
        }

        min-width: var(--devui-btn-icon-lg-min-width);
      }
    }

    &:not(.d-btn-icon) {
      &.icon-fix {
        font-size: var(--devui-font-size-icon);
      }
    }
  }

  .devui-icon-fix {
    position: relative;
    font-size: var(--devui-font-size);
    pointer-events: none;

    &::before {
      transition: color var(--devui-animation-duration-slow)
        var(--devui-animation-ease-in-out-smooth);
    }
  }

  .devui-btn.devui-btn-common:not(:disabled) {
    &.devui-icon-fix {
      color: var(--devui-text-weak);
    }

    &:hover,
    &:active,
    &:focus {
      &.devui-icon-fix {
        color: var(--devui-icon-fill-active);
      }
    }
  }

  .button-content {
    position: relative;
    display: inline-block;
    pointer-events: none;
  }

  .clear-right-4 {
    margin-right: 4px;
  }

  .devui-btn-more-text-omits {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .devui-btn-circle {
    border-radius: 100%;
  }

  .devui-button-water-wave {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--devui-base-bg);
    border-radius: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: water-wave var(--devui-animation-duration-slow) var(--devui-animation-linear);
  }

  .devui-btn-primary {
    min-width: var(--devui-btn-min-width);
    color: var(--devui-light-text);
    background-color: var(--devui-primary);

    &:disabled {
      color: var(--devui-light-text);
      background: var(--devui-primary-disabled);
      border: none;
    }
  }

  .devui-btn-md {
    height: 32px;
    line-height: 32px;
  }

  @keyframes water-wave {
    0% {
      width: 30px;
      height: 30px;
      opacity: 0.2;
    }

    100% {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }
</style>
