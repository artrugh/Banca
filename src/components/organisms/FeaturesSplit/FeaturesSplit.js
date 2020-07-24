import React, { Component } from "react";
import classNames from "classnames";

import { SectionSplitProps } from "../../../utils/SectionProps";
import SectionHeader from "./../../molecules/SectionHeader/SectionHeader";
import SplitItem from "../../molecules/SplitItem/SplitItem";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...rest
    } = this.props;

    const outerClasses = classNames(
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "Workflow that just works",
      paragraph:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
    };

    const Items = [0, 1, 2].map((item, i) => (
      <SplitItem
        key={i}
        title="Data-driven insights"
        subTitle="Lightning fast workflow"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua — Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="./images/features-split-image-01.png"
        alt="Features split 01"
        imageFill={imageFill}
      />
    ));

    return (
      <section {...rest} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>{Items}</div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
