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
  <div class="max-w-8xl mx-auto px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto max-w-2xl space-y-8 lg:max-w-none">
      <div class="py-8 text-center">
        <div class="font-medium text-brand">Terms and Conditions</div>
        <div class="mb-3 text-xl font-bold uppercase">lorem ipsum</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error
          nisi laboriosam nihil aspernatur nulla cum optio natus expedita
          debitis voluptatem, amet obcaecati et eveniet, a inventore temporibus
          maiores eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi quos voluptatum reiciendis, perspiciatis distinctio quidem
          dolorem! Atque error tenetur asperiores? Ad adipisci sapiente impedit
          temporibus corporis eaque esse vitae accusantium?
        </div>
      </div>
      <div class="prose prose-slate w-full max-w-none">
        <div v-html="terms"></div>
      </div>
    </div>
  </div>
</template>
