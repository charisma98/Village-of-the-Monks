<template>
  <div v-if="fullyLoaded" class="md:my-20 flex py-16" :id="cardId">
    <div
      class="w-full md:w-6/12"
      :class="{ 'ml-auto': cardPosition === 'right' }"
    >
      <div class="bg-white mt-32 md:mt-0 shadow-md rounded p-8 text-center">
        <div class="title">
          <small>{{ irishTitle }}</small>
          {{ title }}
        </div>
        <p class="text-sm">
          {{ content }}
        </p>
        <nuxt-link
          class="bg-yellow-500 mt-4 text-sm text-yellow-900 py-1 px-3 rounded mt-4 block"
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
      fullyLoaded: false
    };
  },
  props: ["cardId", "title", "irishTitle", "content", "link", "cardPosition"],
  mounted() {
    setTimeout(() => {
      this.fullyLoaded = true;
    }, 500);
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
