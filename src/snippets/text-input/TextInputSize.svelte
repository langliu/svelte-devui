<script>
  import { TextInput } from 'svelte-devui';
</script>

<h4>Small</h4>
<TextInput placeholder="Please Enter" size="sm" />
<h4>Middle</h4>
<TextInput placeholder="Please Enter" />
<h4>Large</h4>
<TextInput placeholder="Please Enter" size="lg" />

<style>
  h4 {
    font-size: 14px;
    color: #575d6c;
  }
</style>
