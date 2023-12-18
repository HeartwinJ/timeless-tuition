<script setup lang="ts">
const news = [
  {
    title: "Article 1",
    img: "https://picsum.photos/500/328?random=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    date: "December 13, 2023",
  },
  {
    title: "Article 2",
    img: "https://picsum.photos/500/328?random=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    date: "December 13, 2023",
  },
  {
    title: "Article 3",
    img: "https://picsum.photos/500/328?random=3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    date: "December 13, 2023",
  },
  {
    title: "Article 4",
    img: "https://picsum.photos/500/328?random=4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    date: "December 13, 2023",
  },
  {
    title: "Article 5",
    img: "https://picsum.photos/500/328?random=5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    date: "December 13, 2023",
  },
  {
    title: "Article 6",
    img: "https://picsum.photos/500/328?random=6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    date: "December 13, 2023",
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="py-8 text-center">
        <div class="font-medium text-pink-600">News</div>
        <div class="text-xl font-bold uppercase">latest updates</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          praesentium deserunt fuga. Sequi blanditiis nemo nisi. Sequi tempora
          praesentium ab, ullam cumque nesciunt maiores, necessitatibus eum a
          illo unde fuga. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Consequatur officia commodi accusamus fuga? Maxime deserunt quae
          nam temporibus dolores quaerat dolore assumenda. Mollitia quibusdam id
          aspernatur voluptates eos quam quas!
        </div>
      </div>
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
      >
        <div v-for="(n, idx) in news" :key="idx">
          <img :src="n.img" class="mb-3 rounded-lg" />
          <div class="text-sm text-gray-500">{{ n.date }}</div>
          <div class="text-lg font-medium">{{ n.title }}</div>
          <div class="text-gray-700">{{ n.description }}</div>
        </div>
      </dl>
    </div>
  </div>
</template>
