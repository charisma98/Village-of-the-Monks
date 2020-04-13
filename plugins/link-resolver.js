export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }
 
  if (doc.type === 'home') {
    return '/';
  }
 
  if (doc.type === 'articles') {
    return '/article/' + doc.uid
  }
 
  return '/not-found';
};