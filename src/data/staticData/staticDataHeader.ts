import { IHeader, ICheckbox } from "../../common/interfaces";
import { HeaderItemType, Languages } from "../../common/enums";

export const headerData: Array<IHeader | ICheckbox> = [
  {
    title: "productos",
    to: "products",
    role: HeaderItemType.anchor,
  },
  {
    title: "clientes",
    to: "testimonial",
    role: HeaderItemType.anchor,
  },
  {
    title: "contact",
    to: "cta",
    role: HeaderItemType.anchor,
  },
];
