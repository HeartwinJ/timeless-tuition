<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { reset } from "@formkit/vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import {
  IconX,
  IconHourglass,
  IconCalendar,
  IconMapPin,
  IconCircleArrowRight,
} from "@tabler/icons-vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import Services from "@/services";
import type Career from "@/types/Career";

const isApplyDialogOpen = ref(false);
const isSuccessDialogOpen = ref(false);
const isProcessing = ref(false);
const isLoading = ref(true);
const openings = ref<Career[]>([]);

const formData = reactive({
  opening_id: "",
  cv_url: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
});

onMounted(() => {
  fetch("/data/careers.json")
    .then((res) => res.json())
    .then((data) => {
      openings.value.push(...data);
      isLoading.value = false;
    });
});

function applyTo(openingId: string) {
  formData.opening_id = openingId;
  isApplyDialogOpen.value = true;
}

async function handleSubmit(data: any) {
  isProcessing.value = true;
  const cvUrl = await Services.uploadCV(data.cv_url[0].file);
  await Services.saveApplication({
    ...data,
    cv_url: cvUrl,
  });
  reset("application-form");
  isApplyDialogOpen.value = false;
  isProcessing.value = false;
  isSuccessDialogOpen.value = true;
}
</script>

<template>
  <div>
    <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="py-8 text-center">
          <div class="font-medium text-brand">Careers</div>
          <div class="mb-3 text-xl font-bold uppercase">work with us</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ut
            consequuntur neque eum, porro enim labore quis aspernatur impedit ad
            eos cupiditate non quibusdam numquam alias necessitatibus illo
            corporis obcaecati. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ducimus, reprehenderit ullam praesentium
            accusantium, assumenda sequi possimus soluta iste sit ipsa
            laudantium corrupti. Voluptas harum sit saepe. Modi provident
            pariatur explicabo.
          </div>
        </div>
        <div v-if="isLoading">Loading...</div>
        <div
          v-for="(opening, idx) in openings"
          :key="idx"
          class="m-3 flex flex-col gap-3 rounded-lg border bg-white p-3 shadow md:flex-row"
          v-else
        >
          <div>
            <div class="mb-2 text-sm text-gray-700">
              <span class="rounded-full border bg-white px-2 py-1">
                {{ opening.department }}
              </span>
            </div>
            <div class="text-lg font-medium text-brand">
              {{ opening.role }}
            </div>
            <div class="text-gray-700">{{ opening.description }}</div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col items-center justify-around">
              <div
                class="flex w-full items-center gap-2 whitespace-nowrap p-2 text-gray-700"
              >
                <IconCalendar class="h-5 w-5" /> {{ opening.experience }}
              </div>
              <div
                class="flex w-full items-center gap-2 whitespace-nowrap p-2 text-gray-700"
              >
                <IconHourglass class="h-5 w-5" /> {{ opening.employmentType }}
              </div>
              <div
                class="flex w-full items-center gap-2 whitespace-nowrap p-2 text-gray-700"
              >
                <IconMapPin class="h-5 w-5" /> {{ opening.location }}
              </div>
            </div>
            <button
              class="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-12 py-2 text-white"
              @click="applyTo(opening.id)"
            >
              Apply <IconCircleArrowRight class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      :open="isApplyDialogOpen"
      @close="isApplyDialogOpen = false"
      class="relative z-50"
    >
      <div class="fixed inset-0 bg-black/30" aria-hidden="true"></div>
      <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel class="w-full max-w-lg rounded bg-white p-4">
          <div class="flex items-center justify-between">
            <DialogTitle class="mb-3 text-2xl font-medium">
              Apply for opening
            </DialogTitle>
            <button
              class="rounded-lg border border-transparent p-2 hover:border-red-200 hover:bg-red-100 hover:text-red-600"
              @click="isApplyDialogOpen = false"
            >
              <IconX />
            </button>
          </div>
          <div>
            <FormKit
              id="application-form"
              type="form"
              :actions="false"
              v-model="formData"
              @submit="handleSubmit"
            >
              <div class="flex w-full flex-col lg:flex-row lg:gap-3">
                <div class="grow">
                  <FormKit
                    type="text"
                    name="firstname"
                    label="Firstname"
                    placeholder="Firstname"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
                <div class="grow">
                  <FormKit
                    type="text"
                    name="lastname"
                    label="Lastname"
                    placeholder="Lastname"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
              </div>
              <FormKit
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                validation="required"
                :disabled="isProcessing"
              />
              <FormKit
                type="tel"
                name="phone"
                label="Phone Number"
                placeholder="Phone Number"
                validation="required"
                :disabled="isProcessing"
              />
              <FormKit
                type="file"
                name="cv_url"
                label="CV"
                accept=".pdf"
                validation="required"
                :disabled="isProcessing"
              />
              <FormKit
                type="textarea"
                name="message"
                label="Message"
                placeholder="Eg. I would like to apply for this position because..."
                :disabled="isProcessing"
              />
              <div>
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-brand px-4 py-2 uppercase text-white"
                  :disabled="isProcessing"
                >
                  <div v-if="isProcessing">
                    <SpinnerComponent class="h-6 w-6" />
                  </div>
                  <div v-else>Submit</div>
                </button>
              </div>
            </FormKit>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
    <Dialog
      :open="isSuccessDialogOpen"
      @close="isSuccessDialogOpen = false"
      class="relative z-50"
    >
      <div class="fixed inset-0 bg-black/30" aria-hidden="true"></div>
      <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel class="w-full max-w-sm rounded bg-white p-4">
          <DialogTitle class="mb-3 text-2xl font-medium">
            Application received
          </DialogTitle>
          <DialogDescription>
            We have received your application and will get back to you shortly.
          </DialogDescription>
          <button
            @click="isSuccessDialogOpen = false"
            class="mt-5 w-full rounded-lg bg-brand px-4 py-2 uppercase text-white"
          >
            Ok
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</template>
