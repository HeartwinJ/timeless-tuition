<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import DOMPurify from "dompurify";
import VanillaTilt from "vanilla-tilt";
import FAQComponent from "@/components/FAQComponent.vue";
import Utils from "@/utils";
import type Course from "@/types/Course";

const route = useRoute();
const courseId = route.params.courseId;

const isLoading = ref(true);
const courseData = ref<Course>({
  id: "",
  title: "",
  summary: "",
  overview: "",
  highlights: "",
  colors: [],
  mobileColors: [],
});

onMounted(async () => {
  const data = await (await fetch("/data/courses.json")).json();
  courseData.value = data.find((course: Course) => {
    return course.id === courseId;
  });
  courseData.value.overview = DOMPurify.sanitize(
    await marked(courseData.value.overview),
  );
  courseData.value.highlights = DOMPurify.sanitize(
    await marked(courseData.value.highlights),
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
  <div>
    <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
        <div v-if="isLoading">Loading...</div>
        <div class="flex flex-col gap-8 lg:flex-row" v-else>
          <div
            class="tilt-img relative flex items-center justify-center"
            style="transform-style: preserve-3d"
          >
            <img :src="Utils.getTrianglifyImage(courseData.colors)" />
            <div
              class="absolute z-10 flex flex-col items-center justify-center"
              :style="{ transform: 'translateZ(20px)' }"
            >
              <div class="text-6xl font-bold uppercase text-white">
                {{ courseData.title }}
              </div>
            </div>
          </div>
          <div class="lg:grow">
            <div class="text-3xl font-bold">
              {{ courseData.title }}
            </div>
            <div class="prose prose-slate lg:prose-lg">
              <div v-html="courseData.overview"></div>
            </div>
          </div>
        </div>
        <div class="prose prose-slate mt-5 max-w-none lg:prose-lg">
          <div v-html="courseData.highlights"></div>
        </div>
      </div>
    </div>
    <FAQComponent />
  </div>
</template>
