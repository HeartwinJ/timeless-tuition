<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import anime from "animejs";
import Utils from "@/utils";
import type Course from "@/types/Course";

const isLoading = ref(true);
const courses = ref<Course[]>([]);

onMounted(async () => {
  const data = await (await fetch("/data/courses.json")).json();
  courses.value.push(...data);
  isLoading.value = false;

  nextTick(() => {
    anime({
      targets: ".courses",
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
        <div class="font-medium text-brand">Courses</div>
        <div class="flex justify-center">
          <div
            class="mb-3 border-b-4 border-brand px-4 text-xl font-bold uppercase"
          >
            find the right course
          </div>
        </div>
        <div>
          With over a decade of combined expertise, our courses are tailored to
          the national curriculum exam boards to meet your child's needs.
          Covering core subjects like Mathematics, English, and Science, as well
          as specialised preparation for 11+, GCSE, A-Level exams and more, our
          programs provide a personalised and effective learning experience.
          Explore the summary of the courses available for your child's academic
          year group below.
        </div>
      </div>

      <div v-if="isLoading">Loading...</div>
      <dl
        class="flex w-full max-w-xl flex-col flex-wrap items-center justify-center gap-x-8 gap-y-16 lg:max-w-none lg:flex-row"
        v-else
      >
        <RouterLink
          v-for="(course, idx) in courses"
          :key="idx"
          :to="`/courses/${course.id}`"
          class="courses flex w-full flex-col items-center justify-center gap-3 lg:w-1/5"
        >
          <div
            :style="{
              backgroundImage: `url(${Utils.getTrianglifyImage(
                course.colors,
              )})`,
            }"
            class="group relative hidden h-64 w-full flex-col items-center justify-center bg-cover bg-center text-white lg:flex"
          >
            <div class="z-10 flex flex-col items-center justify-center">
              <div class="text-4xl font-bold uppercase">{{ course.title }}</div>
              <div class="mt-3 hidden text-center group-hover:block">
                <p v-html="course.summary" class="mx-2"></p>
              </div>
            </div>
            <div
              class="absolute inset-0 hidden bg-black/30 group-hover:block"
            ></div>
          </div>
          <div
            :style="{
              backgroundImage: `url(${Utils.getTrianglifyImage(
                course.mobileColors,
              )})`,
            }"
            class="group relative flex h-64 w-full flex-col items-center justify-center bg-cover bg-center text-white lg:hidden"
          >
            <div class="z-10 flex flex-col items-center justify-center">
              <div class="text-4xl font-bold uppercase">{{ course.title }}</div>
              <div class="mt-3 hidden text-center group-hover:block">
                <p v-html="course.summary" class="mx-2"></p>
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
