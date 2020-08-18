import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultP,
  IPropsClasses,
  IPropsFeatureItem,
} from "../../../common/interfacesProps";
import { Headings, ItemType } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import KeyboardItem from "../../molecules/KeyboardItem/KeyboardItem";
import TilesItem from "../../molecules/TilesItem/TilesItem";
import TestimonialItem from "../../molecules/TestimonialItem/TestimonialItem";
import SectionTemplate from "../SectionHeaderTemplate/SectionHeaderTemplate";
import Image from "../../atoms/Image/Image";

export interface IProps extends IPropsFeatureItem {
  data?: IFeatureData;
  config?: {
    header: { title: number[]; paragraph?: number[] };
    items: { [key: string]: number[] };
  };
}

export const DefaultProps: IProps = {
  ...DefaultP,
  pushLeft: false,
  itemType: undefined,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesTilesTemplate extends Component<IProps> {
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
    const {
      pushLeft,
      data,
      underline,
      sectionHeaderPaddingMargin,
      className,
      itemType,
      itemBgDark,
      config,
      ...rest
    } = this.props;

    let Items: JSX.Element[];

    if (itemType === ItemType.keyboardItem) {
      Items = data.items.map((item, delay) => (
        <KeyboardItem
          key={Math.random()}
          item={item}
          delay={delay}
          config={config.items}
          underline={underline}
          itemBgDark={itemBgDark}
        />
      ));
    } else if (itemType === ItemType.tilesItem) {
      Items = data.items.map((item, delay) => (
        <TilesItem
          key={Math.random()}
          item={item}
          delay={delay}
          config={config.items}
          underline={underline}
          itemBgDark={itemBgDark}
        />
      ));
    } else if (itemType === ItemType.imagesItem) {
      Items = data.items.map((item, delay) => (
        <Image
          key={Math.random()}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className="p-32"
          containerClassName="images-item-container p-32"
        />
      ));
    } else if (itemType === ItemType.testimonialItem) {
      Items = data.items.map((item, delay) => (
        <TestimonialItem
          key={Math.random()}
          item={item}
          delay={delay}
          config={config.items}
          underline={underline}
          itemBgDark={itemBgDark}
        />
      ));
    }

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-tiles"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        config={config.header}
        className={className}
        sectionHeaderPaddingMargin={sectionHeaderPaddingMargin}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesTilesTemplate;
