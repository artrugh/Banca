import { ReactNode } from "react";

export enum Headings {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
}

export enum Reveal {
  top = "reveal-from-top",
  bottom = "reveal-from-bottom",
  right = "reveal-from-right",
  left = "reveal-from-left",
}

export enum InputTypes {
  input = "input",
  textarea = "textarea",
  text = "text",
  email = "email",
  tel = "tel",
  password = "password",
  number = "number",
  search = "search",
  color = "color",
  date = "date",
  time = "time",
  datetimeLocal = "datetime-local",
  checkbox = "checkbox",
}

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

export interface Iclasses {
  [key: string]: string;
}

interface SyntheticEvent {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  target: EventTarget;
  timeStamp: Date;
  type: string;
}

export interface KeyboardEvent extends SyntheticEvent {
  altKey: boolean;
  charCode: number;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  key: string;
  keyCode: number;
  locale: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
  which: number;
}

export interface EventHandler<E> {
  (e: E): void;
}

// // // INITIAL DATA

// // HEADER
export interface IHeader {
  title: string;
  paragraph?: string;
}
// // ITEMS

// TILES
export interface ItileDataItem {
  icon: string;
  title: string;
  description: string;
  alt: string;
  delay?: string;
}
// SPLIT
export interface IsplitDataItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  imageFill?: boolean;
}

// TESTIMONIAL
export interface ItestimonialDataItem {
  name: string;
  testimony: string;
  company: string;
}

// // FEATURES

// TILE
export interface ItileData {
  header: IHeader;
  items: ItileDataItem[];
}
// SPLIT
export interface IsplitData {
  header: IHeader;
  items: IsplitDataItem[];
}
// TESTIMONIAL
export interface ItestimonialData {
  header: IHeader;
  items: ItestimonialDataItem[];
}

// CAREER
export interface IcareerData {
  header: IHeader;
  item: [];
}

export interface IinitialData {
  split: IsplitData;
  testimonial: ItestimonialData;
  career: IcareerData;
}

export interface IPropsData {
  data: IinitialData;
}
// SECCION
export interface Iouter {
  topOuterDivider?: boolean;
  bottomOuterDivider?: boolean;
  hasBgColor?: boolean;
  invertColor?: boolean;
}

// CONTAINER
export interface Iinner {
  topDivider?: boolean;
  bottomDivider?: boolean;
}

// SECCION + CONTAINER
export interface IProps extends Iouter, Iinner {
  [propName: string]: any;
}

export const DefaultPropsClasses: IProps = {
  topOuterDivider: false,
  bottomOuterDivider: false,
  topDivider: false,
  bottomDivider: false,
  hasBgColor: false,
  invertColor: false,
};
