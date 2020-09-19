import React, { Component, createElement, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Size, Headings, ScrollPosition } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  children?: string | ReactNode;
  containerSize?: Size;
  underlineSize?: Size;
  className?: string;
  name?: string;
  animation?: boolean;
  tag?: Headings;
  scrollPosition?: ScrollPosition;
  classNameHeading?: string;
  classNameContainer?: string;
}

const DefaultProps: IProps = {
  scrollPosition: ScrollPosition.leftRight,
  children: "A title should we pass as a prop",
  classNameContainer: "hero",
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Heading extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(public props: IProps) {
    super(props);
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
      classNameHeading,
      classNameContainer,
      scrollPosition,
      ...rest
    } = this.props;

    const props = {
      className: cn({ [`${classNameHeading}`]: classNameHeading }),
      children,
    };

    return (
      <div
        {...rest}
        className={cn({
          [classNameContainer]: classNameContainer,
          [`container-${containerSize}`]: containerSize,
        })}
      >
        {this.createReactElement(tag, props)}
        {underlineSize && (
          <hr
            className={cn("underline", scrollPosition, className, {
              "underline-has-animation": animation,
              [`underline--${underlineSize}`]: underlineSize,
            })}
          />
        )}
      </div>
    );
  }
}

export default Heading;
