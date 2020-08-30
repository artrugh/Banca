import React, { Component } from "react";
import Link from "next/link";

// STYLE

// BASE CLASS

// COMMON
import { IPropsButton } from "../../../common/interfacesProps";
import { Size, Color } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Button from "../Button/Button";

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

class ButtonAnchor extends Component<IPropsButton> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IPropsButton) {
    super(props);
  }

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
      href,
      ...rest
    } = this.props;

    return (
      <Link href={href}>
        <Button
          color={color}
          size={size}
          loading={loading}
          wide={wide}
          wideMobile={wideMobile}
          disabled={disabled}
          tag={tag}
          className={className}
        >
          {children}
        </Button>
      </Link>
    );
  }
}

export default ButtonAnchor;
