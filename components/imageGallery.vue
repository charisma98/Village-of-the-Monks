<template>
  <div class="text-center ">
    <a
      class="inline-block px-3 py-1 mt-4 text-sm text-yellow-800 bg-yellow-400 rounded font-secondary hover:bg-yellow-500 hover:text-yellow-900 m-auto mb-4 cursor-pointer"
      @click="openCloudinaryWidget"
      >Upload you own</a
    >

    <Tinybox
      v-if="imageIndex != null"
      :images="imageUrls"
      :index="imageIndex"
      @change="onChange"
      @prev="onPrevious"
      @next="onNext"
      @close="onClose"
    />

    <ul class="grid grid-cols-4 gap-4 p-8">
      <li v-for="(image, i) in galleryImages" :key="image.asset_id">
        <img
          @click="openImageOn(i)"
          class="w-full h-full object-cover cursor-pointer"
          :src="image.url"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Tinybox from "vue-tinybox";
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
      imageUrls: null,
      imageIndex: null,
    };
  },
  components: {
    Tinybox,
  },
  methods: {
    openImageOn(i) {
      this.imageIndex = i;
    },
    onChange(i) {
      this.imageIndex = i;
    },
    onPrevious(i) {
      this.imageIndex = i;
    },
    onNext(i) {
      this.imageIndex = i;
    },
    onClose(i) {
      this.imageIndex = null;
    },
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
          "/.netlify/functions/cloundinaryGallery",
          { tag: this.tag },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          // console.log(res.data);
          this.galleryImages = res.data.resources;
          var final = [];
          res.data.resources.forEach((el) => {
            // final.push(el.url);
            final.push({ src: el.url });
          });
          this.imageUrls = final;
        });
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>
