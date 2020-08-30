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
} from "../../../common/enums";
import {
  IPropsClasses,
  IPropsOuterInner,
} from "../../../common/interfacesProps";
// HELPERS

// UTILS

// COMPONENTS
import HeadingTyped from "../../atoms/HeadingTyped/HeadingTyped";
import Arrow from "../../atoms/Arrow/Arrow";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";

interface IProps extends IPropsOuterInner {
  hasCleaner?: boolean;
  className?: string;
}

export default class HeroTyped extends Component<IProps> {
  public get classes(): IPropsClasses {
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
      "hero-typed section",
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

  public render(): JSX.Element {
    const {
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      hasCleaner,
      className,
      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses} id="hero">
        <div className="container-sm">
          <div id="scroll-behavior-header-bg" className="loaded-none hero" />
          <div
            id="scroll-behavior-hero-statement-color"
            className="loaded-none hero"
          />
          <div className={this.classes.innerClasses}>
            <div className="hero-content">
              <HeadingTyped
                classNameHeading="mt-0 mb-16 hero-statement typed--statement"
                tag={Headings.h1}
                isTyped
                dataTypedSpeed={DataTypedSpeed.fast}
                dataStr="We combine our tecnical expertise with know-how."
                dataTypedDelay={500}
                hasCleaner={hasCleaner}
              >
                <SmoothScroll to="tiles">
                  <Arrow
                    className="hero-arrow"
                    containerClass="hero-arrow-container"
                    // color={Color.dark}
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
