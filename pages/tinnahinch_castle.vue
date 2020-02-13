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
    <ul class="instagram-feed flex flex-wrap">
      <li
        class="absolute"
        :style="{ animation: media.animation, top: media.top+'%' }"
        v-for="media in instaImages"
        v-bind:key="media.node.id"
      >
        <img
          :class="media.shadow"
          :style="{ width: media.size+'px' }"
          :src="media.node.display_url"
          alt
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import Stats from "@/components/Stats.vue";
import axios from "axios";

function minMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Instagram Settings
const hashtagToSearch = "tinnahinch";
const maxNumberOfImages = 50;

export default {
  components: {
    AppMasthead,
    Stats
  },
  data() {
    return {
      insta: "",
      instaImages: [],
      shadows: ["shadow", "shadow-md", "shadow-lg", "shadow-xl"]
    };
  },
  methods: {
    startedAdding() {
      var i = 0;
      var interval = setInterval(() => {
        this.instaImages.push({
          node: this.insta[i].node,
          animation: `move ${minMax(15, 85)}s normal infinite ${minMax(
            5,
            20
          )}s`,
          size: minMax(50, 250),
          top: minMax(0, 80),
          shadow: this.shadows[Math.floor(Math.random() * this.shadows.length)]
        });
        i++;
        if (i === maxNumberOfImages) clearInterval(interval);
      }, 2750);
    }
  },
  mounted() {
    axios
      .get(`https://www.instagram.com/explore/tags/${hashtagToSearch}/?__a=1`)
      .then(res => {
        this.insta = res.data.graphql.hashtag.edge_hashtag_to_media.edges.slice(
          0,
          maxNumberOfImages
        );
        this.startedAdding();
      });
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

.instagram-feed {
  position: relative;
  z-index: 10;
  min-height: 600px;

  li {
    transform: translatex(-20vw);
    animation-play-state: running;
  }
  li:hover {
    animation-play-state: paused !important;
    cursor: pointer;
  }
}

@keyframes move {
  0% {
    transform: translatex(-20vw);
  }

  100% {
    transform: translatex(120vw);
  }
}
</style>
