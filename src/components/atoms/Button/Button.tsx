import React, { Component, createElement } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsButton } from "../../../common/interfacesProps";
import { Size, Color } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

const DefaultProps: IPropsButton = {
  tag: "button",
  color: Color.dark,
  size: Size.sm,
  children: "click",
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Button extends Component<IPropsButton> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IPropsButton) {
    super(props);
  }

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const {
      color,
      size,
      loading,
      wide,
      wideMobile,
      disabled,
      tag,
      className,
      children,
      reveal,
      ...rest
    } = this.props;

    const props = {
      className: cn("button", className, {
        [`button-${color}`]: color,
        [`button-${size}`]: size,
        "is-loading": loading,
        "button-block": wide,
        "button-wide-mobile": wideMobile,
      }),
      children,
      disabled,
      ...rest,
    };

    return (
      <div className={cn("button-container", reveal)} data-reveal-delay={200}>
        {this.createReactElement(tag, props)}
      </div>
    );
  }
}

export default Button;
