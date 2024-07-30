<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { X } from 'lucide-svelte';

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
    console.log('close');
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
</dialog>

<style>
  :where(dialog) {
    width: 100vw;
    margin: auto 0 0;
    border: none;
    border-radius: 16px 16px 0 0;
    max-width: unset;
    padding: 0;

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
    padding: 20px 20px 0;
    top: 0;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    gap: 16px;

    & .modal-header-title {
      color: var(--devui-text, #191919);
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 700;
      vertical-align: middle;
    }

    & .modal-header-icon {
      display: grid;
      cursor: pointer;
      place-items: center;
    }

    & .modal-header-x {
      width: 18px;
      height: 18px;
    }
  }

  .modal-content {
    max-height: 600px;
    overflow-y: auto;
    padding: 20px;
    color: #333;
    scrollbar-gutter: stable;
  }
</style>
