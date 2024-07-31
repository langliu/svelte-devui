<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { X } from 'lucide-svelte';
  import { Button } from '../button';

  const emit = createEventDispatcher();
  /**
   * 是否打开
   */
  export let open = false;
  /**
   * 模态框标题
   * @type {string}
   */
  export let title = '';
  /**
   * @type {HTMLDialogElement}
   */
  let dialog;
  $: {
    console.log('open', open);
    if (open === true) {
      dialog?.showModal();
    } else {
      dialog?.close();
      close();
    }
  }

  function close() {
    emit('close');
  }

  onMount(() => {
    dialog.addEventListener('close', close);
    return () => {
      dialog.removeEventListener('close', close);
    };
  });
</script>

<dialog bind:this={dialog} class="dialog">
  <div class="modal-header">
    <div class="modal-header-title">{title}</div>
    <div role="button" tabindex={1} on:click={close} class="modal-header-icon">
      <X class="modal-header-x" />
    </div>
  </div>
  <div class="modal-content">
    <slot />
  </div>
  <div class="modal-footer">
    <Button on:click={() => emit('ok')}>确认</Button>
    <Button style="common" on:click={() => emit('cancel')}>取消</Button>
  </div>
</dialog>

<style>
  :where(dialog) {
    width: 100vw;
    max-width: unset;
    padding: 0;
    margin: auto 0 0;
    border: none;
    border-radius: 16px 16px 0 0;

    &:focus-visible {
      outline: none;
    }
  }

  @media screen and (width >= 600px) {
    :where(dialog) {
      width: 480px;
      margin: auto;
      border-radius: 16px;
    }
  }

  .modal-header {
    position: sticky;
    top: 0;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0;
    border: none;

    & .modal-header-title {
      overflow: hidden;
      font-size: 18px;
      font-weight: 700;
      color: var(--devui-text, #191919);
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }

    & .modal-header-icon {
      display: grid;
      place-items: center;
      cursor: pointer;
    }

    & .modal-header-x {
      width: 18px;
      height: 18px;
    }
  }

  .modal-content {
    max-height: 600px;
    padding: 20px;
    overflow-y: auto;
    color: #333;
    scrollbar-gutter: stable;
  }

  .modal-footer {
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 0 20px 20px;
  }
</style>
