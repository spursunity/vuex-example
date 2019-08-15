<template>
  <button class="button" type="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
}
</script>

<style scoped>
  .button {
    padding: .5rem;
    border-radius: .5rem;
    background-color: #1b18b8;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    margin: .5rem;
  }

  .button:hover {
    color: #1b18b8;
    background-color: #ccc;
  }
</style>
