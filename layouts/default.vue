<template>
  <div class="w-full overflow-x-hidden">
    <app-nav />
    <!-- <transition name="scott" mode> -->
    <nuxt />
    <!-- </transition> -->
    <app-footer />
  </div>
</template>

<script>
import AppNav from "../components/AppNav";
export default {
  components: {
    AppNav,
    AppFooter: () => import("@/components/AppFooter.vue")
  }
};
</script>

<style lang="postcss">
@font-face {
  font-family: "rukolaregular";
  src: url("../assets/fonts/Rukola.woff2") format("woff2"),
    url("../assets/fonts/Rukola.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "festivo";
  src: url("../assets/fonts/FestivoLettersNo.6.woff2") format("woff2"),
    url("../assets/fonts/FestivoLettersNo.6.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
html {
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304546/body-bg.png");
  background-size: 600px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-leave-active {
  animation: fadeout 600ms ease-in-out;
}
.fade-enter-active {
  animation: fadein 600ms ease-in-out;
}
.text-green {
  color: #7db070;
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
