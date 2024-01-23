<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import { IconInbox, IconTrash, IconUsers } from "@tabler/icons-vue";

const features = [
  {
    name: "Placeholder text 1",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: IconInbox,
  },
  {
    name: "Placeholder text 2",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: IconUsers,
  },
  {
    name: "Placeholder text 3",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: IconTrash,
  },
];

onMounted(() => {
  anime({
    targets: ".features",
    translateY: ["20%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: anime.stagger(500, { start: 1000 }),
  });
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="mx-auto max-w-4xl"></div>
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="feature in features"
          :key="feature.name"
          class="features flex flex-col"
        >
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand"
            >
              <component
                :is="feature.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            {{ feature.name }}
          </dt>
          <dd
            class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"
          >
            <p class="flex-auto">{{ feature.description }}</p>
            <p class="mt-6">
              <a
                :href="feature.href"
                class="text-sm font-semibold leading-6 text-brand"
                >Learn more <span aria-hidden="true">→</span></a
              >
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
