<template>
  <HeaderWeb/>
  <router-view></router-view>
  <FooterWeb/>
</template>

<script>
import {useDark, useToggle} from '@vueuse/core';
import HeaderWeb from "@/components/Theme Builder/HeaderWeb.vue";
import FooterWeb from "@/components/Theme Builder/FooterWeb";

export default {
  name: 'App',
  components: {
    FooterWeb,
    HeaderWeb,
  },
  setup() {

    const isDark = useDark()
    const toggleDark = useToggle(isDark)


    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return {scrollToTop, toggleDark}
  }
}
</script>

<style>
@import "./assets/fonts/fonts.css";

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #25252d;
}

::-webkit-scrollbar-thumb {
  background: #C1C2C8;
  border-radius: 8px;
}


</style>
