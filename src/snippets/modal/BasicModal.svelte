<script>
  import { Button, Modal } from 'svelte-devui';

  let open = false;

  function openModal() {
    open = true;
  }

  function closeModal() {
    open = false;
  }

  function onOk() {
    alert('ok');
    closeModal();
  }
</script>

<Button on:click={openModal}>打开弹窗</Button>
<Modal
  {open}
  title="Start Snapshot Version"
  on:close={closeModal}
  on:ok={onOk}
  on:cancel={closeModal}
>
  <p>This is Modal</p>
</Modal>
