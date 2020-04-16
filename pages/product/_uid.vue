<template>
  <div>
    <app-masthead :featuredImage="data .main_product_image.url"></app-masthead>
    <div class="container">
      <div class="mb-8">
        <h1 class="title">{{ data .title[0].text }}</h1>
        <div class="flex my-8">
          <div class="w-full pr-12 md:w-7/12">
            <div class="flex">
              <h2 class="mr-4 text-2xl text-gray-700 font-secondary">{{data.product_label[0].text}}</h2>
              <span class="text-2xl text-gray-700 text-green font-secondary">€{{data.price}}</span>
            </div>
            <p>{{data.body[0].primary.text[0].text}}</p>
          </div>
          <div class="w-full text-right md:w-5/12">
            <img
              class="inline border-8 border-white shadow"
              :src="data .main_product_image.Thumbnail.url"
            />
          </div>
        </div>
        <pre>{{data.related_products }}</pre>
        <!-- <slices class="max-w-2xl mx-auto" :slices="data .body" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Slices from "../../components/Slices";
export default {
  components: {
    Slices
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const data = (await $prismic.api.getByUID("product", params.uid)).data;
      return { data };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
.title {
  /* text-align: left; */
  /* margin-left: -12px; */
  /* padding-left: 0; */
}
</style>
