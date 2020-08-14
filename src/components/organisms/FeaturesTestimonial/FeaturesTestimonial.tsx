import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultPropsClasses,
  IPropsOuter,
  IPropsInner,
  IPropsClasses,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
// CONFIG
import { testimonialConfig } from "../../../config/configData";

export interface IProps extends IPropsOuter, IPropsInner {
  pushLeft?: boolean;
  data?: IFeatureData;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTestimonial extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { pushLeft } = this.props;
    const classes = classNames("tiles-wrap", pushLeft && "push-left");

    return { classes };
  }

  public render(): JSX.Element {
    const { pushLeft, data, ...rest } = this.props;

    const Items = data.items.map((item, delay) => (
      <TestimonialItem
        key={Math.random()}
        item={item}
        delay={delay}
        config={testimonialConfig.items}
        // quote
        underline="has-left-underline"
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="testimonial-inner"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        config={testimonialConfig.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTestimonial;
