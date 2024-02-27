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
const openTime = ref("");
const message = ref("");

function openSocials() {
  isOpen.value = true;
  openTime.value = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  anime({
    targets: ".socials",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(500, { start: 1000 }),
  });
}

function handleSendMessage() {
  window.open(
    `https://wa.me/919791154922?text=${encodeURIComponent(message.value)}`,
    "_blank",
  );
  message.value = "";
}
</script>
<template>
  <div>
    <button
      class="fixed bottom-3 right-3 z-50 rounded-full border bg-brand p-3 shadow shadow-white"
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
            <div
              class="flex items-center gap-3 bg-brand p-3 font-medium text-white"
            >
              <div class="rounded-full bg-white p-5"></div>
              Timeless Tuition
            </div>
            <div
              class="relative flex h-72 grow flex-col justify-start bg-[#e5ddd5] p-4"
            >
              <div
                class="speech-bubble-left relative my-1 mr-auto flex max-w-xs flex-col rounded-lg rounded-tl-none bg-brand p-2 text-sm text-white"
              >
                <p>
                  Hello! Welcome to Timeless Tuition. Feel free drop in any
                  questions that you may have and we will reach out to you as
                  soon as possible.
                </p>
                <p class="text-right text-xs leading-none text-gray-50">
                  {{ openTime }}
                </p>
              </div>
            </div>
            <div class="border-t bg-gray-100 p-2">
              <div class="flex items-center justify-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  class="grow border-none bg-transparent outline-none"
                  v-model="message"
                  @keyup.enter="handleSendMessage"
                />
                <button
                  class="flex items-center justify-center rounded-full bg-brand p-3 text-white"
                  @click="handleSendMessage"
                >
                  <IconSend2 class="h-4 w-4" />
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
<style scoped>
.speech-bubble-left::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid #f94564;
  border-top: 5px solid #f94564;
  border-bottom: 5px solid transparent;
  left: -10px;
  top: 0;
}
</style>
