<template>
  <div class="w-auto h-auto" :class="classes">
    <NuxtLink class="w-full h-full block" :to="props.link">
      <slot />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
  interface Props {
    link: string;
    size: "sm" | "md" | "lg";
    shape: "rounded" | "sharp";
    type: "gradient" | "outlined";
    color?: "black" | "primary";
  }

  const props = withDefaults(defineProps<Props>(), {
    link: "/contact",
    size: "md",
    shape: "rounded",
    type: "gradient",
  });

  const classes = computed(() => {});
</script>
