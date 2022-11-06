<template>
  <section>
    <TopRow/>
    <CoursesPage/>
  </section>
</template>

<script>
import TopRow from "@/components/Page Builder/Courses/TopRow";
import CoursesPage from "@/components/Page Builder/CoursesPage";

export default {
  name: "CoursesIndex",
  components: {CoursesPage, TopRow}
}
</script>

<style scoped>

</style>