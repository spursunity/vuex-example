<template>
  <div class="movies">
    <div class="block">
      <Button :text="yearBtn.old" :onClick="getOlderMovies" />
      <Button :text="yearBtn.new" :onClick="getNewerMovies" />
      <Button :text="nameBtn" :onClick="getMovieByName" />
    </div>
    <div class="block">
      <Input :hint="placeholders.year" />
      <Input :hint="placeholders.name" />
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
      this.$store.dispatch('GET_MOVIES', { name: 'rock', year: 2000 });
    },
    getNewerMovies() {
      console.log(this.$store.getters.MOVIES);
      console.log('hi');
      this.$store.dispatch('GET_MOVIES', 'button newer');
    },
    getMovieByName() {
      this.$store.dispatch('GET_MOVIES', 'button name');
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
