<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { IconPlus, IconMinus } from "@tabler/icons-vue";

const faqs = [
  {
    question: "What courses does your tuition centre provide?",
    answer: `<p>We offer formalised <span class="font-extrabold">Maths</span>, <span class="font-extrabold">English</span>, and <span class="font-extrabold">Science</span> Grade-Specific Courses for <span class="font-extrabold">KS2, 11+, KS3, GCSE/A-level</span> students and more. Starting from children aged <span class="font-extrabold">5 to 17</span>, each child follows a <span class="font-extrabold">structured bespoke programme</span> with set topics aligned with the <span class="font-extrabold">national curriculum</span>, along with a <span class="font-extrabold">weekly homework</span> and <span class="font-extrabold">revision plan</span>. To get started fill out the <span class="font-extrabold">contact form</span> to begin your educational journey.</p>`,
  },
  {
    question: "How do I enroll my child / get started?",
    answer: `<p>To initiate your educational journey, complete the contact form on the <span class="font-extrabold">"Get Started"</span> page. Once submitted, we'll be in touch to discuss available subjects, next steps, and provide details about our <span class="font-extrabold">free induction.</span></p>`,
  },
  {
    question: "Are Timeless Tuition's tutors qualified?",
    answer: `<p>Certainly! All our tutors are qualified, with verified <span class="font-extrabold">DBS certificates</span>, <span class="font-extrabold">Safeguarding Training</span> and a select number of tutors who are <span class="font-extrabold">first aid trained</span>. Our team includes QTS Qualified teachers, graduates, and subject matter specialists. Each tutor undergoes a <span class="font-extrabold">rigorous selection</span></span> and <span class="font-extrabold">hiring process</span>, ensuring they meet <span class="font-extrabold">high standards</span>. Feel confident that the tutor assigned to your child has been thoughtfully chosen for their expertise and commitment to achieve the best results possible.</p>`,
  },
  {
    question: "Where is your tuition centre located?",
    answer: `<p>We offer tuition services both <span class="font-extrabold">in person</span> at our Watford center …. and <span class="font-extrabold">online</span>, providing <span class="font-extrabold">flexibility</span> and convenience to meet your educational needs. This allow you the flexibility to opt for either in-person or online tuition.</p>`,
  },
  {
    question: "What are your prices?",
    answer: `<p>Our prices are competitive, starting from as low as <span class="font-extrabold">£15/hr</span> and vary depending on the course and the number of subjects your child is enrolled in. We offer a free <span class="font-extrabold">induction</span> and assessment to understand your child's needs and provide a <span class="font-extrabold">tailored plan</span>. We also offer <span class="font-extrabold">sibling discounts</span>, <span class="font-extrabold">referral discounts</span> and <span class="font-extrabold">flexible payment options</span>. To get a quote, please fill out the <span class="font-extrabold">contact form</span> and we'll be in touch to discuss <span class="font-extrabold">your requirements</span>.</p>`,
  },
  {
    question:
      "Is there anything specific your child should bring to the lessons?",
    answer: `<p>All required materials for the lesson will be provided, but children should bring a pencil case and a water bottle. Additionally, please ensure they bring any <span class="font-extrabold">resources</span> provided in advance, and avoid bringing food or fizzy drinks to class.</p>`,
  },
];
</script>
<template>
  <div class="bg-triangles px-5 py-8">
    <div class="border-y-2 border-white">
      <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-4xl divide-y divide-white">
          <div class="py-4 text-center text-white">
            <div class="font-bold">Frequently Asked Questions</div>
            <div class="text-xl font-bold lg:text-2xl">
              Can't find the answer you are looking for?<br />
              Reach out to us.
            </div>
          </div>
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
                  <span class="text-lg font-semibold leading-7 lg:text-xl">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <IconPlus v-if="!open" class="h-6 w-6" aria-hidden="true" />
                    <IconMinus v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-4 pr-12">
                <p
                  class="text-sm leading-7 text-white lg:text-base"
                  v-html="faq.answer"
                ></p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
