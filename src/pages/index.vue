<template>
  <Fv />
  <section class="p-10">
    <VHeadline class="mb-8" jp-content="私について" en-content="about" />
    <div class="flex justify-between gap-x-5">
      <div class="w-fit">
        <p>
          私は、東京で活動している、フロントエンドエンジニア・デザイナーです。
        </p>
        <p class="mb-4">
          Webサイトにおける・コーディング・デザイン・その他関連業務を承っております。
        </p>
        <p>I am a front-end engineer/designer based in Tokyo.</p>
        <p>I handle website coding, design, and other related work.</p>
      </div>
      <div class="flex-grow -mt-20">
        <img src="../assets/images/undraw_programming_re_kg9v.svg" alt="" />
      </div>
    </div>
  </section>
  <section class="p-10">
    <VHeadline jp-content="制作事例" en-content="works" />
    <ul v-if="worksListSix">
      <li v-for="item in worksListSix" :key="item.id">
        <TopWorksItem v-bind="item" />
      </li>
    </ul>
  </section>
  <section class="p-10">
    <VHeadline jp-content="よくある質問" en-content="FAQ" />
  </section>
</template>
<script setup lang="ts">
  import { Works } from "@/types/works";

  const { data, refresh } = await useMicroCMSGetList<Works>({
    endpoint: "works",
  });

  const worksList = computed(() => data.value?.contents);
  const worksListSix = computed(() => worksList.value?.slice(0, 5));
</script>
