<template>

  <!--  <header-web/>-->
  <div class="container text-start">
    <div class="row">
      <div class="col-md-6 col-12"></div>
      <div class="col-md-6 col-12 border rounded-3 p-5 bg-light">
        <h2 class="fs-3 mb-3">:افزودن نوشته جدید</h2>
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
                      id="exampleFormControlTextarea1"></textarea>
            <Transition name="bounce">
              <div v-if="validate" id="textareaHelp" class="form-text text-danger">{{ form.bodyErrorText }}</div>
            </Transition>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="loadingBtn">
            <span v-if="loadingBtn" class="spinner-border spinner-border-sm mx-2" role="status"
                  aria-hidden="true"></span>
            ارسال
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

export default {
  name: 'CreatePost',
  components: {},
  setup() {

    const title = useTitle();
    title.value = 'افزودن نوشته جدید';

    const form = reactive({
      title: '',
      body: '',
      titleErrorText: '',
      bodyErrorText: ''
    });
    const loadingBtn = ref(false);


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
        createPost();
        loadingBtn.value = true;
      }
    }

    function createPost() {
      axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            title: form.title,
            body: form.body,
            userId: 1,
          })
          .then(function (response) {
            loadingBtn.value = false;
            console.log(response.data);


            Swal.fire({
              title: 'وقتت بخیر',
              text: '.نوشته جدید با موفقیت ثبت شد',
              icon: 'success',
              confirmButtonText: 'تایید'
            })


          })
          .catch(function (error) {
            console.log(error);
          })
    }

    return {form, validate, loadingBtn}
  }
}
</script>

<style scoped>
#emailHelp {
  transition: .2s linear;
}
</style>