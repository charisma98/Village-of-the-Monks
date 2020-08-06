import axios from "axios";
const prismicPages = `https://villageofthemonks.cdn.prismic.io/api/v2/documents/search?q=[[at(document.type,"page")]]&ref=XqWbaRAAACIAWlTC&access_token=${process.env.PRISMICTOKEN}`;

let dynamicRoutes = async () => {
	const routes = await axios.get(prismicPages).then((res) => {
			return res.data.results.map(page => `/${page.uid}`);
	})
	console.log(routes)
	return routes;
};


export default {
  mode: "universal",
  target: "static",
  // Headers of the page
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
  // Global CSS
  css: ["~/assets/mixins.scss"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/tailwindcss",
    ['@nuxtjs/google-analytics', { id: 'UA-78738454-1' }]
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '~/modules/crawler',
    '~/modules/static',
    '@nuxtjs/prismic'
    // 'nuxt-responsive-loader'
  ],
  prismic: {
    endpoint: 'https://villageofthemonks.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    preview: (process.env.NODE_ENV !== 'production') ? true : false 
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
  generate: {
    routes: dynamicRoutes
  },
}
