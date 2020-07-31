import React, { Component } from "react";
import classNames from "classnames";

import {
  DefaultPropsClasses,
  Headings,
  Iclasses,
  ItileData,
  Iouter,
  Iinner,
} from "../../../common/interfaces";

import TilesItem from "../../molecules/TilesItem/TilesItem";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";

export interface IProps extends Iouter, Iinner {
  pushLeft?: boolean;
  data?: ItileData;
  [propName: string]: boolean | string | ItileData;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTiles extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const { pushLeft } = this.props;
    const classes = classNames("tiles-wrap center-content", pushLeft && "push-left");

    return { classes };
  }

  public render(): JSX.Element {
    const { pushLeft, data, ...rest } = this.props;

    const Items = data.items.map((item, i) => (
      <TilesItem
        key={Math.random()}
        icon={`./images/${item.icon}`}
        title={item.title}
        description={item.description}
        alt={item.alt}
        delay={`${i * 200}`}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-tiles"
        sectionHeaderData={data.header}
        tag={Headings.h2}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTiles;
