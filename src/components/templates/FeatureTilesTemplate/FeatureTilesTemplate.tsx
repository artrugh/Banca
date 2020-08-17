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
import { Headings, ItemType } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import KeyboardItem from "../../molecules/KeyboardItem/KeyboardItem";
import TilesItem from "../../molecules/TilesItem/TilesItem";
import SectionTemplate from "../SectionHeaderTemplate/SectionHeaderTemplate";
import Image from "../../atoms/Image/Image";

export interface IProps extends IPropsOuter, IPropsInner {
  pushLeft?: boolean;
  data?: IFeatureData;
  padding?: string;
  underline?: string;
  className?: string;
  sectionHeaderPaddingMargin?: string;
  config?: {
    header: { title: number[]; paragraph?: number[] };
    items: { [key: string]: number[] };
  };
  itemType: Partial<ItemType>;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
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
          className="p-24"
          containerClassName="images-item-container p-32"
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