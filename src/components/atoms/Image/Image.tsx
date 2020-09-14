import React, { Component, createRef } from "react";
import cn from "classnames";
// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  gradientBg?: boolean;
  className?: string;
  shadow?: boolean | string;
  classNameContainer?: string;
  animationHover?: boolean;
}

class Image extends Component<IProps> {
  private image = createRef<HTMLImageElement>();

  public constructor(props: IProps) {
    super(props);
  }

  public componentDidMount(): void {
    const placeholderImage = document.createElement("img")! as HTMLImageElement;
    this.handlePlaceholder(this.image.current, placeholderImage);
  }

  private placeholderSrc = (w: number, h: number): string => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  };

  private handlePlaceholder = (
    img: HTMLImageElement,
    placeholder: HTMLImageElement
  ): void => {
    img.style.display = "none";

    img.before(placeholder);

    placeholder.src = this.placeholderSrc(
      +img.getAttribute("width") ?? 0,
      +img.getAttribute("height") ?? 0
    );

    placeholder.width = +img.getAttribute("width");
    placeholder.height = +img.getAttribute("height");
    placeholder.style.opacity = "0";

    if (img.className) {
      placeholder.classList.add(img.className);
    }

    if (img) {
      placeholder.remove();
      img.style.display = "";
      // or
      // this event is not working in the logo and hero img
      img.addEventListener("load", () => {
        placeholder.remove();
        img.style.display = "";
      });
    }
  };

  public render(): JSX.Element {
    const {
      className,
      classNameContainer,
      animationHover,
      gradientBg,
      shadow,
      src,
      width,
      height,
      alt,
      ...rest
    } = this.props;

    return (
      <div
        className={cn("img-container", {
          [classNameContainer]: classNameContainer,
          "has-gradient": gradientBg,
          "has-animation-hover": animationHover,
        })}
      >
        <img
          {...rest}
          ref={this.image}
          className={cn({
            [className]: className,
            [`has-shadow-${shadow}`]: shadow,
          })
            .split(" ")
            .join("--")}
          src={src}
          style={{ width, height }}
          alt={alt}
        />
      </div>
    );
  }
}

export default Image;
