import React, { Component, useState } from "react";
import classNames from "classnames";

import { SectionProps } from "../../../utils/SectionProps";
import HeroVideo from "./../../molecules/HeroVideo/HeroVideo";
import HeroHeading from "./../../molecules/HeroHeading/HeroHeading";
import Modal from "./../../molecules/Modal/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { videoModalActive: false };
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    const {
      topOuterDivider,
      bottomOuterDivider,
      hasBgColor,
      invertColor,
      className,
      topDivider,
      bottomDivider,
      ...rest
    } = this.props;

    const outerClasses = classNames(
      "hero section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...rest} className={outerClasses}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <HeroHeading />
            </div>
            <HeroVideo openModal={this.openModal} />
            <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              closeModal={this.closeModal}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe"
            />
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
