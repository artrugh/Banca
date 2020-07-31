import React, { Component, MouseEvent } from "react";

import Image from "../../atoms/Image/Image";

interface IProps {
  openModal: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

class HeroVideo extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { openModal } = this.props;

    return (
      <div
        className="hero-figure reveal-from-bottom illustration-element-01"
        data-reveal-value="20px"
        data-reveal-delay="800"
      >
        <a
          data-video="https://player.vimeo.com/video/174002812"
          href="/"
          aria-controls="video-modal"
          tabIndex={0}
          role="button"
          onClick={openModal}
        >
          <Image
            className="has-shadow"
            src="/images/video-placeholder.jpg"
            alt="Hero"
            width={896}
            height={504}
          />
        </a>
      </div>
    );
  }
}

export default HeroVideo;
