import { ITile } from "../../common/interfaces";
import { Tile } from "../../common/enums";

export const tiles: Array<ITile> = [
  {
    title: "IT-Consulting",
    description:
      "Wir verbinden technologische Kompetenz mit branchenübergreifender Projekterfahrung und begleiten Sie von der Konzeption bis zur erfolgr",
    icon: Tile.tile1,
    alt: "Features tile icon 01",
  },
  {
    title: "Technologie Coaching",
    description:
      "Technologie Coaching Firmeninternes technologisches Know-How ist eine Grundvoraussetzung abgeschlossener IT-Projekte, um langfristig erf",
    icon: Tile.tile2,
    alt: "Features tile icon 02",
  },
  {
    title: "IT-Architectur",
    description:
      "Beratung in der Konzeption und Erstellung von nachaltigenTechnologiestrategien in den Bereichen Software- und Infrastrukturarchitektur.",
    icon: Tile.tile3,
    alt: "Features tile icon 01",
  },
  {
    title: "Robust Workflow",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    icon: Tile.tile4,
    alt: "Features tile icon 01",
  },
];
