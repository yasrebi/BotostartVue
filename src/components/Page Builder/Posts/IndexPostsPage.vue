<template>

  <!--  <header-web/>-->


  <div class="text-center mb-4">
    <router-link :to="{name: 'createPost'}" class="btn btn-primary">افزودن نوشته جدید</router-link>
  </div>


  <div v-if="loading" class="loading-div text-center my-5">
    <LoadingPage/>
  </div>


  <div v-else class="row g-4 me-5 my-5">
    <div class="col " v-for="(post,index) in posts" :key="index">
      <div class="card text-center shadow" style="width: 20rem;">
        <div class="card-body">
          <router-link style="text-decoration: none;" :to="{name:'postId',params:{id:post.id}}"
                       class="text-center text-primary">{{
              post.title
            }}
          </router-link>
          <p class="card-text my-3">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {useTitle} from "@vueuse/core";
// import HeaderWeb from "@/components/Theme Builder/HeaderWeb.vue";
import axios from 'axios'
import {ref} from "vue";
import LoadingPage from "@/components/Theme Builder/LoadingPage.vue";
// import {useRoute} from "vue-router";

export default {
  name: 'IndexPostsPage',
  components: {
    // HeaderWeb: HeaderWeb,
    LoadingPage: LoadingPage,
  },
  setup() {
    const title = useTitle();
    title.value = 'مقالات';
    const posts = ref([]);
    const loading = ref(true);


    function getPosts() {
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
            posts.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    getPosts();


    return {posts, loading}
  }
}
</script>

<style scoped>

</style>