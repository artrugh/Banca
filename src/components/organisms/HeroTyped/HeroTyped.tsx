import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  Size,
  Headings,
  DataTypedSpeed,
  Icons,
  Color,
} from "../../../common/enums";
import { IPropsOuterInner } from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS
import HeadingTyped from "../../atoms/HeadingTyped/HeadingTyped";
import Heading from "../../atoms/Heading/Heading";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";
import Icon from "../../atoms/Icon/Icon";
// DATA
import { heroHeading } from "../../../data/staticData/staticDataHeadings";

interface IProps extends IPropsOuterInner {
  chevronAnimation?: boolean;
  colorChevron?: Color;
  strokeChevron?: Color;
  hasCleaner?: boolean;
  className?: string;
}

export default class HeroTyped extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      bgColor,
      invertColor,
      hasCleaner,
      className,
      chevronAnimation,
      colorChevron,
      strokeChevron,
      ...rest
    } = this.props;

    return (
      <section
        {...rest}
        className={cn("hero hero-typed section", bgColor, className, {
          "has-top-divider": topOuterDivider,
          "has-bottom-divider": bottomOuterDivider,
          "invert-color": invertColor,
        })}
      >
        <div className="container-sm">
          <div id="scroll-behaviour-underline" className="loaded-none hero" />
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
              <HeadingTyped
                classNameHeading="mt-0 mb-16 hero-statement typed--statement has-type-sign"
                tag={Headings.h1}
                isTyped
                dataTypedSpeed={DataTypedSpeed.fast}
                dataStr={heroHeading.title}
                dataTypedDelay={1000}
                hasCleaner={hasCleaner}
              >
                <Heading
                  classNameContainer="hero-about mt-48 sub-heading"
                  classNameHeading="mt-0 mb-0"
                  tag={Headings.h3}
                >
                  {heroHeading.paragraph}
                </Heading>
                <SmoothScroll to="features-tiles">
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
              </HeadingTyped>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
