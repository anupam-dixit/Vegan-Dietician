<template>
  <div>
    <nuxt-layout name="layout-two">
      <div id="pagepiling">
        <!-- hero area -->
        <hero-banner-two />
        <!-- hero area -->

        <!-- about area -->
        <about-area-two />
        <!-- about area -->

        <!-- service area -->
        <service-area-two/>
        <!-- service area -->

        <!-- project area -->
        <project-one/>
        <!-- project area -->

        <!-- skill area -->
        <skill-area-two/>
        <!-- skill area -->

        <!-- testimonial area -->
        <testimonial-two/>
        <!-- testimonial area -->

        <!-- contact area -->
        <contact-one/>
        <!-- contact area -->
      </div>

      <div class="pagescroll-indication d-none d-xl-block">
        <span></span>
      </div>
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home two - Diego" });
definePageMeta({ layout: false });
import pagePiling from "../utils/pagePiling";
onMounted(() => {
  setTimeout(() => {
    pagePiling();
  },100)
});
</script>
