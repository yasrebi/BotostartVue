<template>

  <span @click="deleteTaskAction" class="bi bi-trash-fill ms-2"></span>

  <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
        aria-hidden="true"></span>

</template>

<script>

import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "UpdateTask",
  props: ['id'],
  setup(props) {
    const store = useStore();
    const loading = ref(false);

    async function deleteTaskAction() {
      loading.value = true;
      await store.dispatch('task/deleteTask', props.id)
      loading.value = false;
    }

    return {deleteTaskAction, loading}
  }
}

</script>

<style scoped>

</style>