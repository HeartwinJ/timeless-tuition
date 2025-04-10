<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { reset } from "@formkit/vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import {
  IconX,
  IconCalendar,
  IconHourglass,
  IconMapPin,
  IconCoinPound,
  IconCalendarOff,
  IconCircleArrowRight,
} from "@tabler/icons-vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import Services from "@/services";
import type Career from "@/types/Career";

const route = useRoute();
const openingId = route.params.openingId;

const isLoading = ref(true);
const isApplyDialogOpen = ref(false);
const isSuccessDialogOpen = ref(false);
const isProcessing = ref(false);
const openingData = ref<Career>({
  id: "",
  department: "",
  role: "",
  summary: "",
  description: "",
  experience: "",
  salary: "",
  employmentType: "",
  location: "",
  closingDate: "",
});

const formData = reactive({
  opening_id: "",
  cv_url: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  referrer: "",
  gcse_math: "",
  gcse_science: "",
  gcse_english: "",
  message: "",
});

onMounted(async () => {
  const data = await (await fetch("/data/careers.json")).json();
  openingData.value = data.find((career: Career) => {
    return career.id === openingId;
  });
  openingData.value.description = DOMPurify.sanitize(
    await marked(openingData.value.description),
  );
  isLoading.value = false;
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
    referrer: data.referrer.join(", "),
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
      <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
        <div v-if="isLoading">Loading...</div>
        <div class="flex flex-col gap-8 lg:flex-row" v-else>
          <div class="lg:grow">
            <div class="mb-5 text-2xl font-medium text-brand">
              {{ openingData.role }}
            </div>
            <div class="prose prose-slate lg:prose-lg">
              <div v-html="openingData.description"></div>
            </div>
          </div>
          <div>
            <div class="sticky top-36 rounded-lg border px-4 py-2 shadow">
              <div class="mb-2 text-sm text-gray-700">
                <span
                  class="rounded-full border bg-white px-2 py-1"
                  v-if="openingData.department"
                >
                  {{ openingData.department }}
                </span>
              </div>
              <div
                class="flex flex-col gap-2 p-2 text-gray-700"
                v-if="openingData.experience"
              >
                <div
                  class="flex items-center gap-2 whitespace-nowrap font-bold"
                >
                  <IconCalendar class="h-5 w-5" /> Experience
                </div>
                <div class="ml-8">{{ openingData.experience }}</div>
              </div>
              <div class="flex flex-col gap-2 p-2 text-gray-700">
                <div
                  class="flex items-center gap-2 whitespace-nowrap font-bold"
                >
                  <IconHourglass class="h-5 w-5" /> Employment Type
                </div>
                <div class="ml-8">{{ openingData.employmentType }}</div>
              </div>
              <div class="flex flex-col gap-2 p-2 text-gray-700">
                <div
                  class="flex items-center gap-2 whitespace-nowrap font-bold"
                >
                  <IconMapPin class="h-5 w-5" /> Location
                </div>
                <div class="ml-8">{{ openingData.location }}</div>
              </div>
              <div class="flex flex-col gap-2 p-2 text-gray-700">
                <div
                  class="flex items-center gap-2 whitespace-nowrap font-bold"
                >
                  <IconCoinPound class="h-5 w-5" /> Salary
                </div>
                <div class="ml-8">{{ openingData.salary }}</div>
              </div>
              <div
                class="flex flex-col gap-2 p-2 text-gray-700"
                v-if="openingData.closingDate"
              >
                <div
                  class="flex items-center gap-2 whitespace-nowrap font-bold"
                >
                  <IconCalendarOff class="h-5 w-5" /> Closing Date
                </div>
                <div class="ml-8">{{ openingData.closingDate }}</div>
              </div>
              <button
                class="mt-5 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand px-12 py-2 text-white"
                @click="applyTo(openingData.id)"
              >
                Apply <IconCircleArrowRight class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      :open="isApplyDialogOpen"
      @close="isApplyDialogOpen = false"
      class="fixed inset-0 z-50"
    >
      <div class="absolute h-full w-full bg-black/30" aria-hidden="true"></div>
      <div
        class="absolute z-10 flex h-full w-full items-center justify-center p-4"
      >
        <DialogPanel
          class="max-h-full w-full max-w-6xl overflow-y-auto rounded bg-white p-8"
        >
          <div class="mb-8 flex items-center justify-between">
            <DialogTitle
              class="mb-3 border-b-4 border-brand text-2xl font-medium uppercase"
            >
              Apply for position
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
                    label="First Name"
                    placeholder="First Name"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
                <div class="grow">
                  <FormKit
                    type="text"
                    name="lastname"
                    label="Last Name"
                    placeholder="Last Name"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
              </div>
              <div class="flex w-full flex-col lg:flex-row lg:gap-3">
                <div class="grow">
                  <FormKit
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="Email Address"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
                <div class="grow">
                  <FormKit
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
              </div>
              <FormKit
                type="checkbox"
                name="referrer"
                label="How did you hear about us?"
                :options="['Friends', 'Social Media', 'Leaflet', 'Other']"
                validation="required"
                :disabled="isProcessing"
              />
              <div class="flex w-full flex-col lg:flex-row lg:gap-3">
                <div class="grow">
                  <FormKit
                    type="text"
                    name="gcse_math"
                    label="GCSE Math Grade"
                    placeholder="Enter your GCSE Math grade"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
                <div class="grow">
                  <FormKit
                    type="text"
                    name="gcse_science"
                    label="GCSE Science Grade"
                    placeholder="Enter your GCSE Science grade"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
                <div class="grow">
                  <FormKit
                    type="text"
                    name="gcse_english"
                    label="GCSE English Grade"
                    placeholder="Enter your GCSE English grade"
                    validation="required"
                    :disabled="isProcessing"
                  />
                </div>
              </div>
              <FormKit
                type="file"
                name="cv_url"
                label="CV"
                help="Upload your CV in PDF format."
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
