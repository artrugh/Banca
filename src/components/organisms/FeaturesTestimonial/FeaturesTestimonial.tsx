import React from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../../helpers/BaseGetterClasses";
// COMMON
import {
  DefaultPropsClasses,
  Headings,
  Iouter,
  Iinner,
  Iclasses,
} from "../../../common/interfaces";
import { IFeatureData } from "../../../common/dataInterfaces";
// HELPERS

// UTILS

// COMPONENTS
import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";

export interface IProps extends Iouter, Iinner {
  pushLeft?: boolean;
  data?: IFeatureData;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTestimonial<
  P extends IProps = IProps,
  S = {}
> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
    const { pushLeft } = this.props;
    const classes = classNames("tiles-wrap", pushLeft && "push-left");

    return { classes };
  }

  public render(): JSX.Element {
    const { pushLeft, data, ...rest } = this.props;

    const Items = data.items.map((item, i) => (
      <TestimonialItem
        key={Math.random()}
        item={item}
        i={i}
        settings={data.settings.items}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="testimonial-inner"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        settings={data.settings.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTestimonial;
