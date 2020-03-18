<template>
  <div>
    <app-masthead class="brandon-hill"></app-masthead>
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="w-full tracking-tight text-gray-600 md:w-9/20">
          <div class="title">
            <small>Cnoc Bhréanail</small>
            Brandon Hill
          </div>
          <p>
            Brandon Hill is the highest mountain in County Kilkenny. It has an
            elevation of 515 m (1,690 ft). It is situated 4 kilometers
            South-South-West of Graignamanagh, 7 kilometers east of Inistioge
            and 11 kilometers east of Thomastown, in the south of County
            Kilkenny. Brandon Hill is in the barony of Gowran and in the
            province of Leinster. The village of Graignamanagh is at the base of
            the hill.
          </p>
          <p class="mt-4">
            It is the termination of the chain of granitic mountains that raise
            from the shores of Dublin bay. The base of Brandon Hill on the side
            of the River Barrow and the hill running to Graig is composed of
            schist rock. This blackish siliceous schistus, sometimes containing
            grains of quartz and when it is broken it has a shivery texture and
            is hard enough to scratch glass. There are a few beds of marble and
            limestone gravel near the foot of the mountain.
          </p>
        </div>
        <div class="w-full mt-8 md:w-9/20 md:-mt-32">
          <img
            src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304552/first-cross.jpg"
            alt
          />
        </div>
      </div>
    </div>
    <img
      src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304553/brandon-full-width.png"
      class="hidden object-cover object-center w-full md:block"
      alt="Old phone of the cross on Brandon hill being erected"
    />
    <div class="container mt-12 md:my-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full mb-8 md:w-1/3 md:pr-8">
          <h3 class="mb-2 text-lg text-green-500 font-secondary">
            Trail Details
          </h3>
          <p>
            A challenging walk from Graiguenamanagh along country roadways ,
            forestry tracks and hillside paths to the highest point in County
            Kilkenny
          </p>
        </div>
        <div class="w-full md:w-3/5">
          <h3 class="mb-2 text-lg text-green-500 font-secondary">
            Direction to Trailhead
          </h3>
          <p>
            Brandon Hill loop starts in the town of Graignamanagh. The trailhead
            is at the junction on Lower Main Street.
          </p>
          <div class="flex mt-8">
            <div class="w-1/3">
              <h4 class="mb-2 text-lg text-green-500 font-secondary">
                Distance / Time
              </h4>
              <p>18km / 7hrs</p>
            </div>
            <div class="w-1/3">
              <h4 class="mb-2 text-lg text-green-500 font-secondary">
                High / Ascent
              </h4>
              <p>520m / 600m</p>
            </div>
            <div class="w-1/3">
              <h4 class="mb-2 text-lg text-green-500 font-secondary">
                Difficulty
              </h4>
              <p>Hard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <insta-feed hashtag="brandonhillloop" numberOfImages="32" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Brandon Hill"
  },
  components: {
    AppMasthead: () => import("@/components/AppMasthead.vue"),
    InstaFeed: () => import("@/components/InstaFeed.vue")
  }
};
</script>

<style>
.brandon-hill {
  background: url("../assets/images/brush-strokes2.png") center bottom no-repeat,
    url("../assets/images/brandon-header-large.jpg") center;
  background-size: contain, cover;
}
</style>
