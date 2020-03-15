<template>
  <div id="footer" class="text-white">
    <div
      class="container pt-48 pb-16 flex justify-end flex-wrap flex-col md:flex-row"
    >
      <div class="flex-1">
        <img width="50" class="opacity-75" src="~/assets/images/logo.png" alt />
      </div>

      <div class="flex flex-col mr-10 mt-8 md:mt-0">
        <div class="text-lg mb-2 font-secondary">Pages</div>
        <nuxt-link class="text-gray-400 text-sm" to="/brandon_hill"
          >Brandon Hill</nuxt-link
        >
        <nuxt-link class="text-gray-400 text-sm" to="/duiske_abbey"
          >Duiske Abbey</nuxt-link
        >
        <nuxt-link class="text-gray-400 text-sm" to="/tinnahinch_castle"
          >Tinnahinch Castle</nuxt-link
        >
        <nuxt-link class="text-gray-400 text-sm" to="/river_barrow"
          >River Barrow</nuxt-link
        >
        <nuxt-link class="text-gray-400 text-sm" to="/contact"
          >Contact</nuxt-link
        >
      </div>

      <div class="flex flex-col mr-10 mt-8 md:mt-0">
        <div class="text-lg mb-2 font-secondary">Poems, Articals & Stories</div>
        <nuxt-link class="text-gray-400 text-sm" to="/"
          >The Deserted Village</nuxt-link
        >
      </div>

      <div class="flex flex-col mt-8 md:mt-0">
        <div class="text-lg mb-2 font-secondary">Community Links</div>
        <a href class="text-gray-400 text-sm" target="_blank"
          >Brandon Hill Cross Committee</a
        >
        <a href class="text-gray-400 text-sm" target="_blank">Cosy Inn</a>
        <a href class="text-gray-400 text-sm" target="_blank"
          >Graignamanagh Regatta</a
        >
        <a href class="text-gray-400 text-sm" target="_blank"
          >Graiguenamanagh Angling Club</a
        >
        <a href class="text-gray-400 text-sm" target="_blank"
          >Graiguenamanagh G.A.A Club</a
        >
        <a href class="text-gray-400 text-sm" target="_blank"
          >Graiguenamanagh Tidy Towns</a
        >
        <a href class="text-gray-400 text-sm" target="_blank"
          >Highview Athletic F.C.</a
        >
        <a href class="text-gray-400 text-sm" target="_blank">Love Graig</a>
        <a href class="text-gray-400 text-sm" target="_blank"
          >Mick Doyle's Pub</a
        >
        <a href class="text-gray-400 text-sm" target="_blank"
          >O'Driscolls Bar & Beer Garden</a
        >
      </div>
    </div>

    <!-- Copyright info -->
    <div id="copyright">
      <div class="container py-4 flex justify-end">
        <!-- <div class="tweet">Tweet</div> -->
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} villageofthemonks.com by
          <a
            href="https://scottyzen.com"
            target="_blank"
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
