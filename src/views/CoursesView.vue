<script setup lang="ts">
// @ts-ignore
import Trianglify from "trianglify/dist/trianglify.bundle.js";

const courses = [
  {
    title: "Year 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-1",
  },
  {
    title: "Year 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-2",
  },
  {
    title: "Year 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-3",
  },
  {
    title: "Year 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-4",
  },
  {
    title: "Year 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-5",
  },
  {
    title: "Year 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-6",
  },
  {
    title: "Year 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id quia, aspernatur provident corporis incidunt rem laudantium explicabo eum esse doloribus officia et commodi optio dicta? Maiores repellat illo eum!",
    link: "/courses/year-7",
  },
];

function getImage(seed: string) {
  return `data:image/svg+xml;base64,${window.btoa(
    new XMLSerializer().serializeToString(
      Trianglify({ seed: seed, cellSize: 300 }).toSVG(),
    ),
  )}`;
}
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
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <RouterLink
          v-for="(course, idx) in courses"
          :key="idx"
          :to="course.link"
          class="flex flex-col items-center justify-center gap-3"
        >
          <div
            :style="{
              backgroundImage: `url(${getImage((idx + 1).toString(36))})`,
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
