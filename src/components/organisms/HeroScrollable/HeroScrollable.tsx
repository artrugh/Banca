import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  Size,
  Headings,
  ScrollPosition,
  Icons,
  Color,
} from "../../../common/enums";
import { IPropsOuterInner } from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS
import Heading from "../../atoms/Heading/Heading";
import Icon from "../../atoms/Icon/Icon";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";
// DATA
import { heroHeading } from "../../../data/staticData/staticDataHeadings";

interface IProps extends IPropsOuterInner {
  children?: ReactNode;
  containerSize?: string;
  underlineSize?: string;
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  chevronAnimation?: boolean;
  gradientBg?: boolean;
  className?: string;
  colorChevron?: Color;
  strokeChevron?: Color;
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
      bgColor,
      gradientBg,
      className,
      chevronAnimation,
      colorChevron,
      strokeChevron,
      ...rest
    } = this.props;

    return (
      <section
        {...rest}
        className="hero-scrollable"
        id="hero"
        data-color="green"
      >
        <div {...rest} className={cn("hero hero-scrollable", bgColor)}>
          <div className="hero-scrollable-container">
            <div
              id="scroll-behaviour-main-underline-bg"
              className="loaded-none"
            />
            <div className={cn("hero-img", className)}>
              <SmoothScroll to="scroll-smooth-position">
                <div
                  className={cn("hero-chevron-container container-sm", {
                    [`has-animation`]: chevronAnimation,
                  })}
                >
                  <Icon
                    className="float-right hero-chevron"
                    name={Icons.chevron}
                    color={colorChevron}
                    strokeColor={strokeChevron}
                    size={Size.super}
                  />
                </div>
              </SmoothScroll>
            </div>
            <div
              id="scroll-behaviour-underline"
              className="hero-scrollable loaded-none"
            />
            <div
              id="scroll-behaviour-hero-statement-color"
              className="loaded-none hero-scrollable"
            />
            <div
              id="scroll-behaviour-header-nav-color"
              className="loaded-none hero-scrollable"
            />
            <div id="scroll-smooth-position" className="loaded-none" />
            <div className="container-lg">
              <div className="hero-divider" />
              <div className="hero-illustration illustration-section-01" />
              <Heading
                underlineSize={Size.lg}
                classNameContainer="hero-statement"
                animation
                classNameHeading="mt-0 mb-0 heading"
                tag={Headings.h1}
              >
                {heroHeading.title}
                <div id="scroll-behaviour-cookies" />
              </Heading>
              <Heading
                underlineSize={Size.lg}
                classNameContainer="hero-about"
                classNameHeading="mt-0 mb-0 sub-heading"
                tag={Headings.h2}
                scrollPosition={ScrollPosition.rightLeft}
              >
                {heroHeading.paragraph}
              </Heading>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
