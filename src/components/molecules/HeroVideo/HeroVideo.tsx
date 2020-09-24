import React, { Component, MouseEvent } from "react";

// STYLE

// BASE CLASS

// COMMON
import { BgColor } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps {
  shadow?: boolean;
  bgColor?: BgColor;
  openModal: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

class HeroVideo extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public get imageShadow(): boolean | string {
    let imgShadow: boolean | string = false;
    const { shadow, bgColor } = this.props;

    if (shadow) {
      if (
        bgColor === BgColor.darkHigh ||
        bgColor === BgColor.darkMedium ||
        bgColor === BgColor.darkLow
      ) {
        imgShadow = "light";
      } else {
        imgShadow = "dark";
      }
    }

    return imgShadow;
  }

  public render(): JSX.Element {
    const { openModal } = this.props;

    return (
      <div
        className="hero-figure reveal-from-bottom illustration-element-01"
        data-reveal-value="20px"
        data-reveal-delay="800"
      >
        <div id="scroll-behaviour-cookies" className="loaded-none" />
        <a
          data-video="https://player.vimeo.com/video/174002812"
          href="/"
          aria-controls="video-modal"
          tabIndex={0}
          role="button"
          onClick={openModal}
        >
          <Image
            shadow={this.imageShadow}
            src="/images/video-placeholder.jpg"
            alt="Hero"
            height="auto"
          />
        </a>
      </div>
    );
  }
}

export default HeroVideo;
