import { ISocial } from "../../common/interfaces";
import { Social } from "../../common/enums";

const widthHeight: number = 25;

export const social: Array<ISocial> = [
  {
    title: Social.vimeo,
    link: "https://vimeo.com/arturorugh",
    widthHeight,
  },
  {
    title: Social.gitHub,
    link: "https://github.com/artrugh",
    widthHeight,
  },
  {
    title: Social.linkedIn,
    link: "https://www.linkedin.com/in/arturorugh/",
    widthHeight,
  },
];
