import { ReactNode } from "react";
import { InputTypes, Reveal, Size, BgColor, Underline, Color } from "./enums";

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
  size?: Size;
  placeholder?: string;
  reveal?: Reveal;
  rows?: number;
  hint?: string;
  readonly id?: string;
  className?: string;
}

export interface IPropsButton {
  readonly tag?: string;
  color?: Color;
  size?: Size;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  reveal?: Reveal;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  href?: string;
  [index: string]: any;
}

// SECCION
export interface IPropsOuter {
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  bgColor?: BgColor;
  invertColor?: boolean;
}

// CONTAINER
export interface IPropsInner {
  topDivider?: boolean;
  bottomDivider?: boolean;
}

export interface IPropsOuterInner extends IPropsOuter, IPropsInner {}

// SECCION + CONTAINER
export interface IPropsItem {
  bgColor?: BgColor;
  padding?: string;
  underline?: Underline;
  className?: string;
  delay?: number;
  underlineRounded?: boolean;
  shadow?: boolean;
  [propName: string]: any;
}

export interface IPropsFeatureItem extends IPropsOuterInner {
  children?: ReactNode;
  heading?: {
    title: string;
    paragraph: string;
  };
  sectionHeadingPaddingMargin?: string;
  wrapName: string;
  invertMobile?: boolean;
  invertDesktop?: boolean;
  alignTop?: boolean;
  className?: string;
  pushLeft?: boolean;
  colorLogo?: "dark" | "light";
  bgColor?: BgColor;
  id: string;
}

export interface IPropsClasses {
  [key: string]: string;
}

export const DefaultP: IPropsOuterInner = {
  topOuterDivider: false,
  bottomOuterDivider: false,
  topDivider: false,
  bottomDivider: false,
  invertColor: false,
};
