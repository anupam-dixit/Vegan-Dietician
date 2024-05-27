<template>
  <div>

    <!-- header area start -->
   <header>
      <div :class="`tp-header-3__area tp-header-transparent tp-header-3__ptlr ${hCls1}`">
         <div :class="`${containerCls}`">
            <div class="row align-items-center">
               <div class="col-xl-6 col-lg-6 col-md-6 col-6">
                  <div v-if="!style_2 && !style_3" class="tp-header-3__logo">
                     <nuxt-link class="logo-white" href="/">
                      <img src="/images/logo/logo.png" alt="">
                    </nuxt-link>
                     <nuxt-link class="logo-black" href="/">
                      <img src="/images/logo/logo-black.png" alt="">
                    </nuxt-link>
                  </div>
                  <div v-if="style_2 && !style_3" class="tp-header-3__logo">
                     <nuxt-link class="logo-white" href="/">
                        <img src="/images/logo/logo-white.png" alt="">
                     </nuxt-link>
                     <nuxt-link class="logo-black" href="/">
                        <img src="/images/logo/logo-red.png" alt="">
                     </nuxt-link>
                  </div>
                  <div v-if="style_3" class="tp-header-3__logo">
                     <nuxt-link class="logo-white" href="/">
                        <img src="/images/logo/logo-red.png" alt="">
                     </nuxt-link>
                     <nuxt-link class="logo-black" href="/">
                        <img src="/images/logo/logo-red.png" alt="">
                     </nuxt-link>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">
                     <div class="tp-theme-toggle-single">
                        <label class="tp-theme-toggle-main themepure-theme-toggle">
                           <span class="dark">
                            <svg-dark-2 :style_2="style_3" />
                           </span>
                           <input type="checkbox" class="themepure-theme-toggle-input">
                           <span class="light">
                            <svg-light-2 :style_2="style_3" />
                           </span>
                        </label>
                     </div>
                     <div class="tp-header-3__btn d-none d-md-block">
                        <nuxt-link class="tp-btn-white" href="/contact">
                           <span class="text">Let’s Talk</span>
                           <span>
                              <svg-pen/>
                           </span>
                        </nuxt-link>
                     </div>
                     <div class="tp-header-3__bar">
                        <button @click="handleOffCanvas" class="tp-menu-bar tp-offcanvas-open-btn">
                           <svg-menu-bar/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <!-- header area end -->

   <!-- header area start -->
   <header>
      <div :class="`tp-header-3__area tp-header-transparent tp-header-3__ptlr tp-int-menu ${hCls2} tp-header-sticky-cloned ${isStickyVisible && sticky?'tp-header-pinned':''}`">
         <div class="container-fluid">
            <div class="row align-items-center">
               <div class="col-xl-6 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__logo">
                     <nuxt-link class="logo-white" href="/">
                      <img src="/images/logo/logo.png" alt="">
                    </nuxt-link>
                     <nuxt-link class="logo-black" href="/">
                      <img src="/images/logo/logo-black.png" alt="">
                    </nuxt-link>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">
                     <div class="tp-theme-toggle-single">
                        <label :class="`tp-theme-toggle-main themepure-theme-toggle ${isActive ? 'dark-active' : 'light-active'}`" id="theme-toggle" @change="toggleTheme">
                           <span class="dark">
                              <svg-dark-2  />
                           </span>
                           <input type="checkbox" class="themepure-theme-toggle-input" id="theme-toggle">
                           <span class="light">
                              <svg-light-2 :style_2="style_3" />
                           </span>
                        </label>
                     </div>
                     <div class="tp-header-3__btn d-none d-md-block">
                        <nuxt-link class="tp-btn-white" href="/contact">
                           <span class="text">Let’s Talk</span>
                           <span>
                              <svg-pen/>
                           </span>
                        </nuxt-link>
                     </div>
                     <div class="tp-header-3__bar">
                        <button @click="handleOffCanvas" class="tp-menu-bar tp-offcanvas-open-btn">
                           <svg-menu-bar/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <!-- header area end -->
  </div>

  <!-- offcanvas area start -->
  <offcanvas-main :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas" :cls="offcanvasCls" :style_2="offcanvasWhiteLogo"/>
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
const {sticky,isStickyVisible} = useSticky();
withDefaults(defineProps<{style_2?:boolean;style_3?:boolean;hCls1?:string;hCls2?:string;containerCls?:string;offcanvasCls?:string;offcanvasWhiteLogo?:boolean}>(),{hCls1:'',hCls2:'',containerCls:'container-fluid',offcanvasCls:''});
const {isActive,toggleTheme,tpInitTheme} = useThemeToggle();
const isOffCanvasOpen = ref<boolean>(false);

const handleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};

onMounted(() => {
    tpInitTheme();
    const themeInput = document.querySelector('.themepure-theme-toggle-input') as HTMLInputElement;
    themeInput.addEventListener('change', toggleTheme);
})
</script>