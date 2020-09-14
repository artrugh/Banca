import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import FormLabel from "../FormLabel/FormLabel";
import FormHint from "../FormHint/FormHint";

interface IProps {
  children?: ReactNode;
  label?: string;
  labelHidden?: boolean;
  name?: string;
  status?: string;
  disabled?: boolean;
  value?: string | number;
  size?: string;
  placeholder?: string;
  hint?: string;
  className?: string;
  readonly id: string;
}

const DefaultProps: IProps = {
  children: null,
  label: "",
  labelHidden: false,
  status: "",
  disabled: false,
  size: "",
  placeholder: null,
  hint: null,
  id: `${Math.random()}`,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Select extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      className,
      children,
      label,
      labelHidden,
      name,
      status,
      disabled,
      value,
      size,
      placeholder,
      hint,
      id,
      ...rest
    } = this.props;

    return (
      <>
        {label && (
          <FormLabel labelHidden={labelHidden} id={id}>
            {label}
          </FormLabel>
        )}
        <select
          {...rest}
          className={cn("form-select", {
            [`form-select-${size}`]: size,
            [`form-${status}`]: status,
            [className]: className,
          })}
          name={name}
          disabled={disabled}
          value={value}
        >
          {placeholder && (
            <option hidden value="">
              {placeholder}
            </option>
          )}
          {children}
        </select>
        {hint && <FormHint status={status}>{hint}</FormHint>}
      </>
    );
  }
}

export default Select;
