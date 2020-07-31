import React, { Component } from "react";
import classNames from "classnames";

import {
  Iouter,
  Iinner,
  Headings,
  Iclasses,
  IsplitData,
  DefaultPropsClasses,
} from "../../../common/interfaces";

import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";

export interface IProps extends Iouter, Iinner {
  invertMobile?: boolean;
  invertDesktop?: boolean;
  alignTop?: boolean;
  imageFill?: boolean;
  data?: IsplitData;
  [propName: string]: boolean | string | IsplitData;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  invertMobile: false,
  invertDesktop: false,
  alignTop: false,
  imageFill: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesSplit extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const { invertMobile, invertDesktop, alignTop } = this.props;

    const classes = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { invertMobile, invertDesktop, alignTop, imageFill, data, ...rest } = this.props;

    const Items = data.items.map((item) => (
      <SplitItem
        key={Math.random()}
        title={item.title}
        subtitle={item.subtitle}
        description={item.description}
        image={`./images/${item.image}`}
        alt={item.alt}
        imageFill={imageFill}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-split"
        sectionHeaderData={data.header}
        tag={Headings.h2}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesSplit;
