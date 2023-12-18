<script setup lang="ts">
import { reactive } from "vue";
import FAQComponent from "@/components/FAQComponent.vue";
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
  await Services.saveContact(formData);
  resetForm();
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
                <div class="grow">
                  <label for="lastname" class="mb-1 block text-sm"
                    >Lastname</label
                  >
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
                <label for="phone" class="mb-1 block text-sm"
                  >Phone Number</label
                >
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
                  v-model="formData.phone"
                />
              </div>
              <div>
                <label for="year" class="mb-1 block text-sm">Year</label>
                <select
                  id="year"
                  placeholder="Year"
                  class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
                  v-model="formData.year"
                >
                  <option>Year 1</option>
                  <option>Year 2</option>
                  <option>Year 3</option>
                  <option>Year 4</option>
                  <option>Year 5</option>
                  <option>Year 6</option>
                  <option>Year 7</option>
                  <option>Year 8</option>
                  <option>Year 9</option>
                  <option>Year 10</option>
                  <option>Year 11</option>
                  <option>A Level</option>
                </select>
              </div>
              <div>
                <label for="subject" class="mb-1 block text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  class="mb-3 w-full rounded-lg border px-2 py-1 shadow"
                  v-model="formData.subject"
                />
              </div>
              <div>
                <label for="message" class="mb-1 block text-sm">Message</label>
                <textarea
                  id="message"
                  placeholder="Eg. I would like to book a lesson"
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
  </div>
</template>
