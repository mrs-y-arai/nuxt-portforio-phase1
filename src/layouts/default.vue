<template>
  <div class="bg-strongBlack">
    <VHeader />
    <main class="w-full px-8">
      <slot />
    </main>
    <VFooter />
  </div>
</template>
<script setup lang="ts">
  const route = useRoute();
  const pagePath = computed(() => route.path);
</script>
<style>
  body {
    font-family: "Helvetica", "Noto Sans JP", sans-serif;
    color: #fff;
    overflow-x: hidden;
  }
</style>
