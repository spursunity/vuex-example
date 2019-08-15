<template>
  <div class="movies">
    <Button :text="yearBtn.old" />
    <Button :text="yearBtn.new" />
    <Button :text="nameBtn" />
  </div>
</template>

<script>
import Button from '../ui/Button.vue';

export default {
  name: 'Movies',
  components: {
    Button
  },
  data() {
    return {
      yearBtn: {
        old: 'older',
        new: 'newer',
      },
      nameBtn: 'name',
    };
  },
  computed: {},
  methods: {},
}
</script>


<style scoped>
  .movies {
    padding: 1rem;
  }
</style>
