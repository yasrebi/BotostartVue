<template>

  <div>TypeScript</div>

</template>

<script>
import {useTitle} from "@vueuse/core";

export default {
  name: "TypeScript",
  setup() {
    const title = useTitle();
    title.value = "دوره مقدماتی تا پیشرفته تایپ اسکریپت | بوتواستارت";
    return {}
  },
}
</script>

<style scoped>

</style>