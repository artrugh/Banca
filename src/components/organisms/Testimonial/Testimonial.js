import React, { Component } from "react";
import classNames from "classnames";

import { SectionTilesProps } from "../../../utils/SectionProps";

import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";
import SectionTemplate from "./../../templates/SectionTemplate/SectionTemplate";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class Testimonial extends Component {
  render() {
    const {
      pushLeft,
      data,
      ...rest
    } = this.props;

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const Items = data.items.map((item, i) => (
      <TestimonialItem
        key={i}
        name={item.name}
        testimony={item.testimony}
        company={item.company}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="testimonial-inner"
        sectionHeaderData={data.header}
      >
      
            <div className={tilesClasses}>{Items}</div>
         
      </SectionTemplate>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
