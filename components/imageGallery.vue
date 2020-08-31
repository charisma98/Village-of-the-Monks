<template>
  <div class="text-center ">
    <a
      class="inline-block px-3 py-1 mt-4 text-sm text-yellow-800 bg-yellow-400 rounded font-secondary hover:bg-yellow-500 hover:text-yellow-900 m-auto"
      @click="openCloudinaryWidget"
      >Upload you own</a
    >
    <ul class="grid grid-cols-4 gap-4">
      <li v-for="image in galleryImages" :key="image.asset_id">
        <img :src="image.url" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      script: [{ src: "https://widget.cloudinary.com/v2.0/global/all.js" }],
    };
  },
  props: ["name", "tag"],
  data() {
    return {
      galleryImages: [],
    };
  },
  methods: {
    createCloudinaryWidget() {
      const newWidget = cloudinary.createUploadWidget(
        {
          cloudName: "odriscolls",
          uploadPreset: "dq5g2tx6",
          multiple: true,
          cropping: true,
          clientAllowedFormats: ["png", "jpeg"],
          folder: "riverbarrow",
          sources: ["local", "instagram", "facebook"],
          tags: [this.tag],
        },
        (error, result) => {
          if (!error && result && result.event === "sucess") {
            console.log(result.info);
          }
        }
      );
      return newWidget;
    },
    openCloudinaryWidget() {
      const widget = this.createCloudinaryWidget();
      widget.open();
    },
    getImages() {
      axios
        .post(
          "https://villageofthemonks.com/.netlify/functions/cloundinaryGallery",
          { tag: this.tag },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log(res.data);
          this.galleryImages = res.data.resources;
        });
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>
