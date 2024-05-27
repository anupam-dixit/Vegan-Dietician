<template>
  <div class="home-five">

    <!-- Begin magic cursor 
   ======================== -->
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
    <!-- End magic cursor -->

    <nuxt-layout name="layout-five">
      <!-- hero banner -->
      <hero-banner-five />
      <!-- hero banner -->

      <!-- marquee area -->
      <marquee-four />
      <!-- marquee area -->

      <!-- about area -->
      <about-area-four />
      <!-- about area -->

      <!-- project area -->
      <project-five />
      <!-- project area -->

      <!-- video area -->
      <video-area />
      <!-- video area -->

      <!-- portfolio area -->
      <portfolio-two />
      <!-- portfolio area -->

      <!-- testimonial area -->
      <testimonial-three />
      <!-- testimonial area -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home Five - Diego" });
definePageMeta({ layout: false });
import imagesLoaded from "imagesloaded";
import cursorAnimation from "@/utils/tp-cursor";

onMounted(() => {
  useSmoothScroll();
  document.body.classList.add("tp-magic-cursor");
  cursorAnimation();
});

onMounted(() => {
  const imageContainer = document.querySelector(".home-five");

  if (imageContainer) {
    imagesLoaded(imageContainer, function () {
      useAnimationTitle();
    });
  } else {
    console.error("Image container not found");
  }
});
</script>
