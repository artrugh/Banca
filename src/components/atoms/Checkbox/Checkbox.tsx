import React, { Component, MouseEvent, ReactNode } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { InputTypes } from "../../../common/interfaces";

interface IProps {
  id: string;
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
  name: undefined,
  value: undefined,
  disabled: false,
  checked: undefined,
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
    const { id, className, children, name, value, disabled, checked, ...rest } = this.props;

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
