<template>

  <section class="">
    <div class="container">
      <div class="row">
        <div class="col-md-4 g-3" v-for="user in users" :key="user.id">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ user.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted"></h6>
              <p class="card-text">{{ user.id }}</p>
              <a href="#" class="card-link">{{ user.email }}</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "KarbarPage",
  components: {},
  setup() {
    const users = ref([]);


    function getUsers() {
      axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            users.value = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    getUsers();

    return {getUsers, users}
  }
}
</script>

<style scoped>


</style>