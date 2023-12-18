<script setup lang="ts">
import { ref } from "vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import TestimonialsComponent from "@/components/TestimonialsComponent.vue";
import FAQComponent from "@/components/FAQComponent.vue";
import DividerComponent from "@/components/DividerComponent.vue";

const selectedCourse = ref("");
</script>

<template>
  <div>
    <div class="relative isolate overflow-hidden pt-14">
      <!-- <img
        src=""
        class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
      /> -->
      <div class="absolute inset-0 -z-10 h-full bg-gray-500"></div>
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl"
          >
            we <span class="text-pink-600">tutor</span> for success
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
            occaecat fugiat aliqua.
          </p>
          <div
            class="mt-10 flex items-center justify-center gap-x-6 text-gray-300"
          >
            <!-- <span>Find the right course for your child:</span>
            <select v-model="selectedCourse">
              <option value="year-1">Year 1</option>
              <option value="year-2">Year 2</option>
              <option value="year-3">Year 3</option>
              <option value="year-4">Year 4</option>
              <option value="year-5">Year 5</option>
              <option value="year-6">Year 6</option>
              <option value="year-7">Year 7</option>
            </select> -->
            <button
              class="rounded bg-pink-600 px-4 py-1 text-white hover:bg-pink-500"
              @click="$router.push(`/courses/${selectedCourse}`)"
            >
              View Subjects
            </button>
          </div>
        </div>
      </div>
    </div>
    <ServicesComponent />
    <DividerComponent />
    <TestimonialsComponent />
    <FAQComponent />
  </div>
</template>
