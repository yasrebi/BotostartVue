<template>

  <!--  loading-->

  <div v-if="loading" class="loading-div text-center my-5">
    <LoadingPage/>
  </div>


  <div v-else class="row g-4 me-5 my-5">
    <div class="col col-md-6 col-lg-4" v-for="user in users" :key="user.id">
      <CardView :user="user"/>
    </div>
  </div>

</template>

<script>
import {useTitle} from "@vueuse/core";
import axios from 'axios'
import {ref} from "vue";
import CardView from "@/components/Theme Builder/user/CardView.vue";
import LoadingPage from "@/components/Theme Builder/LoadingPage.vue";
import {useRoute} from "vue-router";

export default {
  name: 'IndexUserPage',
  components: {
    CardView: CardView,
    LoadingPage: LoadingPage,
  },
  setup() {
    const title = useTitle();
    title.value = 'کاربران';
    const users = ref([]);
    const loading = ref(true);
    const route = useRoute();

    function getUsers() {
      axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            users.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    getUsers();


    return {users, loading, route}
  }
}
</script>

<style>

</style>