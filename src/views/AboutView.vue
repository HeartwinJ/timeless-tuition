<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import VanillaTilt from "vanilla-tilt";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "@remixicon/vue";
import DividerComponent from "@/components/DividerComponent.vue";

onMounted(() => {
  anime({
    targets: ".about",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(500, { start: 500 }),
  });

  //@ts-ignore
  VanillaTilt.init(document.querySelectorAll(".tilt-img"), {
    max: 10,
    speed: 1500,
    reverse: true,
    "full-page-listening": true,
  });
});
</script>

<template>
  <div class="mx-auto max-w-8xl px-6 py-8 sm:py-10 lg:px-8 lg:py-12">
    <div class="mx-auto max-w-2xl space-y-16 lg:max-w-none">
      <div>
        <div class="flex justify-center">
          <div
            class="mb-3 border-b-4 border-brand px-4 text-center text-lg font-bold uppercase"
          >
            About Us
          </div>
        </div>
        <div class="about rounded-lg border-4 border-brand p-3">
          <div class="pt-4 text-center">
            <div class="text-2xl font-bold uppercase">how we started</div>
          </div>
          <div class="mx-8 my-3 text-lg italic">
            <div class="inline-block">
              <RiDoubleQuotesL class="inline-block h-8 w-8 text-gray-500" />
            </div>
            As a young kid, my parents were adamant about securing the best
            possible future for me. This determination led to countless hours
            spent in various tuition centers, each promising academic excellence
            and success. However, amidst the maze of different approaches and
            methodologies, I began to discern the stark differences between them
            - the strengths, the weaknesses, and the impact they had on my
            learning journey. Armed with this firsthand experience, I embarked
            on a mission to revolutionise the landscape of education. Timeless
            Tuition was born out of the desire to offer high-quality education
            without the exorbitant costs often associated with it. Our vision is
            simple yet profound: to empower young minds with the tools they need
            not only to excel academically but also to thrive in life. At
            Timeless Tuition, we believe that education extends far beyond
            textbooks and exams. It's about instilling essential life skills,
            fostering creativity, and expanding the horizons of learning.
            Through innovative teaching methods and a holistic approach, we aim
            to nurture well-rounded individuals who are equipped to tackle the
            challenges of the future with confidence and resilience.
            <div class="inline-block">
              <RiDoubleQuotesR class="inline-block h-8 w-8 text-gray-500" />
            </div>
          </div>
          <div class="mt-3 text-right text-xl italic">- Timeless Tuition</div>
        </div>
      </div>
      <div
        class="about flex flex-col gap-3 rounded-lg border-4 border-brand p-3 lg:flex-row"
      >
        <div>
          <div class="pt-4 text-center">
            <div class="mb-3 text-2xl font-bold uppercase">our vision</div>
          </div>
          <div class="mx-8 my-3 text-lg italic">
            <div class="inline-block">
              <RiDoubleQuotesL class="inline-block h-8 w-8 text-gray-500" />
            </div>
            As a young kid, my parents were adamant about securing the best
            possible future for me. This determination led to countless hours
            spent in various tuition centers, each promising academic excellence
            and success. However, amidst the maze of different approaches and
            methodologies, I began to discern the stark differences between them
            - the strengths, the weaknesses, and the impact they had on my
            learning journey. Armed with this firsthand experience, I embarked
            on a mission to revolutionise the landscape of education. Timeless
            Tuition was born out of the desire to offer high-quality education
            without the exorbitant costs often associated with it. Our vision is
            simple yet profound: to empower young minds with the tools they need
            not only to excel academically but also to thrive in life. At
            Timeless Tuition, we believe that education extends far beyond
            textbooks and exams. It's about instilling essential life skills,
            fostering creativity, and expanding the horizons of learning.
            Through innovative teaching methods and a holistic approach, we aim
            to nurture well-rounded individuals who are equipped to tackle the
            challenges of the future with confidence and resilience.
            <div class="inline-block">
              <RiDoubleQuotesR class="inline-block h-8 w-8 text-gray-500" />
            </div>
          </div>
          <div class="mt-3 text-right text-xl italic">- Timeless Tuition</div>
        </div>
        <div>
          <div class="pt-4 text-center">
            <div class="mb-3 text-2xl font-bold uppercase">our mission</div>
          </div>
          <div class="mx-8 my-3 text-lg italic">
            <div class="inline-block">
              <RiDoubleQuotesL class="inline-block h-8 w-8 text-gray-500" />
            </div>
            As a young kid, my parents were adamant about securing the best
            possible future for me. This determination led to countless hours
            spent in various tuition centers, each promising academic excellence
            and success. However, amidst the maze of different approaches and
            methodologies, I began to discern the stark differences between them
            - the strengths, the weaknesses, and the impact they had on my
            learning journey. Armed with this firsthand experience, I embarked
            on a mission to revolutionise the landscape of education. Timeless
            Tuition was born out of the desire to offer high-quality education
            without the exorbitant costs often associated with it. Our vision is
            simple yet profound: to empower young minds with the tools they need
            not only to excel academically but also to thrive in life. At
            Timeless Tuition, we believe that education extends far beyond
            textbooks and exams. It's about instilling essential life skills,
            fostering creativity, and expanding the horizons of learning.
            Through innovative teaching methods and a holistic approach, we aim
            to nurture well-rounded individuals who are equipped to tackle the
            challenges of the future with confidence and resilience.
            <div class="inline-block">
              <RiDoubleQuotesR class="inline-block h-8 w-8 text-gray-500" />
            </div>
          </div>
          <div class="mt-3 text-right text-xl italic">- Timeless Tuition</div>
        </div>
      </div>
      <div class="about mb-5 text-center">
        <DividerComponent />
        <div class="mb-3 mt-12 flex justify-center">
          <div
            class="mb-3 border-b-4 border-brand px-4 text-2xl font-bold uppercase"
          >
            what makes timeless tuition stand out from the rest?
          </div>
        </div>
        <div class="text-xl">
          With over a decade of experience, Timeless Tuition has perfected our
          approach to delivering outstanding results. Our Maths, Science, and
          English Tuition Courses and more empower students in both classroom
          and home settings. Our outstanding results are rooted in these key
          factors:
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          <div class="mb-3 text-4xl font-bold">Tailored courses for you</div>
          <div class="text-xl">
            At Timeless Tuition, our dedicated tutors assist in crafting
            customised and tailored tuition programmes for each student,
            providing weekly homework and assesments that are aligned with the
            National Curriculum. Our goal is to support every learner in
            achieving the best grades possible by advancing at their own pace
            and addressing their individual learning needs.
          </div>
        </div>
        <img
          src="https://picsum.photos/500/328?random=1"
          class="tilt-img order-first lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 text-right lg:flex-row">
        <img src="https://picsum.photos/500/328?random=2" class="tilt-img" />
        <div>
          <div class="mb-3 text-4xl font-bold">Professional Tutors</div>
          <div class="text-xl">
            At Timeless Tuition, our dedicated tutors assist in crafting
            customised and tailored tuition programmes for each student,
            providing weekly homework and assesments that are aligned with the
            National Curriculum. Our goal is to support every learner in
            achieving the best grades possible by advancing at their own pace
            and addressing their individual learning needs.
          </div>
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          <div class="mb-3 text-4xl font-bold">
            Small Group Sessions & One-to-One Support
          </div>
          <div class="text-xl">
            At Timeless Tuition, our dedicated tutors assist in crafting
            customised and tailored tuition programmes for each student,
            providing weekly homework and assesments that are aligned with the
            National Curriculum. Our goal is to support every learner in
            achieving the best grades possible by advancing at their own pace
            and addressing their individual learning needs.
          </div>
        </div>
        <img
          src="https://picsum.photos/500/328?random=3"
          class="tilt-img order-first lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 text-right lg:flex-row">
        <img src="https://picsum.photos/500/328?random=4" class="tilt-img" />
        <div>
          <div class="mb-3 text-4xl font-bold">
            Parental Engagement: Weekly Updates and Communication
          </div>
          <div class="text-xl">
            At Timeless Tuition, our dedicated tutors assist in crafting
            customised and tailored tuition programmes for each student,
            providing weekly homework and assesments that are aligned with the
            National Curriculum. Our goal is to support every learner in
            achieving the best grades possible by advancing at their own pace
            and addressing their individual learning needs.
          </div>
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          <div class="mb-3 text-4xl font-bold">Tailored courses for you</div>
          <div class="text-xl">
            At Timeless Tuition, our dedicated tutors assist in crafting
            customised and tailored tuition programmes for each student,
            providing weekly homework and assesments that are aligned with the
            National Curriculum. Our goal is to support every learner in
            achieving the best grades possible by advancing at their own pace
            and addressing their individual learning needs.
          </div>
        </div>
        <img
          src="https://picsum.photos/500/328?random=5"
          class="tilt-img order-first lg:order-last"
        />
      </div>
    </div>
  </div>
</template>
