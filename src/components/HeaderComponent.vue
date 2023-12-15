<script setup lang="ts">
import { ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
import {
  IconSend2,
  IconHome,
  IconBook,
  IconBriefcase,
  IconNews,
  IconUsersGroup,
  IconMenu2,
} from "@tabler/icons-vue";

const navLinks = [
  { title: "Home", icon: IconHome, path: "/" },
  { title: "Courses", icon: IconBook, path: "/courses" },
  { title: "Careers", icon: IconBriefcase, path: "/careers" },
  { title: "News", icon: IconNews, path: "/news" },
  { title: "About Us", icon: IconUsersGroup, path: "/about" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <div class="bg-triangles relative flex w-full items-center px-5 py-2">
    <RouterLink to="/" class="z-10">
      <img src="../assets/logo.svg" alt="Timeless Tutors Logo" class="h-24" />
    </RouterLink>
    <div
      class="absolute left-12 right-2 ml-1 border-b-2 border-t-2 border-white p-2"
    >
      <div class="flex justify-end py-2 md:hidden">
        <IconMenu2
          class="h-6 w-6 cursor-pointer text-white"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </div>
      <div class="ml-64 hidden items-center justify-between gap-3 md:flex">
        <div v-for="(navLink, idx) in navLinks" :key="idx">
          <RouterLink
            :to="navLink.path"
            class="flex items-center gap-2 font-medium uppercase text-white"
          >
            <component :is="navLink.icon" class="h-5 w-5" />
            {{ navLink.title }}
          </RouterLink>
        </div>
        <RouterLink
          to="/get-started"
          class="flex items-center gap-2 rounded-md border p-2 text-white"
        >
          <IconSend2 class="h-5 w-5" />
          <span> Get Started </span>
        </RouterLink>
      </div>
    </div>
  </div>
  <div
    class="md:hidden"
    v-if="mobileMenuOpen"
    v-on-click-outside="() => (mobileMenuOpen = false)"
  >
    <div
      class="z-10 w-full bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flow-root">
        <div class="divide-y divide-gray-500/10">
          <div class="space-y-2 divide-y">
            <RouterLink
              v-for="(navLink, idx) in navLinks"
              :key="idx"
              :to="navLink.path"
              class="flex items-center gap-2 p-1 text-gray-700"
            >
              <component :is="navLink.icon" class="h-5 w-5" />
              {{ navLink.title }}
            </RouterLink>
          </div>
          <div class="pt-3">
            <RouterLink
              to="/get-started"
              class="flex items-center gap-2 rounded-md border p-2 text-gray-700"
            >
              <IconSend2 class="h-5 w-5" />
              <div class="grow text-center">Get Started</div>
            </RouterLink>
          </div>
        </div>
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
