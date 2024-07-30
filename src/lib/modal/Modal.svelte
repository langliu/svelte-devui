<script>
  /**
   * 是否打开
   */
  export let open = false;
  let dialog;
  $: {
    if (open === true) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }
</script>

<dialog bind:this={dialog} class="dialog">
  <slot />
</dialog>

<style>
  :where(dialog) {
    width: 100%;
    margin: auto 0 0;
    border: none;
    border-radius: 16px;
  }

  @media screen and (width >= 600px) {
    :where(dialog) {
      width: 480px;
      margin: auto;
    }
  }
</style>
