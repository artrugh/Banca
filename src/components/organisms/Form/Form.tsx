import React, { Component, ReactNode } from "react";
import cn from "classnames";
// STYLE

// BASE CLASS

// COMMON
import { IPropsButton, IPropsInput } from "../../../common/interfacesProps";
import { Reveal, Color } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Button from "../../atoms/Button/Button";
import ButtonGroup from "../../atoms/ButtonGroup/ButtonGroup";
import Input from "../../molecules/Input/Input";

interface IProps {
  data: { inputs: IPropsInput[]; buttons?: IPropsButton[]; reveal?: Reveal };
}

class Form extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { inputs, buttons } = this.props.data;
    const Inputs: ReactNode[] = inputs.map((input) => {
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
        placeholder,
        required,
        reveal,
        rows,
        hint,
        ...rest
      } = input;

      return (
        <Input
          {...rest}
          className={className}
          id={id}
          type={type}
          label={label}
          name={name}
          labelHidden={labelHidden}
          hasIcon={hasIcon}
          placeholder={placeholder}
          hint={hint}
          status={status}
          size={size}
          formGroup={formGroup}
          reveal={reveal}
          required={required}
          disabled={disabled}
          value={value}
          rows={rows}
          key={Math.random()}
        >
          {children}
        </Input>
      );
    });

    const Buttons: JSX.Element[] = [];

    if (!buttons || buttons.length === 0) {
      Buttons.push(
        <Button
          tag="a"
          color={Color.primary}
          wideMobile
          href="https://cruip.com/"
          key={Math.random()}
        >
          SEND EMAIL / wideMobile
        </Button>
      );
    } else {
      buttons.forEach((button): void => {
        const {
          tag,
          disabled,
          href,
          children,
          color,
          size,
          loading,
          reveal,
          wide,
          wideMobile,
          className,
          ...rest
        } = button;

        Buttons.push(
          <Button
            {...rest}
            tag={tag}
            className={className}
            color={color}
            wide={wide}
            wideMobile={wideMobile}
            disabled={disabled}
            href={href}
            size={size}
            loading={loading}
            reveal={reveal}
            key={Math.random()}
          >
            {children}
          </Button>
        );
      });
    }

    return (
      <form
        className={cn("form", this.props.data.reveal)}
        data-reveal-delay={200}
      >
        {Inputs}
        {Buttons.length > 1 ? <ButtonGroup>{Buttons}</ButtonGroup> : Buttons}
      </form>
    );
  }
}

export default Form;
