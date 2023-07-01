<template>
  <NuxtLink :to="URL" target="_blank" ref="noopener noreferrer">
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
    <p class="text-center text-lg mb-4">{{ title }}</p>
    <div class="p-4">
      <p class="text-base line-clamp-3">
        {{ comment }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { MicroCMSImage } from "microcms-js-sdk";
  interface Props {
    id: string;
    title: string;
    URL: string;
    comment: string;
    thumbnail?: MicroCMSImage;
    role?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  }
  withDefaults(defineProps<Props>(), {});
</script>
