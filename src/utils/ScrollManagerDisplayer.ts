export const ScrollManagerDisplayer = (id: string): void => {
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          document.body.classList.add(id);
          document.querySelector(`#${id}`).classList.remove("loaded-none");
          document.querySelector(`#${id}`).classList.add("loaded");
        } else {
          document.body.classList.remove(id);
        }
      }
    );
    const displayer = document.querySelector(`#${id}`)! as HTMLDivElement;

    if (displayer) {
      observer.observe(displayer);
    }
  }
};
