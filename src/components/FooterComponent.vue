<script setup lang="ts">
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktokFilled,
  IconBrandTwitterFilled,
  IconBrandWhatsapp,
} from "@tabler/icons-vue";

const socials = [
  { icon: IconBrandFacebookFilled, path: "https://facebook.com" },
  { icon: IconBrandLinkedin, path: "https://linkedin.com" },
  { icon: IconBrandInstagram, path: "https://instagram.com" },
  { icon: IconBrandTwitterFilled, path: "https://twitter.com" },
  { icon: IconBrandTiktokFilled, path: "https://tiktok.com" },
  { icon: IconBrandWhatsapp, path: "https://whatsapp.com" },
];
</script>

<template>
  <div
    class="sm:px-18 flex w-full flex-col items-center justify-between gap-3 bg-gray-200 px-8 py-5 sm:flex-row lg:px-48"
  >
    <div class="text-gray-500">
      &copy; {{ new Date().getFullYear() }} Timeless Tuition. All rights
      reserved.
    </div>
    <div class="flex items-center gap-3">
      <div v-for="(social, idx) in socials" :key="idx">
        <a
          :href="social.path"
          target="_blank"
          class="text-2xl text-gray-500 hover:text-gray-700"
        >
          <component :is="social.icon" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</template>
