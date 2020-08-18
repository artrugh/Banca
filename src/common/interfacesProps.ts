import { ReactNode } from "react";
import { InputTypes, Reveal, Sizes, ItemBgDark, ItemType } from "./enums";

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
  size?: Sizes;
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
  size?: Sizes;
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

export interface IPropsOuterInner extends IPropsOuter, IPropsInner {}

// SECCION + CONTAINER
export interface IPropsItem {
  itemBgDark?: ItemBgDark;
  pushLeft?: boolean;
  padding?: string;
  underline?: string;
  className?: string;
  sectionHeaderPaddingMargin?: string;
  itemType?: Partial<ItemType>;
  delay?: number;
  [propName: string]: any;
}

export interface IPropsFeatureItem extends IPropsItem, IPropsOuterInner {}

export interface IPropsClasses {
  [key: string]: string;
}

export const DefaultP: IPropsOuterInner = {
  topOuterDivider: false,
  bottomOuterDivider: false,
  topDivider: false,
  bottomDivider: false,
  hasBgColor: false,
  invertColor: false,
};
