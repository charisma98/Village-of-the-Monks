<template>
  <div>
    <app-masthead :featuredImage="post.featured_image.url"></app-masthead>
    <div class="container">
      <div class="mb-8">
        <h1 class="title">
          <small>{{ post.sub_title }}</small>
          {{ post.title }}
        </h1>
        <slices class="max-w-2xl mx-auto" :slices="post.body" />
      </div>
    </div>
  </div>
</template>

<script>
import Slices from "../../components/Slices";
export default {
  head() {
    return {
      title: this.post.title + " | Village of the Monks",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.sub_title
        }
      ]
    };
  },
  components: {
    Slices
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const post = (await $prismic.api.getByUID("articles", params.uid)).data;
      return { post };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
