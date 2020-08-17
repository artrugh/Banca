import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultPropsClasses,
  IPropsClasses,
  IPropsOuter,
  IPropsInner,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import KeyboardItem from "../../molecules/KeyboardItem/KeyboardItem";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
// CONFIG
import { careerConfig } from "../../../config/configData";

export interface IProps extends IPropsOuter, IPropsInner {
  pushLeft?: boolean;
  data?: IFeatureData;
  padding?: string;
  underline?: string;
  className?: string;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesKeyboard extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { pushLeft } = this.props;
    const classes = classNames(
      "tiles-wrap center-content",
      pushLeft && "push-left"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { pushLeft, data, underline, ...rest } = this.props;

    const Items = data.items.map((item, delay) => (
      <KeyboardItem
        key={Math.random()}
        item={item}
        delay={delay}
        config={careerConfig.items}
        underline={underline}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-tiles"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        config={careerConfig.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesKeyboard;
