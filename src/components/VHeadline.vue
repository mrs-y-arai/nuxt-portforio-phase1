<template>
  <h2 class="flex flex-col">
    <span
      ref="enSlideInRef"
      class="w-fit mb-1 capitalize font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondPrimary overflow-hidden relative"
      >{{ enContent }}
      <span
        ref="enOverCoatRef"
        class="w-full h-full block bg-gradient-to-r from-primary to-secondPrimary absolute top-0 left-0"
      ></span>
    </span>
    <span
      ref="jpSlideInRef"
      class="w-fit text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondPrimary relative overflow-hidden"
      >{{ jpContent }}
      <span
        ref="jpOverCoatRef"
        class="w-full h-full block bg-gradient-to-r from-primary to-secondPrimary absolute top-0 left-0"
      ></span>
    </span>
  </h2>
</template>
<script setup lang="ts">
  import { useAnimation } from "@/composables/useAnimation";

  interface Props {
    jpContent: string;
    enContent: string;
  }

  withDefaults(defineProps<Props>(), {});

  const enSlideInRef = ref<HTMLElement>();
  const enOverCoatRef = ref<HTMLElement>();
  const jpSlideInRef = ref<HTMLElement>();
  const jpOverCoatRef = ref<HTMLElement>();
  const { slideIn } = useAnimation();
  onMounted(() => {
    if (enSlideInRef.value && enOverCoatRef.value) {
      slideIn(enSlideInRef.value, enOverCoatRef.value);
    }

    if (jpSlideInRef.value && jpOverCoatRef.value) {
      slideIn(jpSlideInRef.value, jpOverCoatRef.value);
    }
  });
</script>
