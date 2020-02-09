<template>
  <div>
    <app-nav />
    <nuxt />
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

/* .page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
  transform: translateY(10px);
}
.page-enter,
.page-leave-active {
  opacity: 0;
} */

.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
