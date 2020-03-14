<template>
  <div class="absolute w-full p-8 z-50">
    <div class="container flex justify-between items-end">
      <nuxt-link class="logo w-8 flex justify-between items-end" exact to="/">
        <img src="~/assets/images/logo.min.png" />
        <span>Village of the Monks</span>
      </nuxt-link>
      <nav
        class="hidden md:flex leading-tight tracking-tight text-gray-900 font-medium"
      >
        <nuxt-link to="/brandon_hill">Brandon Hill</nuxt-link>
        <nuxt-link to="/duiske_abbey">Duiske Abbey</nuxt-link>
        <nuxt-link to="/tinnahinch_castle">Tinnahinch Castle</nuxt-link>
        <nuxt-link to="/river_barrow">River Barrow</nuxt-link>
      </nav>
      <div class="md:hidden">
        <img
          @click="mobileMenuIsOpen = !mobileMenuIsOpen"
          width="48"
          src="~/assets/images/menu.svg"
          style="filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));"
        />
      </div>
      <transition name="bounce">
        <div
          v-if="mobileMenuIsOpen"
          class="fixed left-0 top-0 w-full py-6 px-12"
        >
          <div
            class="flex items-center bg-white rounded-md shadow-md p-4 relative"
          >
            <img
              @click="mobileMenuIsOpen = false"
              width="48"
              src="~/assets/images/close.svg"
              class=" absolute right-0 top-0 m-4"
            />
            <div @click="mobileMenuIsOpen = false" class="flex flex-col">
              <nuxt-link class="p-2" to="/brandon_hill">Brandon Hill</nuxt-link>
              <nuxt-link class="p-2" to="/duiske_abbey">Duiske Abbey</nuxt-link>
              <nuxt-link class="p-2" to="/tinnahinch_castle"
                >Tinnahinch Castle</nuxt-link
              >
              <nuxt-link class="p-2" to="/river_barrow">River Barrow</nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuIsOpen: false
    };
  }
};
</script>

<style lang="scss">
.logo {
  img {
    width: 30px;
    height: 60px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }
  span {
    color: #fff;
    font-size: 14px;
    line-height: 1;
    padding: 8px 0 0 8px;
    font-weight: 600;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  }
}
nav {
  background: url("../assets/images/nav-bg.png");
  background-size: 100% 100%;
  padding: 10px 0 12px 56px;
  min-width: 600px;
  justify-content: space-evenly;
  font-size: 16px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-200px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
