import React, { Component } from "react";
import classNames from "classnames";

import { SectionTilesProps } from "../../../utils/SectionProps";
import SectionHeader from "./../../molecules/SectionHeader/SectionHeader";
import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class Testimonial extends Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...rest
    } = this.props;

    const outerClasses = classNames(
      "testimonial section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "testimonial-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "Customer testimonials",
      paragraph:
        "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
    };

    const Items = [0, 1, 2].map((item, i) => (
      <TestimonialItem
        key={i}
        name="Roman Level"
        testimony="  — Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum
      cillum dolore eu fugiat."
        company="CompanyName"
      />
    ));

    return (
      <section {...rest} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>{Items}</div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
