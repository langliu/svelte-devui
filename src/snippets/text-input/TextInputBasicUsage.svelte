<script>
  import { TextInput } from 'svelte-devui';
</script>

<h4>Default</h4>
<TextInput placeholder="Please Enter" />
<h4>Disabled</h4>
<TextInput placeholder="Please Enter" disabled />
<h4>Error</h4>
<TextInput placeholder="Please Enter" error />
<h4>Gray Mode</h4>
<TextInput placeholder="Please Enter" styleType="gray" />

<style>
  h4 {
    font-size: 14px;
    color: #575d6c;
  }
</style>
