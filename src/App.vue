<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ChatComponent from "./components/ChatComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="bg-white font-inter">
    <RouterView />
  </div>
  <FooterComponent />
  <ChatComponent />
</template>
