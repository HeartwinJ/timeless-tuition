<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";

onMounted(() => {
  anime({
    targets: "#timeline",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 3000,
  });
});
</script>
<template>
  <div id="timeline">
    <div class="py-4 text-center">
      <div class="flex justify-center mt-3">
        <div
          class="border-brand px-4 text-xl font-bold uppercase lg:border-b-4"
        >
          our step by step process
        </div>
      </div>
    </div>
    <img src="../assets/timeline.svg" alt="Timeline" />
  </div>
</template>
