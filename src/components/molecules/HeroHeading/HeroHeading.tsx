import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { Color, TagType } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import ButtonGroup from "../../atoms/ButtonGroup/ButtonGroup";
import Button from "../../atoms/Button/Button";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";

interface IProps {
  mail?: string;
}

class HeroHeading extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public componentDidMount(): void {}

  public render(): JSX.Element {
    const { mail } = this.props;
    const mailito = `mailto:${mail}`;

    return (
      <>
        <div id="scroll-behaviour-underline" className="loaded-none" />
        <h1
          className="mt-0 mb-16 reveal-from-bottom heading"
          data-reveal-delay="200"
        >
          Garantizamos una compra
          <br />
          tan <span className="text-color-primary">fácil </span>
          como <span className="text-color-primary">personal</span>
        </h1>
        <div className="container-xs">
          <p
            className="m-0 mb-48 reveal-from-bottom sub-heading"
            data-reveal-delay="400"
          >
            Somos una empresa especializada en la venta de tierra. Ofrecemos una
            variedad de productos que se ajusta a la necesidad de cada uno de
            nuestros clientes. <br />
            <span className="text-color-secondary">Calidad </span>y{" "}
            <span className="text-color-secondary">accesibilidad</span> nos
            identifican.
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
              <SmoothScroll
                to="features-tiles"
                color={Color.primary}
                wideMobile
                tag={TagType.button}
              >
                visitanos
              </SmoothScroll>
              <Button
                tag={TagType.anchor}
                color={Color.secondary}
                wideMobile
                href={mail ? mailito : "/"}
              >
                contactanos
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </>
    );
  }
}

export default HeroHeading;
