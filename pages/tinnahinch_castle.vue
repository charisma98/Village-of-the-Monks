<template>
  <div>
    <app-masthead class="tinnahinch-castle"></app-masthead>
    <div class="container">
      <div class="flex justify-between">
        <div class="w-1/2 text-gray-600 tracking-tight">
          <div class="title">
            <small>Gráig na Manach</small>
            Graiguenamanagh
          </div>
          <p>
            Gráig na Manach, meaning "Village of the Monks" is considered to be
            one of the most beautiful areas in the southeast of Ireland. It is
            located on the River Barrow at the foot of Brandon Hill. It is home
            to Duiske Abbey, the largest and perhaps the finest of the
            thirty-four medieval Cistercian abbeys in Ireland.
          </p>
          <p>
            With its remarkable combination of mountain views, lush rolling
            hills, forest and river valleys, Graignamanagh offers nature lovers
            a plentiful feast as well as countless amenities for those keen on
            outdoor activities. Add to these the rich heritage of historical
            monuments and an abundance of leisure facilities and Graiguenamanagh
            presents itself as an enormously attractive venue for tourists.
          </p>
        </div>
        <div class="w-5/12 -mt-32">
          <img src="~/assets/images/graig-air_x2.jpg" alt />
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
