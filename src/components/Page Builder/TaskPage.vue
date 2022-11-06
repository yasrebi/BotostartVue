<template>

  <div class="container text-center my-5">

    <!--    Create Tasks-->
    <CreateTask/>

    <!--    Filter Tasks-->
    <FilterTask/>

    <div v-if="loading" class="loading-div text-center my-5">
      <LoadingPage/>
    </div>

    <div v-else class="row g-3">
      <div v-for="task in tasks" :key="task.id" class="col-md-4">
        <div class="card shadow-sm" :class="{'bg-light':task.completed}">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <del v-if="task.completed">{{ task.title }}</del>
              <div v-else>{{ task.title }}</div>
            </div>
            <div class="d-flex align-items-center">
              <UpdateTask :task="task"/>
              <DeleteTask :id="task.id"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

import {useTitle} from "@vueuse/core";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import LoadingPage from "@/components/Theme Builder/LoadingPage.vue";
import FilterTask from "@/components/Page Builder/Task/FilterTask.vue";
import CreateTask from "@/components/Page Builder/Task/CreateTask.vue";
import UpdateTask from "@/components/Page Builder/Task/UpdateTask.vue";
import DeleteTask from "@/components/Page Builder/Task/DeleteTask.vue";

export default {
  name: "TaskPage",
  components: {
    CreateTask,
    LoadingPage,
    FilterTask,
    UpdateTask,
    DeleteTask,
  },
  setup() {
    const title = useTitle();
    title.value = 'تسک ها';
    const store = useStore();
    const tasks = computed(() => store.getters["task/allTasks"]);
    const loading = ref(false);


    async function fetchTaskAction() {
      loading.value = true;
      await store.dispatch("task/fetchTasks")
      loading.value = false;
    }

    fetchTaskAction();

    return {tasks, loading}
  }
}
</script>

<style scoped>
.card-body {
  height: 6.5rem;
}

.loading-div {
  z-index: 100;
}
</style>