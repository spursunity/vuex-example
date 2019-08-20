<template>
  <ol class="results">
    <li :key="i" v-for="(mData, i) of movies">
      <Movie :movieData="mData" />
      <div class="boundary"></div>
    </li>
  </ol>
</template>

<script>
import Movie from './Movie.vue';

export default {
  name: 'Results',
  components: {
    Movie,
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.getters.MOVIES || []
    },
  },
}
</script>

<style scoped>
  .results {
    border: 1px solid #777;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .boundary {
    width: 100%;
    height: .2rem;
    background-color: #999;
  }
</style>
