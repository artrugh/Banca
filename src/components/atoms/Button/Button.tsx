import { Component, createElement } from "react";
import classNames from "classnames";

import { Iclasses, IPropsButton } from "../../../common/interfaces";

const DefaultProps: IPropsButton = {
  tag: "button",
  color: "",
  size: "",
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

  private get classes(): Iclasses {
    const { color, size, loading, wide, wideMobile, className } = this.props;

    const classes = classNames(
      "button",
      color && `button-${color}`,
      size && `button-${size}`,
      loading && "is-loading",
      wide && "button-block",
      wideMobile && "button-wide-mobile",

      className
    );

    return { classes };
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

      ...rest
    } = this.props;

    const props = { className: this.classes.classes, disabled, ...rest };

    return this.createReactElement(tag, props);
  }
}

export default Button;
