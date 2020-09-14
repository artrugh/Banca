import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses, IPropsItem } from "../../../common/interfacesProps";
import { Env } from "../../../common/enums";
// HELPERS

// UTILS
import checkLengthPropsData from "../../../utils/checkLengthPropsData";
// COMPONENTS
import Image from "../../atoms/Image/Image";

interface IProps extends IPropsItem {
  centerDivider?: boolean;
  quote?: boolean;
  config: { [key: string]: number[] };
}

class TestimonialItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.dev) {
      checkLengthPropsData.check(this.props.item, this.props.config);
    }
  }

  public get classes(): IPropsClasses {
    const {
      centerDivider,
      quote,
      underline,
      bgColor,
      underlineRounded,
    } = this.props;

    const outer = classNames(
      "testimonial-item-avatar-container",
      underline && underline,
      underlineRounded && "has-underline-rounded",
      centerDivider && "has-center-divider"
    );

    const container = classNames(
      "tiles-item testimonial-item reveal-from-right",
      bgColor && bgColor,
      "m-24"
    );

    const content = classNames(
      "testimonial-item-content mt-12",
      underline === "has-center-underline" && "ta-c",
      quote && "has-quote"
    );

    const parragraph = classNames("text-sm mb-0");

    const name = classNames("testimonial-item-name");

    return { container, outer, content, parragraph, name };
  }

  public render(): JSX.Element {
    const { name, testimony, company, avatar } = this.props.item;
    const { delay } = this.props;

    return (
      <div
        className={this.classes.container}
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          {avatar && (
            <Image
              className="testimonial-item-avatar"
              classNameContainer={this.classes.outer}
              src={avatar}
              alt={name}
              width="32%"
              height="32%"
            />
          )}
          <div className={this.classes.content}>
            <p className={this.classes.parragraph}>{testimony}</p>
          </div>
          <div className="testimonial-item-footer text-xs mt-32 mb-0">
            <span className={this.classes.name}>{name}</span>
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
