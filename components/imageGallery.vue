<template>
  <div class="text-center ">
    <a
      class="inline-block px-3 py-1 mt-4 text-sm text-yellow-800 bg-yellow-400 rounded font-secondary hover:bg-yellow-500 hover:text-yellow-900 m-auto"
      @click="openCloudinaryWidget"
      >Upload you own</a
    >
    <ul class="grid grid-cols-4"></ul>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<script>
export default {
  head() {
    return {
      script: [{ src: "https://widget.cloudinary.com/v2.0/global/all.js" }],
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
          tags: ["river", "barrow"],
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
  },
};
</script>
