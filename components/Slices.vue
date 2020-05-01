<template>
  <section>
    <!-- Slice section template -->
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <!-- Text slice template -->
      <template v-if="slice.slice_type === 'text'">
        <p
          class="mb-2"
          v-for="(para, i) in slice.primary.text"
          :key="'para-' + i"
        >
          {{ para.text }}
        </p>
      </template>

      <template v-if="slice.slice_type === 'product_information'">
        <p
          class="mb-2"
          v-for="(para, i) in slice.primary.text"
          :key="'para-' + i"
        >
          {{ para.text }}
        </p>
      </template>

      <template v-else-if="slice.slice_type === 'quote'">
        <p
          class="mt-8 text-xl leading-tight text-center font-secondary"
          v-for="(para, i) in slice.primary.quote"
          :key="'para-' + i"
        >
          {{ para.text }}
        </p>

        <div class="flex justify-center w-full">
          <div>
            <img
              class="w-16 mx-auto my-4 border-4 border-white rounded-full shadow"
              :src="slice.primary.portrait_author.mobile.url"
              alt
            />
          </div>
          <div class="flex flex-col justify-center ml-4">
            <p class="my-2 text-xl leading-none">
              - {{ slice.primary.name_of_the_author[0].text }}
            </p>
          </div>
        </div>
      </template>

      <template v-if="slice.slice_type === 'gallery'">
        <gallery :galleryData="slice.items"></gallery>
      </template>
    </section>
  </section>
</template>

<script>
import Gallery from "./slices/Gallery";
export default {
  components: { Gallery },
  props: ["slices"],
  name: "slices-block",
};
</script>
