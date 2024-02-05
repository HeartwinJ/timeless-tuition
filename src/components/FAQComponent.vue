<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { IconPlus, IconMinus } from "@tabler/icons-vue";

const faqs = [
  {
    question:
      "Is there anything specific your child should bring to the lessons?",
    answer:
      "All required materials for the lesson will be provided, but children should bring a pencil case and a water bottle. Additionally, please ensure they bring any resources provided in advance, and avoid bringing food or fizzy drinks to class.",
  },
  {
    question: "What courses does your tuition centre provide?",
    answer:
      "We offer formalised Maths, English, and Science Grade-Specific Courses for KS2, 11+, KS3, GCSE/A-level students and more. Starting from children aged 5 to 17, each child follows a structured bespoke programme with set topics aligned with the national curriculum, along with a weekly homework and revision plan. To get started fill out the contact form to begin your educational journey.",
  },
  {
    question: "How do I get started?",
    answer:
      'To initiate your educational journey, complete the contact form on the "Get Started" page. Once submitted, we\'ll be in touch to discuss available subjects, next steps, and provide details about our free induction.',
  },
  {
    question: "Where is your tuition centre based?",
    answer:
      "We offer tuition services both in person at our Watford center …. and online, providing flexibility and convenience to meet your educational needs. This allow you the flexibility to opt for either in-person or online tuition.",
  },
  {
    question: "Are you tutors qualified?",
    answer:
      "Certainly! All our tutors are qualified, with verified DBS certificates and Safeguarding Training. Some are also first aid trained. Our team includes QTS Qualified teachers, graduates, and subject matter specialists. Each tutor undergoes a rigorous selection and hiring process, ensuring they meet high standards. Feel confident that the tutor assigned to your child has been thoughtfully chosen for their expertise and commitment to achieve the best results possible.",
  },
  {
    question: "What are your prices?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
</script>
<template>
  <div class="bg-triangles px-5 py-8">
    <div class="border-y-2 border-white">
      <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-4xl divide-y divide-white">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl class="mt-10 space-y-6 divide-y divide-white">
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.question"
              class="pt-6"
              v-slot="{ open }"
            >
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-white"
                >
                  <span class="text-base font-semibold leading-7">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <IconPlus v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <IconMinus v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-white">
                  {{ faq.answer }}
                </p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-triangles {
  background-image: url("../assets/triangles.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
