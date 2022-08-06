<template>
  <div>
    <app-masthead featuredImage="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304548/duiske-abbey-header-large.jpg"></app-masthead>
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="w-full tracking-tight text-gray-600 md:w-5/12">
          <h1 class="title">
            <small>Est. 1204</small>
            Duiske Abbey
          </h1>
          <p>
            A National Monument, Duiske Abbey originated in the 13th century as
            the church of a Cistercian monastery, but today it is a Catholic
            parish church in the town of Graignamanagh, County Kilkenny. The
            abbey began to deteriorate in 1536 as it was suppressed, and it
            gradually fell into ruin. The last tragedy occurred in 1744 when the
            tower collapsed into the nave. It later underwent some renovations
            while serving as a place of worship for the Protestant Church of
            Ireland, returned to the Catholic community in 1812. Duiske Abbey
            was fully restored in the 1980s.
          </p>
          <p>
            The abbey’s simple exterior contrasts with its elaborate interior,
            where visitors can see the ancient stone and high clerestory windows
            of the nave as well as an effigy of a 13th-century knight at the
            entrance. The processional door of the 13th century and early
            medieval floor tiles are visible and can be seen in the sunken floor
            to the right of the main entrance. Additionally, the churchyard is
            home to the Aghakiltawn and Ballyogen Crosses, dating from the 8th
            and 9th centuries. Built into the wall of the Abbey is a Cross Slab,
            also in the abbey grounds is the base of a third cross.
          </p>
          <img class="hidden md:block" src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304556/duiske-abbey-bell.png" alt="Drawing of the clock and bell of the Duskie Abbey" />
        </div>
        <div class="w-full tracking-tight text-gray-600 md:w-1/2 md:-mt-32">
          <img src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304548/duiske-abbey-inside_x2.jpg" class="my-4 mobile-dont-move md:my-0" alt="The roof of Duiske Abbey from the inside"
            :style="{ transform: `translate3D(0, ${scrollPos * 0.05}px, 0)` }" />
          <h2 class="title md:mt-24">A Breif History</h2>
          <p>
            The Abbey was founded in 1204 by William Marshall the elder, earl of
            Pembroke, and was colonized with monks from Stanley in Wiltshire.
            The monks may not have arrived at Graiguenamanagh until 1207, but it
            seems that building may have begun in 1204 when the cemetery at
            Duiske was consecrated. In 1228 the religious community was fixed at
            thirty-six monks and fifty lay-brothers which were almost as large
            as Mellifont Abbey. The abbot of Duiske sat as a peer in parliament
            at that time.
          </p>
          <p>
            The Abbey was suppressed under Henry VIII in 1536 and the last
            abbot, Charles O'Cavanagh, resigned his title. Monks continued to
            occupy it but it began to fall into ruin. Following the dissolution,
            the lands were awarded to James Butler of Duiske. The abbey church
            continued to be used as a local place of worship. The Church of
            Ireland re-roofed the West end after the tower collapsed into the
            nave in 1744. The church was returned to the Roman Catholic
            community in 1812 and restoration was completed in the 1980s.
            Currently, it is used as a parish church and music events are held
            there.
          </p>
          <div class="mt-12 mb-24 info">
            <h3 class="mt-4 text-lg text-green-600 font-secondary">
              Mass Times
            </h3>
            <div class="flex justify-between">
              <span>Monday - Friday</span>
              <span>10am</span>
            </div>
            <div class="flex justify-between">
              <span>Saturday</span>
              <span>7pm</span>
            </div>
            <div class="flex justify-between">
              <span>Sunday</span>
              <span>11am</span>
            </div>
            <h3 class="mt-12 text-lg text-green-600 font-secondary">Clergy</h3>
            <div class="flex justify-between">
              <span>Parish Priest</span>
              <span>V. Rev Mark Townsend PP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <insta-feed hashtag="duiskeabbey" numberOfImages="32" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Duiske Abbey | Village of the Monks",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Duiske Abbey originated in the 13th century as the church of a Cistercian monastery, but today it is a Catholic parish church in the town of Graiguenamanagh, County Kilkenny. Where Father Gerry Byrne is the local priest.",
        },
        {
          name: "keywords",
          content:
            "Graiguenamanagh, Graignamanagh, abbey, Village, Monks, South-east, Kilkenny, Carlow, Catholic, Castle, Brandon, Hill, Town, Books, Church, parish, Ireland, Duiske, monastery",
        },
      ],
    };
  },
  data() {
    return {
      scrollPos: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPos = window.scrollY;
    });
  },
};
</script>
