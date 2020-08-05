import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { Iitem } from "../../../common/dataInterfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS

class TestimonialItem extends Component<Iitem> {
  public constructor(props: Iitem) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.settings);
  }

  public render(): JSX.Element {
    const { name, testimony, company } = this.props.item;
    const { i } = this.props;

    return (
      <div
        className="tiles-item reveal-from-right"
        data-reveal-delay={`${i * 200}`}
      >
        <div className="tiles-item-inner">
          <div className="testimonial-item-content">
            <p className="text-sm mb-0">{testimony}</p>
          </div>
          <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
            <span className="testimonial-item-name text-color-high">
              {name}
            </span>
            <span className="text-color-low"> / </span>
            <span className="testimonial-item-link">
              <a href="#0">{company}</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialItem;
