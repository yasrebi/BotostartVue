<template>

  <div class="row mb-4" dir="rtl">
    <div class="col-md-2">
      <h6 class="text-start fw-bold mb-3">فیلتر تسک ها :</h6>
      <select v-model="numberFilterLimit" @change="filterTasksAction" class="form-select form-select-sm shadow-sm">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>

</template>

<script>


import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "FilterTask",
  setup() {
    const store = useStore();
    const numberFilterLimit = ref('');

    function filterTasksAction() {
      store.dispatch('task/filterTasks', numberFilterLimit.value)
    }

    return {filterTasksAction, numberFilterLimit}
  }

}
</script>

<style scoped>

</style>