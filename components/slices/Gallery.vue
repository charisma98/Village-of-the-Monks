<template>
  <div>
    <ul class="grid my-8 gallery">
      <li v-for="(item, i) in galleryData" :key="'para-' + i">
        <img @click="updateSelectImage(i)" :src="item.image.thumbnail.url" :alt="item.image.alt" />
      </li>
    </ul>
    <div v-if="galleryIsActive" class="full-image" @click="galleryIsActive = false">
      <a @click.stop="prevImage($event)">
        <img class="icon" src="~assets/images/arrow-back-outline.svg" alt="Previous Image" />
      </a>
      <img class="shadow-lg" :src="galleryData[selectedImageIndex].image.url" />
      <a @click.stop="nextImage($event)">
        <img
          @click.stop="logit()"
          class="transform rotate-180 icon"
          src="~assets/images/arrow-back-outline.svg"
          alt="Next Image"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  props: ["galleryData"],
  data() {
    return {
      selectedImageIndex: 1,
      galleryIsActive: false
    };
  },
  methods: {
    logit() {
      console.log("logit");
    },
    updateSelectImage(i) {
      this.selectedImageIndex = i;
      this.galleryIsActive = true;
    },
    prevImage() {
      if (this.selectedImageIndex > 0) {
        this.selectedImageIndex--;
      }
    },
    nextImage() {
      if (this.selectedImageIndex < this.galleryData.length - 1) {
        this.selectedImageIndex++;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.gallery {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.full-image {
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  place-items: center;
  img {
    max-width: 900px;
    margin: auto;
    max-height: 80%;
  }
}
.icon {
  width: 32px;
}
</style>