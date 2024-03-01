<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { IconSend2, IconAt } from "@tabler/icons-vue";
import { RiWhatsappFill } from "@remixicon/vue";
import anime from "animejs";

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
    <div class="fixed bottom-10 right-8 z-50">
      <div class="relative flex items-center justify-center">
        <div class="absolute animate-ping rounded-full bg-brand/50 p-6"></div>
        <button
          class="absolute rounded-full border bg-brand p-3 shadow shadow-white"
          @click="openSocials"
        >
          <RiWhatsappFill class="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
    <Dialog :open="isOpen" @close="isOpen = false" class="relative z-40">
      <div class="fixed inset-0 bg-white/70" aria-hidden="true"></div>
      <div class="fixed bottom-20 right-3">
        <DialogPanel class="flex flex-col gap-3 p-4">
          <div class="bg-triangles rounded-lg border p-2 text-white shadow">
            <div class="mb-1 text-center">
              For any info or enquiries, contact us on:
            </div>
            <a
              href="mailto:heartwinhaveluck@gmail.com"
              class="flex items-center justify-center gap-3"
            >
              <IconAt class="h-6 w-6" />
              <div class="font-medium">heartwinhaveluck@gmail.com</div>
            </a>
          </div>
          <div
            class="flex flex-col overflow-hidden rounded-lg border bg-white shadow"
          >
            <div
              class="bg-triangles flex items-center gap-3 p-3 font-medium uppercase text-white"
            >
              <div class="rounded-full bg-white p-2">
                <RiWhatsappFill class="h-6 w-6 text-[#25D366]" />
              </div>
              Timeless Tuition
            </div>
            <div
              class="relative flex h-72 grow flex-col justify-start bg-[#d5d3d3] p-4"
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
