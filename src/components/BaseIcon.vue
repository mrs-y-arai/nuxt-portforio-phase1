<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    xml:space="preserve"
    :class="classes"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <slot />
  </svg>
</template>

<script setup lang="ts">
  interface Props {
    iconName: string;
    width: number | string;
    height: number | string;
    viewBox?: string;
    color?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    iconName: "",
    width: 50,
    height: 50,
    viewBox: "0 0 512 512",
    color: "primary",
  });

  const classes = computed(() => ({
    "fill-primary": props.color === "primary",
    "fill-secondPrimary": props.color === "secondPrimary",
    "fill-white": props.color === "white",
    "fill-black": props.color === "black",
  }));
</script>
