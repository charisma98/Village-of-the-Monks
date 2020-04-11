<template>
  <div>
    <app-masthead :featuredImage="post.featured_image.url"></app-masthead>
    <div class="container">
      <div class="mb-8">
        <h1 class="title">
          <small>{{ post.sub_title }}</small>
          {{ post.title }}
        </h1>
        <slices class="max-w-2xl mx-auto" :slices="slices" />
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
      // Query to get post content
      const post = (await $prismic.api.getByUID("articles", params.uid)).data;
      // Returns data to be used in template
      return {
        post: post,
        slices: post.body
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>