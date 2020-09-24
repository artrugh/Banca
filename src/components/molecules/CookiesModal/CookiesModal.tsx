import React, { Component, createElement } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { BgColor, Color, TagType } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Button from "../../atoms/Button/Button";

type State = { checked: boolean };
type Props = {
  bgColor?: BgColor;
};

class CookiesModal extends Component<Props, State> {
  public constructor(props: Readonly<Props>, public state: State) {
    super(props);
    this.state = { checked: false };
  }

  public handlerLabel = (): void => {
    this.setState({ checked: true });
  };

  // alternatibely
  // private createReactCheckbox = (): JSX.Element => {
  //   const e = createElement;
  //   const attr = {
  //     className: "cookies__input__checkbox",
  //     type: "checkbox",
  //     defaultChecked: false,
  //     id: "cookies__input__checkbox",
  //   };
  //   const el: JSX.Element = e("input", attr);

  //   return el;
  // };

  public render(): JSX.Element {
    const description =
      "Wir verwenden Cookies, um Inhalte zu personalisieren, Werbeanzeigen anzupassen, diese zu messen und die Sicherheit für unsere Besucher zu steigern.";

    const { bgColor } = this.props;

    return (
      <>
        <input
          type="checkbox"
          className="cookies__checkbox"
          id="cookies__checkbox"
          defaultChecked={this.state.checked}
          onChange={this.handlerLabel}
        />
        <label
          className={cn("cookies__checkbox__label p-24", bgColor)}
          htmlFor="cookies__checkbox"
        >
          <div className="container-sm">
            <div className="cookies__checkbox__text">
              <p className="m-0 text-sm text-color-high">{description}</p>
            </div>
            <Button
              tag={TagType.button}
              color={Color.secondary}
              className="cookies__checkbox__button m-12"
              onClick={this.handlerLabel}
            >
              agree
            </Button>
          </div>
        </label>
      </>
    );
  }
}

export default CookiesModal;
