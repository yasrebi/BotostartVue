<template>

  <!--  <header-web/>-->


  <div v-if="loading" class="loading-div text-center my-5">
    <LoadingPage/>
  </div>


  <div v-else class="row d-flex justify-content-center">
    <div class="col-md-6">
      <div class="card text-center shadow">
        <div class="card-body">
          <router-link :to="{ name:'posts' }" class="text-center text-primary text-decoration-none">{{ post.title }}
          </router-link>
          <p class="card-text my-3">{{ post.body }}</p>
        </div>

        <div class="card-footer p-3">
          <button @click.prevent="deletePost" class="btn btn-danger ms-2">
             <span v-if="loadingDeleteBtn" class="spinner-border spinner-border-sm mx-2" role="status"
                   aria-hidden="true"></span>
            حذف نوشته
          </button>
          <router-link :to="{name: 'editPost'}" class="btn btn-primary">ویرایش نوشته</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderWeb from "@/components/Theme Builder/HeaderWeb.vue";

import {useTitle} from "@vueuse/core";
import axios from 'axios'
import {ref} from "vue";
import LoadingPage from "@/components/Theme Builder/LoadingPage.vue";
import {useRoute} from "vue-router";
import Swal from "sweetalert2";

export default {
  name: 'IndexPostsPage',
  components: {
    LoadingPage: LoadingPage
  },
  setup() {

    const title = useTitle();
    title.value = 'مقالات | ';

    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    const loadingDeleteBtn = ref(false);

    // const route = useRoute();

    function getPost() {
      axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    getPost();


    function deletePost() {
      axios
          .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
            loadingDeleteBtn.value = false;


            Swal.fire({
              title: 'وقتت بخیر',
              text: '.نوشته مورد نظر حذف شد',
              icon: 'error',
              confirmButtonText: 'تایید'
            })
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    return {post, loading, route, deletePost, loadingDeleteBtn}
  }
}
</script>

<style scoped>

</style>