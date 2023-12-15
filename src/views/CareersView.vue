<script setup lang="ts">
import {
  IconHourglass,
  IconCalendar,
  IconMapPin,
  IconWallet,
} from "@tabler/icons-vue";

const openings = [
  {
    department: "Mathematics",
    role: "Mathematics Tutor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    experience: "2 years",
    salary: "£20,000",
    employmentType: "Full-time",
    location: "London",
  },
  {
    department: "Mathematics",
    role: "Mathematics Tutor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    experience: "2 years",
    salary: "£20,000",
    employmentType: "Full-time",
    location: "London",
  },
  {
    department: "Mathematics",
    role: "Mathematics Tutor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    experience: "2 years",
    salary: "£20,000",
    employmentType: "Full-time",
    location: "London",
  },
  {
    department: "Mathematics",
    role: "Mathematics Tutor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi. Sed vitae nisi eget nunc ultricies aliquam. Donec euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae nisi.",
    experience: "2 years",
    salary: "£20,000",
    employmentType: "Full-time",
    location: "London",
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="py-8 text-center">
        <div class="font-medium text-pink-600">Careers</div>
        <div class="text-xl font-bold uppercase">work with us</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ut
          consequuntur neque eum, porro enim labore quis aspernatur impedit ad
          eos cupiditate non quibusdam numquam alias necessitatibus illo
          corporis obcaecati. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Ducimus, reprehenderit ullam praesentium
          accusantium, assumenda sequi possimus soluta iste sit ipsa laudantium
          corrupti. Voluptas harum sit saepe. Modi provident pariatur explicabo.
        </div>
      </div>
      <div
        v-for="(opening, idx) in openings"
        :key="idx"
        class="m-3 rounded-lg border bg-white p-3 shadow"
      >
        <div class="mb-2 text-sm text-gray-700">
          <span class="rounded-full border bg-white px-2 py-1">
            {{ opening.department }}
          </span>
        </div>
        <div class="text-lg font-medium">{{ opening.role }}</div>
        <div class="text-gray-700">{{ opening.description }}</div>
        <div class="flex justify-around">
          <div class="flex gap-2 p-2 text-gray-700">
            <IconCalendar /> {{ opening.experience }}
          </div>
          <div class="flex gap-2 p-2 text-gray-700">
            <IconWallet /> {{ opening.salary }}
          </div>
          <div class="flex gap-2 p-2 text-gray-700">
            <IconHourglass /> {{ opening.employmentType }}
          </div>
          <div class="flex gap-2 p-2 text-gray-700">
            <IconMapPin /> {{ opening.location }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
