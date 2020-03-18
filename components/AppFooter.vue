<template>
  <div id="footer" class="text-white">
    <div class="container flex flex-col flex-wrap justify-end pt-48 pb-16 md:flex-row">
      <div class="flex-1">
        <img
          width="50"
          loading="lazy"
          class="opacity-75"
          src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304558/logo.png"
          alt
        />
      </div>

      <div class="flex flex-col mt-8 mr-10 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Pages</div>
        <nuxt-link class="text-sm text-gray-400" to="/brandon_hill">Brandon Hill</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/duiske_abbey">Duiske Abbey</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/tinnahinch_castle">Tinnahinch Castle</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/river_barrow">River Barrow</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/contact">Contact</nuxt-link>
      </div>

      <div class="flex flex-col mt-8 mr-10 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Poems, Articals & Stories</div>
        <nuxt-link class="text-sm text-gray-400" to="/">The Deserted Village</nuxt-link>
      </div>

      <div class="flex flex-col mt-8 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Community Links</div>
        <a href class="text-sm text-gray-400" target="_blank">Brandon Hill Cross Committee</a>
        <a href class="text-sm text-gray-400" target="_blank">Cosy Inn</a>
        <a href class="text-sm text-gray-400" target="_blank">Graignamanagh Regatta</a>
        <a href class="text-sm text-gray-400" target="_blank">Graiguenamanagh Angling Club</a>
        <a href class="text-sm text-gray-400" target="_blank">Graiguenamanagh G.A.A Club</a>
        <a href class="text-sm text-gray-400" target="_blank">Graiguenamanagh Tidy Towns</a>
        <a href class="text-sm text-gray-400" target="_blank">Highview Athletic F.C.</a>
        <a href class="text-sm text-gray-400" target="_blank">Love Graig</a>
        <a href class="text-sm text-gray-400" target="_blank">Mick Doyle's Pub</a>
        <a href class="text-sm text-gray-400" target="_blank">O'Driscolls Bar & Beer Garden</a>
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
            class="text-yellow-500"
          >Scott Kennedy</a>
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
