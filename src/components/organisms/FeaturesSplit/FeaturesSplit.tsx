import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  IPropsOuter,
  IPropsInner,
  IPropsClasses,
  DefaultPropsClasses,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";
// CONFIG
import { splitConfig } from "../../../config/configData";

export interface IProps extends IPropsOuter, IPropsInner {
  invertMobile?: boolean;
  invertDesktop?: boolean;
  alignTop?: boolean;
  imageFill?: boolean;
  data?: IFeatureData;
  className?: string;
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

  public get classes(): IPropsClasses {
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
    const {
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      data,
      ...rest
    } = this.props;

    const Items = data.items.map((item, delay) => (
      <SplitItem
        key={Math.random()}
        item={item}
        delay={delay}
        imageFill={imageFill}
        config={splitConfig.items}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-split"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        config={splitConfig.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesSplit;
