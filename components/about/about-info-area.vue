<template>
  <div id="about-info-area" class="ab-info__area black-bg-3 pb-160">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="ab-info__text">
            <div>
              I’m Diego <span class="line"></span> a self though & self learned
              designer based in USA. I started as a financial planner & social
              media marketer, but now I do mix of everything from

              <a
                v-for="(item, index) in hoverRevealItems"
                :key="index"
                class="tp-hover-reveal-item"
                href="#"
                @mousemove="($event) => handleMouseMove($event, '.tp-hover-reveal-item')"
              >
                {{item.title}}
                <span></span>
                <div class="tp-hover-reveal-bg"
                  :style="`background-image: url(${item.bg_img})`"
                ></div>
                <span v-if="index !== hoverRevealItems.length - 1">{{
                  index === hoverRevealItems.length - 2 ? "&" : ","
                }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { handleMouseMove } = useHoverReveal();
const hoverRevealItems = ref([
  {
    title: "Product Design",
    bg_img: "/images/about/ab-1.png",
  },
  {
    title: "Photography",
    bg_img: "/images/about/ab-2.png",
  },
  {
    title: "Web Design",
    bg_img: "/images/about/ab-3.png",
  },
  {
    title: "Graphic Design",
    bg_img: "/images/about/ab-4.png",
  },
]);
</script>
