<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  IconHourglass,
  IconCalendar,
  IconMapPin,
  IconCircleArrowRight,
} from "@tabler/icons-vue";
import type Career from "@/types/Career";

const isLoading = ref(true);
const openings = ref<Career[]>([]);

onMounted(async () => {
  const data = await (await fetch("/data/careers.json")).json();
  openings.value.push(...data);
  isLoading.value = false;
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="py-8 text-center">
          <div class="font-medium text-brand">Careers</div>
          <div class="mb-3 text-xl font-bold uppercase">work with us</div>
          <div>
            Join Our Team at Timeless Tuition! Are you an enthusiastic educator
            with a passion for making a difference in students' lives? Timeless
            Tuition is seeking talented individuals to join our team of tutors
            and educators. As a tutor at Timeless Tuition, you'll play a crucial
            role in shaping students' academic journeys. We offer a supportive
            and collaborative work environment where your expertise and
            creativity are valued. Whether you're an experienced educator or a
            recent graduate eager to embark on a fulfilling teaching career, we
            welcome you to apply. At Timeless Tuition, you'll have the
            opportunity to work with students of all ages and abilities,
            providing personalised support and guidance tailored to their
            individual learning needs. Explore our career opportunities and
            become a part of the Timeless Tuition family today! Fill out the
            form below, and we will be in touch.
          </div>
        </div>
        <div v-if="isLoading">Loading...</div>
        <div
          v-for="(opening, idx) in openings"
          :key="idx"
          class="m-3 flex flex-col gap-3 rounded-lg border bg-white p-3 shadow md:flex-row"
          v-else
        >
          <div>
            <div class="mb-2 text-sm text-gray-700">
              <span
                class="rounded-full border bg-white px-2 py-1"
                v-if="opening.department"
              >
                {{ opening.department }}
              </span>
            </div>
            <div class="text-lg font-medium text-brand">
              {{ opening.role }}
            </div>
            <div class="text-gray-700 line-clamp-3">{{ opening.summary }}</div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col items-center justify-around">
              <div
                class="flex w-full items-center gap-2 whitespace-nowrap p-2 text-gray-700"
                v-if="opening.experience"
              >
                <IconCalendar class="h-5 w-5" /> {{ opening.experience }}
              </div>
              <div
                class="flex w-full items-center gap-2 whitespace-nowrap p-2 text-gray-700"
                v-if="opening.employmentType"
              >
                <IconHourglass class="h-5 w-5" /> {{ opening.employmentType }}
              </div>
              <div
                class="flex w-full items-center gap-2 whitespace-nowrap p-2 text-gray-700"
                v-if="opening.location"
              >
                <IconMapPin class="h-5 w-5" /> {{ opening.location }}
              </div>
            </div>
            <RouterLink
              :to="`/careers/${opening.id}`"
              class="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand px-12 py-2 text-white"
            >
              Learn More <IconCircleArrowRight class="h-5 w-5" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
