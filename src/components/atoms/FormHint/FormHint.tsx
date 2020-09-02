import React, { Component, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
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

  public get classes(): IPropsClasses {
    const { className, status } = this.props;
    const classes = classNames(
      "form-hint",
      status && `text-color-${status}`,
      className
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { children, className, status, ...rest } = this.props;

    return (
      <div {...rest} className={this.classes.classes}>
        {children}
      </div>
    );
  }
}

export default FormHint;
