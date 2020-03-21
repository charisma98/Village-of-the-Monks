<template>
  <div class="w-full overflow-x-hidden">
    <app-nav />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  components: {
    AppNav: () => import("@/components/AppNav.vue"),
    AppFooter: () => import("@/components/AppFooter.vue")
  }
};
</script>

<style lang="postcss">
@font-face {
  font-family: "rukolaregular";
  font-style: normal;
  font-display: swap;
  font-weight: normal;
  unicode-range: U+0020-007F; /* The bare minimum for the English Language */
  src: local("rukola-webfont"),
    url("../assets/fonts/rukola-webfont.woff2") format("woff2"),
    url("../assets/fonts/rukola-webfont.woff") format("woff");
}

@font-face {
  font-family: "festivo";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0020-007F; /* The bare minimum for the English Language */
  src: local("festivolettersno"),
    url("../assets/fonts/festivolettersno.6-webfont.woff2") format("woff2"),
    url("../assets/fonts/festivolettersno.6-webfont.woff") format("woff");
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
