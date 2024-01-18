<script setup lang="ts">
import { ref, onMounted } from "vue";
import type News from "@/types/News";

const isLoading = ref(true);
const news = ref<News[]>([]);

onMounted(() => {
  fetch("/data/news.json")
    .then((res) => res.json())
    .then((data) => {
      news.value.push(...data);
      isLoading.value = false;
    });
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto flex max-w-2xl flex-col items-center lg:max-w-none">
      <div class="py-8 text-center">
        <div class="font-medium text-brand">News</div>
        <div class="text-xl font-bold uppercase">latest updates</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          praesentium deserunt fuga. Sequi blanditiis nemo nisi. Sequi tempora
          praesentium ab, ullam cumque nesciunt maiores, necessitatibus eum a
          illo unde fuga. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Consequatur officia commodi accusamus fuga? Maxime deserunt quae
          nam temporibus dolores quaerat dolore assumenda. Mollitia quibusdam id
          aspernatur voluptates eos quam quas!
        </div>
      </div>
      <div v-if="isLoading">Loading...</div>
      <dl
        class="grid w-full max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        v-else
      >
        <RouterLink :to="`/news/${n.id}`" v-for="(n, idx) in news" :key="idx">
          <img :src="n.img" class="mb-3 w-full rounded-lg" />
          <div class="text-sm text-gray-500">{{ n.date }}</div>
          <div class="text-lg font-medium">{{ n.title }}</div>
          <div class="line-clamp-4 text-gray-700">{{ n.summary }}</div>
        </RouterLink>
        <!-- <div class="col-span-3 h-[700px] w-full">
          <iframe
            src="https://www.juicer.io/api/feeds/heartehh/iframe"
            frameborder="0"
            width="100%"
            height="100%"
            style="display: block; margin: 0 auto"
          ></iframe>
        </div> -->
      </dl>
    </div>
  </div>
</template>
