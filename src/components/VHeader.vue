<template>
  <header class="fixed z-40 flex w-full items-center justify-between px-8 py-4">
    <nuxt-link to="/">
      <VLogo width="120" />
    </nuxt-link>
    <nav class="flex items-center gap-4">
      <ul class="flex gap-4">
        <li v-for="item in MenuList" :key="item.id">
          <nuxt-link
            class="text-lg capitalize text-white duration-500 hover:text-primary"
            :to="item.to"
            >{{ item.name }}</nuxt-link
          >
        </li>
      </ul>
      <VBtn to="/contact" size="sm">CONTACT</VBtn>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { MenuList } from "@/constants/MenuList";
</script>
