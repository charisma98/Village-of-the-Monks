<template>
  <div>
    <app-nav />
    <!-- <transition name="scott" mode> -->
    <nuxt />
    <!-- </transition> -->
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  }
};
</script>

<style>
@font-face {
  font-family: "rukolaregular";
  src: url("../assets/fonts/rukola-webfont.woff2") format("woff2"),
    url("../assets/fonts/rukola-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "festivo";
  src: url("../assets/fonts/festivolettersno.6-webfont.woff2") format("woff2"),
    url("../assets/fonts/festivolettersno.6-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
html {
  font-family: "Proxima Nova Bold", sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: url("../assets/images/body-bg.png");
  background-size: 300px;
}

.fade-leave-active {
  animation: fadeout 600ms ease-in-out;
}
.fade-enter-active {
  animation: fadein 600ms ease-in-out;
}

@keyframes fadeout {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.01);
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
    transform: scale(1.01);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
