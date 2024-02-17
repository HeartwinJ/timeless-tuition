<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { IconMessageCircle2Filled, IconSend2 } from "@tabler/icons-vue";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
  RiTwitterFill,
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
        <DialogPanel class="flex gap-3 p-4">
          <div
            class="flex flex-col overflow-hidden rounded-lg border bg-white shadow"
          >
            <div class="bg-green-500 px-8 py-3">Chat with us</div>
            <div class="grow"></div>
            <div class="p-2">
              <div class="flex items-center justify-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  class="rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  class="flex items-center justify-center rounded-full bg-green-500 p-3 text-white"
                >
                  <IconSend2 class="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
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
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</template>
