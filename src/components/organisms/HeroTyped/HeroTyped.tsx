import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  Size,
  Headings,
  DataTypedSpeed,
  Positions,
  Color,
} from "../../../common/enums";
import {
  IPropsClasses,
  IPropsOuterInner,
} from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS
import HeadingTyped from "../../atoms/HeadingTyped/HeadingTyped";
import Heading from "../../atoms/Heading/Heading";
import Arrow from "../../atoms/Arrow/Arrow";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";

interface IProps extends IPropsOuterInner {
  colorArrow?: Color;
  hasCleaner?: boolean;
  className?: string;
}

export default class HeroTyped extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
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
      "hero-typed section",
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

  public render(): JSX.Element {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      bgColor,
      invertColor,
      hasCleaner,
      colorArrow,
      className,
      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses}>
        <div className="container-sm">
          <div id="scroll-behavior-header-bg" className="loaded-none hero" />
          <div
            id="scroll-behavior-hero-statement-color"
            className="loaded-none hero"
          />
          <div className={this.classes.innerClasses}>
            <div className="hero-content">
              <HeadingTyped
                classNameHeading="mt-0 mb-16 hero-statement typed--statement has-type-sign"
                tag={Headings.h1}
                isTyped
                dataTypedSpeed={DataTypedSpeed.fast}
                dataStr="The Fusion of Ideas, Art and Technology."
                dataTypedDelay={1000}
                hasCleaner={hasCleaner}
              >
                <Heading
                  classNameContainer="hero-about mt-48"
                  classNameHeading="mt-0 mb-0"
                  tag={Headings.h3}
                >
                  - combining technical expertise, cross-industry, know-how to
                  lead you to success -
                </Heading>
                <SmoothScroll to="features-tiles">
                  <Arrow
                    className="hero-arrow"
                    containerClass="hero-arrow-container"
                    color={colorArrow}
                    containerSize={Size.sm}
                    position={Positions.down}
                  />
                </SmoothScroll>
              </HeadingTyped>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
