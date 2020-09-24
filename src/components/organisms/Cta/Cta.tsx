import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { DefaultP, IPropsFeatureItem } from "../../../common/interfacesProps";
import {
  InputTypes,
  BgColor,
  Color,
  CtaButtonType,
} from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Input from "../../molecules/Input/Input";
import ButtonAnchor from "../../atoms/ButtonAnchor/ButtonAnchor";
import Button from "../../atoms/Button/Button";

interface IProps extends IPropsFeatureItem {
  bgColorBox?: BgColor;
  split: boolean;
  color?: Color;
  buttonType: CtaButtonType;
  mail?: string;
  illustration?: boolean;
}

const DefaultProps: IProps = {
  ...DefaultP,
  buttonType: CtaButtonType.link,
  wrapName: "cta-inner section-inner",
  split: false,
  id: "",
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Cta extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  private get button(): ReactNode {
    const { buttonType, color, mail } = this.props;

    if (buttonType === CtaButtonType.input) {
      return (
        <Input
          id="newsletter"
          type={InputTypes.email}
          label="Subscribe"
          labelHidden
          hasIcon="right"
          placeholder="Your best email"
        >
          <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
              fill="#376DF9"
            />
          </svg>
        </Input>
      );
    }

    if (buttonType === CtaButtonType.link) {
      return <ButtonAnchor href="/contact" color={color} />;
    }

    if (buttonType === CtaButtonType.mail) {
      return (
        <a href={`mailto:${mail}`}>
          <Button color={color}>Contáctenos</Button>
        </a>
      );
    }

    return null;
  }

  public render(): JSX.Element {
    const {
      children,
      id,
      className,
      wrapName,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      bgColorBox,
      color,
      invertColor,
      bgColor,
      buttonType,
      split,
      illustration,
      ...rest
    } = this.props;

    return (
      <section
        {...rest}
        className={cn("cta section center-content-mobile", className, bgColor, {
          "has-top-divider": topOuterDivider,
          "has-bottom-divider": bottomOuterDivider,
          "invert-color": invertColor,
        })}
        id={id}
      >
        <div className="container">
          <div className={cn("section-inner", illustration)}>
            <div
              className={cn("reveal-from-bottom", wrapName, bgColorBox, {
                "has-top-divider": topDivider,
                "has-bottom-divider": bottomDivider,
                "cta-split": split,
              })}
            >
              <div className="cta-slogan">
                <h3 className="m-0 text-color-high">{children}</h3>
              </div>
              <div className="cta-action">{this.button}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
