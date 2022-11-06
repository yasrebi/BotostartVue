<template>

  <div class="row" dir="rtl">
    <div class="col-md-12">
      <h5 class="text-start fw-bold mb-3">ایجاد تسک جدید:</h5>
      <form @submit.prevent="storeTaskAction" class="row g-3 mb-3">
        <div class="col-md-6">
          <input v-model="title" type="text" class="form-control shadow-sm" id="exampleFormControlInput1"
                 placeholder="لطفا تسک جدید خود را وارد کنید">
          <div class="form-text text-danger text-start my-2" dir="rtl">{{ titleErrText }}</div>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary" type="submit" :disabled="loading">
            ایجاد تسک
            <span v-if="loading" class="spinner-border spinner-border-sm mx-2" role="status"
                  aria-hidden="true"></span>
          </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>


import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: 'CreateTask',
  setup() {
    const store = useStore();
    const title = ref('');
    const titleErrText = ref('');
    const loading = ref(false);

    async function storeTaskAction() {

      if (title.value === '') {
        titleErrText.value = 'درج تسک الزامی می باشد !'
      } else {
        titleErrText.value = ''
        loading.value = true;
        await store.dispatch('task/storeTask', title.value)
        title.value = '';
        loading.value = false;
      }

    }

    return {storeTaskAction, title, titleErrText, loading}
  }

}
</script>

<style scoped>
input::placeholder {
  font-size: 0.85rem;
  opacity: 0.7;
}

.form-text {
  font-size: 0.75rem;
  margin-right: 0.5rem;
}


</style>