<template>

  <div class="card text-center shadow" style="width: 20rem;">
    <div class="card-body">
      <h1 class="text-center text-primary">{{ user.id }}</h1>
      <router-link :to="{ name:'userId' , params:{id:user.id} }" class="card-title" style="text-decoration: none;">
        {{ user.name }}
      </router-link>
      <h6 class="card-text my-3">{{ user.username }}</h6>
      <a :href="user.email" target="_blank" class="btn btn-primary" type="button">{{ user.email }}</a>
      <p class="card-text text-info my-3">
        <a :href="user.phone" class="card-text text-info my-3">{{ user.phone }}</a>
      </p>
    </div>
  </div>

</template>

<script>

export default {
  name: "CardView",
  props: {
    user: Object
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>