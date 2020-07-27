import React, { Component } from "react";
import ButtonGroup from "./../../atoms/ButtonGroup/ButtonGroup";
import Button from "./../../atoms/Button/Button";

class HeroHeading extends Component {
  render() {
    return (
      <>
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
        Technical Expertise and {" "}
          <span className="text-color-primary">Cross-Industry</span>
        </h1>
        <div className="container-xs">
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
          Wir agieren in den Gebieten IT-Consulting und technologisches Coaching. Deutsche DAX-Konzerne vertrauen uns bei der Umsetzung digitaler Projekte.
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
              <Button
                tag="a"
                color="primary"
                wideMobile
                href="https://cruip.com/"
              >
                visit us
              </Button>
              <Button
                tag="a"
                color="dark"
                wideMobile
                href="https://github.com/cruip/open-react-template/"
              >
                contact us
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </>
    );
  }
}

export default HeroHeading;
