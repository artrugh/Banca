import React, { Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsInput } from "../../../common/interfacesProps";
import { InputTypes, Size } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FormLabel from "../../atoms/FormLabel/FormLabel";
import FormHint from "../../atoms/FormHint/FormHint";

const DefaultProps: IPropsInput = {
  children: null,
  label: "",
  labelHidden: false,
  type: InputTypes.text,
  status: "",
  disabled: false,
  required: false,
  formGroup: null,
  hasIcon: null,
  size: Size.sm,
  placeholder: "",
  rows: 3,
  hint: null,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Input extends Component<IPropsInput> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IPropsInput) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      id,
      className,
      children,
      label,
      labelHidden,
      type,
      name,
      status,
      disabled,
      value,
      formGroup,
      hasIcon,
      size,
      reveal,
      placeholder,
      rows,
      hint,
      ...rest
    } = this.props;

    const C: InputTypes.textarea | InputTypes.input =
      type === "textarea" ? InputTypes.textarea : InputTypes.input;

    return (
      <div
        className={cn("input-container--main", reveal)}
        data-reveal-delay={200}
      >
        {label && (
          <FormLabel labelHidden={labelHidden} id={id}>
            {label}
          </FormLabel>
        )}
        <div
          className={cn("input-container--sub", {
            "form-group-desktop": formGroup === "desktop",
            "form-group": formGroup !== "desktop",
            [`has-icon-${hasIcon}`]: hasIcon,
          })}
        >
          <C
            {...rest}
            type={type !== "textarea" ? type : null}
            className={cn("form-input", className, {
              [`form-input-${size}`]: size,
              [`form-${status}`]: status,
            })}
            name={name}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            rows={type === "textarea" ? rows : null}
          />
          {children}
        </div>
        {hint && <FormHint status={status}>{hint}</FormHint>}
      </div>
    );
  }
}

export default Input;
