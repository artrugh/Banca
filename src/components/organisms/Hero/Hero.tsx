import React, { KeyboardEvent, MouseEvent } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../_base/BaseGetterClasses";
// COMMON
import { IProps, DefaultPropsClasses, EventHandler, Iclasses } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import HeroVideo from "../../molecules/HeroVideo/HeroVideo";
import HeroHeading from "../../molecules/HeroHeading/HeroHeading";
import Modal from "../../molecules/Modal/Modal";

type Props = {} & Partial<DefaultProps>;
type State = { videoModalActive: boolean };
type DefaultProps = Readonly<typeof DefaultPropsClasses>;

class Hero extends BaseClassesGetter<IProps, State> {
  public static defaultProps: Partial<Props> = DefaultPropsClasses;

  public constructor(props: Readonly<IProps>, public state: State) {
    super(props);
    this.state = { videoModalActive: false };
  }

  public get classes(): Iclasses {
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

  private handleCloseModalDocument: EventHandler<KeyboardEvent> = (e: KeyboardEvent): void => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  private handleCloseModalKeyboard: EventHandler<KeyboardEvent<HTMLDivElement>> = (
    e: KeyboardEvent<HTMLDivElement>
  ): void => {
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
