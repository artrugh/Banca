import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IItem } from "../../../common/interfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS

interface IProps extends IItem {
  config: {
    name: number[];
    testimony: number[];
    company: number[];
  };
}

class TestimonialItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.config);
  }

  public render(): JSX.Element {
    const { name, testimony, company } = this.props.item;
    const { delay } = this.props;

    return (
      <div
        className="tiles-item reveal-from-right"
        data-reveal-delay={`${delay * 200}`}
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
