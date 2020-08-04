import React from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../_base/BaseGetterClasses";
// COMMON
import {
  DefaultPropsClasses,
  ItestimonialData,
  Headings,
  Iouter,
  Iinner,
  Iclasses,
} from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";

export interface IProps extends Iouter, Iinner {
  pushLeft?: boolean;
  data?: ItestimonialData;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Testimonial<P extends IProps = IProps, S = {}> extends BaseClassesGetter<P, S> {
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
        tag={Headings.h2}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default Testimonial;
