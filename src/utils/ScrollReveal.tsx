import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";

import { throttle } from "lodash";

interface IProps {
  children: ReactNode;
  [propName: string]: any;
}

type IRef = { init(): void };

interface IhandleListeners {
  (scroll: () => void, reveal: () => void): void | undefined;
}

const ScrollReveal: ForwardRefRenderFunction<IRef, IProps> = (props, ref) => {
  const [viewportHeight, setViewportheight] = useState<number>(0);
  const [revealEl, setRevealel] = useState<NodeListOf<Element> | []>([]);
  const [typedEl, setTypedel] = useState<NodeListOf<Element> | []>([]);

  // get all the nodeElements and return if the revealEl.length <= nodeElements
  const checkCompleteReveal = (): boolean => {
    const elementArray = document.querySelectorAll(
      "[class*=reveal-].is-revealed"
    )! as NodeListOf<Element>;

    return revealEl.length <= elementArray.length;
  };

  // get all the nodeElements and return if the revealEl.length <= nodeElements
  const checkCompleteTyped = (): boolean => {
    const elementArray = document.querySelectorAll(
      "[class*=typed-].is-typed"
    )! as NodeListOf<Element>;

    return typedEl.length <= elementArray.length;
  };

  const elementIsVisible = (el: Element, offset: number): boolean => {
    let visible: boolean = false;

    if (el) {
      visible = el.getBoundingClientRect().top <= viewportHeight - offset;
    }

    return visible;
  };

  const revealElements = (): void => {
    // check if the proccess has already been completed
    if (checkCompleteReveal()) {
      return;
    }

    // map revealEl array
    for (let i = 0; i < revealEl.length; i++) {
      const el: Element = revealEl[i];

      // store the data-reveal-delay
      const revealDelay: null | string = el.getAttribute("data-reveal-delay");

      // if there is a value, store it otherwise set it in 200
      const revealOffset: string = el.getAttribute("data-reveal-offset")
        ? el.getAttribute("data-reveal-offset")
        : "200";

      // if tit has data-reveal-container return it, otherwise return the closest element
      const listenedEl: Element = el.getAttribute("data-reveal-container")
        ? el.closest(el.getAttribute("data-reveal-container"))
        : el;

      if (
        elementIsVisible(listenedEl, +revealOffset) &&
        !el.classList.contains("is-revealed")
      ) {
        if (revealDelay && +revealDelay !== 0) {
          setTimeout((): void => {
            el.classList.add("is-revealed");
          }, +revealDelay);
        } else {
          el.classList.add("is-revealed");
        }
      }
    }
  };

  const typedElements = (): void => {
    // check if the proccess has already been completed
    if (checkCompleteTyped()) {
      return;
    }

    // map revealEl array
    for (let i = 0; i < typedEl.length; i++) {
      const el: Element = typedEl[i];

      // store the data-reveal-delay
      const typedDelay: null | string = el.getAttribute("data-typed-delay");

      const cleanDelay: null | number = el.getAttribute("data-str")
        ? el.getAttribute("data-str").length *
            +el.getAttribute("data-typed-speed") +
          3000
        : null;

      // if there is a value, store it otherwise set it in 200
      const revealOffset: string = el.getAttribute("data-reveal-offset")
        ? el.getAttribute("data-reveal-offset")
        : "200";

      // if tit has data-reveal-container return it, otherwise return the closest element
      const listenedEl: Element = el.getAttribute("data-typed-container")
        ? el.closest(el.getAttribute("data-typed-container"))
        : el;

      if (
        elementIsVisible(listenedEl, +revealOffset) &&
        !el.classList.contains("is-revealed")
      ) {
        if (typedDelay && +typedDelay !== 0) {
          setTimeout((): void => {
            el.classList.add("is-typed");
          }, +typedDelay);

          setTimeout((): void => {
            el.classList.add("clean-typed");
          }, +cleanDelay);
        } else {
          el.classList.add("is-typed");
        }
      }
    }
  };

  useImperativeHandle(ref, () => ({
    init: () => {
      const elementsRevealArray = document.querySelectorAll(
        "[class*=reveal-]"
      )! as NodeListOf<Element>;

      const elementsTypedArray = document.querySelectorAll(
        "[class*=typed-]"
      )! as NodeListOf<Element>;

      setRevealel(elementsRevealArray);
      setTypedel(elementsTypedArray);
    },
  }));

  const handleListeners: IhandleListeners = (
    scroll,
    resize
  ): void | undefined => {
    if (!checkCompleteReveal()) {
      return;
    }

    if (!checkCompleteTyped()) {
      return;
    }

    window.removeEventListener("scroll", scroll);
    window.removeEventListener("resize", resize);
  };

  const handleResize = throttle(() => {
    setViewportheight(window.innerHeight);
  }, 30);

  const handleScroll = throttle(() => {
    handleListeners(handleScroll, handleResize);
    revealElements();
    typedElements();
  }, 30);

  useEffect(() => setViewportheight(window.innerHeight), []);
  useEffect(() => {
    if (typeof revealEl !== "undefined" && revealEl.length > 0) {
      if (!checkCompleteReveal()) {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
      }

      revealElements();
      typedElements();
    }
  }, [revealEl]);

  useEffect(() => {
    handleListeners(handleScroll, handleResize);
    revealElements();
    typedElements();
  }, [viewportHeight]);

  return <>{props.children}</>;
};

export default forwardRef(ScrollReveal);
