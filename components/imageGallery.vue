<template>
  <div class="text-center hidden">
    <a
      class="inline-block px-3 py-1 mt-4 text-sm text-yellow-800 bg-yellow-400 rounded font-secondary hover:bg-yellow-500 hover:text-yellow-900 m-auto"
      @click="open"
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
  created() {},
  methods: {
    createCloudinaryWidget() {
      const newWidget = cloudinary.createUploadWidget(
        {
          cloudName: "odriscolls",
          uploadPreset: "yzlair87",
          multiple: "true",
          sources: ["local", "dropbox", "instagram"],
        },
        (err, res) => {
          if (!err && res && res.event === "success") {
            console.log(res.info);
          }
        }
      );
      return newWidget;
    },
    open() {
      console.log("open");
      const wed = this.createCloudinaryWidget();
      wed.open();
    },
  },
};
</script>
