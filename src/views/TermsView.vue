<script setup lang="ts">
import DOMPurify from "dompurify";
import { marked } from "marked";
import { ref, onMounted } from "vue";

const terms = ref("");

onMounted(async () => {
  const data = await (await fetch("/terms.md")).text();
  terms.value = DOMPurify.sanitize(await marked(data));
});
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto max-w-2xl space-y-8 lg:max-w-none">
      <div class="flex justify-center">
        <div
          class="mb-3 border-b-4 border-brand px-4 text-center text-lg font-bold uppercase"
        >
          Terms and Conditions
        </div>
      </div>
      <div class="prose prose-slate w-full max-w-none">
        <div v-html="terms"></div>
      </div>
    </div>
  </div>
</template>
