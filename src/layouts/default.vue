<template>
  <VHeader />
  <main class="w-full px-8">
    <slot />
  </main>
  <VFooter />
</template>
<script setup lang="ts">
  const route = useRoute();
  const pagePath = computed(() => route.path);
</script>
