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
      <h1>
        <VFlowText
          class="text-white"
          content="I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;"
        />
      </h1>
    </div>
    <div class="scroll-cursor">
      <span>S</span>
      <span>C</span>
      <span>R</span>
      <span>O</span>
      <span>L</span>
      <span>L</span>
      <span>&nbsp;</span>
      <span>S</span>
      <span>C</span>
      <span>R</span>
      <span>O</span>
      <span>L</span>
      <span>L</span>
      <span>&ensp;</span>
      <span>S</span>
      <span>C</span>
      <span>R</span>
      <span>O</span>
      <span>L</span>
      <span>L</span>
      <span>&nbsp;</span>
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

  .scroll-cursor {
    position: absolute;
    border-radius: 50%;
    bottom: 10%;
    right: 0%;
    width: 130px;
    height: 130px;
    background: linear-gradient(
      90deg,
      rgba(255, 246, 65, 1) 0%,
      rgba(53, 221, 65, 1) 100%
    );
    z-index: 7;
    text-align: center;
    transform: translate(-50%, -50%) rotate(100deg);
    font-size: 20px;
    display: black;
    animation: loopCursor 8s linear infinite;
  }

  @keyframes loopCursor {
    0% {
      transform: translate(-50%, -50%) rotate(100deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(460deg);
    }
  }

  .scroll-cursor span {
    position: absolute;
    top: -0.4%;
    left: calc(50% - 10px); /* 中心点、、文字サイズ分ずらす */
    display: inline-block;
    width: 20px; /* 文字サイズより小さくしない */
    height: 65px; /* 半径 */
    transform-origin: center bottom; /* 回転の基準点 */
    color: #fff;
    text-align: justify;
    font-weight: bold;
  }

  .scroll-cursor span:nth-child(1) {
    transform: rotate(11deg);
  }

  .scroll-cursor span:nth-child(2) {
    transform: rotate(28deg);
  }

  .scroll-cursor span:nth-child(3) {
    transform: rotate(46deg);
  }

  .scroll-cursor span:nth-child(4) {
    transform: rotate(63deg);
  }

  .scroll-cursor span:nth-child(5) {
    transform: rotate(83deg);
  }

  .scroll-cursor span:nth-child(6) {
    transform: rotate(97deg);
  }

  .scroll-cursor span:nth-child(7) {
    transform: rotate(108deg);
  }

  .scroll-cursor span:nth-child(8) {
    transform: rotate(128deg);
  }

  .scroll-cursor span:nth-child(9) {
    transform: rotate(145deg);
  }

  .scroll-cursor span:nth-child(10) {
    transform: rotate(164deg);
  }

  .scroll-cursor span:nth-child(11) {
    transform: rotate(181deg);
  }

  .scroll-cursor span:nth-child(12) {
    transform: rotate(201deg);
  }

  .scroll-cursor span:nth-child(13) {
    transform: rotate(215deg);
  }

  .scroll-cursor span:nth-child(14) {
    transform: rotate(227deg);
  }

  .scroll-cursor span:nth-child(15) {
    transform: rotate(247deg);
  }

  .scroll-cursor span:nth-child(16) {
    transform: rotate(264deg);
  }

  .scroll-cursor span:nth-child(17) {
    transform: rotate(283deg);
  }

  .scroll-cursor span:nth-child(18) {
    transform: rotate(300deg);
  }

  .scroll-cursor span:nth-child(19) {
    transform: rotate(320deg);
  }

  .scroll-cursor span:nth-child(20) {
    transform: rotate(334deg);
  }
</style>
