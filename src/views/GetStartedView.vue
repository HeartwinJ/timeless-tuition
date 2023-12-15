<script setup lang="ts">
import FAQComponent from "@/components/FAQComponent.vue";
import { reactive } from "vue";

const formData = reactive({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
});
</script>

<template>
  <div
    class="mx-auto max-w-7xl px-6 py-16 pb-0 sm:py-20 sm:pb-0 lg:px-8 lg:py-24 lg:pb-0"
  >
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="flex items-center justify-center">
        <form>
          <div class="flex gap-3">
            <div>
              <label for="firstname" class="mb-1 block text-sm"
                >Firstname</label
              >
              <input
                type="text"
                id="firstname"
                placeholder="Firstname"
                class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
                v-model="formData.firstname"
              />
            </div>
            <div>
              <label for="lastname" class="mb-1 block text-sm">Lastname</label>
              <input
                type="text"
                id="lastname"
                placeholder="Lastname"
                class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
                v-model="formData.lastname"
              />
            </div>
          </div>
          <div>
            <label for="email" class="mb-1 block text-sm">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
              v-model="formData.email"
            />
          </div>
          <div>
            <label for="phone" class="mb-1 block text-sm">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
              v-model="formData.phone"
            />
          </div>
          <div>
            <label for="message" class="mb-1 block text-sm">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
              v-model="formData.message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="w-full rounded-lg bg-pink-600 px-4 py-2 uppercase text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <FAQComponent />
    </div>
  </div>
</template>
