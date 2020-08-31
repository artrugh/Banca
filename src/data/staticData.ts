// COMMON
import { IPropsInput, IPropsButton } from "../common/interfacesProps";
import { InputTypes, Reveal, Size, Color } from "../common/enums";
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
    src: "/images/logo-audi.jpg",
    alt: "audi-logo",
    width: "170",
    height: "100",
  },
  {
    src: "/images/logo-nodejs.jpg",
    alt: "audi-logo",
    width: "170",
    height: "100",
  },
  {
    src: "/images/logo-teclead-bk.svg",
    alt: "audi-logo",
    width: "170",
    height: "100",
  },
  {
    src: "/images/logo-audi.jpg",
    alt: "audi-logo",
    width: "170",
    height: "100",
  },
];

export const tec: Array<IImageLogo> = [
  {
    src: "/images/logo-tec/logo_tec-nodejs.svg",
    alt: "nodejs-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-js.svg",
    alt: "js-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-ts.svg",
    alt: "ts-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-html.svg",
    alt: "html-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-css.svg",
    alt: "css-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-sass.svg",
    alt: "sass-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-react.svg",
    alt: "react-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-nextjs.svg",
    alt: "nextjs-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-express.svg",
    alt: "express-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-mongodb.svg",
    alt: "mongo-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-pug.svg",
    alt: "pug-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-stripe.svg",
    alt: "stripe-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-figma.svg",
    alt: "figma-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-ai.svg",
    alt: "ai-logo",
    width: "120px",
    height: "120px",
  },
  {
    src: "/images/logo-tec/logo_tec-ps.svg",
    alt: "ps-logo",
    width: "120px",
    height: "120px",
  },
];
