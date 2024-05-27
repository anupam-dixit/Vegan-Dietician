<template>
 <section class="tp-about-area fix">
      <div class="container container-large">
        <div class="tp-about-inner pt-145 pb-80">
            <span class="tp-about-inner-border transition-3"></span>
            <div class="row">
              <div class="col-xl-5 col-lg-5">
                  <div class="tp-about-wrapper">
                    <div class="tp-section-title-wrapper p-relative mb-45">
                        <span class="tp-section-subtitle-bg">About Me</span>
                        <span class="tp-section-subtitle tp-section-subtitle-1 tp-about-subtitle">About
                          Me</span>
                    </div>
                    <div class="tp-about-thumb-wrapper p-relative z-index-1">
                        <div class="tp-about-thumb p-relative z-index-1">
                          <div class="tp-about-thumb-bg-shape include-bg" style="background-image:url(/images/about/shape/about-shape-1.png)"></div>
                          <img src="/images/about/about-1.png" alt="">
                        </div>
                    </div>
                  </div>
              </div>
              <div class="col-xl-7 col-lg-7">
                  <div class="tp-about-desc">
                    <div class="tp-about-award d-inline-block">
                        <div class="tp-about-award-icon d-inline-block mr-15">
                          <span>
                              <img src="/images/about/award-icon.svg" alt="">
                          </span>
                        </div>
                        <div class="tp-about-award-content d-inline-block">
                          <h4 class="tp-about-award-title">Independent Of The Year</h4>
                          <p>Annual Awards 2020 • awwwards.com</p>
                        </div>
                    </div>
                    <div class="tp-about-desc-content mb-40">
                        <p>Hello! I’m <span>Diego</span> a self-taught & award-winning <span>Digital Designer & Developer</span> with over <span>fifteen years of work experience</span>. I started in my children’s room and got pro at renowned digital<span> nexum AG</span> agencies.</p>
                    </div>
                    <div class="tp-about-fact">
                        <div class="row">
                          <div class="col-md-4 col-sm-6 mb-30">
                              <div class="tp-about-fact-item">
                                <h4><counter-item :min="0" :max="180" />+</h4>
                                <p>Project Delivered</p>
                              </div>
                          </div>
                          <div class="col-md-4 col-sm-6 mb-30">
                              <div class="tp-about-fact-item">
                                <h4><counter-item :min="0" :max="13" />+</h4>
                                <p>Years of Experience</p>
                              </div>
                          </div>
                          <div class="col-md-4 col-sm-6 mb-30">
                              <div class="tp-about-fact-item">
                                <h4><counter-item :min="0" :max="40" />+</h4>
                                <p>Happy Clients</p>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">

</script>