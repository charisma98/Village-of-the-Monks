<template>
  <div class="absolute z-50 w-full py-8">
    <div class="container flex items-end justify-between">
      <!-- Logo  -->
      <nuxt-link class="flex items-end justify-between w-8 logo" exact to="/">
        <img
          src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304557/logo.min.png"
          width="57"
          height="108"
        />
        <span>Village of the Monks</span>
      </nuxt-link>

      <!-- Desktop Menu -->
      <nav
        v-if="width > 768"
        class="font-medium leading-tight tracking-tight text-gray-900 md:flex"
      >
        <nuxt-link to="/brandon_hill">Brandon Hill</nuxt-link>
        <nuxt-link to="/duiske_abbey">Duiske Abbey</nuxt-link>
        <nuxt-link to="/tinnahinch_castle">Tinnahinch Castle</nuxt-link>
        <nuxt-link to="/river_barrow">River Barrow</nuxt-link>
      </nav>

      <!-- Burger Button -->
      <div v-if="width < 768">
        <img
          @click="mobileMenuIsOpen = !mobileMenuIsOpen"
          width="48"
          src="~/assets/images/menu.svg"
          style="filter: drop-shadow(0 1px 3px rgba(0,0,0,0.25));"
        />
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="bounce">
        <div v-if="mobileMenuIsOpen" class="fixed top-0 left-0 w-full p-6">
          <div
            class="relative flex items-center p-4 bg-white rounded-md shadow-md"
          >
            <img
              @click="mobileMenuIsOpen = false"
              width="48"
              src="~/assets/images/close.svg"
              class="absolute top-0 right-0 m-4"
            />
            <div @click="mobileMenuIsOpen = false" class="flex flex-col">
              <nuxt-link class="p-2" to="/">Home</nuxt-link>
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
      mobileMenuIsOpen: false,
      width: 0
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    }
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
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304562/nav-bg.png");
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
