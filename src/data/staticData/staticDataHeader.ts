import { IHeader, ICheckbox } from "../../common/interfaces";
import { HeaderItemType, Languages } from "../../common/enums";

export const headerData: Array<IHeader | ICheckbox> = [
  {
    title: "projects",
    to: "products",
    role: HeaderItemType.anchor,
  },
  {
    title: "tec",
    to: "tec",
    role: HeaderItemType.anchor,
  },
  {
    title: "contact",
    to: "cta",
    role: HeaderItemType.anchor,
  },
  {
    title: "language",
    role: HeaderItemType.checkbox,
    off: Languages.EN,
    on: Languages.EN,
  },
];
