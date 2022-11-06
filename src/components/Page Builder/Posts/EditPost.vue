<template>

<!--  <header-web/>-->


  <div class="container text-start">
    <div class="row">
      <div class="col-md-6 col-12"></div>
      <div class="col-md-6 col-12 border rounded-3 p-5">
        <h2 class="fs-3 mb-3">:ویرایش نوشته</h2>
        <form @submit.prevent="validate">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fs-5">عنوان نوشته</label>
            <input v-model.lazy.trim="form.title" type="text" class="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp">
            <Transition name="bounce">
              <div v-if="validate" id="emailHelp" class="form-text text-danger">{{ form.titleErrorText }}</div>
            </Transition>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label fs-5">محتوای نوشته</label>
            <textarea v-model.lazy.trim="form.body" type="" class="form-control"
                      id="exampleFormControlTextarea1" style="height: 150px;"></textarea>
            <Transition name="bounce">
              <div v-if="validate" id="textareaHelp" class="form-text text-danger">{{ form.bodyErrorText }}</div>
            </Transition>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="loadingBtn">
            <span v-if="loadingBtn" class="spinner-border spinner-border-sm mx-2" role="status"
                  aria-hidden="true"></span>
            ویرایش نوشته
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {useTitle} from "@vueuse/core";
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2';
import {useRoute} from "vue-router";

export default {
  name: 'CreatePost',
  components: {
    // HeaderWeb: HeaderWeb
  },
  setup() {

    const title = useTitle();
    title.value = 'ویرایش نوشته';

    const form = reactive({
      title: '',
      body: '',
      titleErrorText: '',
      bodyErrorText: ''
    });
    const loadingBtn = ref(false);
    const route = useRoute();


    function validate() {
      if (form.title === '') {
        form.titleErrorText = '!درج عنوان نوشته الزامی می باشد'
      } else {
        form.titleErrorText = ''
      }

      if (form.body === '') {
        form.bodyErrorText = '!درج محتوای نوشته الزامی می باشد'
      } else {
        form.bodyErrorText = ''
      }
      if (form.title !== '' && form.body !== '') {
        loadingBtn.value = true;
        updatePost();
      }
    }

    function updatePost() {
      axios
          .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
            id: route.params.id,
            title: form.title,
            body: form.body,
            userId: 1,
          })
          .then(function () {
            loadingBtn.value = false;

            Swal.fire({
              title: 'وقتت بخیر',
              text: '.نوشته جدید با موفقیت ویرایش شد',
              icon: 'info',
              confirmButtonText: 'تایید'
            })
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    function getPost() {
      axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            form.title = response.data.title;
            form.body = response.data.body;
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    getPost();

    return {form, validate, updatePost, loadingBtn}
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>