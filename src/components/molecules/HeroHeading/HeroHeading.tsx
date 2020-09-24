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
          Technical Expertise and{" "}
          <span className="text-color-primary">Cross-Industry</span>
        </h1>
        <div className="container-xs">
          <div id="scroll-behaviour-play-on" className="loaded-none" />
          <p
            className="m-0 mb-32 reveal-from-bottom sub-heading"
            data-reveal-delay="400"
          >
            Wir agieren in den Gebieten IT-Consulting und technologisches
            Coaching. Deutsche DAX-Konzerne vertrauen uns bei der Umsetzung
            digitaler Projekte.
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
              <SmoothScroll
                to="features-tiles"
                color={Color.primary}
                wideMobile
              >
                visit us
              </SmoothScroll>
              <Button
                tag={TagType.anchor}
                color={Color.primary}
                wideMobile
                href={mail ? mailito : "/"}
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
