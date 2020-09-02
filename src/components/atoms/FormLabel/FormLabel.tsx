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
  labelHidden?: boolean;
  readonly id: string | null;
  className?: string;
}

const DefaultProps: IProps = {
  children: null,
  labelHidden: false,
  id: `${Math.random()}`,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FormLabel extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { className, labelHidden } = this.props;
    const classes = classNames(
      "form-label",
      labelHidden && "screen-reader",
      className
    );

    return { classes };
  }

  public render(): JSX.Element {
    const { className, children, labelHidden, id, ...rest } = this.props;

    return (
      <label {...rest} className={this.classes.classes} htmlFor={id}>
        {children}
      </label>
    );
  }
}
export default FormLabel;
