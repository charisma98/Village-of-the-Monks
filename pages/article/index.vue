<template>
  <div class="container mt-32">
    <article v-for="{ uid, data, id } in posts" :key="id">
      <nuxt-link :to="`/article/${uid}`">{{ data.title }}</nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const posts = await $prismic.api.query(
      $prismic.predicates.at("document.type", "page"),
      { pageSize: 50 }
    );
    return {
      posts: posts.results
    };
  },
  head: {
    title: "Blog"
  }
};
</script>
