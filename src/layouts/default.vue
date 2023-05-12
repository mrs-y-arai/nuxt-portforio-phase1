<template>
  <main>
    <h1>パス: {{ pagePath }}</h1>
    <slot />
  </main>
</template>
<script setup lang="ts">
  const route = useRoute();
  const pagePath = route.path;
</script>
