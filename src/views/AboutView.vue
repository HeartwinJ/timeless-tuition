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

function handleTitleHover(e: any) {
  console.log(e);
  // anime({
  //   targets: e.target,
  //   scale: ["100%", "120%"],
  //   easing: "easeOutExpo",
  //   duration: 1000,
  //   delay: anime.stagger(500, { start: 500 }),
  // });
}
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
            As a child, my parents were determined to secure the best future for
            me. This led to many hours in tuition centres and private tution,
            each promising academic success. Amidst different approaches, I was
            able to see tuitions strengths, weaknesses, and impact on my
            learning journey. This drove me to create Timeless Tuition, offering
            high-quality education with an affordable price. Our vision: empower
            young minds to excel academically and in life. At Timeless Tuition,
            education means more than textbooks and exams. It's about instilling
            essential life skills, creativity, and expanding learning horizons.
            Through innovative teaching, we prepare individuals to confidently
            face future challenges with resilience and find the best possible
            version of themselves.
            <div class="inline-block">
              <RiDoubleQuotesR class="inline-block h-8 w-8 text-gray-500" />
            </div>
          </div>
          <div class="mt-3 text-right text-xl">- Timeless Tuition</div>
        </div>
      </div>
      <div
        class="about grid grid-cols-1 gap-3 rounded-lg border-4 border-brand p-3 lg:grid-cols-2"
      >
        <div>
          <div class="pt-4 text-center">
            <div class="mb-3 text-2xl font-bold uppercase">our mission</div>
          </div>
          <div class="mx-8 my-3 text-center text-lg">
            At Timeless Tuition, our mission is to empower students to achieve
            and exceed their learning goals through effective coaching,
            mentoring, and tutoring tailored to individual needs. We are
            committed to providing affordable, high-quality education that leads
            to significant improvements in grades, confidence, and overall
            understanding. Our dedication is to foster growth and success in
            both academia and life.
          </div>
        </div>
        <div>
          <div class="pt-4 text-center">
            <div class="mb-3 text-2xl font-bold uppercase">our vision</div>
          </div>
          <div class="mx-8 my-3 text-center text-lg">
            Our vision at Timeless Tuition is to transform education, creating a
            dynamic learning environment where students flourish. We envision a
            future where everyone has access to affordable, high-quality
            education that fosters personal growth, nurtures creativity, and
            empowers individuals to excel academically and in life, instilling
            the knowledge and confidence needed for a successful and bright
            career ahead.
          </div>
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
          <div class="mb-3 text-4xl font-bold" @mouseover="handleTitleHover">
            Tailored courses for you
          </div>
          <div class="text-xl">
            Our committed tutors at Timeless Tuition work with each student to
            create a personalised learning plan that includes weekly assignments
            and assessments that follow the National Curriculum. Our courses for
            Key Stage 4 and 5 are tailored to the specific exam boards that your
            child takes, for example AQA Maths or Edexcel Maths for GCSE Level.
            This further highlights how our courses are specifically designed to
            meet your Childs needs By allowing all students to learn at their
            own pace, giving them independence when needed, but also
            individualised support, we tend to their specific learning needs, we
            hope to assist each student in attaining the greatest grades
            possible.
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
          <div class="mb-3 text-4xl font-bold" @mouseover="handleTitleHover">
            DBS Checked Professional Tutors
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
          <div class="mb-3 text-4xl font-bold" @mouseover="handleTitleHover">
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
          <div class="mb-3 text-4xl font-bold" @mouseover="handleTitleHover">
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
          <div class="mb-3 text-4xl font-bold" @mouseover="handleTitleHover">
            In-Person and Online
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
          src="https://picsum.photos/500/328?random=5"
          class="tilt-img order-first lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 text-right lg:flex-row">
        <img src="https://picsum.photos/500/328?random=4" class="tilt-img" />
        <div>
          <div class="mb-3 text-4xl font-bold" @mouseover="handleTitleHover">
            Tests, Mock Exams and Assessments
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
    </div>
  </div>
</template>
