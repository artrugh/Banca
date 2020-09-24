import { IHeader, ICheckbox } from "../../common/interfaces";
import { TagType, Languages } from "../../common/enums";

export const headerData: Array<IHeader | ICheckbox> = [
  {
    title: "projects",
    to: "products",
    role: TagType.anchor,
  },
  {
    title: "tec",
    to: "tec",
    role: TagType.anchor,
  },
  {
    title: "contact",
    to: "cta",
    role: TagType.anchor,
  },
  {
    title: "language",
    role: TagType.checkbox,
    off: Languages.EN,
    on: Languages.EN,
  },
];
