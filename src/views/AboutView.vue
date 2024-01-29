<script setup lang="ts">
import { onMounted } from "vue";
import anime from "animejs";
import VanillaTilt from "vanilla-tilt";

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
      <div class="py-8 text-center">
        <div class="font-medium text-brand">About Us</div>
        <div class="mb-3 text-xl font-bold uppercase">lorem ipsum</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus error
          nisi laboriosam nihil aspernatur nulla cum optio natus expedita
          debitis voluptatem, amet obcaecati et eveniet, a inventore temporibus
          maiores eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi quos voluptatum reiciendis, perspiciatis distinctio quidem
          dolorem! Atque error tenetur asperiores? Ad adipisci sapiente impedit
          temporibus corporis eaque esse vitae accusantium?
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam
          deleniti nisi, laudantium iusto eveniet odit laboriosam quis possimus
          perferendis maiores, minima accusamus molestiae inventore, dignissimos
          est distinctio nihil consequatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus non magnam, molestiae
          possimus tenetur voluptatum enim commodi dolores animi tempora
          incidunt facere? Omnis numquam debitis incidunt tempora molestias
          dignissimos ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Deleniti temporibus nobis eveniet, itaque voluptas asperiores,
          nam obcaecati earum ea nisi, eius est omnis ipsam? Non distinctio illo
          molestias ratione porro.
        </div>
        <img
          src="https://picsum.photos/500/328?random=1"
          class="tilt-img order-first lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <img src="https://picsum.photos/500/328?random=2" class="tilt-img" />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam
          deleniti nisi, laudantium iusto eveniet odit laboriosam quis possimus
          perferendis maiores, minima accusamus molestiae inventore, dignissimos
          est distinctio nihil consequatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus non magnam, molestiae
          possimus tenetur voluptatum enim commodi dolores animi tempora
          incidunt facere? Omnis numquam debitis incidunt tempora molestias
          dignissimos ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Deleniti temporibus nobis eveniet, itaque voluptas asperiores,
          nam obcaecati earum ea nisi, eius est omnis ipsam? Non distinctio illo
          molestias ratione porro.
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam
          deleniti nisi, laudantium iusto eveniet odit laboriosam quis possimus
          perferendis maiores, minima accusamus molestiae inventore, dignissimos
          est distinctio nihil consequatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus non magnam, molestiae
          possimus tenetur voluptatum enim commodi dolores animi tempora
          incidunt facere? Omnis numquam debitis incidunt tempora molestias
          dignissimos ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Deleniti temporibus nobis eveniet, itaque voluptas asperiores,
          nam obcaecati earum ea nisi, eius est omnis ipsam? Non distinctio illo
          molestias ratione porro.
        </div>
        <img
          src="https://picsum.photos/500/328?random=3"
          class="tilt-img order-first lg:order-last"
        />
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <img src="https://picsum.photos/500/328?random=4" class="tilt-img" />
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam
          deleniti nisi, laudantium iusto eveniet odit laboriosam quis possimus
          perferendis maiores, minima accusamus molestiae inventore, dignissimos
          est distinctio nihil consequatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus non magnam, molestiae
          possimus tenetur voluptatum enim commodi dolores animi tempora
          incidunt facere? Omnis numquam debitis incidunt tempora molestias
          dignissimos ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Deleniti temporibus nobis eveniet, itaque voluptas asperiores,
          nam obcaecati earum ea nisi, eius est omnis ipsam? Non distinctio illo
          molestias ratione porro.
        </div>
      </div>
      <div class="about flex flex-col gap-8 lg:flex-row">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsam
          deleniti nisi, laudantium iusto eveniet odit laboriosam quis possimus
          perferendis maiores, minima accusamus molestiae inventore, dignissimos
          est distinctio nihil consequatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus non magnam, molestiae
          possimus tenetur voluptatum enim commodi dolores animi tempora
          incidunt facere? Omnis numquam debitis incidunt tempora molestias
          dignissimos ipsa! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Deleniti temporibus nobis eveniet, itaque voluptas asperiores,
          nam obcaecati earum ea nisi, eius est omnis ipsam? Non distinctio illo
          molestias ratione porro.
        </div>
        <img
          src="https://picsum.photos/500/328?random=5"
          class="tilt-img order-first lg:order-last"
        />
      </div>
    </div>
  </div>
</template>
