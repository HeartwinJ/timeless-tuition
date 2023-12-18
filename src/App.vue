<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="font-inter bg-white">
    <RouterView />
  </div>
  <FooterComponent />
</template>
