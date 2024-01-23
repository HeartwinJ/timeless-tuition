<script setup lang="ts">
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterFill,
  RiTiktokFill,
  RiWhatsappFill,
} from "@remixicon/vue";

const socials = [
  { icon: RiFacebookFill, path: "https://facebook.com", title: "Facebook" },
  { icon: RiInstagramFill, path: "https://instagram.com", title: "Instagram" },
  { icon: RiWhatsappFill, path: "https://whatsapp.com", title: "Whatsapp" },
  { icon: RiTwitterFill, path: "https://twitter.com", title: "Twitter" },
  { icon: RiTiktokFill, path: "https://tiktok.com", title: "TikTok" },
  { icon: RiLinkedinFill, path: "https://linkedin.com", title: "LinkedIn" },
];
</script>

<template>
  <div
    class="sm:px-18 flex w-full flex-col items-center justify-center gap-3 bg-gray-200 px-8 py-5 lg:px-48"
  >
    <div class="flex w-full items-center justify-end">
      <div class="flex items-center gap-3">
        <div v-for="(social, idx) in socials" :key="idx">
          <a
            :href="social.path"
            target="_blank"
            class="group relative flex justify-center text-2xl text-gray-500 hover:text-gray-700"
          >
            <component :is="social.icon" class="h-6 w-6" />
            <div
              class="absolute -top-7 hidden rounded bg-white px-2 py-0.5 text-sm text-gray-500 shadow group-hover:block"
            >
              {{ social.title }}
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col justify-between gap-3 sm:flex-row">
      <div class="text-gray-700">
        Copyright &copy; {{ new Date().getFullYear() }} Timeless Tuition Ltd.
        All rights reserved.
      </div>
      <div class="flex gap-3 text-center text-gray-700 sm:text-left">
        <RouterLink to="/privacy" class="hover:text-gray-900">
          Privacy Policy
        </RouterLink>
        &vert;
        <RouterLink to="/terms" class="hover:text-gray-900">
          Terms & Conditions
        </RouterLink>
        &vert;
        <RouterLink to="/get-started" class="hover:text-gray-900">
          Contact Us
        </RouterLink>
      </div>
    </div>
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
