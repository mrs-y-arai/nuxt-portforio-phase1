<template>
  <div class="flex w-screen items-center">
    <template v-for="item in 2" :key="item">
      <span
        class="flow-text whitespace-nowrap bg-gradient-to-b from-darkGray to-transparent bg-clip-text text-8xl font-bold text-transparent"
      >
        {{ content }}
      </span>
    </template>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    content: string;
  }
  withDefaults(defineProps<Props>(), {
    content: "",
  });
</script>

<style scoped>
  .flow-text {
    animation: flowText 60s linear infinite;
  }

  @keyframes flowText {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>
