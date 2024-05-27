<template>
  <div>
    <nuxt-layout name="layout-one">
    <!-- hero banner -->
    <hero-banner-one />
    <!-- hero banner -->

<!--    &lt;!&ndash; brand area &ndash;&gt;-->
    <brand-area-one />
<!--    &lt;!&ndash; brand area &ndash;&gt;-->

<!--    &lt;!&ndash; service area &ndash;&gt;-->
    <service-area-one />
<!--    &lt;!&ndash; service area &ndash;&gt;-->

<!--    &lt;!&ndash; marquee area &ndash;&gt;-->
<!--    <marquee-area />-->
<!--    &lt;!&ndash; marquee area &ndash;&gt;-->

<!--    &lt;!&ndash; about area &ndash;&gt;-->
<!--    <about-area-one />-->
<!--    &lt;!&ndash; about area &ndash;&gt;-->

<!--    &lt;!&ndash; portfolio area &ndash;&gt;-->
<!--    <portfolio-area />-->
<!--    &lt;!&ndash; portfolio area &ndash;&gt;-->

<!--    &lt;!&ndash; skill area &ndash;&gt;-->
<!--    <skill-area />-->
<!--    &lt;!&ndash; skill area &ndash;&gt;-->

<!--    &lt;!&ndash; award area &ndash;&gt;-->
<!--    <award-area />-->
<!--    &lt;!&ndash; award area &ndash;&gt;-->

<!--    &lt;!&ndash; testimonial area &ndash;&gt;-->
<!--    <testimonial-one />-->
<!--    &lt;!&ndash; testimonial area &ndash;&gt;-->

<!--    &lt;!&ndash; resources-area &ndash;&gt;-->
    <resources-area />
<!--    &lt;!&ndash; resources-area &ndash;&gt;-->

    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home Page - Diego" });
definePageMeta({ layout: false });
import {animatedHeadline} from '@/utils/animatedHeadline';
import {buttonAnimation} from '@/utils/buttonAnimation';

onMounted(() => {
  useSmoothScroll();
  
  setTimeout(() => {
    animatedHeadline();
    useAnimationTitle();
    buttonAnimation();
    useScrollTextAnimation();
  },0)
})
</script>
