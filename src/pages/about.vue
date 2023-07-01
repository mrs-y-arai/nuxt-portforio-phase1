<template>
  <div class="pt-20">
    <!-- <button @click="show = !show">BUTTON</button>
    <transition appear @before-enter="beforeFadeIn" @enter="fadeIn">
      <div v-if="show">フェードインする</div>
    </transition> -->
    <!-- <transition appear @before-enter="beforeFadeIn" @enter="fadeIn">
      <div>フェードインする</div>
    </transition> -->

    <div ref="fadeInRef">フェードインするref</div>
  </div>
</template>
<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  const show = ref(false);
  const fadeInRef = ref<HTMLElement>();

  const beforeFadeIn = (el: any) => {
    gsap.set(el, {
      opacity: 0,
    });
    console.log("beforeFadeIn");
  };

  // const fadeIn = (el: any, done: any) => {
  //   gsap.to(el, {
  //     duration: 3,
  //     delay: 3,
  //     y: 0,
  //     opacity: 1,
  //     onComplete: done,
  //   });
  //   console.log("fadeIn");
  // };

  // const fadeIn = (el: any, done: any) => {
  //   gsap.to(el, {
  //     scrollTrigger: {
  //       trigger: el,
  //       toggleActions: "restart none none none",
  //     },
  //     duration: 3,
  //     y: 0,
  //     opacity: 1,
  //     ease: "expo.out",
  //     onComplete: done,
  //   });
  //   console.log("fadeIn");
  // };

  const fadeIn = (el: HTMLElement) => {
    gsap.set(el, {
      opacity: 0,
      y: "30%",
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        toggleActions: "restart none none none",
      },
      duration: 3,
      y: 0,
      opacity: 1,
      ease: "expo.out",
    });
    console.log("fadeIn");
  };

  onMounted(() => {
    if (fadeInRef.value) {
      fadeIn(fadeInRef.value);
    }
  });
</script>
