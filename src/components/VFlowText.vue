<template>
  <div class="w-screen flex items-center">
    <template v-for="item in 2" :key="item">
      <span class="whitespace-nowrap font-bold text-8xl flow-text">
        {{ props.content }}
      </span>
    </template>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    content: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    content: "",
  });
</script>

<style scoped>
  .flow-text {
    animation: flowText 60s linear infinite;
    color: #c0c0c0;
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
