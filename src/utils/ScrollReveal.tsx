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

interface IRef {
  init(): void;
}

const ScrollReveal: ForwardRefRenderFunction<IRef, IProps> = (props, ref) => {
  const [viewportHeight, setViewportheight] = useState<number>(0);
  // const [revealEl, setRevealel] = useState<Refer[]>([]);
  const [revealEl, setRevealel] = useState<NodeListOf<Element> | []>([]);

  // get all the nodeElements and return if the revealEl.length <= nodeElements
  const checkComplete = (): boolean => {
    let elementArray: NodeListOf<Element> = null;
    elementArray = document.querySelectorAll("[class*=reveal-].is-revealed");

    return revealEl.length <= elementArray.length;
  };

  const elementIsVisible = (el: Element, offset: number): boolean => {
    return el.getBoundingClientRect().top <= viewportHeight - offset;
  };

  const revealElements = (): void => {
    // if the revealEl.length <= nodeElements return undefiend
    if (checkComplete()) {
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

      if (elementIsVisible(listenedEl, +revealOffset) && !el.classList.contains("is-revealed")) {
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

  useImperativeHandle(ref, () => ({
    init: () => {
      let elementArray: NodeListOf<Element> = null;
      elementArray = document.querySelectorAll("[class*=reveal-]");
      setRevealel(elementArray);
    },
  }));
  interface IhandleListeners {
    (scroll: () => void | undefined, reveal: () => void | undefined): void | undefined;
  }

  const handleListeners: IhandleListeners = (scroll, resize): void | undefined => {
    if (!checkComplete()) {
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
  }, 30);

  useEffect(() => setViewportheight(window.innerHeight), []);
  useEffect(() => {
    if (typeof revealEl !== "undefined" && revealEl.length > 0) {
      if (!checkComplete()) {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
      }

      revealElements();
    }
  }, [revealEl]);

  useEffect(() => {
    handleListeners(handleScroll, handleResize);
    revealElements();
  }, [viewportHeight]);

  return <>{props.children}</>;
};

export default forwardRef(ScrollReveal);
