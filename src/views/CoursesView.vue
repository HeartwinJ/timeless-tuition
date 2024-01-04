<script setup lang="ts">
import { ref, onMounted } from "vue";
import Utils from "@/utils";
import type Course from "@/types/Course";

const isLoading = ref(true);
const courses = ref<Course[]>([]);

onMounted(() => {
  fetch("/data/courses.json")
    .then((res) => res.json())
    .then((data) => {
      courses.value.push(...data);
      isLoading.value = false;
    });
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="py-8 text-center">
        <div class="font-medium text-pink-600">Courses</div>
        <div class="text-xl font-bold uppercase">lorem ipsum</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia,
          aspernatur provident corporis incidunt rem laudantium explicabo eum
          esse doloribus officia et commodi optio dicta? Maiores repellat illo
          eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          at voluptate facere tempore nesciunt, animi beatae accusantium
          aspernatur commodi obcaecati voluptatibus illo fugit nulla, ipsam quo
          expedita officia iusto! Esse.
        </div>
      </div>

      <div v-if="isLoading">Loading...</div>
      <dl
        class="flex max-w-xl flex-col flex-wrap justify-center gap-x-8 gap-y-16 lg:max-w-none lg:flex-row"
        v-else
      >
        <RouterLink
          v-for="(course, idx) in courses"
          :key="idx"
          :to="`/courses/${course.id}`"
          class="flex aspect-square flex-col items-center justify-center gap-3 lg:w-1/4"
        >
          <div
            :style="{
              backgroundImage: `url(${Utils.getTrianglifyImage(
                course.colors,
              )})`,
            }"
            class="group relative flex h-64 w-full flex-col items-center justify-center bg-cover bg-center text-white"
          >
            <div class="z-10 flex flex-col items-center justify-center">
              <div class="text-4xl font-bold uppercase">{{ course.title }}</div>
              <div class="mt-3 hidden text-center group-hover:block">
                {{ course.description }}
              </div>
            </div>
            <div
              class="absolute inset-0 hidden bg-black/30 group-hover:block"
            ></div>
          </div>
        </RouterLink>
      </dl>
    </div>
  </div>
</template>
