<template>
  <ClientOnly>
  <div class="tp-marquee-area z-index-5">
    <div class="tp-marquee-wrapper">
      <div class="tp-marquee-slider fix">
        <div class="tp-marquee-slider-active d-flex align-items-center">
          <Vue3Marquee :duration="30" :animateOnOverflow="true">
            <div
              v-for="(m, i) in marquee_data"
              :key="i"
              class="tp-marquee-item"
            >
              <p>{{ m.text }} <img :src="m.img" alt="" /></p>
          </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const marquee_data = [
  { text: "Selected Work (2024)", img: "/images/marquee/smile.svg" },
  { text: "Diego Template", img: "/images/marquee/stroke.svg" },
  { text: "Selected Work (2024)", img: "/images/marquee/smile.svg" },
  { text: "Diego Template", img: "/images/marquee/stroke.svg" },
  { text: "Selected Work (2024)", img: "/images/marquee/smile.svg" },
  { text: "Diego Template", img: "/images/marquee/stroke.svg" },
];
</script>
