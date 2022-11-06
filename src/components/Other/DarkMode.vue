<template>

  <p>isDArk : {{ isDark }}</p>
  <button @click="toggleDark()" class="btn btn-outline-dark px-4 py-2 text-white rounded-3">Toggle Dark</button>

</template>

<script>
import {useDark, useToggle} from '@vueuse/core';


export default {
  name: "DarkMode",
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return {toggleDark}
  }
}
</script>

<style>

</style>