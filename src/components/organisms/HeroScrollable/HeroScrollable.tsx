import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { Sizes, Headings } from "../../../common/enums";
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
        <div {...rest} className="hero-content container-big">
          {/* <div className="container-sm"> */}
          <div className="hero-scrollable-container">
            {/* <Image
              className={className}
              src={src}
              alt={alt}
              height={height}
              gradientBg={gradientBg}
              containerClassName="hero-img-container"
            /> */}
            <div className={`hero-img ${className}`} />
            <div id="scroll-behavior-header-bg" />

            <div className="hero-divider" />

            <Heading
              underlineSize={Sizes.big}
              name="statement"
              animation
              classNameHeading="mt-0 mb-12"
              tag={Headings.h1}
            >
              We combine our tecnical expertise with know-how.
              <div id="scroll-behaviour-cookies" />
            </Heading>
            <Heading
              underlineSize={Sizes.sm}
              name="about"
              classNameHeading="mt-0 mb-12"
              tag={Headings.h2}
            >
              We combine our tech competence with our experiencies in different
              fields leading our clients from concepts to successful IT
              projects.
            </Heading>
          </div>
        </div>
      </section>
    );
  }
}
