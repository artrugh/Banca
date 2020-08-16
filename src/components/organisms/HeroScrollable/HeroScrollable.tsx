import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Sizes, Headings } from "../../../common/enums";
import { IPropsClasses } from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS
import Heading from "../../atoms/Heading/Heading";
// import Image from "../../atoms/Image/Image";

interface IProps {
  children?: string;
  containerSize?: string;
  underlineSize?: string;
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  gradientBg?: boolean;
  className?: string;
}

const DefaultProps: IProps = {
  children: "Add title to the Hero",
  gradientBg: true,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

export default class HeroScrollable extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public get classes(): IPropsClasses {
    const { className } = this.props;

    const image = classNames("hero-img", className && className);

    return { image };
  }

  public render(): JSX.Element {
    const {
      children,
      containerSize,
      underlineSize,
      src,
      width,
      height,
      alt,
      gradientBg,
      className,
      ...rest
    } = this.props;

    return (
      <section {...rest} className="hero-scrollable" id="hero">
        <div {...rest} className="hero-content">
          <div className="hero-scrollable-container">
            {/* <Image
              className={className}
              src={src}
              alt={alt}
              height={height}
              gradientBg={gradientBg}
              containerClassName="hero-img-container"
            /> */}
            <div
              id="scroll-behavior-main-underline-bg"
              className="loaded-none"
            />
            <div className={this.classes.image} />
            <div id="scroll-behavior-header-bg" className="loaded-none" />
            <div className="container-big">
              <div className="hero-divider" />

              <Heading
                underlineSize={Sizes.big}
                name="statement"
                animation
                classNameHeading="mt-0 mb-0"
                tag={Headings.h1}
              >
                We combine our tecnical expertise with know-how.
                <div id="scroll-behaviour-cookies" />
              </Heading>
              <Heading
                underlineSize={Sizes.big}
                name="about"
                classNameHeading="mt-0 mb-0"
                tag={Headings.h2}
              >
                We combine our tech competence with our experiencies in
                different fields leading our clients from concepts to successful
                IT projects.
              </Heading>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
