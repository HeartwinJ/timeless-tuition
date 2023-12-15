<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="bg-gray-100">
    <RouterView />
  </div>
  <FooterComponent />
</template>
