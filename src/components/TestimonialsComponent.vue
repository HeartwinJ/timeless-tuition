<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-vue";

import "vue3-carousel/dist/carousel.css";

const testimonials = [
  {
    author: "Heartwin",
    content:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.",
  },
  {
    author: "Heartwin",
    content:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.",
  },
  {
    author: "Heartwin",
    content:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.",
  },
  {
    author: "Heartwin",
    content:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.",
  },
  {
    author: "Heartwin",
    content:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.",
  },
  {
    author: "Heartwin",
    content:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.",
  },
];

const carouselRef = ref(null as any);
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="mx-auto max-w-4xl"></div>
      <div class="py-8 text-center">
        <div class="font-medium text-brand">Testimonials</div>
        <div class="text-xl font-bold uppercase">
          we have tutored many students
        </div>
      </div>
      <div class="flex justify-center gap-3">
        <button
          class="px-2 text-gray-400 hover:text-gray-600"
          @click="carouselRef.prev()"
        >
          <IconChevronLeft />
        </button>
        <Carousel
          ref="carouselRef"
          :autoplay="5000"
          :items-to-show="1"
          :wrap-around="true"
          :breakpoints="{ 1024: { itemsToShow: 3 } }"
        >
          <Slide v-for="(testimony, idx) in testimonials" :key="idx">
            <div class="my-2 text-left">
              <div>
                {{ testimony.content }}
              </div>
              <div class="mt-3 font-medium">
                {{ testimony.author }}
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
        <button
          class="px-2 text-gray-400 hover:text-gray-600"
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
