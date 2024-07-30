<script>
  import { Button, Modal } from 'svelte-devui';

  let open = false;

  function openModal() {
    open = true;
  }
</script>

<Button on:click={openModal}>open dialog</Button>
<Modal {open}>
  <p>This is Modal</p>
</Modal>
