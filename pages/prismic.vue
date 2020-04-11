<template>
  <section class="max-w-2xl mx-auto mt-32 mb-20 home">
    <h1>Prismic</h1>
    <article v-for="{data, id, uid} in posts" :key="id">
      <nuxt-link :to="`/article/${uid}`">{{data.title[0].text}}</nuxt-link>
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try {
      const articles = await $prismic.api.query(
        $prismic.predicates.at("document.type", "articles"),
        { orderings: "[my.articles.date desc]" }
      );
      // Returns data to be used in template
      return {
        posts: articles.results
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
