<template>
  <div>
    <app-masthead class="tinnahinch-castle"></app-masthead>
    <div class="container">
      <div class="flex justify-between">
        <div class="w-1/2 text-gray-600 tracking-tight">
          <div class="title">
            <small>Caisleán Tigh na hInse</small>
            Tinnahinch Castle
          </div>
          <p class="mb-4">
            Tinnahinch Castle was constructed in 1615 by James Butler the Duke
            of Ormonde. It was built to control a crossing where a wooden bridge
            once spanned the Barrow. The bridge linking the two settlements was
            originally constructed in 1797. The castle was burnt around the year
            1700 and has lain that way ever since.
          </p>
          <p>
            Tinnahinch Castle, beside the lock, was a Butler castle built to
            defend the ford. In the 1540s a wooden bridge was built across the
            river here and the castle was an important defensive position in the
            prolonged struggle between the Butlers and the Kavanaghs. The castle
            was further strengthened in the seventeenth century and was held by
            the Confederates in the Cromwellian wars
          </p>
        </div>
        <div class="w-5/12 -mt-32">
          <img src="~/assets/images/tinnahinch-castle-sketch_x2.jpg" alt />
        </div>
      </div>
      <div class="flex justify-between mt-16">
        <div class="w-5/12">
          <!-- Stats -->
          <stats />
        </div>
        <div class="w-1/2 text-gray-600 tracking-tight mt-8">
          <p>
            Graignamanagh expanded beyond the Abbey as a market town, aided by
            the development of the Grand Canal and the navigation of the River
            Barrow, which ultimately connected the town with Dublin, New Ross,
            Waterford and Carlow. The production of wool was historically
            important to the town’s economy and sheep rearing remains a
            predominant agricultural activity in the hinterland.
          </p>
        </div>
      </div>
    </div>
    <insta-feed hashtag="tinnahinch" numberOfImages="32" />
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import Stats from "@/components/Stats.vue";
import InstaFeed from "@/components/InstaFeed.vue";

export default {
  head: {
    title: "Tinnahinch"
  },
  components: {
    AppMasthead,
    Stats,
    InstaFeed
  }
};
</script>

<style lang="scss">
.tinnahinch-castle {
  background: url("../assets/images/brush-strokes2.png") center bottom no-repeat,
    url("../assets/images/tinnahinch-castle-header-large.jpg") center;
  background-size: contain, cover;
}
.title {
  text-align: center;
  background: url("../assets/images/section-title-brush-4.png") no-repeat center;
  background-size: contain;
  font-size: 2.5rem;
  line-height: 1;
  position: relative;
  padding: 30px 10px 10px;
  font-family: "rukolaregular";
  color: #354c5f;
  small {
    font-family: "festivo";
    font-size: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    line-height: 1;
    color: rgba(51, 153, 51, 0.75);
  }
}
</style>
