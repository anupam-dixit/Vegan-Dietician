<template>
  <section :class="`tp-testimonial-area ${style_2 ? 'sv-inner__customize pb-160 black-bg-3' : 'theme-bg tp-bg-light pb-80'} pt-25`">
    <div class="container">
      <div v-if="!style_2" class="row">
        <div class="col-xl-12">
          <div class="tp-testimonial-section-title">
            <div class="tp-section-title-wrapper tp_text_anim mb-50 text-center">
              <div class="tp-section-title-inner tp_title_anim p-relative">
                <span class="tp-section-subtitle">Testimonials</span>
                <h3 class="tp-section-title">What clients say</h3>
              </div>
              <p>Rated 4.9 out of 5 based on 768 reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-testimonial-slider ml-70 mr-70">
            <swiper
              :slidesPerView="1"
              :spaceBetween="0"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="[FreeMode, Thumbs, EffectFade]"
              class="tp-testimonial-slider-active swiper-container fix"
            >
              <swiper-slide v-for="item in testimonial_data" :key="item.id">
                <div
                  class="tp-testimonial-item theme-bg-2"
                  style="background-image: url(/images/testimonial/bg-distort.png);"
                >
                  <div class="tp-testimonial-quote">
                    <img src="/images/testimonial/quote.svg" alt="" />
                  </div>
                  <div
                    class="tp-testimonial-item-top d-flex align-items-center"
                  >
                    <div class="tp-testimonial-rating">
                      <span><svg-rating /></span>
                      <span><svg-rating /></span>
                      <span><svg-rating /></span>
                      <span><svg-rating /></span>
                      <span><svg-rating /></span>
                    </div>
                    <p>{{ item.rating }} Rating</p>
                  </div>

                  <div class="tp-testimonial-content">
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="tp-testimonial-thumb-slider">
              <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="10"
                :slidesPerView="3"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="[FreeMode, Thumbs]"
                :breakpoints = "{
                    992: {
                      slidesPerView: 3
                    },
                    576: {
                      slidesPerView: 2
                    },
                    0: {
                      slidesPerView: 1
                    },
                 }"
                class="tp-testimonial-nav swiper-container fix"
              >
                <swiper-slide
                  v-for="item in testimonial_nav_data"
                  :key="item.id"
                >
                  <div
                    class="tp-testimonial-user-item d-flex justify-content-center align-items-center"
                  >
                    <div class="tp-testimonial-user-thumb">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="tp-testimonial-user-content">
                      <h3 class="tp-testimonial-user-title">{{ item.name }}</h3>
                      <span class="tp-testimonial-user-designation">
                        {{ item.designation }}
                        <a href="#">{{ item.company }}</a>
                      </span>
                    </div>
                    <span class="tp-testimonial-user-border"></span>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Thumbs, EffectFade } from "swiper/modules";
defineProps<{style_2?: boolean}>();

let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const testimonial_data = [
  {
    id: 1,
    rating: 5.0,
    desc: `"Will gave our website and brand whole new life while staying true to who we are. We would never have thought of going in the direction he pitched but we couldn't be happier."`,
  },
  {
    id: 2,
    rating: 5.0,
    desc: `"Will gave our website and brand whole new life while staying true to who we are. We would never have thought of going in the direction he pitched but we couldn't be happier."`,
  },
  {
    id: 3,
    rating: 5.0,
    desc: `"Will gave our website and brand whole new life while staying true to who we are. We would never have thought of going in the direction he pitched but we couldn't be happier."`,
  },
  {
    id: 4,
    rating: 5.0,
    desc: `"Will gave our website and brand whole new life while staying true to who we are. We would never have thought of going in the direction he pitched but we couldn't be happier."`,
  },
];

const testimonial_nav_data = [
  {
    id: 1,
    img: "/images/users/user-1.jpg",
    name: "Rudra Ghosh",
    designation: "Founder & CEO at",
    company: "Dulalix",
  },
  {
    id: 2,
    img: "/images/users/avata-1.png",
    name: "Albert Flores",
    designation: "Marketing Officer at",
    company: "Google lnc",
  },
  {
    id: 3,
    img: "/images/users/avata-2.png",
    name: "Robert Henricks",
    designation: "UI/UX Designer at",
    company: "Webflow",
  },
  {
    id: 4,
    img: "/images/users/avata-3.png",
    name: "Flores Albert",
    designation: "Founder & CEO at",
    company: "Dribbble",
  },
];

onMounted(() => {
  const borderLine = document.querySelectorAll('.tp-testimonial-user-border');
  borderLine.forEach((line, index) => {
    gsap.set(line, {
      width: 0
    });
    gsap.to(line, {
      scrollTrigger: {
        trigger: '.tp-testimonial-user-border',
        start: 'top 90%',
        end: "bottom 80%",
        markers: false,
      },
      width: "100%"
    });
  });
})
</script>
