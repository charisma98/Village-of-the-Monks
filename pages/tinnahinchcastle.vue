<template>
  <div>
    <app-masthead
      featuredImage="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304567/tinnahinch-castle-header-large.jpg"
    ></app-masthead>
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="w-full tracking-tight text-gray-600 md:w-1/2">
          <h1 class="title">
            <small>Caislean Tigh na hInse</small>
            Tinnahinch Castle
          </h1>
          <p class="mb-4">
            Tinnahinch Castle was constructed in 1615 by James Butler the Duke
            of Ormonde. It was built to control a crossing where a wooden bridge
            once spanned the Barrow. The bridge linking the two settlements was
            originally constructed in 1797. The castle was burnt around the year
            1700 and has lain that way ever since.
          </p>
          <p>
            Tinnahinch Castle, beside the lock, was a Butler castle built to
            defend the ford. In the 1540s a wooden bridge was built across the
            river here and the castle was an important defensive position in the
            prolonged struggle between the Butlers and the Kavanaghs. The castle
            was further strengthened in the seventeenth century and was held by
            the Confederates in the Cromwellian wars
          </p>
        </div>
        <div class="w-full mt-4 md:w-5/12 md:-mt-32">
          <img
            src="https://res.cloudinary.com/odriscolls/image/upload/q_auto,f_auto/v1584304566/tinnahinch-castle-sketch_x2.jpg"
            alt="An old drawing of Tinnahinch Castle"
          />
        </div>
      </div>

      <div class="flex justify-center mt-16">
        <div class="w-full mt-8 tracking-tight text-gray-600">
          <h3 class="title">Ancient Castle to be Demolished</h3>
          <p class="mb-2">
            At Tinnahinch (Tighe-na-hinse, the House of the Island or River
            Meadow), Co. Carlow, there stands the ruins of an old castle, a
            picturesque object beside the banks of the Barrow. Like all the
            other ancient monuments in the country it too has its painful
            history. Built in the 16th century it has been known since as the
            Castle of the Butlers. It is of ancient design, the only entrance to
            it was a small door in an angle in the western side which was
            defended by a bartizan at the top of the building. At the Eastern
            corner nearest to the river was a Barbican or watch tower
            constructed on corbels projecting from the walls by which the
            northern and eastern side was defended.
          </p>
          <p class="mb-2">
            <i>
              Many tales of lawless wickedness and wild romances in which the
              owners of the castle bore a leading part are still related in the
              neighbourhood. It is told that Butler who resided in the castle
              was born in England. Being brought to this country when an infant
              he was reared by a family called Archdexin residing at Raheen,
              about two miles from Graig???na Managh. When he reached London he
              was in great favour with the Queen from whom he received grants of
              land in the Counties Carlow and Kilkenny. The story goes that he
              constructed at the top of castle an immense reservoir for water,
              capable of holding as much as would flood the castle, which having
              filled he invited a large number of the neighbouring Irish
              amounting to 700 to dinner. When they had assembled the means of
              egress was secured and Butler going to the top of the castle
              discharged the contents of the reservoir, by which means they were
              all drowned.
            </i>
          </p>
          <p class="mb-6">
            Tradition tells us, and it is said locally, there is never an
            assembly, fair or meeting in Graigue but the day is sure to come
            wet. The history of this structure doleful as it may remain, but the
            ruins of the castle are to be no more, as they are to be demolished
            by the Grand Canal Company, they being considered dangerous. The
            prediction by this newspaper never came to pass, and Tinnahinch
            Castle remains a picturesque object beside the banks of the Barrow.
          </p>
          <p class="max-w-sm text-gray-700">
            This article is from an old newspaper found under the floorboards of
            a local house
            <br />??? Date unknown. *
          </p>
        </div>
      </div>
    </div>
    <insta-feed hashtag="tinnahinch" numberOfImages="32" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Tinnahinch Castle | Village of the Monks",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Tinnahinch Castle was constructed in 1615 by James Butler the Duke of Ormonde. It was built to control a crossing where a wooden bridge once spanned the Barrow. Today the castle stands in ruins on the Carlow side of the river Barrow",
        },
        {
          name: "keywords",
          content:
            "Graiguenamanagh, Graignamanagh, river, barrow, abbey, Village, bridge, Butler, Ormonde, Carlow, Tinnahinch, Castle, Brandon, Hill, ruins, Books, Pubs, Ireland, Duiske.",
        },
      ],
    };
  },
};
</script>
