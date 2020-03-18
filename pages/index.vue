<template>
  <transition name="layout" mode="out-in">
    <div>
      <app-masthead class="graiguenamanagh"></app-masthead>
      <div class="container">
        <div class="flex flex-wrap justify-between">
          <div class="w-full tracking-tight text-gray-600 md:w-1/2">
            <div class="title">
              <small>Gráig na Manach</small>
              Graignamanagh
            </div>
            <p>
              Gráig na Manach, meaning "Village of the Monks" is considered to
              be one of the most beautiful areas in the southeast of Ireland. It
              is located on the River Barrow at the foot of Brandon Hill. It is
              home to Duiske Abbey, the largest and perhaps the finest of the
              thirty-four medieval Cistercian abbeys in Ireland.
            </p>
            <p class="mt-4">
              With its remarkable combination of mountain views, lush rolling
              hills, forest and river valleys, Graignamanagh offers nature
              lovers a plentiful feast as well as countless amenities for those
              keen on outdoor activities. Add to these the rich heritage of
              historical monuments and an abundance of leisure facilities and
              Graiguenamanagh presents itself as an enormously attractive venue
              for tourists.
            </p>
          </div>
          <div
            class="w-full mt-8 transition-all duration-150 mobile-dont-move md:w-5/12 md:-mt-32 ease"
            :style="{ transform: `translate3D(0, ${scrollPos * 0.05}px, 0)` }"
          >
            <img
              class="shadow-lg"
              loading="lazy"
              v-if="width > 768 || scrollPos > 500"
              src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304554/graig-air_x2.jpg"
            />
          </div>
        </div>
        <div
          class="flex flex-col-reverse flex-wrap justify-between md:flex-row md:mt-16"
        >
          <div
            class="w-full mt-8 transition-all duration-150 mobile-dont-move md:mt-0 md:w-5/12 ease"
            :style="{ transform: `translate3D(0, ${scrollPos * 0.05}px, 0)` }"
          >
            <!-- Stats -->
            <stats />
          </div>
          <div class="w-full mt-8 tracking-tight text-gray-600 md:w-1/2">
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

      <div id="green-river" class="py-24 -mt-24 text-white">
        <div class="w-full p-8 mt-16 md:w-1/2 md:ml-auto md:mt-0 md:p-0">
          <p
            class="max-w-md text-xl text-center text-white text-shadow-green font-secondary"
          >
            It has been called Ireland's best kept secret and is a veritable
            treasure trove of varied scenery, ancient buildings, canal boating,
            river and hill walks, crafts, traditional pubs and much more.
          </p>
        </div>
      </div>

      <div v-if="scrollPos > 800" class="container">
        <!-- Brandon Hill  -->
        <page-card
          cardId="brandon-splash"
          irishTitle="Cnoc Bhréanail"
          title="Brandon Hill"
          content="Brandon Hill is the highest mountain in County Kilkenny. It has
                an elevation of 515 m (1,690 ft). It is situated 4 kilometers
                South-South West of Graignamanagh, 7 kilometers east of
                Inistioge and 11 kilometers east of Thomastown, in the south of
                County Kilkenny."
          link="/brandon_hill"
          cardPosition="right"
        />

        <!-- Duiske Abbey -->
        <page-card
          cardId="duiske-splash"
          irishTitle="Mainistir Dhubhiske"
          title="Duiske Abbey"
          content="Duiske Abbey was founded by William Marshall in 1204 and is one
                of the first, largest and perhaps the finest of the thirty-four
                medieval Cistercian monasteries in Ireland. The Abbey is the
                parish church of Graignamanagh town and beautifully dominates
                the town centre."
          link="/duiske_abbey"
          cardPosition="left"
        />

        <!-- Tinnahinch Castle  -->
        <page-card
          cardId="tinnahinch-castle-splash"
          irishTitle="Caisleán Tigh na hInse"
          title="Tinnahinch Castle"
          content="Tinnahinch Castle was constructed in 1615 by the Duke of Ormonde. It
          was built to control a crossing where a wooden bridge once spanned the
          Barrow. The bridge linking the two settlements was originally
          constructed in 1797. The castle was burnt around the year 1700 and has
          lain that way ever since."
          link="/tinnahinch_castle"
          cardPosition="right"
        />

        <!-- River Barrow -->
        <page-card
          cardId="river-barrow-splash"
          irishTitle="An Bhearú"
          title="River Barrow"
          content="The River Barrow, historically a significant highway, was
                developed as a commercial navigation in the mid seventeen
                hundreds and Graiguenamanagh served as the main base for
                commercial barges operating on the river until barge traffic
                ceased in 1959."
          link="/river_barrow"
          cardPosition="left"
        />
      </div>

      <insta-feed hashtag="graiguenamanagh" numberOfImages="32" />
    </div>
  </transition>
</template>

<script>
export default {
  components: {
    AppMasthead: () => import("@/components/AppMasthead.vue"),
    Stats: () => import("@/components/Stats.vue"),
    InstaFeed: () => import("@/components/InstaFeed.vue"),
    PageCard: () => import("@/components/PageCard.vue")
  },
  data() {
    return {
      scrollPos: 0,
      width: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
    handleResize() {
      this.width = window.innerWidth;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleResize);
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="postcss">
.graiguenamanagh {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304562/brush-strokes2.png")
      center bottom no-repeat,
    url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304561/main-header-large.jpg")
      center;
  background-size: contain, cover;
}
.title {
  text-align: center;
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304564/section-title-brush-4.png")
    no-repeat center;
  background-size: contain;
  font-size: 2.5rem;
  line-height: 1;
  position: relative;
  padding: 30px 10px 10px;
  font-family: "rukolaregular";
  color: #354c5f;
  & small {
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
p {
  @apply text-gray-600;
}
#green-river {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304557/green-river_x2.png")
    center top;
  background-size: 100% 100%;
}
.font-primary {
  font-family: "rukolaregular";
}
.font-secondary {
  font-family: festivo;
}
.text-shadow-green {
  text-shadow: 0 1px 3px rgba(39, 97, 39, 0.5);
}
@media screen and (max-width: 768px) {
  .mobile-dont-move {
    transform: translate3D(0, 0, 0) !important;
  }
}
</style>
