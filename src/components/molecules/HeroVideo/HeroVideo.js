import React, { Component } from "react";

import Image from "./../../atoms/Image/Image";

class HeroVideo extends Component {
  render() {
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
