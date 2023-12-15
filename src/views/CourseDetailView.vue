<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const courseId = route.params.courseId;
</script>

<template>
  <div>Course Detail for {{ courseId }}</div>
</template>
