<template>
  <div>
    <nuxt-layout name="layout-three">

      <!-- hero banner -->
      <hero-banner-three />
      <!-- hero banner -->

      <!-- service area -->
      <service-area-three />
      <!-- service area -->

      <!-- project area -->
      <project-two />
      <!-- project area -->

      <!-- blog area -->
      <blog-home-three />
      <!-- blog area -->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home Three - Diego" });
definePageMeta({ layout: false });
import { buttonAnimation } from "@/utils/buttonAnimation";
const {servicesPanel} = usePinPanel();

onMounted(() => {
  useSmoothScroll();

  setTimeout(() => {
    useCharAnimation();
    useAnimationTitle();
    buttonAnimation();
    servicesPanel();
  },50)
});
</script>
