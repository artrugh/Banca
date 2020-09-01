// COMMON
import { IPropsInput, IPropsButton } from "../../common/interfacesProps";
import { InputTypes, Reveal, Size, Color } from "../../common/enums";

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
