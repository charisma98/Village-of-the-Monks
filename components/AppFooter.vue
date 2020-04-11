<template>
  <div id="footer" class="text-white">
    <div
      class="container flex flex-col flex-wrap justify-end pt-48 pb-16 md:flex-row"
    >
      <div class="flex-1">
        <!-- Logo  -->
        <nuxt-link class="flex items-end justify-between w-8 logo" exact to="/">
          <img
            src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304557/logo.min.png"
            width="57"
            height="108"
            alt="Village of the Monks logo"
          />
          <span>Village of the Monks</span>
        </nuxt-link>
      </div>

      <div class="flex flex-col mt-8 mr-10 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Pages</div>
        <nuxt-link class="text-sm text-gray-400" to="/brandonhill"
          >Brandon Hill</nuxt-link
        >
        <nuxt-link class="text-sm text-gray-400" to="/duiskeabbey"
          >Duiske Abbey</nuxt-link
        >
        <nuxt-link class="text-sm text-gray-400" to="/tinnahinchcastle"
          >Tinnahinch Castle</nuxt-link
        >
        <nuxt-link class="text-sm text-gray-400" to="/riverbarrow"
          >River Barrow</nuxt-link
        >
        <!-- <nuxt-link class="text-sm text-gray-400" to="article/pegwashingtonslane"
          >Peg Washingtons Lane</nuxt-link
        > -->
        <!-- <nuxt-link class="text-sm text-gray-400" to="/contact">Contact</nuxt-link> -->
      </div>

      <div class="flex flex-col mt-8 mr-10 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Poems and Articals</div>
        <nuxt-link class="text-sm text-gray-400" to="/thedesertedvillage"
          >The Deserted Village</nuxt-link
        >
        <nuxt-link class="text-sm text-gray-400" to="/ioncewaslostnowimfound"
          >I once was lost - now Im found</nuxt-link
        >
      </div>

      <div class="flex flex-col mt-8 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Community Links</div>
        <a href class="text-sm text-gray-400" target="_blank">Angling Club</a>
        <a href class="text-sm text-gray-400" target="_blank"
          >Brandon Hill Cross Committee</a
        >
        <a href class="text-sm text-gray-400" target="_blank">Cosy Inn</a>
        <a href class="text-sm text-gray-400" target="_blank">G.A.A Club</a>
        <a href class="text-sm text-gray-400" target="_blank"
          >Highview Athletic F.C.</a
        >
        <a href class="text-sm text-gray-400" target="_blank">Love Graig</a>
        <a href class="text-sm text-gray-400" target="_blank"
          >Mick Doyle's Pub</a
        >
        <a href class="text-sm text-gray-400" target="_blank"
          >O'Driscolls Bar & Beer Garden</a
        >
        <a href class="text-sm text-gray-400" target="_blank">Regatta</a>
        <a href class="text-sm text-gray-400" target="_blank">Tidy Towns</a>
      </div>
    </div>

    <!-- Copyright info -->
    <div id="copyright">
      <div class="container flex justify-end py-4">
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} villageofthemonks.com by
          <a
            href="https://scottyzen.com"
            target="_blank"
            rel="noopener"
            class="text-yellow-500"
            >Scott Kennedy</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
#footer {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304560/brush-strokes-dark.png")
      no-repeat,
    url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304562/pattern-dark-bg.png");
  background-size: 100% auto, 50%;

  & a {
    &:hover {
      @apply text-yellow-500;
    }
  }
}
#copyright {
  background: #161e22;
}
</style>
