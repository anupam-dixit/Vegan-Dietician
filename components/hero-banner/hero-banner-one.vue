<template>
  <section class="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2">
      <div class="tp-hero-social-wrapper">
        <span class="tp-hero-social-bar"></span>
        <div class="tp-hero-social">
            <a href="#">
              <svg-email/>
            </a>
            <a href="#">
              <svg-dribble/>
            </a>
            <a href="#">
              <svg-behance/>
            </a>
        </div>
      </div>
      <div class="tp-hero-shape">
        <div class="tp-hero-shape-1 background-white-mode" style="background-image:url(/images/hero/hero-overlay.png)"></div>
        <div class="tp-hero-shape-1 background-dark-mode" style="background-image:url(/images/hero/hero-overlay-2.png)"></div>
        <span class="tp-hero-shape-2"></span>
      </div>
      <div class="tp-hero-bottom-text-wrapper">
        <div class="tp-hero-bottom-text">
            <p>Hello Vegan</p>
            <p>Hello Vegan</p>
        </div>
        <div class="tp-hero-bottom-text">
            <p>Hello Vegan</p>
            <p>Hello Vegan</p>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-7 col-lg-7 col-md-12">
              <div class="tp-hero-left-wrapper">
                  <div class="tp-hero-content tp_text_anim p-relative z-index-1">
                    <span>Hello There! <img src="/images/hero/hero-hand.png" alt=""></span>
                    <h3 class="tp-hero-title cd-headline clip tp_title_anim">
                      I am Dietitian <br>
                        <span class="cd-words-wrapper">
                          <b class="is-visible">Yoga Coach</b>
                          <b class="app">Mental Coach</b>
                        </span>
                    </h3>

                    <p>Nutrition is the only remedy that can bring full recovery and can be used with any treatment. Remember, food is our best medicine!</p>

                    <div class="tp-hero-btn wrap ">
                        <div class="tp-hover-btn-wrapper tp-btn-bounce">
                          <nuxt-link href="/contact" class="tp-hover-btn tp-hover-btn-item tp-btn-circle square">
                              <span class="tp-btn-circle-text">
                                Get <br> In Touch
                              </span>
                              <span class="tp-btn-circle-arrow">
                                <svg-circle/>
                              </span>
                              <i class="tp-btn-circle-dot"></i>
                          </nuxt-link>
                        </div>
                    </div>
                    <div class="tp-hero-scroll smooth">
                        <nuxt-link to="#tp-sv">
                          <span class="tp-hero-scroll-bar"></span>
                          <span class="tp-hero-scroll-mouse"></span>
                        </nuxt-link>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12">
              <div class="tp-hero-thumb-wrapper text-center text-lg-end p-relative z-index-1">
                  <div class="tp-hero-thumb-shape">
                    <img class="tp-hero-thumb-shape-1" data-speed="1.4"  src="/images/hero/shape/hero-shape-1.png" alt="">
                    <img class="tp-hero-thumb-shape-2 d-none d-xl-block" data-speed="1.2" src="/images/hero/shape/hero-shape-2.png" alt="">
                    <span class="tp-hero-thumb-shape-3"></span>
                  </div>
                  <div class="tp-hero-thumb">
                    <img src="/images/hero/pic_1.png" alt="">
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">

</script>