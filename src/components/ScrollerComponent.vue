<script setup lang="ts">
import { BookOpenIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="bg-triangles p-3 font-bold text-white">
    <marquee class="text-xl uppercase">
      <div class="flex gap-32">
        <div class="flex items-center" v-for="i in 4" :key="i">
          <span>located in watford</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>in-person tutoring</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>online tutoring</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>maths</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>english</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>science</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>11+</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>SATs</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>GCSE</span>
          <BookOpenIcon class="mx-3 h-6 w-6" />
          <span>A Level</span>
        </div>
      </div>
    </marquee>
  </div>
</template>

<style scoped>
.bg-triangles {
  background-image: url("../assets/triangles.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
