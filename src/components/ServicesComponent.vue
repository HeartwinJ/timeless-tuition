<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import {
  IconBook,
  IconSchool,
  IconUsers,
  IconChartBar,
} from "@tabler/icons-vue";

const features = [
  {
    name: "Tailored Courses For You",
    description:
      "At Timeless Tuition, our dedicated tutors assist in crafting customised and tailored tuition programmes for each student, providing weekly homework and assesments that are aligned with the National Curriculum. Our goal is to support every learner in achieving the best grades possible by advancing at their own pace and addressing their individual learning needs.",
    href: "#",
    icon: IconBook,
  },
  {
    name: "Professional Tutors",
    description:
      "Trust our tutors; you're in good hands. Our professional tutors are meticulously DBS checked and rigorously trained by us to guide your child towards exceptional results. Carefully selected, our tutors undergo a thorough selection and training process to meet our high standards of excellence.",
    href: "#",
    icon: IconSchool,
  },
  {
    name: "Small Group Sessions & One-to-One Support",
    description:
      "Our classes feature small group settings, with 3-6 students per table, ensuring personalised attention in every lesson. We foster an intimate learning environment, providing students with ample time, attention, and resources to excel. Additionally, we offer the option for one-on-one sessions, both in-person and online.",
    href: "#",
    icon: IconUsers,
  },
  {
    name: "Parental Engagement: Weekly Updates and Communication",
    description:
      "We highly value keeping parents informed about their child's progress. Our team shares comprehensive weekly reports, detailing your child's performance, and achievements during tuition sessions. Additionally, meetings can be scheduled to address any concerns. We uphold the importance of transparency in your child's educational journey.",
    href: "#",
    icon: IconChartBar,
  },
];

onMounted(() => {
  anime({
    targets: ".features",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(500, { start: 1000 }),
  });
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-8xl px-6 py-24 lg:px-8">
      <div class="mx-auto max-w-4xl"></div>
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="features flex flex-col"
        >
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand"
            >
              <component
                :is="feature.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <div class="uppercase">
              {{ feature.name }}
            </div>
          </dt>
          <dd
            class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"
          >
            <p class="flex-auto">{{ feature.description }}</p>
            <p class="mt-6">
              <a
                :href="feature.href"
                class="text-sm font-semibold leading-6 text-brand"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
