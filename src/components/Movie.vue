<template>
  <div>
    <h3>{{ movieData.name }}</h3>
    <p>{{ movieData.year }}</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movieData: {
      name: String,
      year: Number,
    },
  },
}
</script>

<style scoped>
</style>
