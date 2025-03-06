<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
</script>

<template>
  <div class="my-6 p-3 font-normal text-neutral-600 lg:px-64">
    <div class="py-4 text-center">
      <div class="font-medium text-brand">Exam Boards</div>
      <div class="flex justify-center">
        <div
          class="mb-3 border-brand px-4 text-xl font-bold uppercase lg:border-b-4"
        >
          tailored towards all exam boards
        </div>
      </div>
    </div>
    <Vue3Marquee
      class="flex items-center text-lg font-medium"
      :delay="0.5"
      :duration="60"
      clone
    >
      <img src="../assets/board-doe.svg" class="mx-2 h-40 w-64 lg:mx-8" />
      <img src="../assets/board-nc.jpg" class="mx-2 w-56 lg:mx-8" />
      <img src="../assets/board-gl.svg" class="mx-2 w-60 lg:mx-8" />
      <img src="../assets/board-cem.png" class="mx-2 w-56 lg:mx-8" />
      <img src="../assets/board-ocr.svg" class="mx-2 w-48 lg:mx-8" />
      <img src="../assets/board-aqa.svg" class="mx-2 w-40 lg:mx-8" />
      <img src="../assets/board-pearson.svg" class="mx-2 w-56 lg:mx-8" />
      <img src="../assets/board-welsh.svg" class="mx-2 h-36 lg:mx-8" />
    </Vue3Marquee>
  </div>
</template>
