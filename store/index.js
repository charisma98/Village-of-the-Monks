
const prismicPages = `https://villageofthemonks.cdn.prismic.io/api/v2/documents/search?q=[[at(document.type,"page")]]&ref=XqWbaRAAACIAWlTC&access_token=${process.env.PRISMICTOKEN}`;

export const state = () => ({
  pages: []
})

export const mutations = {
  getPages: (state, pages) => {
    state.pages = pages
  }
}

export const actions = {
  async getPages({ state, commit, dispatch }) {
    if (state.pages.length) return
    try {
      let pages = await fetch(prismicPages).then(res => res.json())
      commit("getPages", pages.results)
    } catch (err) {
      console.log(err)
    }
 }}