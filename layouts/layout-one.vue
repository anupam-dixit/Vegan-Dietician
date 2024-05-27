<script setup lang="ts">
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
  ],
  script:[{type: 'text/javascript', src:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'}]
})
</script>

<template>
  <div>
    <back-to-top/>
    <header-one />
    <div
      id="smooth-wrapper"
      class="tp-page-wrapper theme-bg"
      style="background-image:url(/images/bg/distort-bg.png)"
    >
      <div id="smooth-content">
        <main>
          <slot />
        </main>
        <footer-one/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/main.scss";
</style>