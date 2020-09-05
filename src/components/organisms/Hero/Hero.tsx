import React, { Component, KeyboardEvent, MouseEvent } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  IPropsOuterInner,
  IPropsClasses,
} from "../../../common/interfacesProps";
import { IEventHandler } from "../../../common/interfacesEvents";
import { VideoTag } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import HeroVideo from "../../molecules/HeroVideo/HeroVideo";
import HeroHeading from "../../molecules/HeroHeading/HeroHeading";
import Modal from "../../molecules/Modal/Modal";

interface IProps extends IPropsOuterInner {
  className?: string;
}
type State = { videoModalActive: boolean };

class Hero extends Component<IProps, State> {
  public constructor(props: Readonly<IProps>, public state: State) {
    super(props);
    this.state = { videoModalActive: false };
  }

  public get classes(): IPropsClasses {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      bgColor,
      invertColor,
      className,
    } = this.props;

    const outerClasses = classNames(
      "hero section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      bgColor && bgColor,
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return { outerClasses, innerClasses };
  }

  private handleOpenModal = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  private handleCloseModal = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  private handleCloseModalDocument: IEventHandler<KeyboardEvent> = (
    e: KeyboardEvent
  ): void => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  private handleCloseModalKeyboard: IEventHandler<
    KeyboardEvent<HTMLDivElement>
  > = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  public render(): JSX.Element {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      bgColor,
      invertColor,
      className,
      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses} id="hero">
        <div className="container-sm">
          <div
            id="scroll-behaviour-header-nav-color"
            className="loaded-none hero"
          />
          <div className={this.classes.innerClasses}>
            <div className="hero-content">
              <HeroHeading />
            </div>
            <HeroVideo
              openModal={this.handleOpenModal}
              bgColor={bgColor}
              shadow
            />
            <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              closeModal={this.handleCloseModal}
              closeModalDocument={this.handleCloseModalDocument}
              closeModalKeyboard={this.handleCloseModalKeyboard}
              video="https://player.vimeo.com/video/174002812"
              videoTag={VideoTag.iframe}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
