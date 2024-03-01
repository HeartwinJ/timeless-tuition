<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import DOMPurify from "dompurify";
import VanillaTilt from "vanilla-tilt";
import type News from "@/types/News";

const route = useRoute();
const newsId = route.params.newsId;

const isLoading = ref(true);
const newsData = ref<News>({
  id: "",
  title: "",
  img: "",
  summary: "",
  description: "",
  date: "",
});

onMounted(async () => {
  const data = await (await fetch("/data/news.json")).json();
  newsData.value = data.find((n: News) => {
    return n.id === newsId;
  });
  newsData.value.summary = DOMPurify.sanitize(
    await marked(newsData.value.summary),
  );
  newsData.value.description = DOMPurify.sanitize(
    await marked(newsData.value.description),
  );
  isLoading.value = false;

  nextTick(() => {
    //@ts-ignore
    VanillaTilt.init(document.querySelectorAll(".tilt-img"), {
      max: 10,
      speed: 1500,
      reverse: true,
    });
  });
});
</script>

<template>
  <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div v-if="isLoading">Loading...</div>
      <div class="flex flex-col gap-8 lg:flex-row" v-else>
        <div class="shrink-0">
          <img class="tilt-img" :src="newsData.img" />
        </div>
        <div class="grow">
          <div
            class="text-3xl font-medium underline decoration-brand underline-offset-4"
          >
            {{ newsData.title }}
          </div>
          <div class="prose prose-slate lg:prose-lg">
            <div v-html="newsData.summary"></div>
          </div>
        </div>
      </div>
      <div class="prose prose-slate mt-5 max-w-none lg:prose-lg">
        <div v-html="newsData.description"></div>
      </div>
    </div>
  </div>
</template>
