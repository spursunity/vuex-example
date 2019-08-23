<template>
  <div class="movies">
    <div class="block">
      <Button :text="yearBtn.old" :onClick="getOlderMovies" />
      <Button :text="yearBtn.new" :onClick="getNewerMovies" />
      <Button :text="nameBtn" :onClick="getMovieByName" />
    </div>
    <div class="block">
      <Input :hint="placeholders.year" :onChange="setInputMovieYear" />
      <Input :hint="placeholders.name" :onChange="setInputMovieName" />
    </div>
    <Results />
  </div>
</template>

<script>
import Button from '../ui/Button.vue';
import Input from '../ui/Input.vue';
import Results from './Results.vue';

export default {
  name: 'Movies',
  components: {
    Button,
    Input,
    Results,
  },
  data() {
    return {
      yearBtn: {
        old: 'older',
        new: 'newer',
      },
      nameBtn: 'name',
      placeholders: {
        year: 'Movie Year',
        name: 'Movie name',
      },
    };
  },
  computed: {},
  methods: {
    getOlderMovies() {
      const year = this.$store.getters.INPUT_YEAR;
      const payload = { order: 0, year };

      this.$store.dispatch('GET_MOVIES', payload);
    },
    getNewerMovies() {
      const year = this.$store.getters.INPUT_YEAR;

      this.$store.dispatch('GET_MOVIES', { order: 1, year });
    },
    getMovieByName() {
      const name = this.$store.getters.INPUT_NAME;

      this.$store.dispatch('GET_MOVIES', { name });
    },
    setInputMovieName(e) {
      const { value } = e.target;

      this.$store.commit('SET_INPUT_NAME', value);
    },
    setInputMovieYear(e) {
      const { value } = e.target;

      this.$store.commit('SET_INPUT_YEAR', value);
    },
  },
}
</script>


<style scoped>
  .movies {
    padding: 1rem;
  }

  .block {
    display: flex;
    justify-content: center;
    border: 1px solid #999;
    padding: .5rem;
  }
</style>
