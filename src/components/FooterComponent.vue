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
  <!-- <div
    class="bg-triangles flex aspect-square h-96 items-center justify-center gap-1 p-3"
  >
    <img
      src="../assets/logo_pencil.svg"
      alt="Timeless Tutors Logo"
      class="h-28"
    />
    <div class="border-y-2 border-white py-4">
      <img
        src="../assets/logo_text.svg"
        alt="Timeless Tutors Logo"
        class="h-8"
      />
    </div>
  </div> -->
  <div
    class="sm:px-18 flex w-full flex-col items-center justify-center gap-3 bg-gray-200 px-8 py-5 lg:px-48"
  >
    <div class="flex w-full items-center justify-end">
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
    <div class="flex w-full flex-col justify-between gap-3 sm:flex-row">
      <div class="text-gray-700">
        Copyright &copy; {{ new Date().getFullYear() }} Timeless Tuition Ltd.
        All rights reserved.
      </div>
      <div class="flex gap-3 text-center text-gray-700 sm:text-left">
        <RouterLink to="/legal" class="hover:text-gray-900">
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
