import React, { Component } from "react";
import classNames from "classnames";

import { SectionTilesProps } from "../../../utils/SectionProps";
import SectionHeader from "./../../molecules/SectionHeader/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class SectionTemplate extends Component {
  
  render() {
    const {
      containerSize,
      sectionName,
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      padding,
      
      pushLeft,
      
      sectionHeaderData,
      children,
      
      ...rest
    } = this.props;

    const containerClasses = classNames(
      containerSize ? `container-${containerSize}` : "container"
    );

    const outerClasses = classNames(
      `${sectionName} section`,
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      `${sectionName}-inner section-inner`,
      padding && `${padding}`,
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...rest} className={outerClasses}>
        <div className={containerClasses}>
          <div className={innerClasses}>
            <SectionHeader data={sectionHeaderData} className="center-content" />
            {children}
          </div>
        </div>
      </section>
    );
  }
}

SectionTemplate.propTypes = propTypes;
SectionTemplate.defaultProps = defaultProps;

export default SectionTemplate;
