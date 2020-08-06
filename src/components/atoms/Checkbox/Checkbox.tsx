import React, { Component, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { InputTypes } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  readonly id: string;
  children?: ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  [key: string]: any;
}

const DefaultProps: IProps = {
  id: `${Math.random()}`,
  children: null,
  disabled: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Checkbox extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
  }

  // private handleInputChange(e: MouseEvent<HTMLInputElement>): undefined {
  //   console.log("a");
  // }

  public render(): JSX.Element {
    const {
      id,
      className,
      children,
      name,
      value,
      disabled,
      checked,
      ...rest
    } = this.props;

    return (
      <label className={classNames("form-checkbox", className)} htmlFor={id}>
        <input
          id={id}
          {...rest}
          type={InputTypes.checkbox}
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          // onChange={this.handleInputChange}
        />
        {children}
      </label>
    );
  }
}

export default Checkbox;
