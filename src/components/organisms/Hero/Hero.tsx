import React, { Component, KeyboardEvent, MouseEvent } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsOuterInner } from "../../../common/interfacesProps";
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
  mail?: string;
}
type State = { videoModalActive: boolean };

class Hero extends Component<IProps, State> {
  public constructor(props: Readonly<IProps>, public state: State) {
    super(props);
    this.state = { videoModalActive: false };
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
      mail,
      ...rest
    } = this.props;

    return (
      <section
        {...rest}
        className={cn("hero section center-content", className, bgColor, {
          "has-top-divider": topOuterDivider,
          "has-bottom-divider": bottomOuterDivider,
          "invert-color": invertColor,
        })}
        id="hero"
      >
        <div className="container-sm">
          <div
            id="scroll-behaviour-header-nav-color"
            className="loaded-none hero"
          />
          <div
            className={cn("hero-inner section-inner", {
              "has-top-divider": topDivider,
              "has-bottom-divider": bottomDivider,
            })}
          >
            <div className="hero-content">
              <HeroHeading mail={mail} />
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
              video="https://player.vimeo.com/video/174395277"
              videoTag={VideoTag.iframe}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
