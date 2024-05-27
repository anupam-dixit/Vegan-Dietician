<template>
  <div class="home-four">

    <!-- Begin magic cursor 
   ======================== -->
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
    <!-- End magic cursor -->

    <nuxt-layout name="layout-four">
      <!-- hero banner -->
      <hero-banner-four />
      <!-- hero banner -->

      <!-- project area -->
      <project-three />
      <!-- project area -->

      <!-- about area -->
      <about-area-three />
      <!-- about area -->

      <!-- marquee area -->
      <marquee-two />
      <!-- marquee area -->

      <!-- project four -->
      <project-four />
      <!-- project four -->

      <!-- video area start -->
      <video-area />
      <!-- video area end -->

      <!-- price area -->
      <pricing-two />
      <!-- price area -->

      <!-- instagram area -->
      <instagram-area />
      <!-- instagram area -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home Four - Diego" });
definePageMeta({ layout: false });
import { buttonAnimation } from "@/utils/buttonAnimation";
import cursorAnimation from "@/utils/tp-cursor";

onMounted(() => {
  document.body.classList.add("tp-magic-cursor");
});
onMounted(() => {
  useSmoothScroll();
  cursorAnimation();

  setTimeout(() => {
    useAnimationTitle();
    buttonAnimation();
    useTextInvert("home-four");
  }, 50);
});
</script>
