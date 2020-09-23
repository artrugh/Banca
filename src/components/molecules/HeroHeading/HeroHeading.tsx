import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { Color } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import ButtonGroup from "../../atoms/ButtonGroup/ButtonGroup";
import Button from "../../atoms/Button/Button";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";

class HeroHeading extends Component<{}> {
  public constructor(props: {}) {
    super(props);
  }

  public componentDidMount(): void {}

  public render(): JSX.Element {
    return (
      <>
        <div id="scroll-behaviour-underline" className="loaded-none" />
        <h1
          className="mt-0 mb-16 reveal-from-bottom heading"
          data-reveal-delay="200"
        >
          Garantizamos una compra
          <br />
          tan <span className="text-color-primary">facil </span>
          como <span className="text-color-primary">personal</span>
        </h1>
        <div className="container-xs">
          <p
            className="m-0 mb-32 reveal-from-bottom sub-heading"
            data-reveal-delay="400"
          >
            Banca es una empresa que se especializa en la venta de tierra,
            ofreciendo una variedad de productos que se ajusta a la necesidad de
            cada uno de nuestros clientes. <br />
            <span className="text-color-primary">Calidad </span>y{" "}
            <span className="text-color-primary">accesibilidad</span> nos
            identifican.
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
              <SmoothScroll to="features-tiles">
                <Button
                  tag="a"
                  color={Color.primary}
                  wideMobile
                  href="https://cruip.com/"
                >
                  visitanos
                </Button>
              </SmoothScroll>
              <Button
                tag="a"
                color={Color.secondary}
                wideMobile
                href="https://github.com/cruip/open-react-template/"
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
