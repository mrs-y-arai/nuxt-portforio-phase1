<template>
  <nuxt-link to="/" class="flex items-center gap-x-4">
    <div
      class="w-16 h-16 flex items-center justify-center bg-white rounded-full border-2 border-primary"
    >
      <BaseIcon width="45%" height="45%">
        <IconRightArrow />
      </BaseIcon>
    </div>
    <span class="font-bold">
      <slot />
    </span>
  </nuxt-link>
</template>
