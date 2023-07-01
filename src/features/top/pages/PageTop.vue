<template>
  <Fv />

  <VFlowText
    class="mt-24 mb-24"
    content="I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;I&thinsp;am&thinsp;Frontend&thinsp;engineer&thinsp;Contact&thinsp;me&thinsp;"
  />

  <section class="p-10">
    <VHeadline class="mb-10" jp-content="私について" en-content="about" />
    <TopAbout />
  </section>

  <VFlowText
    class="mt-24 mb-24"
    content="What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;What’s&thinsp;works?&thinsp;"
  />

  <section class="p-10">
    <VHeadline class="mb-10" jp-content="制作事例" en-content="works" />
    <ul v-if="works" class="grid grid-cols-3 gap-4">
      <li
        ref="worksRef"
        class="rounded-3xl shadow-2xl shadow-darkGrey overflow-hidden"
        v-for="item in works"
        :key="item.id"
      >
        <TopWorksItem v-bind="item" />
      </li>
    </ul>
  </section>

  <VFlowText
    class="mt-24 mb-24"
    content="What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;What’s&thinsp;skill?&thinsp;"
  />

  <section class="p-10">
    <VHeadline jp-content="できること" en-content="skill" />
  </section>
</template>
<script setup lang="ts">
  import { Works } from "@/types";
  import { useAnimation } from "@/composables/useAnimation";

  const { data, refresh } = await useMicroCMSGetList<Works>({
    endpoint: "works",
  });

  const { orderFadeIn } = useAnimation();
  const works = computed(() => data.value?.contents.slice(0, 3));
  const worksRef = ref<HTMLElement[]>();
  onUpdated(() => {
    if (worksRef.value) {
      orderFadeIn(worksRef.value);
    }
  });
</script>
