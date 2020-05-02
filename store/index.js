const siteURL = "http://2cubed.2cubedtest.com"
const url = "https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1";
const prismic = `https://villageofthemonks.cdn.prismic.io/api/v2/documents/search?q=[[at(document.type,"page")]]&ref=XqWbaRAAACIAWlTC&access_token=MC5YcG9VQVJFQUFDSUFpS2hh.Rxnvv70k77-9BX_vv73vv73vv73vv73vv73vv73vv70vZu-_vTLvv73vv73vv71q77-9BiLvv73vv71L77-977-977-9FA`;

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
      let pages = await fetch(prismic).then(res => res.json())
      commit("getPages", pages.results)
    } catch (err) {
      console.log(err)
    }
 }}