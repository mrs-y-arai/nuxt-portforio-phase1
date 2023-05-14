<template>
  <div class="w-auto h-auto">
    <img
      :width="props.width"
      class="h-auto"
      src="@/assets/images/logo.svg"
      alt="ロゴ"
    />
  </div>
</template>
<script setup lang="ts">
  interface Props {
    width: number | string;
  }

  const props = withDefaults(defineProps<Props>(), {
    width: 161,
  });
</script>
