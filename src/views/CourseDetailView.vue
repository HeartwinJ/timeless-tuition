<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import FAQComponent from "@/components/FAQComponent.vue";
import Utils from "@/utils";
import type Course from "@/types/Course";

const route = useRoute();
const courseId = route.params.courseId;

const isLoading = ref(true);
const courseData = ref<Course>({
  id: "",
  title: "",
  description: "",
  colors: [],
});

onMounted(() => {
  fetch("/data/courses.json")
    .then((res) => res.json())
    .then((data) => {
      courseData.value = data.find((course: Course) => {
        return course.id === courseId;
      });
      isLoading.value = false;
    });
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
        <div v-if="isLoading">Loading...</div>
        <div class="flex gap-8" v-else>
          <img :src="Utils.getTrianglifyImage(courseData.colors)" />
          <div>
            <div class="text-3xl font-medium">
              {{ courseData.title }}
            </div>
            <div>
              {{ courseData.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <FAQComponent />
  </div>
</template>
