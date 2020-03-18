<template>
  <div class="flex py-16 md:my-20" :id="cardId">
    <div
      class="w-full md:w-6/12"
      :class="{ 'ml-auto': cardPosition === 'right' }"
    >
      <div class="p-8 mt-32 text-center bg-white rounded shadow-md md:mt-0">
        <div class="title">
          <small>{{ irishTitle }}</small>
          {{ title }}
        </div>
        <p class="text-sm">{{ content }}</p>
        <nuxt-link
          class="block px-3 py-1 mt-4 text-sm text-yellow-800 bg-yellow-400 rounded font-secondary hover:bg-yellow-500 hover:text-yellow-900"
          :to="link"
          >Find out more</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // fullyLoaded: false
    };
  },
  props: ["cardId", "title", "irishTitle", "content", "link", "cardPosition"],
  mounted() {
    // setTimeout(() => {
    //   this.fullyLoaded = true;
    // }, 500);
    console.log("Loaded " + this.title);
  }
};
</script>

<style>
#brandon-splash {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304562/brandon-splash_x2.png")
    no-repeat left top;
  background-size: contain;
}
#duiske-splash {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304550/duiske-splash_x2.png")
    no-repeat right top;
  background-size: contain;
}
#tinnahinch-castle-splash {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304568/tinnahinch-castle-splash_x2.png")
    no-repeat left top;
  background-size: contain;
}
#river-barrow-splash {
  background: url("https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304565/river-splash_x2.png")
    no-repeat right top;
  background-size: contain;
}
</style>
