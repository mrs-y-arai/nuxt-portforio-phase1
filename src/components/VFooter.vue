<template>
  <footer class="w-full px-8 py-4 flex flex-col items-center">
    <nuxt-link class="mb-6" to="/">
      <VLogo width="120" />
    </nuxt-link>
    <nav class="mb-6">
      <ul class="flex gap-4">
        <li v-for="item in MenuList" :key="item.id">
          <nuxt-link class="capitalize text-lg text-white" :to="item.to">{{
            item.name
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <nav class="mb-6">
      <ul class="flex gap-4 items-center">
        <li v-for="item in SNSList" :key="item.id">
          <a
            target="_blank"
            rel="noreferrer noopener"
            class="w-9 block"
            :href="item.to"
          >
            <!-- <img class="w-full h-auto" :src="item.iconUrl" :alt="item.alt" /> -->
            <item.iconName />
          </a>
        </li>
      </ul>
    </nav>
    <small class="text-xs"
      >Y.Arai&nbsp;&copy;&nbsp;2020&nbsp;-&nbsp;{{ year }}</small
    >
  </footer>
</template>
<script setup lang="ts">
  import { MenuList } from "@/constants/MenuList";
  import { SNSList } from "@/constants/SNSList";

  const date = new Date();
  const year = date.getFullYear();
</script>
