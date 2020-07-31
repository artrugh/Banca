import { Component } from "react";

export default abstract class Test<P, S> extends Component<P, S> {
  public abstract classes: { [key: string]: string };
}

// class aas {
//   public constructor(private perro: { name: string }) {}
//   public get name() {
//     return this.perro.name;
//   }
// }
// const perro = new aas({ name: "arturo" });

// console.log(perro.name)

// import React, {
//   useState,
//   useEffect,
//   forwardRef,
//   useImperativeHandle,
//   RefForwardingComponent,
//   ReactNode,
//   Ref,
//   DependencyList,
//   FC,
// } from "react";

// import { throttle } from "lodash";

// interface IProps {
//   children(): JSX.Element;
// }

// interface IRef {
//   ref: Ref<typeof forwardRef>;
// }

// interface IInputRefObject {
//   init(): void;
// }

// interface IInputProps {
//   [propName: string]: any;
// }
// // { children(): JSX.Element };
// // type ScrollReveal = React.ForwardRefExoticComponent<P>
// // <Props & React.RefAttributes<React.Ref<HTMLElement>>>

// // const ScrollReveal: FC<any> = forwardRef<Ref<HTMLElement>, Props>(
// const ScrollReveal = forwardRef<IRef, IProps>((props, ref) => {
//   const [viewportHeight, setViewportheight] = useState<number>(0);
//   // const [revealEl, setRevealel] = useState<Refer[]>([]);
//   const [revealEl, setRevealel] = useState<NodeListOf<Element> | []>([]);

//   // get all the nodeElements and return if the revealEl.length <= nodeElements
//   const checkComplete = (): boolean => {
//     let elementArray: NodeListOf<Element> = null;
//     elementArray = document.querySelectorAll("[class*=reveal-].is-revealed");

//     return revealEl.length <= elementArray.length;
//   };

//   const elementIsVisible = (el: Element, offset: number): boolean => {
//     return el.getBoundingClientRect().top <= viewportHeight - offset;
//   };

//   const revealElements = (): void => {
//     // if the revealEl.length <= nodeElements return undefiend
//     if (checkComplete()) {
//       return;
//     }
//     // hola
//     // map revealEl array
//     for (let i = 0; i < revealEl.length; i++) {
//       const el: Element = revealEl[i];

//       // store the data-reveal-delay
//       const revealDelay: null | string = el.getAttribute("data-reveal-delay");

//       // if there is a value, store it otherwise set it in 200
//       const revealOffset: string = el.getAttribute("data-reveal-offset")
//         ? el.getAttribute("data-reveal-offset")
//         : "200";

//       // if tit has data-reveal-container return it, otherwise return the closest element
//       const listenedEl: Element = el.getAttribute("data-reveal-container")
//         ? el.closest(el.getAttribute("data-reveal-container"))
//         : el;

//       if (elementIsVisible(listenedEl, +revealOffset) && !el.classList.contains("is-revealed")) {
//         if (revealDelay && +revealDelay !== 0) {
//           setTimeout((): void => {
//             el.classList.add("is-revealed");
//           }, +revealDelay);
//         } else {
//           el.classList.add("is-revealed");
//         }
//       }
//     }
//   };
//   // interface useImperativeHandle<T, R extends T>(refer: Ref<T>|undefined, init: () => R, deps?: DependencyList): void;
//   // function useImperativeHandle<T, R extends T>(ref: Ref<T>|undefined, init: () => R, deps?: DependencyList): void;
//   // useImperativeHandle<HTMLElement, HTMLElement>(ref: React.Ref<HTMLElement>, init: () => HTMLElement, deps?: React.DependencyList): void

//   useImperativeHandle(ref, () => ({
//     init() {
//       setRevealel(document.querySelectorAll("[class*=reveal-]"));
//     },
//   }));

//   // useImperativeHandle(ref, () => (
//   //   {
//   //   init() {
//   //     let elementArray: NodeListOf<Element> = null;
//   //     elementArray = document.querySelectorAll("[class*=reveal-]");
//   //     setRevealel(elementArray));
//   //   },
//   // }));

//   // useImperativeHandle(ref, () => {
//   //   return {
//   //     init: () => {
//   //       setRevealel(document.querySelectorAll("[class*=reveal-]") as any);
//   //     },
//   //   };
//   // });

//   // useImperativeHandle <HTMLElement, HTMLElement>(
//   //   ref,
//   //   () => ({
//   //     init: (): void => {
//   //       setRevealel(document.querySelectorAll("[class*=reveal-]") as HTMLElement);
//   //     }
//   //   })
//   // );

//   // take care with this argument
//   const handleScroll = throttle((handleListeners) => {
//     handleListeners();
//     revealElements();
//   }, 30);

//   const handleResize = throttle(() => {
//     setViewportheight(window.innerHeight);
//   }, 30);

//   const handleListeners = (): void | undefined => {
//     if (!checkComplete()) {
//       return;
//     }

//     window.removeEventListener("scroll", handleScroll);
//     window.removeEventListener("resize", handleResize);
//   };

//   useEffect(() => setViewportheight(window.innerHeight), []);
//   useEffect(() => {
//     if (typeof revealEl !== "undefined" && revealEl.length > 0) {
//       if (!checkComplete()) {
//         window.addEventListener("scroll", handleScroll);
//         window.addEventListener("resize", handleResize);
//       }

//       revealElements();
//     }
//   }, [revealEl]);

//   useEffect(() => {
//     handleListeners();
//     revealElements();
//   }, [viewportHeight]);

//   return <>{props.children()}</>;
// });

// export default ScrollReveal;
