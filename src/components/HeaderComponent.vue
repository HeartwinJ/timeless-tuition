<script setup lang="ts">
import { ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
import { IconMenu2, IconX } from "@tabler/icons-vue";
import {
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  NewspaperIcon,
  UserIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/24/solid";

const navLinks = [
  { title: "Home", icon: HomeIcon, path: "/" },
  { title: "Courses", icon: BookOpenIcon, path: "/courses" },
  { title: "Careers", icon: BriefcaseIcon, path: "/careers" },
  { title: "News", icon: NewspaperIcon, path: "/news" },
  { title: "About Us", icon: UserIcon, path: "/about" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <div class="bg-triangles sticky top-0 z-30 w-full px-5 py-2 shadow-lg">
    <div class="flex items-center">
      <RouterLink to="/" class="z-10">
        <img
          src="../assets/logo_pencil.svg"
          alt="Timeless Tutors Logo"
          class="h-28"
        />
      </RouterLink>
      <div
        class="ml-1 flex grow items-center justify-between gap-24 border-b-2 border-t-2 border-white p-4 pl-0"
      >
        <RouterLink to="/" class="z-10">
          <img
            src="../assets/logo_text.svg"
            alt="Timeless Tutors Logo"
            class="h-8"
          />
        </RouterLink>
        <div class="flex justify-end py-2 lg:hidden">
          <IconMenu2
            class="h-6 w-6 cursor-pointer text-white"
            @click="mobileMenuOpen = true"
            v-if="!mobileMenuOpen"
          />
          <IconX
            class="h-6 w-6 cursor-pointer text-white"
            @click="mobileMenuOpen = false"
            v-if="mobileMenuOpen"
          />
        </div>
        <div class="hidden grow items-center justify-between gap-3 lg:flex">
          <div
            v-for="(navLink, idx) in navLinks"
            :key="idx"
            class="flex items-center"
          >
            <RouterLink
              :to="navLink.path"
              class="flex items-center gap-2 whitespace-nowrap text-lg font-medium uppercase text-white"
            >
              {{ navLink.title }}
              <component :is="navLink.icon" class="h-5 w-5" />
            </RouterLink>
          </div>
          <RouterLink
            to="/get-started"
            class="flex items-center gap-2 rounded-md border bg-white px-4 py-2 text-lg font-medium uppercase text-brand shadow"
          >
            <PaperAirplaneIcon class="h-5 w-5" />
            <span class="whitespace-nowrap"> Get Started </span>
          </RouterLink>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:hidden"
      v-if="mobileMenuOpen"
      v-on-click-outside="() => (mobileMenuOpen = false)"
      @click="mobileMenuOpen = false"
    >
      <div class="z-10 w-full p-4 text-white">
        <div class="flow-root">
          <div class="space-y-2">
            <RouterLink
              v-for="(navLink, idx) in navLinks"
              :key="idx"
              :to="navLink.path"
              class="flex w-full items-center gap-2 p-1"
            >
              <component :is="navLink.icon" class="h-5 w-5" />
              <div class="grow text-center uppercase">
                {{ navLink.title }}
              </div>
            </RouterLink>
          </div>
          <div class="pt-3">
            <RouterLink
              to="/get-started"
              class="flex items-center gap-2 rounded-md border p-2"
            >
              <PaperAirplaneIcon class="h-5 w-5" />
              <div class="grow text-center uppercase">Get Started</div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
