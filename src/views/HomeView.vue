<script setup lang="ts">
import { PaperAirplaneIcon } from "@heroicons/vue/24/solid";
import ServicesComponent from "@/components/ServicesComponent.vue";
import TestimonialsComponent from "@/components/TestimonialsComponent.vue";
import FAQComponent from "@/components/FAQComponent.vue";
import DividerComponent from "@/components/DividerComponent.vue";
</script>

<template>
  <div>
    <div class="relative isolate overflow-hidden pt-14">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/1944697600/display_1500/stock-photo-parent-helping-child-happy-family-doing-homework-in-the-evening-mother-and-daughter-working-on-1944697600.jpg"
        class="absolute inset-0 -z-10 h-full w-full object-left brightness-50 sm:object-cover"
        alt=""
      />
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl"
          >
            we <span class="text-brand">tutor</span> for success
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
            <RouterLink
              to="/courses"
              class="bg-brand hover:bg-brand/80 flex items-center gap-3 rounded px-6 py-2 text-xl font-bold uppercase text-white"
            >
              Find your course <PaperAirplaneIcon class="h-5 w-5" />
            </RouterLink>
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
