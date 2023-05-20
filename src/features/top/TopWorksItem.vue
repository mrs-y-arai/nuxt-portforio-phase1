<template>
  <NuxtLink :to="url">
    <div>
      <img
        v-if="thumbnail"
        :src="thumbnail.url"
        :width="thumbnail.width"
        :height="thumbnail.height"
        :alt="title"
      />
      <img v-else src="" :alt="title" />
    </div>
    <p>{{ title }}</p>
    <p>{{ comment }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { MicroCMSImage } from "microcms-js-sdk";
  interface Props {
    id: string;
    title: string;
    url: string;
    comment: string;
    thumbnail?: MicroCMSImage;
    role?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  }
  const props = withDefaults(defineProps<Props>(), {});
</script>
