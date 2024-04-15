<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import VanillaTilt from "vanilla-tilt";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "@remixicon/vue";
import DividerComponent from "@/components/DividerComponent.vue";
import TimelineComponent from "@/components/TimelineComponent.vue";

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
  const start = `${parseFloat(/\(([^)]+)\)/.exec(e.target.style.transform || "(1)")![1]) * 100}%`;
  anime({
    targets: e.target,
    scale: [start, "110%"],
    easing: "easeOutExpo",
    duration: 500,
    delay: anime.stagger(500, { start: 500 }),
  });
}

function handleTitleHoverEnd(e: any) {
  const start = `${parseFloat(/\(([^)]+)\)/.exec(e.target.style.transform || "(1)")![1]) * 100}%`;
  anime({
    targets: e.target,
    scale: [start, "100%"],
    easing: "easeOutExpo",
    duration: 500,
    delay: anime.stagger(500, { start: 500 }),
  });
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
            <div class="texl-xl font-bold uppercase lg:text-2xl">
              how we started
            </div>
          </div>
          <div class="mx-8 my-3 text-center italic lg:text-lg">
            <div class="relative mr-8 inline-block">
              <RiDoubleQuotesL
                class="absolute -top-7 inline-block h-8 w-8 text-gray-500"
              />
            </div>
            As a child, my parents were determined to secure the best future for
            me. This led to many hours in tuition centres and private tution,
            each promising academic success. Amidst different approaches, I was
            able to see tuitions strengths, weaknesses, and impact on my
            learning journey. This drove me to create Timeless Tuition, offering
            high-quality education with an affordable price and empower young
            minds to excel academically and in life. At Timeless Tuition,
            education means more than textbooks and exams. It's about instilling
            essential life skills, creativity, and expanding learning horizons.
            Through innovative teaching, we prepare individuals to confidently
            face future challenges with resilience and find the best possible
            version of themselves.
            <div class="relative inline-block">
              <RiDoubleQuotesR
                class="absolute -bottom-4 inline-block h-8 w-8 text-gray-500"
              />
            </div>
          </div>
          <div class="mt-3 text-right lg:text-xl">- Timeless Tuition</div>
        </div>
      </div>
      <div
        class="about grid grid-cols-1 gap-3 rounded-lg border-4 border-brand p-3 lg:grid-cols-2"
      >
        <div>
          <div class="pt-4 text-center">
            <div class="mb-3 text-xl font-bold uppercase lg:text-2xl">
              our mission
            </div>
          </div>
          <div class="mx-8 my-3 text-center lg:text-lg">
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
            <div class="mb-3 text-xl font-bold uppercase lg:text-2xl">
              our vision
            </div>
          </div>
          <div class="mx-8 my-3 text-center lg:text-lg">
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
            class="mb-3 border-b-4 border-brand px-4 text-xl font-bold uppercase lg:text-2xl"
          >
            what makes timeless tuition stand out from the rest?
          </div>
        </div>
        <div class="lg:text-xl">
          With over a decade of experience, Timeless Tuition has perfected our
          approach to delivering outstanding results. Our Maths, Science, and
          English Tuition Courses and more empower students in both classroom
          and home settings. Our outstanding results are rooted in these key
          factors:
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          <div
            class="relative mb-3 text-2xl font-bold lg:text-4xl"
            @mouseover="handleTitleHover"
            @mouseleave="handleTitleHoverEnd"
          >
            Tailored courses for you
            <div id="tailored-courses" class="absolute -top-36"></div>
          </div>
          <div class="lg:text-xl">
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
          src="/images/about-1.jpg"
          class="tilt-img order-first h-[328px] w-[500px] lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 text-right lg:flex-row">
        <img src="/images/about-2.png" class="tilt-img h-[328px] w-[500px]" />
        <div>
          <div
            class="relative mb-3 text-2xl font-bold lg:text-4xl"
            @mouseover="handleTitleHover"
            @mouseleave="handleTitleHoverEnd"
          >
            DBS Checked Professional Tutors
            <div id="professional-tutors" class="absolute -top-36"></div>
          </div>
          <div class="lg:text-xl">
            Trust our tutors; you're in good hands. Only one in ten applicants
            are successfully hired at Timeless Tuition, as we hand pick the best
            Tutors who are trained rigorously and have as well as undergone a
            thorough DBS check to ensure your children are in safe hands. Our
            tutors are not only experts in their fields but also passionate
            about guiding students to success. With Timeless Tuition, your
            child's academic growth is in capable and caring hands. Furthermore,
            if you interested in being part of our team, head over to our
            careers page.
          </div>
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          <div
            class="relative mb-3 text-2xl font-bold lg:text-4xl"
            @mouseover="handleTitleHover"
            @mouseleave="handleTitleHoverEnd"
          >
            Small Group Sessions & One-to-One Support
            <div id="small-group" class="absolute -top-36"></div>
          </div>
          <div class="lg:text-xl">
            Our classes feature small group settings, with 3-6 students per
            table, ensuring personalised attention and fostering a collaborative
            learning atmosphere. Each student receives individualised support
            and guidance from our experienced tutors, who tailor their teaching
            approach to accommodate diverse learning styles and abilities. With
            our intimate class sizes, students benefit from ample opportunities
            for active participation, meaningful interactions, and peer-to-peer
            learning experiences. Moreover, our dedicated tutors allocate
            sufficient time and resources to address each student's unique
            needs, ensuring comprehensive understanding and mastery of the
            subject matter.
          </div>
        </div>
        <img
          src="/images/about-3.jpg"
          class="tilt-img order-first h-[328px] w-[500px] lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 text-right lg:flex-row">
        <img src="/images/about-4.jpg" class="tilt-img h-[328px] w-[500px]" />
        <div>
          <div
            class="relative mb-3 text-2xl font-bold lg:text-4xl"
            @mouseover="handleTitleHover"
            @mouseleave="handleTitleHoverEnd"
          >
            Parental Engagement: Weekly Updates and Communication
            <div id="parental-engagement" class="absolute -top-36"></div>
          </div>
          <div class="lg:text-xl">
            At Timeless Tuition, we believe regular communication and updates
            will help parents and teachers build good relationships. Our
            thorough weekly reports, which offer in-depth insights into your
            child's progress and accomplishments throughout tuition sessions,
            demonstrate our commitment to parental engagement. These reports are
            helpful resources for monitoring your child's intellectual
            development and pinpointing areas in need of additional work.
            Furthermore, because we value answering any worries or inquiries you
            might have, we provide you with the flexibility to arrange
            appointments to talk about your child's educational progress. You
            can rely on Timeless Tuition to put transparency and collaboration
            first in order to make sure that your child's educational journey is
            successful.
          </div>
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          <div
            class="relative mb-3 text-2xl font-bold lg:text-4xl"
            @mouseover="handleTitleHover"
            @mouseleave="handleTitleHoverEnd"
          >
            In-Person and Online
            <div id="in-person" class="absolute -top-36"></div>
          </div>
          <div class="lg:text-xl">
            There are alternatives for both in-person and online tutoring to
            suit a range of schedules and learning preferences. The benefit of
            face-to-face lesson is that it provides students with the
            opportunity to connect directly with tutors in a setting that is
            encouraging and favourable to learning. Our online tutoring platform
            gives anyone who want flexibility and convenience access to
            excellent tuition from the comforts of home. Irrespective of their
            geographical location, students can obtain individualised advice and
            support through interactive virtual classrooms, and real-time
            feedback. Our mission is to enable students to realise their full
            potential and attain academic success, whether in-person or
            virtually.
          </div>
        </div>
        <img
          src="/images/about-5.jpg"
          class="tilt-img order-first h-[328px] w-[500px] lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 text-right lg:flex-row">
        <img src="/images/about-6.jpg" class="tilt-img h-[328px] w-[500px]" />
        <div>
          <div
            class="relative mb-3 text-2xl font-bold lg:text-4xl"
            @mouseover="handleTitleHover"
            @mouseleave="handleTitleHoverEnd"
          >
            Tests, Mock Exams and Assessments
            <div id="assesments" class="absolute -top-36"></div>
          </div>
          <div class="lg:text-xl">
            We recognise that frequent assessments and practice tests are
            crucial in determining students' development and readiness for
            future academic pursuits. This is why we take an in-depth approach
            to education. Weekly tests, frequent mock exams, and assessments
            help us identify students' areas of strength and growth, giving us
            important information about their academic journey. Assisting
            students in becoming comfortable with exam formats and boosting
            their confidence, our knowledgeable tutors carefully craft
            examinations that replicate genuine exam settings. We provide
            tailored feedback and focused assistance to enable students to
            overcome challenges and attain peak academic performance.
          </div>
        </div>
      </div>
      <div class="about">
        <DividerComponent />
        <TimelineComponent />
      </div>
    </div>
  </div>
</template>
