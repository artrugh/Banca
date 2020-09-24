import React, { Component, ReactNode, MouseEvent } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsButton } from "../../../common/interfacesProps";
import { Size, Color, TagType } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps extends IPropsButton {
  to: string;
  duration?: number;
  handlerOnClick?(): void;
}

const DefaultProps: IPropsButton = {
  tag: TagType.anchor,
  color: Color.transparent,
  size: Size.sm,
  children: "click",
  wide: false,
  wideMobile: false,
  disabled: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SmoothScroll extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  private easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  private scrollToEl = (
    startTime: number,
    currentTime: number,
    duration: number,
    scrollEndElemTop: number,
    startScrollOffset: number
  ): void => {
    const runtime: number = currentTime - startTime;
    let progress: number = runtime / duration;
    progress = Math.min(progress, 1);

    const ease: number = this.easeInOutQuad(progress);
    const timing: number = startScrollOffset + scrollEndElemTop * ease;
    window.scroll(0, timing);

    if (runtime < duration) {
      window.requestAnimationFrame((timestamp) => {
        const current: number = timestamp ?? new Date().getTime();
        this.scrollToEl(
          startTime,
          current,
          duration,
          scrollEndElemTop,
          startScrollOffset
        );
      });
    }
  };

  private smoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    to: string,
    duration: number,
    EventListener: Function
  ): void => {
    e.preventDefault();

    const targetId = to;
    const target = document.getElementById(targetId)! as HTMLElement;
    const timing = duration ?? 1000;

    if (!target) {
      return;
    }

    if (EventListener) {
      EventListener();
    }

    window.requestAnimationFrame((timestamp: number) => {
      const stamp = timestamp ?? new Date().getTime();
      const start = stamp;

      const startScrollOffset: number = window.pageYOffset;
      const scrollEndElemTop: number = target.getBoundingClientRect().top;

      this.scrollToEl(
        start,
        stamp,
        timing,
        scrollEndElemTop,
        startScrollOffset
      );
    });
  };

  public render(): JSX.Element {
    const {
      tag,
      className,
      children,
      color,
      size,
      wide,
      wideMobile,
      to,
      duration,
      handlerOnClick,
      ...rest
    } = this.props;

    return (
      <div className="button-container">
        <a
          {...rest}
          tabIndex={0}
          role="button"
          className={cn(className, {
            button: tag === TagType.button,
            [`button-${color}`]: color,
            [`button-${size}`]: size,
            "button-block": wide,
            "button-wide-mobile": wideMobile,
          })}
          href={"#" + to}
          onClick={(e) => this.smoothScroll(e, to, duration, handlerOnClick)}
        >
          {children}
        </a>
      </div>
    );
  }
}

export default SmoothScroll;
