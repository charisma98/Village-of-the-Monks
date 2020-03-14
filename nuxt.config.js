// let dynamicRoutes = () => {
//   const routes = axios
//     .get("http://2cubed.2cubedtest.com/wp-json/wp/v2/posts?page=1&per_page=20")
//     .then(res => {
//       return res.data.map(post => `/blog/${post.slug}`)
//     })
//   console.log(routes)
//   return routes
// }

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Graiguenamanagh | Village of the Monks",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "gold" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // "~/plugins/posts.server.js",
    // "~/plugins/tags.server.js",
    // "~/plugins/dateformat.js"
  ],
  // generate: {
  //   routes: dynamicRoutes
  // },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/tailwindcss"
  ],
  modules: ['nuxt-responsive-loader'],
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
