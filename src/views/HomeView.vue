<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import { PaperAirplaneIcon, StarIcon } from "@heroicons/vue/24/solid";
import ScrollerComponent from "@/components/ScrollerComponent.vue";
import BoardsComponent from "@/components/BoardsComponent.vue";
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
        src="../assets/home-background-mobile.png"
        class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50 lg:hidden"
        alt=""
      />
      <img
        src="../assets/home-background.png"
        class="absolute inset-0 -z-10 hidden h-full w-full object-cover brightness-50 lg:block"
        alt=""
      />
      <div class="flex flex-col justify-between lg:flex-row">
        <div class="mx-8 max-w-3xl pb-6 pt-8 lg:pb-72 lg:pt-16">
          <div class="text-left" id="hero-content">
            <h1
              class="text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl lg:text-center"
            >
              we <span class="text-brand">tutor</span> for success
            </h1>
            <p
              class="mt-3 font-normal leading-8 text-gray-200 lg:mt-6 lg:hidden"
            >
              Welcome to
              <span class="font-extrabold">Timeless Tuition!</span> We offer
              <span class="font-extrabold"
                >personally tailored, in-person and online tutoring</span
              >
              for all ages and subjects and located in the heart of Watford.
            </p>
            <p
              class="mt-6 hidden text-center text-xl font-normal leading-8 text-gray-200 lg:block"
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
              class="mt-3 flex items-center gap-x-6 text-gray-300 lg:mt-10 lg:justify-center"
            >
              <RouterLink
                to="/courses"
                class="flex items-center gap-3 rounded bg-brand px-3 py-1 font-bold uppercase text-white hover:bg-brand/80 lg:px-6 lg:py-2 lg:text-xl"
              >
                Find your course <PaperAirplaneIcon class="h-5 w-5" />
              </RouterLink>
            </div>
          </div>
        </div>
        <div
          class="mx-8 max-w-3xl self-end rounded-t-xl px-4 pb-64 pt-4 lg:pb-8"
        >
          <div class="text-left" id="hero-content">
            <h1
              class="text-right text-3xl font-bold uppercase tracking-tight text-white sm:text-6xl lg:text-center"
            >
              book your <span class="text-brand">free</span> induction
            </h1>
            <div
              class="mt-3 flex items-center justify-end gap-x-6 text-gray-300 lg:mt-6 lg:justify-center"
            >
              <RouterLink
                to="/get-started"
                class="flex items-center gap-3 rounded bg-brand px-3 py-1 font-bold uppercase text-white hover:bg-brand/80 lg:px-6 lg:py-2 lg:text-xl"
              >
                Book Now <StarIcon class="h-5 w-5" />
              </RouterLink>
            </div>
            <p
              class="mt-3 hidden text-left text-xl font-normal leading-8 text-gray-200 lg:block lg:text-center"
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
    <DividerComponent />
    <BoardsComponent />
    <DividerComponent class="hidden lg:flex" />
    <div class="mx-auto hidden w-full max-w-7xl px-6 lg:block lg:px-8">
      <TimelineComponent />
    </div>
    <DividerComponent />
    <TestimonialsComponent />
    <FAQComponent />
  </div>
</template>
