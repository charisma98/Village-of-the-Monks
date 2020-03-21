<template>
  <div>
    <app-masthead class="tinnahinch-castle"></app-masthead>
    <div class="container">
      <div class="flex flex-wrap justify-center">
        <div class="w-full max-w-lg tracking-tight text-gray-600">
          <h1 class="title">The Desereted Village</h1>
          <p class="mb-4">
            Sweet smiling village must we bid farewell
            To that old homestead known as “The Hotel”.
            Where goats and asses freely roamed at large
            And grazed the dewy pastures free of charge.
            The goats a meal of grass and ivy made,
            To Daly’s turnips oft’ a visit paid.
            They next to the “Twelve Acres” would repair
            And Danny Carthy’ cornfield lay bare.
          </p>
          <p class="mb-4">
            They oft’ disturbed Bob Baker’s sleep at night
            But always vanished ere he bore a sight.
            While Coady’s puckan issues forth a smell
            That threatened to demolish “The Hotel”.
            Farewell to meadow, avenue, wood, greenhill
            Where asses, pigs and goats may ramble still.
            The whitewashed walls, the skeoughs outside the door
            To keep the goats off, “Devons” often swore.
          </p>
          <p class="mb-4">
            That if he could get poison from Kissane
            He’d shorten for them life’s allotted span.
            Their carcasses he’d leave upon the green
            Examples for all others to be seen.
            For asses ‘twas a regular dumping ground,
            All sorts of breeds and sizes here were found.
            Mike Doyle was sure to have a few,
            Mick Grace and Fitz one each, Jack Conran too.
          </p>
          <p class="mb-4">
            They often gave poor Daly’s oats a fright,
            They stabled them in Boland’s bog at night.
            If Boland came they threatened him with scorn
            They’d want the asses handy for the morn.
            The old ash tree, which weathered many a gale,
            Could it but speak ‘twould record many a tale.
            Twas here Lannan often eased his chest,
            In argument he often swamped the rest.
          </p>
          <p class="mb-4">
            The old ‘wood well’ may now choke up with weeds,
            For many a year it satisfied all our needs.
            ‘The Devil’s Eyebrow’ and the old ‘dale’ trees
            Where natives often sheltered in the breeze.
            And those old haunts we now perforce must leave
            And shift our fleabags up to Hughes’ field.
            The one place outside Chinatown I know
            With houses numbered backwards in a row.
            Imported Politicians were the cause,
            Of our misfortunes, strangers made our laws.
          </p>
          <p class="mb-4">
            The natives here never had any say,
            Jews, Dagoes and Mahommedans held sway.
            Outlawed and bound in every other town,
            They always in the village settled down.
            A louse-bound lot of mongrels small and great,
            Who neer should have been suffered to locate.
          </p>
          <p class="mb-4">
            Well, such is life times changes many things,
            And often for the worst such changes brings.
            To brave the fiercest gales that ever blew,
            To shelter cots we now must bid Adieu.
          </p>
          <div class="my-8 text-gray-800 author">- Eddie Power</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "The Desereted Village",
    description:
      "The Deserted Village is a poem about Tinnahinch. Written by Eddie Power."
  },
  components: {
    AppMasthead: () => import("@/components/AppMasthead.vue"),
    InstaFeed: () => import("@/components/InstaFeed.vue")
  }
};
</script>

<style>
.tinnahinch-castle {
  background: url("../assets/images/brush-strokes2.png") center bottom no-repeat,
    url("../assets/images/tinnahinch-castle-header-large.jpg") center;
  background-size: contain, cover;
}
</style>
