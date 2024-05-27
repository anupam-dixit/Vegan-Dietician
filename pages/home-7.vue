<template>
  <div>
    
    <!-- Begin magic cursor 
   ======================== -->
    <div id="magic-cursor">
      <div id="ball"></div>
    </div>
    <!-- End magic cursor -->

    <!-- header area -->
    <header-four cls="tp-header-5-top-space" />
    <!-- header area -->

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <!-- slider area -->
          <hero-banner-slider-seven />
          <!-- slider area -->
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home Seven - Diego" });
definePageMeta({ layout: false });
import cursorAnimation from "@/utils/tp-cursor";

onMounted(() => {
  useSmoothScroll();
  document.body.classList.add("tp-magic-cursor");
  cursorAnimation();
});
</script>
