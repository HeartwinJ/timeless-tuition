<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import DOMPurify from "dompurify";
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
  description: "",
  colors: [],
});

onMounted(async () => {
  const data = await (await fetch("/data/courses.json")).json();
  courseData.value = data.find((course: Course) => {
    return course.id === courseId;
  });
  courseData.value.description = DOMPurify.sanitize(
    await marked(courseData.value.description),
  );
  isLoading.value = false;
});
</script>

<template>
  <div>
    <div class="max-w-8xl mx-auto px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
        <div v-if="isLoading">Loading...</div>
        <div class="flex flex-col gap-8 lg:flex-row" v-else>
          <div>
            <img :src="Utils.getTrianglifyImage(courseData.colors)" />
          </div>
          <div class="lg:grow">
            <div class="text-3xl font-medium">
              {{ courseData.title }}
            </div>
            <div class="prose prose-slate lg:prose-lg">
              <div v-html="courseData.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FAQComponent />
  </div>
</template>
