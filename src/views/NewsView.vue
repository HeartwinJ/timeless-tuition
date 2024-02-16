<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import anime from "animejs";
import type News from "@/types/News";

const isLoading = ref(true);
const news = ref<News[]>([]);

onMounted(async () => {
  const data = await (await fetch("/data/news.json")).json();
  news.value.push(...data);
  isLoading.value = false;

  nextTick(() => {
    anime({
      targets: ".news",
      translateY: ["20%", "0%"],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1500,
      delay: anime.stagger(100, { start: 500 }),
    });
  });
});
</script>

<template>
  <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto flex max-w-2xl flex-col items-center lg:max-w-none">
      <div class="py-8 text-center">
        <div class="font-medium text-brand">News</div>
        <div class="flex justify-center">
          <div
            class="mb-3 border-b-4 border-brand px-4 text-xl font-bold uppercase"
          >
            latest updates
          </div>
        </div>
        <div>
          On our news page, we share practical tips, insights, and news about
          education and learning that can help you and your child reach your
          academic potential. We keep you informed on the latest news and
          innovations in education. Here are some of the latest updates from our
          news page, explore our most recent news at your convenience.
        </div>
      </div>
      <div v-if="isLoading">Loading...</div>
      <dl
        class="grid w-full max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        v-else
      >
        <RouterLink
          v-for="(n, idx) in news"
          :key="idx"
          :to="`/news/${n.id}`"
          class="news"
        >
          <img :src="n.img" class="mb-3 w-full rounded-lg" />
          <div class="text-sm text-gray-500">{{ n.date }}</div>
          <div class="text-lg font-medium">{{ n.title }}</div>
          <div class="line-clamp-4 text-gray-700">{{ n.summary }}</div>
        </RouterLink>
      </dl>
    </div>
  </div>
</template>
