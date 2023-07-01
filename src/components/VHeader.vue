<template>
  <header class="fixed w-full px-8 py-4 flex items-center justify-between z-40">
    <nuxt-link to="/">
      <VLogo width="120" />
    </nuxt-link>
    <nav class="flex items-center gap-4">
      <ul class="flex gap-4">
        <li v-for="item in MenuList" :key="item.id">
          <nuxt-link class="capitalize text-lg text-white" :to="item.to">{{
            item.name
          }}</nuxt-link>
        </li>
      </ul>
      <VBtn to="contact" size="sm">CONTACT</VBtn>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { MenuList } from "@/constants/MenuList";
</script>
