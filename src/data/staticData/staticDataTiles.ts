import { ITile } from "../../common/interfaces";
import { Tile } from "../../common/enums";

export const tiles: Array<ITile> = [
  {
    title: "Calidad",
    description:
      "Garantizamos la mejor tierra, a la altura de sus necesidades. Un perfecto balance entre precios accesibles y excelente calidad.",
    icon: Tile.tile1,
    alt: "Features tile icon 01",
  },
  {
    title: "Facilidad",
    description:
      "Facilidades en el pago, envios a domicilio, compras online sin necesidad de registrarse: son algunos de nuestros servicios.",
    icon: Tile.tile5,
    alt: "Features tile icon 02",
  },
  {
    title: "Personalización",
    description:
      "Evaluamos las necesidades de cada cliente, ofreciendo soluciones a medida. Un producto personalizado es nuestro sello de identidad.",
    icon: Tile.tile6,
    alt: "Features tile icon 01",
  },
];
