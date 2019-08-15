<template>
  <input class="text-field" type="text" :placeholder="hint">
</template>

<script>
export default {
  name: 'Input',
  props: {
    hint: String
  },
}
</script>

<style scoped>
  .text-field {
    padding: .5rem;
    outline: none;
    border: 2px solid #000;
    font-size: 1rem;
    font-style: italic;
    margin: .5rem;
    width: 200px;
  }
</style>
