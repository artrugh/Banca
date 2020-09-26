import { IHeader, ICheckbox } from "../../common/interfaces";

import { TagType } from "../../common/enums";

export const headerData: Array<IHeader | ICheckbox> = [
  {
    title: "nosotros",
    to: "features-tiles",
    role: TagType.anchor,
  },
  {
    title: "productos",
    to: "products",
    role: TagType.anchor,
  },
  {
    title: "clientes",
    to: "testimonial",

    role: TagType.anchor,
  },
  {
    title: "contacto",
    to: "cta",
    role: TagType.anchor,
  },
];
