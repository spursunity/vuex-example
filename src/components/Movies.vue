<template>
  <div class="movies">
    <div class="block">
      <Button :text="yearBtn.old" />
      <Button :text="yearBtn.new" />
      <Button :text="nameBtn" />
    </div>
    <div class="block">
      <Input :hint="placeholders.year" />
      <Input :hint="placeholders.name" />
    </div>
  </div>
</template>

<script>
import Button from '../ui/Button.vue';
import Input from '../ui/Input.vue';

export default {
  name: 'Movies',
  components: {
    Button,
    Input,
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
  methods: {},
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
