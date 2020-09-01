import React, { Component, createRef } from "react";
import classNames from "classnames";
// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
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
  containerClassName?: string;
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

  public get classes(): IPropsClasses {
    const {
      className,
      containerClassName,
      gradientBg,
      animationHover,
    } = this.props;

    const container = classNames(
      containerClassName && containerClassName,
      "img-container",
      gradientBg && "has-gradient",
      animationHover && "has-animation-hover"
    );
    const image = classNames(className && className);

    return { image, container };
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
      containerClassName,
      animationHover,
      gradientBg,
      src,
      width,
      height,
      alt,
      ...rest
    } = this.props;

    return (
      <div className={this.classes.container}>
        <img
          {...rest}
          ref={this.image}
          className={this.classes.image}
          src={src}
          style={{ width, height }}
          alt={alt}
        />
      </div>
    );
  }
}

export default Image;
