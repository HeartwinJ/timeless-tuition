<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import FAQComponent from "@/components/FAQComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import Services from "@/services";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  year: string;
  subject: string;
  message: string;
}

const defaultFormData: FormData = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  year: "",
  subject: "",
  message: "",
};

const isProcessing = ref(false);
const isSuccessDialogOpen = ref(false);

const formData: FormData = reactive({
  ...defaultFormData,
});

function resetForm() {
  Object.keys(formData).forEach((key) => {
    formData[key as keyof FormData] = defaultFormData[key as keyof FormData];
  });
}

async function handleSubmit(e: Event) {
  e.preventDefault();
  console.log(formData);
  isProcessing.value = true;
  await Services.saveContact(formData);
  resetForm();
  isProcessing.value = false;
  isSuccessDialogOpen.value = true;
}
</script>

<template>
  <div class="space-y-12">
    <div
      class="mx-auto max-w-7xl px-6 py-16 pb-0 sm:py-20 sm:pb-0 lg:px-8 lg:py-24 lg:pb-0"
    >
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div class="py-8 text-center">
          <div class="font-medium text-pink-600">Get Started</div>
          <div class="text-xl font-bold uppercase">reach out to us</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor
            hic consectetur ullam, vero architecto voluptatibus alias ratione
            exercitationem aliquam placeat unde. Velit repudiandae repellendus
            quod enim obcaecati doloremque officia! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quidem repellendus magni, iusto
            blanditiis cumque maiores nobis. Suscipit facilis minima
            praesentium, alias aperiam ipsam porro, odio iure, exercitationem
            culpa dolorem temporibus.
          </div>
        </div>
        <div class="flex justify-around gap-8 border-2 border-pink-600 p-5">
          <div class="basis-1/2">
            <form @submit="handleSubmit">
              <div class="flex w-full gap-3">
                <div class="grow">
                  <!-- <label for="firstname" class="mb-1 block text-sm"
                    >Firstname</label
                  >
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Firstname"
                    class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
                    v-model="formData.firstname"
                    required
                    :disabled="isProcessing"
                  /> -->
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
              <div>
                <FormKit
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email"
                  validation="required"
                  :disabled="isProcessing"
                />
              </div>
              <div>
                <FormKit
                  type="tel"
                  name="phone"
                  label="Phone Number"
                  placeholder="Phone Number"
                  validation="required"
                  :disabled="isProcessing"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="year"
                  label="Year"
                  placeholder="Select Year"
                  validation="required"
                  :disabled="isProcessing"
                  :options="[
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
                    'A Level',
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="subject"
                  label="Subject"
                  placeholder="Select Subject"
                  validation="required"
                  :disabled="isProcessing"
                  :options="[
                    'Maths',
                    'English',
                    'Science',
                    'History',
                    'Geography',
                    'Computer Science',
                    'Biology',
                    'Chemistry',
                    'Physics',
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="textarea"
                  name="message"
                  label="Message"
                  placeholder="Eg. I would like to book a lesson"
                  :disabled="isProcessing"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-pink-600 px-4 py-2 uppercase text-white"
                  :disabled="isProcessing"
                >
                  <div v-if="isProcessing">
                    <SpinnerComponent class="h-6 w-6" />
                  </div>
                  <div v-else>Submit</div>
                </button>
              </div>
            </form>
          </div>
          <div class="basis-1/2 border shadow">
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
            class="mt-5 w-full rounded-lg bg-pink-600 px-4 py-2 uppercase text-white"
          >
            Ok
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</template>
