import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IItem } from "../../../common/interfaces";
import { IPropsClasses } from "../../../common/interfacesProps";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IItem {
  centerDivider?: boolean;
  underline?: string;
  quote?: boolean;
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

  public get classes(): IPropsClasses {
    const { centerDivider, quote, underline } = this.props;

    const outer = classNames(
      "testimonial-item-avatar-container",
      underline && underline,
      centerDivider && "has-center-divider"
    );

    const content = classNames(
      "testimonial-item-content mt-12",
      underline === "has-center-underline" && "ta-c",
      quote && "has-quote"
    );

    return { outer, content };
  }

  public render(): JSX.Element {
    const { name, testimony, company, avatar } = this.props.item;
    const { delay } = this.props;

    return (
      <div
        className="tiles-item testimonial-item reveal-from-right"
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          {avatar && (
            <Image
              className="testimonial-item-avatar"
              containerClassName={this.classes.outer}
              src={avatar}
              alt={name}
              width="32%"
              height="32%"
            />
          )}
          <div className={this.classes.content}>
            <p className="text-sm mb-0">{testimony}</p>
          </div>
          <div className="testimonial-item-footer text-xs mt-32 mb-0">
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
