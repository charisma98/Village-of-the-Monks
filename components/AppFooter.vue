<template>
  <div id="footer" class="text-white">
    <div class="container flex flex-col flex-wrap justify-end pt-48 pb-16 md:flex-row">
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
        <div class="mb-2 text-lg font-secondary">Sights</div>
        <nuxt-link class="text-sm text-gray-400" to="/brandonhill">Brandon Hill</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/duiskeabbey">Duiske Abbey</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/tinnahinchcastle">Tinnahinch Castle</nuxt-link>
        <nuxt-link class="text-sm text-gray-400" to="/riverbarrow">River Barrow</nuxt-link>
        <a class="text-sm text-gray-400" href="/pegwashingtonslane">Peg Washingtons Lane</a>
      </div>

      <div class="flex flex-col mt-8 mr-10 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Poems and Articals</div>

        <nuxt-link class="text-sm text-gray-400" to="/thedesertedvillage">The Deserted Village</nuxt-link>
        <nuxt-link
          class="text-sm text-gray-400 capitalize"
          to="/ioncewaslostnowimfound"
        >I once was lost</nuxt-link>
      </div>

      <div class="flex flex-col mt-8 md:mt-0">
        <div class="mb-2 text-lg font-secondary">Community Links</div>
        <a
          href="https://www.facebook.com/profile.php?id=100007286447440&fref=ts"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Angling Club</a>
        <a
          href="https://www.facebook.com/brandonhillcross"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Brandon Hill Cross Committee</a>
        <a
          href="https://www.facebook.com/franciesbar/"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Cosy Inn</a>
        <a
          href="https://www.facebook.com/Graiguenamanagh-GAA-Club-500349973410896"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >G.A.A Club</a>
        <a
          href="https://www.facebook.com/Highview-Athletic-FC-205142806201352/"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Highview Athletic F.C.</a>
        <a
          href="https://www.facebook.com/Love-Graig-1314414091927931/"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Love Graig</a>
        <a
          href="https://www.facebook.com/pages/Mick-Doyles-Pub/776116279118114"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Mick Doyle's Pub</a>
        <a
          href="https://www.facebook.com/ODriscollsBarBeerGarden"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >O'Driscolls Bar & Beer Garden</a>
        <a
          href="https://www.facebook.com/Graignamanagh-Regatta-402147136571713/?fref=ts"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Regatta</a>
        <a
          href="https://www.facebook.com/graiguenamanagh.tidytowns?fref=ts"
          class="text-sm text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >Tidy Towns</a>
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
