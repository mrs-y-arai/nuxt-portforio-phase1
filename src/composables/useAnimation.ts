import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  /**
   * スライドインアニメーション
   * @param el テキスト要素
   * @param coatEl 上に被せる要素
   */
  const slideIn = (el: HTMLElement, coatEl: HTMLElement) => {
    gsap.set(el, {
      opacity: 0,
      x: "-30%",
    });

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        toggleActions: "restart none none none",
      },
      duration: 0.5,
      x: 0,
      opacity: 1,
    });

    gsap.to(coatEl, {
      scrollTrigger: {
        trigger: coatEl,
        toggleActions: "restart none none none",
      },
      duration: 0.5,
      delay: 0.5,
      x: "100%",
    });
  };

  /**
   * 要素が順番にフェードインするアニメーション
   * @param items 要素の配列
   */
  const orderFadeIn = (items: HTMLElement[]) => {
    console.log(items);
    items.forEach((item, index) => {
      gsap.set(item, {
        y: 100,
        opacity: 0,
      });

      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          toggleActions: "restart none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.1 * index,
      });
    });
  };

  return {
    slideIn,
    orderFadeIn,
  };
};
