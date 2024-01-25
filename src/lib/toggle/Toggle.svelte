<script lang="ts">
  export let disabled: boolean = false;
  export let checked: boolean = false;
</script>

<input type="checkbox" {checked} {disabled} on:change />

<style>
  input[type='checkbox'] {
    appearance: none;
    background: transparent;
  }
</style>
