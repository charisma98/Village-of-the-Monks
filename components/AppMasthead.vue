<template>
  <section class="masthead" :style="{ backgroundImage: `url('${featuredImage}')` }">
    <div class="brush-stroke"></div>
  </section>
</template>

<script>
export default {
  props: ["featuredImage"]
};
</script>

<style lang="scss" scoped>
section.masthead {
  width: 100%;
  height: 75vh;
  background-size: cover;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}
@media screen and (min-width: 768px) {
  section.masthead {
    max-height: 60vw;
  }
}
.brush-stroke {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304562/brush-strokes2.png")
    center bottom no-repeat;
  background-size: contain;
}
@media (min-width: 768px) {
  section.masthead {
    width: 100%;
    height: 95vh;
  }
}
</style>
