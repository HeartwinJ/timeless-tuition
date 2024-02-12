<script setup lang="ts">
import { ref } from "vue";
import { reset } from "@formkit/vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { IconPhone, IconAt, IconBuilding } from "@tabler/icons-vue";
import FAQComponent from "@/components/FAQComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import Services from "@/services";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  year: string;
  subject: string[];
  message: string;
}

const subjects = {
  default: [
    "Maths",
    "English",
    "Science",
    "11+ (NVR, VR, MATHS, COMP)",
    "GCSE",
    "A Level",
    "AS Level",
    "SATs",
  ],
  Reception: ["Maths", "English"],
  "Year 1": ["Maths", "English"],
  "Year 2": ["Maths", "English", "Science"],
  "Year 3": ["11+ (NVR, VR, MATHS, COMP)", "Maths", "English", "Science"],
  "Year 4": ["11+ (NVR, VR, MATHS, COMP)", "Maths", "English", "Science"],
  "Year 5": ["11+ (NVR, VR, MATHS, COMP)", "Maths", "English", "Science"],
  "Year 6": ["SATs Maths", "SATs English", "Science"],
  "Year 7": ["Maths", "English", "Science"],
  "Year 8": ["Maths", "English", "Science"],
  "Year 9": ["Maths", "English", "Science"],
  "Year 10": [
    "GCSE Maths",
    "GCSE English",
    "GCSE Physics",
    "GCSE Biology",
    "GCSE Chemistry",
    "GCSE Business Studies",
    "GCSE Geography",
  ],
  "Year 11": [
    "GCSE Maths",
    "GCSE English",
    "GCSE Physics",
    "GCSE Biology",
    "GCSE Chemistry",
    "GCSE Business Studies",
    "GCSE Geography",
  ],
  "Year 12": [
    "AS Level Maths",
    "AS Level Chemistry",
    "AS Level Biology",
    "AS Level Physics",
    "AS Level Business Studies",
  ],
  "Year 13": [
    "A Level Maths",
    "A Level Chemistry",
    "A Level Biology",
    "A Level Physics",
    "A Level Business Studies",
  ],
};

const isProcessing = ref(false);
const isSuccessDialogOpen = ref(false);
const formData = ref();

async function handleSubmit(formData: FormData) {
  isProcessing.value = true;
  const payload = {
    ...formData,
    subject: formData.subject.join(", "),
  };
  await Services.saveContact(payload);
  reset("query-form");
  isProcessing.value = false;
  isSuccessDialogOpen.value = true;
}
</script>

<template>
  <div class="space-y-12">
    <div
      class="mx-auto max-w-8xl px-6 py-8 pb-0 sm:py-10 sm:pb-0 lg:px-8 lg:py-12 lg:pb-0"
    >
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="py-8 text-center">
          <div class="font-medium text-brand">Get Started</div>
          <div class="mb-3 text-xl font-bold uppercase">reach out to us</div>
          <div>
            Begin your child's educational journey with our complimentary
            induction session. Our free induction is designed to assess your
            child's current level and identify their unique learning needs.
            Through a tailored assessment, we'll determine the best path forward
            to support their academic growth and success. At Timeless Tuition,
            we believe in providing personalised guidance from the very
            beginning. Our experienced tutors will work closely with you and
            your child to understand their strengths, areas for improvement, and
            educational goals. Ready to get started?
          </div>
          <div class="mt-3 text-xl font-bold">
            Simply fill out the form below, and we'll be in touch with you
            regarding the next steps and further information.
          </div>
        </div>
        <div
          class="flex flex-col justify-around gap-8 border-2 border-brand p-5 lg:flex-row"
        >
          <div class="order-last basis-1/2 lg:order-first">
            <FormKit
              id="query-form"
              type="form"
              :actions="false"
              @submit="handleSubmit"
              v-model="formData"
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
              <FormKit
                type="email"
                name="email"
                label="Email Address"
                placeholder="Email Address"
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
                type="select"
                name="year"
                label="Year"
                placeholder="Select Year Group"
                validation="required"
                :disabled="isProcessing"
                :options="[
                  'Reception',
                  'Year 1',
                  'Year 2',
                  'Year 3',
                  'Year 4',
                  'Year 5',
                  'Year 6',
                  'Year 7',
                  'Year 8',
                  'Year 9',
                  'Year 10',
                  'Year 11',
                  'Year 12',
                  'Year 13',
                ]"
              />
              <FormKit
                type="checkbox"
                name="subject"
                label="Subject"
                placeholder="Select Subject"
                validation="required"
                :disabled="isProcessing"
                :options="
                  subjects[
                    (formData.year || 'default') as keyof typeof subjects
                  ]
                "
              />
              <FormKit
                type="textarea"
                name="message"
                label="Message"
                placeholder="Eg. I would like to book a lesson"
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
          <div class="aspect-square basis-1/2 border shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020.6184451657446!2d-0.5639206705236455!3d51.42744027873975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876775568aa4445%3A0x59fb28325b2eaea5!2sThe%20Packhorse!5e0!3m2!1sen!2suk!4v1702923350012!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="py-8 text-center">
          <div class="text-xl font-bold uppercase">contact us</div>
          <div>
            We're thrilled to hear from you and discuss how we can support your
            child's educational journey. Whether you have questions about our
            tutoring services, want to schedule a consultation, or simply wish
            to learn more about Timeless Tuition, we're here to help. Feel free
            to reach out to us using the contact form above, and our friendly
            team will get back to you promptly. Alternatively, you can connect
            with us via phone, text or email using the contact details provided.
          </div>
          <div class="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
            <div class="flex items-center justify-center gap-3">
              <IconPhone />
              <div>+44 123123123</div>
            </div>
            <div class="flex items-center justify-center gap-3">
              <IconAt />
              <div>timelesstuition@test.com</div>
            </div>
            <div class="flex items-center justify-center gap-3">
              <IconBuilding />
              <div>23 Fictional Road, Place, TW00 0AA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FAQComponent />
    <Dialog
      :open="isSuccessDialogOpen"
      @close="isSuccessDialogOpen = false"
      class="relative z-50"
    >
      <div class="fixed inset-0 bg-black/30" aria-hidden="true"></div>
      <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel class="w-full max-w-sm rounded bg-white p-4">
          <DialogTitle class="mb-3 text-2xl font-medium">
            Request recorded
          </DialogTitle>
          <DialogDescription>
            We have recorded your request and will get back to you shortly.
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
