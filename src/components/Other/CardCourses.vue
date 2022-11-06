<template>

  <div class="card shadow" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ card.clock }}</h6>
      <p class="card-text">{{ card.price }}</p>
      <img :src="card.image" :alt="card.title">
    </div>
  </div>

</template>

<script>


export default {
  name: "CardCourses",
  props: {
    card: Object
  },
  setup() {


    return {}
  }
}
</script>

<style>

</style>