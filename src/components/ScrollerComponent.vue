<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import { BookOpenIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="bg-triangles p-3 font-normal text-white">
    <Vue3Marquee class="text-lg uppercase font-medium" :delay="0.5" :duration="30" clone>
      <div class="flex items-center">
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
        <BookOpenIcon class="mx-3 h-6 w-6" />
      </div>
    </Vue3Marquee>
  </div>
</template>
