<template>
  <div class="absolute w-full p-8">
    <div class="container flex justify-between items-end">
      <nuxt-link class="logo w-8 flex justify-between items-end" exact to="/">
        <img src="~/assets/images/logo.min.png" />
        <span>Village of the Monks</span>
      </nuxt-link>
      <nav class="leading-tight tracking-tight text-gray-900 font-medium">
        <nuxt-link to="/">Brandon Hill</nuxt-link>
        <nuxt-link to="/">Duiske Abbey</nuxt-link>
        <nuxt-link to="/">Tinnahinch Castle</nuxt-link>
        <nuxt-link to="/">River Barrow</nuxt-link>
      </nav>
    </div>
  </div>
</template>

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
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
}
</style>