<template>
  <component
    :is="baseTag"
    :class="classes"
    class="flex items-center justify-center bg-gradient-to-r from-primary to-secondPrimary duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray active:scale-95"
    v-bind="{ ...$attrs, ...attrs }"
  >
    <span class="font-semibold text-white">
      <slot />
    </span>
  </component>
</template>
<script setup lang="ts">
  import { AnchorHTMLAttributes } from "nuxt/dist/app/compat/capi";

  interface Props {
    size: "sm" | "md" | "lg";
    shape?: "rounded" | "sharp";
    href?: AnchorHTMLAttributes["href"];
    to?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    size: "md",
    shape: "rounded",
  });

  const classes = computed(() => ({
    "w-40 h-10 text-lg": props.size === "sm",
    "w-48 h-12 text-xl": props.size === "md",
    "w-80 h-14 text-2xl": props.size === "lg",
    "rounded-[20px]": props.size === "sm" && props.shape === "rounded",
    "rounded-[24px]": props.size === "md" && props.shape === "rounded",
    "rounded-[30px]": props.size === "lg" && props.shape === "rounded",
    "rounded-none": props.shape === "sharp",
  }));

  const baseTag = computed(() => {
    if (props.to) return "router-link";
    if (props.href) return "a";
    return "button";
  });

  const attrs = computed(() => {
    if (baseTag.value === "router-link") return { to: props.to };
    if (baseTag.value === "a")
      return { href: props.href, rel: "noopener noreferrer", target: "_blank" };
  });
</script>
