import React, { Component } from "react";

import { ItestimonialDataItem } from "../../../common/interfaces";

class TestimonialItem extends Component<ItestimonialDataItem> {
  public constructor(props: ItestimonialDataItem) {
    super(props);
  }

  public render(): JSX.Element {
    const { name, testimony, company } = this.props;

    return (
      <div className="tiles-item reveal-from-right" data-reveal-delay="200">
        <div className="tiles-item-inner">
          <div className="testimonial-item-content">
            <p className="text-sm mb-0">{testimony}</p>
          </div>
          <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
            <span className="testimonial-item-name text-color-high">{name}</span>
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
