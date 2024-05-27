import {gsap} from "gsap";

export function useCharAnimation() {
  const { $SplitText } = useNuxtApp();
  gsap.registerPlugin($SplitText as any);
  const SplitText: any = $SplitText;
  const char_anim = document.querySelector('.tp-char-animation');
  const char_anim_2 = document.querySelector('.tp-char-animation-2');

  if (char_anim) {
    let char_come = gsap.utils.toArray(".tp-char-animation");
    char_come.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" })
      tl.from(itemSplitted.chars,
        {
          duration: 1,
          x: 100,
          autoAlpha: 0,
          stagger: 0.05
        });
    });
  }

  if (char_anim_2) {
    let char_come = gsap.utils.toArray(".tp-char-animation-2");
    char_come.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" })
      tl.from(itemSplitted.chars,
        {
          duration: .7,
          opacity: 0,
          scale: 0,
          y: 60,
          delay: .7,
          rotationX: 180,
          transformOrigin: "0% 30% -30%",
          stagger: 0.01
        });
    });
  }

  const route = useRoute();
  watch(() => route.path, () => {
    
  })
}