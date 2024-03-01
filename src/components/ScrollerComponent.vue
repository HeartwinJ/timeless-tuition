<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { BookOpenIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="bg-triangles p-3 font-normal text-white">
    <Vue3Marquee class="text-xl uppercase" :delay="0.5">
      <div class="mx-32 flex items-center">
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
    </Vue3Marquee>
  </div>
</template>
