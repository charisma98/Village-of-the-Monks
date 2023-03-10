/*
** TailwindCSS Configuration File
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend:{
      width: {
        '9/20': '45%'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
}
