import React, { Component, ReactNode, MouseEvent } from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  children?: ReactNode;
  to: string;
  duration?: number;
  onLinkClick?: () => void;
}

class SmoothScroll extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  private easeInOutQuad(t): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  private scrollToEl(
    startTime: number,
    currentTime: number,
    duration: number,
    scrollEndElemTop: number,
    startScrollOffset: number
  ): void {
    const runtime: number = currentTime - startTime;
    let progress: number = runtime / duration;
    progress = Math.min(progress, 1);

    const ease: number = this.easeInOutQuad(progress);
    const timing: number = startScrollOffset + scrollEndElemTop * ease;
    window.scroll(0, timing);

    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const current: number = timestamp || new Date().getTime();
        this.scrollToEl(startTime, current, duration, scrollEndElemTop, startScrollOffset);
      });
    }
  }

  private smoothScroll(
    e: MouseEvent<HTMLAnchorElement>,
    to: string,
    duration: number,
    onLinkClick: Function
  ): void {
    e.preventDefault();

    const targetId = to;
    const target: HTMLElement = document.getElementById(targetId);
    const timing = duration || 1000;

    if (!target) {
      return;
    }

    if (onLinkClick) {
      onLinkClick();
    }

    window.requestAnimationFrame((timestamp: number) => {
      const stamp = timestamp || new Date().getTime();
      const start = stamp;

      const startScrollOffset: number = window.pageYOffset;
      const scrollEndElemTop: number = target.getBoundingClientRect().top;

      this.scrollToEl(start, stamp, timing, scrollEndElemTop, startScrollOffset);
    });
  }

  public render(): JSX.Element {
    const { className, children, to, duration, onLinkClick, ...rest } = this.props;

    return (
      <a
        {...rest}
        tabIndex={0}
        role="button"
        className={classNames(className)}
        href={"#" + to}
        // onKeyDown={(e) => this.smoothScroll(e, to, duration, onLinkClick)}
        onClick={(e) => this.smoothScroll(e, to, duration, onLinkClick)}
      >
        {children}
      </a>
    );
  }
}

export default SmoothScroll;