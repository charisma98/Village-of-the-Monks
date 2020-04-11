export default function (doc) {
    if (doc.type === 'blog_home') {
      return '/prismic'
    }
    if (doc.type === 'blog_post') {
      return `/article/${doc.uid}`
    }
    return '/'
  }