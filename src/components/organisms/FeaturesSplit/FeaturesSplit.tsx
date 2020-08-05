import React from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../../helpers/BaseGetterClasses";
// COMMON
import {
  Iouter,
  Iinner,
  Headings,
  Iclasses,
  DefaultPropsClasses,
} from "../../../common/interfaces";
import { IsplitData } from "../../../common/dataInterfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionTemplate/SectionTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";

export interface IProps extends Iouter, Iinner {
  invertMobile?: boolean;
  invertDesktop?: boolean;
  alignTop?: boolean;
  imageFill?: boolean;
  data?: IsplitData;
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

class FeaturesSplit<
  P extends IProps = IProps,
  S = {}
> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
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

    const Items = data.items.map((item, i) => (
      <SplitItem
        key={Math.random()}
        item={item}
        i={i}
        imageFill={imageFill}
        settings={data.settings.items}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-split"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        settings={data.settings.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesSplit;
