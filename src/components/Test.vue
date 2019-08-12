<template>
  <div class="header">
    <p>{{ counter }}</p>
      <button
      type="button"
      @click="increaseCounter">
        {{ btnTxt }}
      </button>
    <p>{{ showLevel }}</p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      btnTxt: 'add 1',
      counter: 0,
    };
  },
  computed: {
    showLevel() {
      const level = this.counter % 2 === 0 ? 'even' : 'odd';

      return level;
    },
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
  },
}
</script>


<style scoped>
  .header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
  }

  p {
    font-size: 1rem;
    font-style: bold;
    padding: 1rem;
    border: 2px solid #000;
  }

  button {
    font-size: 1rem;
    font-style: bold;
  }
</style>
