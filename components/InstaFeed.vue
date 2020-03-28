<template>
  <ul class="z-50 flex flex-wrap instagram-feed">
    <div class="background-text">
      <small>#{{ hashtag }}</small
      >Instagram Feed
    </div>
    <li
      class="absolute"
      :style="{ animation: media.animation, top: media.top + '%' }"
      v-for="media in instaImages"
      v-bind:key="media.node.id"
    >
      <a
        :href="'https://www.instagram.com/p/' + media.node.shortcode"
        target="_blank"
      >
        <img
          :style="{ width: media.size + 'px' }"
          :src="media.node.thumbnail_src"
          alt
        />
      </a>
      <div
        class="flex justify-between text-xs leading-tight tracking-tight text-gray-600 details"
      >
        <span>{{ media.node.edge_media_to_caption.edges[0].node.text }}</span>
        <!-- <span>15 links</span>
        <span>1 comment</span>-->
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

function minMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const bannedUsers = [
  "3926081380", // Cosy
  "2353537237", // Barros Sports Shop
  "4158539063", // Duiske Glass
  "6697436681", // Kissans chemist
  "6037773637", // Barrows Keep
  "7090848166", // Life with Chewbella
  "211990278", // Some Wedding
  "11118289788", // graiguenamanaghbikehire
  "2161117248", // Devils Menu
  "11689623970", // Killvarra B&B
  "3991828910" // Hazel Power
];

export default {
  data() {
    return {
      instaAPI: [{ node: 1 }],
      instaImages: [],
      shadows: ["shadow", "shadow-md", "shadow-lg", "shadow-xl"]
    };
  },
  props: ["hashtag", "numberOfImages"],
  methods: {
    startedAddingImages() {
      const shuffedInstaAPI = this.instaAPI.sort(() => 0.5 - Math.random());
      let i = 0;
      let numberOfImagesAdded = 0;

      let interval = setInterval(() => {
        // Break out of loop after the last image is added
        if (
          numberOfImagesAdded >= this.numberOfImages ||
          i >= shuffedInstaAPI.length - 1
        ) {
          // console.log("I want to break free");
          clearInterval(interval);
        }

        // Check and Skip user if they are on the Banned list
        if (bannedUsers.indexOf(shuffedInstaAPI[i].node.owner.id) > -1) {
          // console.log("Banned user found.");
        } else {
          this.instaImages.push({
            node: shuffedInstaAPI[i].node,
            animation: `move ${minMax(40, 85)}s ease-out infinite ${minMax(
              0,
              2000
            )}ms`,
            size: minMax(100, 200),
            top: minMax(10, 80),
            shadow: this.shadows[
              Math.floor(Math.random() * this.shadows.length)
            ]
          });
          numberOfImagesAdded++;
        }
        i++;
      }, 2500);
    }
  },
  beforeMount() {
    axios
      .get(`https://www.instagram.com/explore/tags/${this.hashtag}/?__a=1`)
      .then(res => {
        this.instaAPI = res.data.graphql.hashtag.edge_hashtag_to_media.edges;
        this.startedAddingImages();
      });
  }
};
</script>

<style lang="scss">
.instagram-feed {
  position: relative;
  z-index: 10;
  min-height: 600px;
  max-width: 100%;
  overflow: visible;
  z-index: 100;

  .background-text {
    font-family: "rukolaregular";
    font-size: 80px;
    color: #344c5e;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    line-height: 1.25;
    opacity: 0.15;
    small {
      font-size: 32px;
      color: #6db369;
      font-family: festivo;
      letter-spacing: -1px;
    }
  }

  li {
    transform: translatex(-250px) scale(0);
    opacity: 0;
    animation-play-state: running;
    transition: all 600ms ease, box-shadow 400ms ease 200ms;
    transform-origin: right;
    border-radius: 3px;
    overflow: hidden;
    z-index: 101;

    img {
      transition: all 300ms ease;
      transform-origin: right !important;
    }

    .details {
      display: none;
      transition: all 300ms ease-in-out 300ms;
      visibility: hidden;
      height: 0;
      width: 0;
      overflow: hidden;
      background: #fff;
    }

    &:hover {
      animation-play-state: paused !important;
      cursor: pointer;
      z-index: 99999999;
      margin-top: -100px;
      //   margin-left: -100px;
      width: auto;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);

      img {
        width: 300px !important;
      }

      .details {
        display: block;
        visibility: visible;
        height: auto;
        width: auto;
        max-width: 300px;
        padding: 10px 12px;
      }
    }
  }
}

@keyframes move {
  1% {
    // transform: translatex(-250px);
    opacity: 1;
    transform: translate3d(-250px, 0, 0) scale(1);
  }

  100% {
    transform: translate3d(calc(100vw + 250px), 0, 0);
    opacity: 1;
  }
}
</style>
