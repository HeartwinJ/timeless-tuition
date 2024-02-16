<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { IconMessageCircle2Filled } from "@tabler/icons-vue";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
  RiTwitterFill,
  RiWhatsappFill,
} from "@remixicon/vue";
import anime from "animejs";

const socials = [
  {
    icon: RiFacebookFill,
    path: "https://facebook.com",
    title: "Facebook",
    color: "text-[#0165E1]",
  },
  {
    icon: RiInstagramFill,
    path: "https://instagram.com",
    title: "Instagram",
    color: "text-[#E1306C]",
  },
  {
    icon: RiWhatsappFill,
    path: "https://whatsapp.com",
    title: "Whatsapp",
    color: "text-[#28D146]",
  },
  {
    icon: RiTwitterFill,
    path: "https://twitter.com",
    title: "Twitter",
    color: "text-[#1DA1F2]",
  },
  {
    icon: RiTiktokFill,
    path: "https://tiktok.com",
    title: "TikTok",
    color: "text-[#010101]",
  },
  {
    icon: RiLinkedinFill,
    path: "https://linkedin.com",
    title: "LinkedIn",
    color: "text-[#0077B5]",
  },
];

const isOpen = ref(false);

function openSocials() {
  isOpen.value = true;
  anime({
    targets: ".socials",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(500, { start: 1000 }),
  });
}
</script>
<template>
  <div>
    <button
      class="fixed bottom-3 right-3 z-50 rounded-full bg-brand p-3"
      @click="openSocials"
    >
      <IconMessageCircle2Filled class="h-8 w-8 text-white" />
    </button>
    <Dialog :open="isOpen" @close="isOpen = false" class="relative z-40">
      <div class="fixed inset-0 bg-white/70" aria-hidden="true"></div>
      <div class="fixed bottom-20 right-3">
        <DialogPanel class="flex flex-col gap-3 p-4">
          <button
            class="socials mt-5 flex w-full items-center justify-end gap-5 rounded-lg"
            :class="social.color"
            v-for="(social, idx) in socials"
            :key="idx"
            @click="isOpen = false"
          >
            <div>{{ social.title }}</div>
            <component :is="social.icon" class="h-8 w-8" />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</template>
