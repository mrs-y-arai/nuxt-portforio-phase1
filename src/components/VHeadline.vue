<template>
  <h2 class="flex flex-col">
    <span
      class="w-fit capitalize font-bold text-9xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondPrimary"
      >{{ enContent }}</span
    >
    <span
      class="w-fit text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondPrimary"
      >{{ jpContent }}</span
    >
  </h2>
</template>
<script setup lang="ts">
  interface Props {
    jpContent: string;
    enContent: string;
  }

  withDefaults(defineProps<Props>(), {});
</script>
