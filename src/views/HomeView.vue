<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import { PaperAirplaneIcon } from "@heroicons/vue/24/solid";
import ScrollerComponent from "@/components/ScrollerComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
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
    delay: 500,
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
      <div class="mx-8 max-w-3xl pb-72 pt-16">
        <div class="text-left" id="hero-content">
          <h1
            class="text-center text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl"
          >
            we <span class="text-brand">tutor</span> for success
          </h1>
          <p
            class="mt-6 text-center text-2xl font-normal leading-8 text-gray-200"
          >
            Welcome to Timeless Tuition! We offer personally tailored, in-person
            and online tutoring for all ages and subjects. Located at the heart
            of Watford, our experienced team of tutors create engaging learning
            environments, focusing on excellence and integrity to help students
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
    </div>
    <ScrollerComponent />
    <ServicesComponent />
    <DividerComponent />
    <TestimonialsComponent />
    <FAQComponent />
  </div>
</template>
