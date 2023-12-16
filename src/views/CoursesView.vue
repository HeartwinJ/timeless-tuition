<script setup lang="ts">
// @ts-ignore
import Trianglify from "trianglify";

const courses = [
  { title: "Year 1", link: "/courses/year-1" },
  { title: "Year 2", link: "/courses/year-2" },
  { title: "Year 3", link: "/courses/year-3" },
  { title: "Year 4", link: "/courses/year-4" },
  { title: "Year 5", link: "/courses/year-5" },
  { title: "Year 6", link: "/courses/year-6" },
  { title: "Year 7", link: "/courses/year-7" },
];

function getImage(seed: string) {
  return `data:image/svg+xml;base64,${window.btoa(
    new XMLSerializer().serializeToString(Trianglify({ seed: seed, cellSize: 300 }).toSVG()),
  )}`;
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <RouterLink
          v-for="(course, idx) in courses"
          :key="idx"
          :to="course.link"
          class="flex flex-col items-center justify-center gap-3"
        >
          <img :src="getImage((idx + 1).toString(36))" />
          <div>{{ course.title }}</div>
        </RouterLink>
      </dl>
    </div>
  </div>
</template>
