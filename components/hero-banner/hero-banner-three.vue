<template>
  <div class="tp-hero-3__area black-bg-3 tp-hero-3__ptb z-index-1 smooth p-relative tp-btn-trigger-3">

    <div class="tp-hero-3__shape-1">
      <img src="/images/hero/hero-shape-2-1.png" alt="">
    </div>
    <div class="tp-hero-3__shape-2">
      <img src="/images/hero/hero-shape-2-2.png" alt="">
    </div>

    <div class="tp-isomeric-grid d-none">
      <div class="tp-isomeric-grid-item tp-isomeric-grid-horizontal">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div class="tp-isomeric-grid-item tp-isomeric-grid-vertical">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
    <div class="tp-hero-3__social-wrap d-none d-lg-inline-flex">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Dribble</a>
      <a href="#">Instagram</a>
    </div>
    <nuxt-link to="#service">
      <div class="tp-hero-3__scrool-down d-none d-lg-inline-flex">
          <span class="text">Scroll</span>
          <span>
            <svg-scroll-arrow/>
          </span>
      </div>
    </nuxt-link>
    <div class="container">
      <div class="row">
          <div class="col-xl-12">
            <div class="tp-hero-3__content">
                <h3 class="tp-hero-3__title tp-char-animation">
                  Creative
                  <span>
                      <video autoplay playsinline>
                        <source src="https://template.wphix.com/video/diego-video.mp4" type="video/mp4">
                      </video>
                  </span>
                  Visual Designer
                </h3>
            </div>
            <div class="tp-hero-3__btn-box tp_wrap_anim d-flex align-items-center justify-content-start justify-content-md-center">
                <div class="tp-btn-bounce-3">
                  <nuxt-link class="tp-btn-blue" href="/portfolio">
                      <span class="text"> View Our Work</span>
                      <span class="icon">
                        <svg-down-arrow/>
                      </span>
                  </nuxt-link>
                </div>
                <p >Hello, I am Diego a designer from Barcelona. Specialised <br> in creating fantastic digital experiences.!</p>
            </div>
          </div>
      </div>
  </div>
 </div>
</template>

<script setup lang="ts">

</script>