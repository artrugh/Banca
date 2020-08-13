import React, { Component, createElement, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { Sizes, Headings } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  children?: string | ReactNode;
  containerSize?: Sizes;
  underlineSize?: Sizes;
  className?: string;
  name?: string;
  animation?: boolean;
  tag?: Headings;
  classNameHeading?: string;
}

const DefaultProps: IProps = {
  children: "A title should we pass as a prop",
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Heading extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(public props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      containerSize,
      underlineSize,
      className,
      name,
      animation,
      classNameHeading,
    } = this.props;

    const heroHeading = name === "statement" || name === "about";

    const container = classNames(
      heroHeading ? `hero-${name}` : name,
      className && className,
      containerSize && `container-${containerSize}`
    );

    const underline = classNames(
      "underline",
      animation && "underline-has-animation",
      underlineSize ? `underline--${underlineSize}` : ""
    );

    const heading = classNames(classNameHeading && classNameHeading);

    return { container, underline, heading };
  }

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const {
      tag,
      children,
      containerSize,
      animation,
      underlineSize,
      className,
      name,
      classNameHeading,
      ...rest
    } = this.props;

    const props = {
      className: this.classes.heading,
      children,
    };

    return (
      <div {...rest} className={this.classes.container}>
        {this.createReactElement(tag, props)}
        {underlineSize && <hr className={this.classes.underline} />}
      </div>
    );
  }
}

export default Heading;
