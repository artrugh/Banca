import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  children: Partial<ReactNode>;
  status?: string | boolean;
  className?: string;
}
const DefaultProps: IProps = {
  children: null,
  status: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FormHint extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { children, className, status, ...rest } = this.props;

    return (
      <div
        {...rest}
        className={cn("form-hint", className, {
          [`text-color-${status}`]: status,
        })}
      >
        {children}
      </div>
    );
  }
}

export default FormHint;
