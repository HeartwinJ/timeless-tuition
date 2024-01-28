<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import DOMPurify from "dompurify";
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
});
</script>

<template>
  <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div v-if="isLoading">Loading...</div>
      <div class="flex flex-col gap-8 lg:flex-row" v-else>
        <div>
          <img :src="newsData.img" />
        </div>
        <div class="grow">
          <div class="text-3xl font-bold">
            {{ newsData.title }}
          </div>
          <div class="prose prose-slate lg:prose-lg">
            <div v-html="newsData.summary"></div>
          </div>
        </div>
      </div>
      <div class="prose prose-slate max-w-none lg:prose-lg mt-5">
        <div v-html="newsData.description"></div>
      </div>
    </div>
  </div>
</template>
