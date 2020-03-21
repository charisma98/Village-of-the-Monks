<template>
  <section :class="{ lazymasthead: !fullyLoaded }" class="masthead"></section>
</template>

<script>
export default {
  data() {
    return {
      fullyLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.fullyLoaded = true;
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
.lazymasthead {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304562/brush-strokes2.png")
      center bottom no-repeat,
    url("../assets/images/lazybg.jpg") repeat !important;
  background-size: 10px, cover;
}
section.masthead {
  width: 100%;
  height: 75vh;
}
@media (min-width: 768px) {
  section.masthead {
    width: 100%;
    height: 95vh;
  }
}
</style>
