<template>
  <div>
    <app-masthead :featuredImage="data.main_product_image.url"></app-masthead>
    <div class="container">
      <div class="mb-8">
        <h1 class="title">{{ data.title[0].text }}</h1>
        <div class="flex my-8">
          <div class="w-full pr-12 md:w-7/12">
            <div class="flex">
              <h2 class="mr-4 text-2xl text-gray-700 font-secondary">
                {{ data.product_label[0].text }}
              </h2>
              <span class="text-2xl text-gray-700 text-green font-secondary"
                >€{{ data.price }}</span
              >
            </div>
            <slices :slices="data.body" />
          </div>
          <div class="w-full text-right md:w-5/12">
            <img
              class="inline border-8 border-white shadow"
              :src="data.main_product_image.Thumbnail.url"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="relatedProducts" class="mt-16">
      <h3 class="title">You Might Also Like</h3>
      <ul class="container grid grid-cols-3 gap-12 ">
        <li
          class="w-full bg-white border-8 border-white shadow"
          v-for="product in relatedProducts"
          :key="product.id"
        >
          <nuxt-link :to="product.uid">
            <img :src="product.data.main_product_image.Thumbnail.url" alt="" />
            <p class="mt-2 text-sm text-gray-800">
              {{ product.data.title[0].text }}
            </p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params }) {
    const product = await $prismic.api
      .getByUID("product", params.uid)
      .then((res) => {
        if (res.data.related_products.length) {
          const relatedIds = res.data.related_products.map((each) => {
            return each.product.id;
          });
          return $prismic.api.getByIDs(relatedIds).then((related) => {
            return {
              data: res.data,
              relatedProducts: related.results,
            };
          });
        } else {
          return {
            data: res.data,
            relatedProducts: false,
          };
        }
      });
    return {
      data: product.data,
      relatedProducts: product.relatedProducts,
    };
  },
};
</script>
