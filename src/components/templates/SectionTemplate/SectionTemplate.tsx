import React, { ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS
import BaseClassesGetter from "../../../helpers/BaseGetterClasses";
// COMMON
import {
  DefaultPropsClasses,
  Iclasses,
  Iouter,
  Iinner,
  Headings,
} from "../../../common/interfaces";
import { IHeader, IheaderSettings } from "../../../common/dataInterfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";

export interface IProps extends Iouter, Iinner {
  children?: ReactNode;
  sectionName: string;
  sectionHeaderData: IHeader;
  containerSize?: string;
  padding?: string;
  tag?: Headings;
  className?: string;
  settings?: IheaderSettings;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  sectionName: "section",
  sectionHeaderData: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionTemplate<
  P extends IProps = IProps,
  S = {}
> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: P) {
    super(props);
    checkLenghPropsData.check(
      this.props.sectionHeaderData,
      this.props.settings
    );
  }

  public get classes(): Iclasses {
    const {
      containerSize,

      sectionName,
      className,
      topOuterDivider,
      bottomOuterDivider,
      hasBgColor,
      invertColor,

      topDivider,
      bottomDivider,
      padding,
    } = this.props;

    const containerClasses = classNames(
      containerSize ? `container-${containerSize}` : "container"
    );

    const outerClasses = classNames(
      `${sectionName} section`,
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      `${sectionName}-inner section-inner`,
      padding && `${padding}`,
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return { outerClasses, innerClasses, containerClasses };
  }

  public render(): JSX.Element {
    const {
      containerSize,
      sectionName,
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      padding,
      sectionHeaderData,
      children,
      tag,

      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses}>
        <div className={this.classes.containerClasses}>
          <div className={this.classes.innerClasses}>
            <SectionHeader
              tag={tag}
              data={sectionHeaderData}
              className="center-content"
            />
            {children}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTemplate;
