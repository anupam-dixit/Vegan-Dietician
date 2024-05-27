<template>
  <div>
    <!-- Begin magic cursor 
   ======================== -->
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
    <!-- End magic cursor -->

    <!-- header area -->
    <header-four />
    <!-- header area -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- slider area -->
          <hero-banner-slider-six />
          <!-- slider area -->
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home Six - Diego" });
definePageMeta({ layout: false });
import cursorAnimation from "@/utils/tp-cursor";

onMounted(() => {
  useSmoothScroll();
  document.body.classList.add("tp-magic-cursor");
  cursorAnimation();
});
</script>
