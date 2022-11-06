<template>

  <span v-if="task.completed" @click="updateTaskAction(task)" class="bi bi-check-all ms-2"></span>
  <span v-else @click="updateTaskAction(task)" class="bi bi-check ms-2"></span>

  <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
        aria-hidden="true"></span>

</template>

<script>

import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "UpdateTask",
  props: ['task'],
  setup() {
    const store = useStore();
    const loading = ref(false);

    async function updateTaskAction(task) {
      loading.value = true;
      await store.dispatch('task/updateTask', task)
      loading.value = false;
    }

    return {updateTaskAction, loading}
  }
}

</script>

<style>

</style>