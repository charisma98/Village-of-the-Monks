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
      },
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'Graiguenamanagh | Village of the Monks'},
      {property: 'og:site_name', content: 'Graiguenamanagh | Village of the Monks'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://villageofthemonks.com'},
      {property: 'og:image', content: 'https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304561/main-header-medium.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Graiguenamanagh or Graignamanagh is a town in Kilkenny. Considered to be one of the most beautiful areas in the southeast of Ireland.'},

      // Twitter card
      {name: 'twitter:card', content: 'Website about Graignamanagh, A town in the South-East of Kilkenny'},
      {name: 'twitter:site', content: 'https://villageofthemonks.com'},
      {name: 'twitter:title', content: 'Graiguenamanagh | Village of the Monks'},
      {name: 'twitter:description', content: 'Graiguenamanagh or Graignamanagh is a town in Kilkenny. Considered to be one of the most beautiful areas in the southeast of Ireland.'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@scottyzen'},
      {name: 'twitter:image:src', content: 'https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304561/main-header-medium.jpg'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Graiguenamanagh | Village of the Monks'},
      {itemprop: 'description', content: 'Graiguenamanagh or Graignamanagh is a town in Kilkenny. Considered to be one of the most beautiful areas in the southeast of Ireland.'},
      {itemprop: 'image', content: 'https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304561/main-header-medium.jpg'}
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: (process.env.NODE_ENV !== 'production') ? "/favicon-dev.ico" : "/favicon.ico" },
    ]
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [
  //   "~/plugins/posts.server.js",
  //   "~/plugins/tags.server.js",
  //   "~/plugins/dateformat.js"
  // ],
  // generate: {
  //   routes: dynamicRoutes
  // },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/tailwindcss"
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/prismic',
    '~/modules/crawler',
    '~/modules/static',
    // 'nuxt-responsive-loader'
  ],
  prismic: {
    endpoint: 'https://villageofthemonks.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    preview: '/preview/' // because we use nuxt generate
    // linkResolver: '@/plugins/link-resolver',
    // htmlSerializer: '@/plugins/html-serializer',
  },
  sitemap: {
    hostname: 'https://villageofthemonks.com',
    path: '/sitemap.xml',
    gzip: true
},
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  plugins: ['~/plugins/globalComponents.js'],
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
