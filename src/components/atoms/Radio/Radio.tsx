import React, { Component, ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  children?: ReactNode;
  name: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  id?: string;
}

const DefaultProps: IProps = {
  children: null,
  name: undefined,
  value: "",
  disabled: false,
  checked: false,
  id: `${Math.random()}`,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Radio extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(public props: IProps) {
    super(props);
  }

  // private handleInputChange(e: MouseEvent<HTMLInputElement>): string {
  //   const target = e.target.value;
  //   return target;
  // }

  public render(): JSX.Element {
    const { id, className, children, name, value, disabled, checked, ...rest } = this.props;

    return (
      <label className={classNames("form-radio", className)} htmlFor={id}>
        <input
          {...rest}
          type="radio"
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

export default Radio;
