import { IHeader } from "../../common/interfaces";
import { HeaderItemType } from "../../common/enums";

export const headerData: Array<IHeader> = [
  {
    title: "contact",
    role: HeaderItemType.button,
  },
  {
    title: "career",
    role: HeaderItemType.button,
  },
  {
    title: "products",
    role: HeaderItemType.anchor,
  },
  {
    title: "tec",
    role: HeaderItemType.anchor,
  },
  {
    title: "language",
    role: HeaderItemType.checkbox,
    off: "EN",
    on: "ES",
  },
];
