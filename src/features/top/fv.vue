<template>
  <div class="fv overflow-hidden relative">
    <Swiper
      class="mb-4 overflow-hidden w-screen h-full aspect-[1440/700]"
      :modules="modules"
      effect="fade"
      :slides-per-view="1"
      :loop="true"
      :speed="1000"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="item in fvSlides" :key="item.id"
        ><img class="" :src="item.src" alt="" />
      </SwiperSlide>
    </Swiper>
    <div class="absolute bottom-10 z-40">
      <h1 class="text-3xl text-white pl-8 mb-4">
        Y.arai's Portfolio site
        <!-- <span class="w-fit p-4 bg-black block">ただ作るだけでなく</span>
        <span class="w-fit p-4 bg-black block"
          >何かに貢献するモノづくりがしたい</span
        > -->
      </h1>
      <VFlowText
        content="I&thinsp;am&thinsp;Frontend&thinsp;engineer!&thinsp;Contact&thinsp;Us!I&thinsp;am&thinsp;Frontend&thinsp;engineer!&thinsp;Contact&thinsp;Us!I&thinsp;am&thinsp;Frontend&thinsp;engineer!&thinsp;Contact&thinsp;Us!I&thinsp;am&thinsp;Frontend&thinsp;engineer!&thinsp;Contact&thinsp;Us!"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { Autoplay, EffectFade } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/effect-fade";

  const modules = [Autoplay, EffectFade];

  const fvSlides = [
    {
      id: 1,
      src: "/_nuxt/assets/images/fv-5.png",
    },
    {
      id: 2,
      src: "/_nuxt/assets/images/fv-4.png",
    },
  ];
</script>

<style scoped>
  .fv {
    margin: 0 calc(50% - 50vw);
    width: 100vw;
  }
</style>
