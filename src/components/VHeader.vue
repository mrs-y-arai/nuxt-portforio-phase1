<template>
  <header class="fixed w-full px-8 py-4 flex items-center justify-between z-40">
    <nuxt-link to="/">
      <VLogo width="120" />
    </nuxt-link>
    <nav>
      <ul class="flex gap-4">
        <li v-for="item in MenuList" :key="item.id">
          <nuxt-link class="capitalize text-lg" :to="item.to">{{
            item.name
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { MenuList } from "@/constants/MenuList";
</script>
