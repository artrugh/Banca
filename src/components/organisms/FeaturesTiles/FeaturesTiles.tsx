import React from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../../helpers/BaseGetterClasses";
// COMMON
import {
  DefaultPropsClasses,
  Headings,
  Iclasses,
  Iouter,
  Iinner,
} from "../../../common/interfaces";
import { ItileData } from "../../../common/dataInterfaces";
// HELPERS

// UTILS

// COMPONENTS
import TilesItem from "../../molecules/TilesItem/TilesItem";
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";

export interface IProps extends Iouter, Iinner {
  pushLeft?: boolean;
  data?: ItileData;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  pushLeft: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTiles<
  P extends IProps = IProps,
  S = {}
> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
    const { pushLeft } = this.props;
    const classes = classNames(
      "tiles-wrap center-content",
      pushLeft && "push-left"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { pushLeft, data, ...rest } = this.props;

    const Items = data.items.map((item, i) => (
      <TilesItem
        key={Math.random()}
        item={item}
        i={i}
        settings={data.settings.items}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-tiles"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        settings={data.settings.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTiles;
