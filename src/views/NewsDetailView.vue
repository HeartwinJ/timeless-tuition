<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type News from "@/types/News";

const route = useRoute();
const newsId = route.params.newsId;

const isLoading = ref(true);
const newsData = ref<News>({
  id: "",
  title: "",
  img: "",
  description: "",
  date: "",
});

onMounted(() => {
  fetch("/data/news.json")
    .then((res) => res.json())
    .then((data) => {
      newsData.value = data.find((n: News) => {
        return n.id === newsId;
      });
      isLoading.value = false;
    });
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
      <div v-if="isLoading">Loading...</div>
      <div class="flex gap-8" v-else>
        <img :src="newsData.img" />
        <div>
          <div class="text-3xl font-medium">
            {{ newsData.title }}
          </div>
          <div>
            {{ newsData.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
