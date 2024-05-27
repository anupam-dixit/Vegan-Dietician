<template>
  <header>
    <div :class="`tp-header-3__area tp-header-transparent tp-header-3__ptlr ${cls}`">
      <div class="container container-1720">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-6 col-6">
            <div class="tp-header-3__logo">
              <nuxt-link href="/">
                <img src="/images/logo/logo-white.png" alt="" />
              </nuxt-link>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-6">
            <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">
              <div class="tp-header-3__bar tp-magnetic-wrap">
                <button
                  @click="handleOffCanvas"
                  class="tp-menu-bar tp-offcanvas-open-btn tp-magnetic-item not-hide-cursor tp-toggle-btn-box"
                >
                  <svg-menu-bar />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- offcanvas area start -->
  <offcanvas-main :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas" cls="tp-offcanvas-update-bg"/>
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
withDefaults(defineProps<{cls?:string}>(),{
  cls:''
});

const isOffCanvasOpen = ref<boolean>(false);

const handleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};
</script>
