import React, { Component } from "react";
import ButtonGroup from "./../../atoms/ButtonGroup/ButtonGroup";
import Button from "./../../atoms/Button/Button";

class HeroHeading extends Component {
  render() {
    return (
      <>
        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
          Landing template for{" "}
          <span className="text-color-primary">startups</span>
        </h1>
        <div className="container-xs">
          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
              <Button
                tag="a"
                color="primary"
                wideMobile
                href="https://cruip.com/"
              >
                Get started
              </Button>
              <Button
                tag="a"
                color="dark"
                wideMobile
                href="https://github.com/cruip/open-react-template/"
              >
                View on Github
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </>
    );
  }
}

export default HeroHeading;
