// COMMON
import { IPropsInput, IPropsButton } from "../common/interfacesProps";
import { InputTypes, Reveal, Size, Color, TecTools } from "../common/enums";
import { ITile, IImageLogo } from "../common/interfaces";

interface IForms {
  reveal?: Reveal;
  inputs: IPropsInput[];
  buttons?: IPropsButton[];
}

export const contactForm: IForms = {
  reveal: Reveal.bottom,
  inputs: [
    {
      children: null,
      label: "",
      labelHidden: false,
      type: InputTypes.text,
      status: "",
      disabled: false,
      required: false,
      formGroup: null,
      hasIcon: null,
      size: Size.sm,
      placeholder: "",
      rows: 3,
      hint: null,
    },
    {
      id: "newsletter",
      type: InputTypes.email,
      label: "Email",
      hasIcon: "right",
      placeholder: "Your email",
      hint: "Some Err",
      status: "error",
      size: Size.sm,
      formGroup: "vhvn",
      required: true,
      children:
        "input props: size=sm, hasIcon= false, labbelHiden= false, status=error, hint=SomeErr, formGroup=displayFlex",
    },
    {
      id: "user-name",
      type: InputTypes.text,
      label: "Name",
      placeholder: "Your Name",
      hint: "warning",
      status: "warning",
      formGroup: "desktop",
      required: true,
      children: "props: requiered=true, formGroup= desktop",
    },
    {
      id: "user-phone",
      type: InputTypes.tel,
      label: "Your phone",
      placeholder: "Your phone-number",
      children: "validators-info",
    },
    {
      id: "textarea",
      type: InputTypes.textarea,
      label: "Message",
      placeholder: "Your Message",
      hint: "Great success",
      status: "success",
      rows: 7,
      required: true,
      children: "props: row=7, default=3",
    },
  ],
  buttons: [
    {
      tag: "a",
      color: Color.primary,
      wide: true,
      href: "https://cruip.com/",
      children: "WIDE props",
    },
    {
      tag: "a",
      color: Color.primary,
      href: "https://cruip.com/",
      wideMobile: true,
      children: "SEND EMAIL / wideMobile",
    },
    {
      color: Color.secondary,
      size: Size.sm,
      href: "https://cruip.com/",
      wideMobile: true,
      children: "SEND EMAIL / size= sm",
    },
  ],
};

export const tiles: Array<ITile> = [
  {
    title: "IT-Consulting",
    description:
      "Wir verbinden technologische Kompetenz mit branchenübergreifender Projekterfahrung und begleiten Sie von der Konzeption bis zur erfolgr",
    icon: "feature-tile-icon-01.svg",
    alt: "Features tile icon 01",
  },
  {
    title: "Technologie Coaching",
    description:
      "Technologie Coaching Firmeninternes technologisches Know-How ist eine Grundvoraussetzung abgeschlossener IT-Projekte, um langfristig erf",
    icon: "feature-tile-icon-02.svg",
    alt: "Features tile icon 02",
  },
  {
    title: "IT-Architectur",
    description:
      "Beratung in der Konzeption und Erstellung von nachaltigenTechnologiestrategien in den Bereichen Software- und Infrastrukturarchitektur.",
    icon: "feature-tile-icon-03.svg",
    alt: "Features tile icon 01",
  },
  {
    title: "Robust Workflow",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    icon: "feature-tile-icon-04.svg",
    alt: "Features tile icon 01",
  },
];

export const client: Array<IImageLogo> = [
  {
    name: TecTools.js,
    src: "/images/logo-audi.jpg",
    width: "170",
    height: "100",
  },
  {
    name: TecTools.js,
    src: "/images/logo-nodejs.jpg",
    width: "170",
    height: "100",
  },
  {
    name: TecTools.js,
    src: "/images/logo-teclead-bk.svg",
    width: "170",
    height: "100",
  },
  {
    name: TecTools.js,
    src: "/images/logo-audi.jpg",
    width: "170",
    height: "100",
  },
];

const logoTecPathSrc = "/images/logo-tec/logo_tec-";
const widthLogoTec = "120px";
const heightLogoTec = "120px";

export const tec: Array<IImageLogo> = [
  {
    name: TecTools.nodejs,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.js,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.ts,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.html,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.css,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.sass,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.react,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.nextjs,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.express,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.mongodb,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.pug,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.stripe,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.figma,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.ai,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
  {
    name: TecTools.ps,
    src: logoTecPathSrc,
    width: widthLogoTec,
    height: heightLogoTec,
  },
];
