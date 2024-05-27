<template>
  <header>
      <!-- header area start -->
      <div :class="`tp-header-4__area tp-header-transparent tp-header-4__mob-ptb tp-header-4__plr header ${style_2?'tp-header-4__white-color cursor-style':''}`">
         <div class="container-fluid">
            <div class="row align-items-center">
               <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__logo">
                     <nuxt-link class="logo-white" to="/">
                      <img src="/images/logo/logo.png" alt="">
                    </nuxt-link>
                     <nuxt-link v-if="!style_2" class="logo-black" to="/">
                      <img src="/images/logo/logo-black.png" alt="">
                    </nuxt-link>
                    <nuxt-link v-if="style_2" class="logo-black" to="/">
                     <img src="/images/logo/logo.png" alt="">
                    </nuxt-link>
                  </div>
               </div>
               <div class="col-xl-7 d-none d-xl-block">
                  <div class="tp-header-4__menu text-center">
                     <nav>
                        <header-nav />
                     </nav>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">
                     <div class="tp-theme-toggle-single">
                      <label :checked="isActive" :class="`tp-theme-toggle-main themepure-theme-toggle ${isActive ? 'dark-active' : 'light-active'}`" id="theme-toggle">
                           <span class="dark">
                              <svg-dark-2 />
                           </span>
                           <input type="checkbox" class="themepure-theme-toggle-input" id="theme-toggle">
                           <span class="light">
                              <svg-light-2 />
                           </span>
                        </label>
                     </div>
                     <div class="tp-header-3__btn d-none d-md-block">
                        <nuxt-link class="tp-btn-white" href="/contact">
                           Let’s Talk
                           <span>
                              <svg-pen/>
                           </span>
                        </nuxt-link>
                     </div>
                     <div class="tp-header-3__bar">
                        <button @click="handleOffCanvas" class=" tp-menu-bar tp-offcanvas-open-btn">
                          <svg-menu-bar/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- header area end -->
   </header>

   <header>
      <!-- header area start -->
      <div :class="`tp-header-4__area tp-header-transparent tp-header-4__mob-ptb tp-header-4__plr tp-int-menu tp-header-sticky-cloned ${isStickyVisible && sticky?'tp-header-pinned':''} ${style_2?'tp-header-4__white-color cursor-style':''}`">
         <div class="container-fluid">
            <div class="row align-items-center">
               <div class="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__logo">
                     <nuxt-link class="logo-white" to="/">
                      <img src="/images/logo/logo.png" alt="">
                    </nuxt-link>
                     <nuxt-link v-if="!style_2" class="logo-black" to="/">
                      <img src="/images/logo/logo-black.png" alt="">
                    </nuxt-link>
                    <nuxt-link v-if="style_2" class="logo-black" to="/">
                     <img src="/images/logo/logo.png" alt="">
                    </nuxt-link>
                  </div>
               </div>
               <div class="col-xl-7 d-none d-xl-block">
                  <div class="tp-header-4__menu text-center">
                     <nav>
                        <header-nav />
                     </nav>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-6 col-md-6 col-6">
                  <div class="tp-header-3__right-action d-flex align-items-center justify-content-end">
                     <div class="tp-theme-toggle-single">
                      <label :checked="isActive" :class="`tp-theme-toggle-main themepure-theme-toggle ${isActive ? 'dark-active' : 'light-active'}`" id="theme-toggle" @change="toggleTheme">
                           <span class="dark">
                              <svg-dark-2 />
                           </span>
                           <input type="checkbox" class="themepure-theme-toggle-input" id="theme-toggle">
                           <span class="light">
                              <svg-light-2 />
                           </span>
                        </label>
                     </div>
                     <div class="tp-header-3__btn d-none d-md-block">
                        <nuxt-link class="tp-btn-white" href="/contact">
                           Let’s Talk
                           <span>
                              <svg-pen/>
                           </span>
                        </nuxt-link>
                     </div>
                     <div class="tp-header-3__bar">
                        <button @click="handleOffCanvas" class=" tp-menu-bar tp-offcanvas-open-btn">
                           <svg-menu-bar/>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- header area start -->
   </header>

   <!-- offcanvas area start -->
  <offcanvas-main :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas"/>
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
const {sticky,isStickyVisible} = useSticky();
const {isActive,toggleTheme,tpInitTheme} = useThemeToggle();
const isOffCanvasOpen = ref<boolean>(false);
defineProps<{style_2?:boolean}>();

const handleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};

onMounted(() => {
    tpInitTheme();
    const themeInput = document.querySelector('.themepure-theme-toggle-input') as HTMLInputElement;
    themeInput.addEventListener('change', toggleTheme);
})
</script>