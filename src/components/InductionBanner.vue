<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { IconInfoCircle, IconX } from "@tabler/icons-vue";
import { StarIcon } from "@heroicons/vue/24/solid";

const router = useRouter();

const isOpen = ref(true);

router.beforeEach(() => {
  isOpen.value = true;
});
</script>
<template>
  <div
    class="fixed bottom-0 z-50 flex w-full items-center gap-3 bg-neutral-800 p-5 text-white"
    v-if="isOpen"
  >
    <IconInfoCircle class="h-12 w-12 text-brand lg:h-8 lg:w-8" />
    <div class="flex grow flex-col items-center gap-3 lg:flex-row">
      <h2 class="grow lg:text-3xl">
        Book your <span class="font-bold">FREE</span> induction lesson for our
        current enrolment!
      </h2>
      <RouterLink
        to="/get-started"
        class="flex items-center gap-3 whitespace-nowrap rounded-3xl border-2 border-white px-8 py-2 md:px-4 md:text-xl"
      >
        Book Now <StarIcon class="h-5 w-5" />
      </RouterLink>
    </div>
    <button @click="isOpen = false"><IconX class="h-6 w-6" /></button>
  </div>
</template>
