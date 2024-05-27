<template>
   
   <!-- header area start -->
   <header>
      <div class="tp-header-2__area tp-header-2__plr tp-header-2__transparent ">
         <div class="container-fluid">
            <div class="row align-items-center">
               <div class="col-xl-2 col-lg-5 col-md-4 col-6">
                  <div class="tp-header-2__logo">
                     <nuxt-link class="logo-white" href="/">
                        <img src="/images/logo/logo.png" alt="">
                     </nuxt-link>
                     <nuxt-link class="logo-black" href="/">
                        <img src="/images/logo/logo-black.png" alt="">
                     </nuxt-link>
                  </div>
               </div>
               <div class="col-xl-7 d-none d-xl-block">
                  <div class="tp-header-2__main-menu text-center">
                     <nav id="onePageMenu">
                        <ul>
                           <li data-menuanchor="cases" class="active">
                              <a href="#cases">Cases</a>
                           </li>
                           <li data-menuanchor="about">
                              <a href="#about">About</a>
                           </li>
                           <li data-menuanchor="services">
                              <a href="#services">Services</a>
                           </li>
                           <li data-menuanchor="projects">
                              <a href="#projects">Projects</a>
                           </li>
                           <li data-menuanchor="skills">
                              <a href="#skills">Skills</a>
                           </li>
                           <li data-menuanchor="testimonial">
                              <a href="#testimonial">Testimonial</a>
                           </li>
                           <li data-menuanchor="contact">
                              <a href="#contact">Contact</a>
                           </li>
                        </ul>

                     </nav>

                  </div>
               </div>
               <div class="col-xl-3 col-lg-7 col-md-8 col-6">
                  <div class="tp-header-2__right-box d-flex align-items-center justify-content-end">
                     <div class="tp-header-2__maito d-none d-sm-block">
                        <span>
                           <svg-email/>
                        </span>
                        <a href="mailto:diego@mail.com">diego@mail.com</a>
                     </div>
                     <div class="tp-header-2__bar parallax-wrap">
                        <button @click="handleOffCanvas" class="tp-menu-bar parallax-element tp-offcanvas-open-btn">
                           <i>
                              <span></span>
                              <span></span>
                           </i>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <!-- header area end -->

  <!-- offcanvas area start -->
   <offcanvas-main :isOffCanvasOpen="isOffCanvasOpen" @close-offcanvas="handleOffCanvas"/>
  <!-- offcanvas area end -->
</template>

<script setup lang="ts">
const isOffCanvasOpen = ref<boolean>(false);

const handleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};
</script>