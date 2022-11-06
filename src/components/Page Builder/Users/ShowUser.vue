<template>
  <div v-if="loading" class="loading-div text-center my-5">
    <LoadingPage/>
  </div>


  <div v-else class="row g-4 me-5">
    <div class="col col-md-6 col-lg-4">
      <CardView :user="user"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import CardView from "@/components/Theme Builder/user/CardView.vue";
import LoadingPage from "@/components/Theme Builder/LoadingPage.vue";
import {useRoute} from "vue-router";

export default {
  name: 'ShowUser',
  components: {
    CardView: CardView,
    LoadingPage: LoadingPage
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();


    function getUser() {
      axios
          .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(function (response) {
            user.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    getUser();

    return {user, loading}
  }
}
</script>

<style>

</style>