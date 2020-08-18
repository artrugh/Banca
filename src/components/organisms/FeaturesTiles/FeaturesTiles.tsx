import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultP,
  IPropsClasses,
  IPropsItem,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import TilesItem from "../../molecules/TilesItem/TilesItem";
import SectionTemplate from "../../templates/SectionHeaderTemplate/SectionHeaderTemplate";
// CONFIG
import { tilesConfig } from "../../../config/configData";

interface IProps extends IPropsItem {
  data?: IFeatureData;
}

export const DefaultProps: IProps = {
  ...DefaultP,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTiles extends Component<IProps> {
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
      <TilesItem
        key={Math.random()}
        item={item}
        delay={delay}
        config={tilesConfig.items}
        underline={underline}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-tiles"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        config={tilesConfig.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTiles;
