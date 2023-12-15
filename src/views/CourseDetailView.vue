<script setup lang="ts">
import { useRoute } from "vue-router";
import FAQComponent from "@/components/FAQComponent.vue";

const route = useRoute();
const courseId = route.params.courseId;

const coursesData = {
  "year-1": {
    title: "Year 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
  "year-2": {
    title: "Year 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
  "year-3": {
    title: "Year 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
  "year-4": {
    title: "Year 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
  "year-5": {
    title: "Year 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
  "year-6": {
    title: "Year 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
  "year-7": {
    title: "Year 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima veritatis nisi corrupti sequi magni porro, omnis tempore amet dolores dolorum numquam neque, nam, pariatur quasi est ratione quae maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas repudiandae suscipit aut, minus asperiores quisquam? Molestiae facilis fuga non exercitationem consequuntur ex. Hic odio nihil numquam, modi corrupti nesciunt?",
  },
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
      <div class="flex gap-8">
        <img src="https://picsum.photos/500/328?random=1" />
        <div>
          <div class="text-3xl font-medium">
            {{ coursesData[courseId as keyof typeof coursesData].title }}
          </div>
          <div>
            {{ coursesData[courseId as keyof typeof coursesData].description }}
          </div>
        </div>
      </div>
      <FAQComponent />
    </div>
  </div>
</template>
