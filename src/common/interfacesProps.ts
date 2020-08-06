import { ReactNode } from "react";
import { InputTypes, Reveal } from "./enums";

export interface IPropsInput {
  children?: ReactNode;
  label?: string;
  labelHidden?: boolean;
  readonly type?: InputTypes;
  name?: string;
  status?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  formGroup?: string;
  hasIcon?: string;
  size?: string;
  placeholder?: string;
  reveal?: Reveal;
  rows?: number;
  hint?: string;
  readonly id?: string;
  className?: string;
}

export interface IPropsButton {
  readonly tag?: string;
  color?: string;
  size?: string;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  reveal?: Reveal;
  disabled?: boolean;
  children?: string;
  className?: string;
  href?: string;
  [index: string]: any;
}

// SECCION
export interface IPropsOuter {
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
}

// CONTAINER
export interface IPropsInner {
  topDivider?: boolean;
  bottomDivider?: boolean;
}

// SECCION + CONTAINER
export interface IProps extends IPropsOuter, IPropsInner {
  [propName: string]: any;
}

export interface IPropsClasses {
  [key: string]: string;
}

export const DefaultPropsClasses: IProps = {
  topOuterDivider: false,
  bottomOuterDivider: false,
  topDivider: false,
  bottomDivider: false,
  hasBgColor: false,
  invertColor: false,
};
