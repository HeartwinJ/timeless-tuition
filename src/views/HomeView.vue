<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import { PaperAirplaneIcon, StarIcon } from "@heroicons/vue/24/solid";
import ScrollerComponent from "@/components/ScrollerComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import TimelineComponent from "@/components/TimelineComponent.vue";
import TestimonialsComponent from "@/components/TestimonialsComponent.vue";
import FAQComponent from "@/components/FAQComponent.vue";
import DividerComponent from "@/components/DividerComponent.vue";

onMounted(() => {
  anime({
    targets: "#hero-content",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(500, { start: 500 }),
  });
});
</script>

<template>
  <div>
    <div class="relative isolate overflow-hidden">
      <img
        src="../assets/home-background.jpg"
        class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
        alt=""
      />
      <div class="flex flex-col justify-between lg:flex-row">
        <div class="mx-8 max-w-3xl pb-32 pt-16 lg:pb-72">
          <div class="text-left" id="hero-content">
            <h1
              class="text-center text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl"
            >
              we <span class="text-brand">tutor</span> for success
            </h1>
            <p
              class="mt-6 text-left text-xl font-normal leading-8 text-gray-200 lg:text-center"
            >
              Welcome to
              <span class="font-extrabold">Timeless Tuition!</span> With over a
              decade of combined experience in tutoring, we offer
              <span class="font-extrabold"
                >personally tailored, in-person and online tutoring</span
              >
              for all ages and subjects. Located at the heart of
              <span class="font-extrabold">Watford</span>, our experienced team
              of tutors create engaging learning environments to help students
              achieve academic success. Join us on a journey of discovery and
              achievement.
            </p>
            <div
              class="mt-10 flex items-center justify-center gap-x-6 text-gray-300"
            >
              <RouterLink
                to="/courses"
                class="flex items-center gap-3 rounded bg-brand px-6 py-2 text-xl font-bold uppercase text-white hover:bg-brand/80"
              >
                Find your course <PaperAirplaneIcon class="h-5 w-5" />
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="mx-8 max-w-3xl self-end rounded-t-xl px-4 pb-8 pt-4">
          <div class="text-left" id="hero-content">
            <h1
              class="text-center text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl"
            >
              book your <span class="text-brand">free</span> induction
            </h1>
            <div
              class="mt-6 flex items-center justify-center gap-x-6 text-gray-300"
            >
              <RouterLink
                to="/get-started"
                class="flex items-center gap-3 rounded bg-brand px-6 py-2 text-xl font-bold uppercase text-white hover:bg-brand/80"
              >
                Book Now <StarIcon class="h-5 w-5" />
              </RouterLink>
            </div>
            <p
              class="mt-3 text-left text-xl font-normal leading-8 text-gray-200 lg:text-center"
            >
              Experience top-notch tutoring with a free induction class. Click
              here to get started and excel!
            </p>
          </div>
        </div>
      </div>
    </div>
    <ScrollerComponent />
    <ServicesComponent />
    <DividerComponent class="hidden lg:flex" />
    <div class="mx-auto hidden w-full max-w-7xl px-6 lg:block lg:px-8">
      <TimelineComponent />
    </div>
    <DividerComponent />
    <TestimonialsComponent />
    <FAQComponent />
  </div>
</template>
