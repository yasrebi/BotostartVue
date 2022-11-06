<template>
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
</template>

<script>

import {reactive, ref} from "vue";

export default {
  name: 'FormValidate',
  setup() {
    const form = reactive({
      title: '',
      body: '',
      titleErrorText: '',
      bodyErrorText: ''
    });
    const loading = ref(true);


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
        // createPost();
      }
    }

    return {form, loading, validate}
  }
}
</script>

<style>

</style>