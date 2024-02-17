<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import {
  IconChevronLeft,
  IconChevronRight,
  IconStarFilled,
} from "@tabler/icons-vue";

import "vue3-carousel/dist/carousel.css";

const testimonials = [
  {
    author: "Amrit Lalli",
    content:
      "Putting my child in this tuition was the best choice. The tutors have made a big difference, and I've seen a huge improvement in my kid's grades. I definitely recommend it to parents looking for results in their child's education!",
  },
  {
    author: "Ethan Willis",
    content:
      "I needed GCSE tuition in maths and science so I went with Timeless Tuition, absolutely amazing, I achieved grade 8,9 in double science and 9 in maths.",
  },
  {
    author: "Priya Sivakumar",
    content:
      "My son needed preparation for his 11+ exam, and Timeless Tuition helped us get him into his first choice school of Watford Grammar School for Boys, Thank you so much to the tutors",
  },
  {
    author: "Zainab Khan",
    content:
      "My daughter struggled alot with maths and english, we tried alot of different tutors, however Timeless Tuition was the one that helped our daughter improve on her weaknesses.",
  },
  {
    author: "Suresh Selvarajah",
    content:
      "Both my children were quite behind in school so we looked at Timeless Tuition to boost their grades up and now we are seeing a huge improvement, would definitely recommend!",
  },
  {
    author: "Mustafa Abbas",
    content:
      "I would definitely recommend Timeless Tuition, they have helped my children out so much, the homework is manageable and it is a great place to help for grammar school preparation.",
  },
];

const carouselRef = ref(null as any);
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="mx-auto max-w-4xl"></div>
      <div class="py-4 text-center">
        <div class="font-medium text-brand">Testimonials</div>
        <div class="flex justify-center">
          <div
            class="mb-3 border-brand px-4 text-xl font-bold uppercase lg:border-b-4"
          >
            we have tutored many students
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-3">
        <button
          class="hidden px-2 text-gray-400 hover:text-gray-600 lg:block"
          @click="carouselRef.prev()"
        >
          <IconChevronLeft />
        </button>
        <Carousel
          ref="carouselRef"
          :autoplay="7000"
          :items-to-show="1"
          :wrap-around="true"
          :breakpoints="{ 1024: { itemsToShow: 3 } }"
        >
          <Slide v-for="(testimony, idx) in testimonials" :key="idx">
            <div class="my-2 text-left">
              <div class="mb-2 flex items-center justify-center gap-2">
                <IconStarFilled
                  class="h-5 w-5 text-yellow-400"
                  v-for="i in 5"
                  :key="i"
                />
              </div>
              <div class="text-center">
                {{ testimony.content }}
              </div>
              <div class="mt-3 text-center font-medium">
                {{ testimony.author }}
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
        <button
          class="hidden px-2 text-gray-400 hover:text-gray-600 lg:block"
          @click="carouselRef.next()"
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

@media screen and (min-width: 1024px) {
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
}
</style>
