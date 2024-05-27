<script lang="ts" setup>
import {animatedHeadline} from "@/utils/animatedHeadline";
import {buttonAnimation} from "@/utils/buttonAnimation";
import UiAuthSignup from "../components/auth/ui-auth-signup.vue";
import {pitLib} from "../helpers/pitLib";
import {endpoints} from "../helpers/endpoints";

useSeoMeta({ title: "Home Page - Diego" });
definePageMeta({ layout: false });
onMounted(() => {
  useSmoothScroll();

  setTimeout(() => {
    animatedHeadline();
    useAnimationTitle();
    buttonAnimation();
    useScrollTextAnimation();
  },0)
})


const gtoken = ref('')
useQuasar();
const route = useRoute()
const authUser = pitLib.auth.get()
const loading = ref(true)
const authLink = ref()
const googleProfile = ref()

if (route.fullPath.includes('access_token')&&process.browser){
  gtoken.value=route.fullPath.split('#')[1].split('&')[1].replace('access_token=','')
  let d=await $fetch(endpoints.user.google.fetch,{
    method:'post',
    headers:{
      Authorization:'Bearer '+gtoken.value
    }
  })
  googleProfile.value=d?.data ?? ''
  if (googleProfile.value?.exist){
    pitLib.auth.set(d?.data?.exist)
    if (['admin','dietitian'].includes(googleProfile.value?.exist?.role)){
      await navigateTo('/panel')
    }
  }
}

useFetch(endpoints.user.google.url).then((d)=>{
  authLink.value=d.data.value??''
}).then(()=>{
  loading.value=false
})
</script>

<template>
  <section class="tp-hero-area p-relative tp-btn-trigger z-index-1 fix theme-bg-2">

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
          <div class="row mb-5">
            <div class="col"></div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card shadow-lg border-0 rounded-lg mt-5 p-5">

                <div class="text-center" v-if="loading">
                  <h5>Loading</h5>
                </div>

                <!--        No G Token and not auth-->
                <div class="text-center" v-if="!authUser&&!gtoken">
                  <div class="row">
                    <div class="col">
                      <h5 class="text-center">Login Please</h5>
                    </div>
                  </div>
                  <a :href="authLink" class="btn btn-outline-info"><img src="https://cdn-icons-png.flaticon.com/128/720/720255.png" class="img-fluid" height="30" width="30"> Google Login</a>
                </div>

                <ui-auth-signup v-if="googleProfile&&!googleProfile.exist" :prefill="googleProfile"></ui-auth-signup>

                <div class="text-center" v-if="authUser">
                  <ClientOnly>

                  </ClientOnly>
                </div>

              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
