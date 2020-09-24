export enum Headings {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
}

export enum Size {
  super = "super",
  xl = "xl",
  lg = "lg",
  md = "md",
  sm = "sm",
  xs = "xs",
}

export enum VideoTag {
  iframe = "iframe",
  video = "video",
}

export enum DataTypedSpeed {
  fast = "100",
  slow = "200",
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

export enum CtaButtonType {
  input = "input",
  mail = "mail",
  link = "link",
}

export enum ScrollPosition {
  rightLeft = "right-left",
  leftRight = "left-right",
}

export enum Env {
  dev = "development",
  prod = "production",
  test = "test",
}

export enum BgColor {
  darkHigh = "has-bg-dark-high",
  darkMedium = "has-bg-dark-medium",
  darkLow = "has-bg-dark-low",
  lightHigh = "has-bg-light-high",
  lightMedium = "has-bg-light-medium",
  lightLow = "has-bg-light-low",
  transparent = "has-bg-transparent",
}

export enum BgHeader {
  dark = "dark",
  light = "light",
  transparentToDarkTypoLightToLight = "transparent-to-dark-typo-light-to-light",
  transparentToDarkTypoLightToLightUnderlineChange = "transparent-to-dark-typo-light-to-light-underline-change",
  transparentToDarkTypoDarkToLight = "transparent-to-dark-typo-dark-to-light",
  transparentToLightTypoDarkToDark = "transparent-to-light-typo-dark-to-dark",
  transparentToLightTypoDarkToDarkUnderlineChange = "transparent-to-light-typo-dark-to-dark-underline-change",
  transparentToLightTypoLightToDark = "transparent-to-light-typo-light-to-dark",
}

export enum Underline {
  rightUnderline = "has-right-underline",
  leftUnderline = "has-left-underline",
  centerUnderline = "has-center-underline",
}

export enum Density {
  high = "high",
  medium = "medium",
  low = "low",
}

export enum UnderlineRounded {
  underlineRounded = "has-underline-rounded",
  underlineRoundedLeft = "has-underline-rounded-left",
  underlineRoundedRight = "has-underline-rounded-right",
}

export enum Color {
  white = "white",
  dark = "dark",
  light = "light",
  primary = "primary",
  secondary = "secondary",
  high = "high",
  transparent = "transparent",
}

export enum TecTools {
  nodejs = "nodejs",
  js = "js",
  ts = "ts",
  html = "html",
  css = "css",
  sass = "sass",
  react = "react",
  nextjs = "nextjs",
  express = "express",
  mongodb = "mongodb",
  pug = "pug",
  stripe = "stripe",
  figma = "figma",
  ai = "ai",
  ps = "ps",
  premiere = "premiere",
}

export enum TagType {
  button = "button",
  checkbox = "checkbox",
  anchor = "anchor",
}

export enum Languages {
  ES = "ES",
  EN = "EN",
  DE = "DE",
}

export enum Icons {
  chevron = "chevron",
  play = "play",
}

export enum Logo {
  miniAr = "mini-ar",
  mainAr = "main-ar",
  miniTeclead = "mini-teclead",
  mainTeclead = "main-teclead",
  miniBanca = "mini-banca",
  mainBanca = "main-banca",
}

export enum Tech {
  nodejs = "nodejs",
  js = "js",
  ts = "ts",
  html = "html",
  css = "css",
  sass = "sass",
  react = "react",
  nextjs = "nextjs",
  express = "express",
  mongodb = "mongodb",
  premiere = "premiere",
  pug = "pug",
  stripe = "stripe",
  figma = "figma",
  ai = "ai",
  ps = "ps",
}

export enum Social {
  vimeo = "vimeo",
  github = "github",
  linkedin = "linkedin",
}

export enum Tile {
  tile1 = "tile1",
  tile2 = "tile2",
  tile3 = "tile3",
  tile4 = "tile4",
  tile5 = "tile5",
  tile6 = "tile6",
}

export enum Client {
  audi = "audi",
}

export type IconName = Icons | Logo | Tech | Social | Tile | Client;
export const IconName = {
  ...Icons,
  ...Logo,
  ...Tech,
  ...Social,
  ...Tile,
  ...Client,
};
