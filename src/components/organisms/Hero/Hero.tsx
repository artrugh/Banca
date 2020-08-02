import React, { Component, KeyboardEvent, MouseEvent } from "react";
import classNames from "classnames";

import {
  IProps,
  DefaultPropsClasses,
  KeyboardEventHandler,
  Iclasses,
} from "../../../common/interfaces";

import HeroVideo from "../../molecules/HeroVideo/HeroVideo";
import HeroHeading from "../../molecules/HeroHeading/HeroHeading";
import Modal from "../../molecules/Modal/Modal";

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultPropsClasses>;

class Hero extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultPropsClasses;
  public state: { videoModalActive: boolean } = { videoModalActive: false };
  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      className,
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

  private handleCloseModalDocument = (e: KeyboardEventHandler): void => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  private handleCloseModalKeyboard = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  public render(): JSX.Element {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,

      className,

      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses} id="hero">
        <div className="container-sm">
          <div className={this.classes.innerClasses}>
            <div className="hero-content">
              <HeroHeading />
            </div>
            <HeroVideo openModal={this.handleOpenModal} />
            <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              closeModal={this.handleCloseModal}
              closeModalDocument={this.handleCloseModalDocument}
              closeModalKeyboard={this.handleCloseModalKeyboard}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
