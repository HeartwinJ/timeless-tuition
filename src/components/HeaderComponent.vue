<script setup lang="ts">
import {
  IconSend2,
  IconHome,
  IconBook,
  IconBriefcase,
  IconNews,
  IconUsersGroup,
} from "@tabler/icons-vue";

const navLinks = [
  { title: "Home", icon: IconHome, path: "/" },
  { title: "Courses", icon: IconBook, path: "/courses" },
  { title: "Careers", icon: IconBriefcase, path: "/careers" },
  { title: "News", icon: IconNews, path: "/news" },
  { title: "About Us", icon: IconUsersGroup, path: "/about" },
];
</script>

<template>
  <div class="bg-triangles relative flex w-full items-center px-5 py-2">
    <img src="../assets/logo.svg" alt="Timeless Tutors Logo" class="h-24" />
    <div class="absolute ml-8 w-[95%] border-b-2 border-t-2 border-white p-2">
      <div class="ml-64 flex items-center justify-between gap-3">
        <div v-for="(navLink, idx) in navLinks" :key="idx">
          <RouterLink :to="navLink.path" class="uppercase text-white font-medium flex gap-2 items-center">
            <component :is="navLink.icon" class="h-5 w-5" />
            {{ navLink.title }}
          </RouterLink>
        </div>
        <div class="flex items-center gap-2 rounded-md border p-2 text-white">
          <IconSend2 class="h-5 w-5" />
          <span> Get Started </span>
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
