import React, { Component, createElement } from "react";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import Button from "../../atoms/Button/Button";

type State = { checked: boolean };
type Props = {};

class CookiesModal extends Component<Props, State> {
  public constructor(props: Readonly<Props>, public state: State) {
    super(props);
    this.state = { checked: false };
  }

  public handlerLabel = (): void => {
    this.setState({ checked: true });
  };

  // alternatibely
  private createReactCheckbox = (): JSX.Element => {
    const e = createElement;
    const attr = {
      className: "cookies__input__checkbox",
      type: "checkbox",
      defaultChecked: false,
      id: "cookies__input__checkbox",
    };
    const el: JSX.Element = e("input", attr);

    return el;
  };

  public render(): JSX.Element {
    const description =
      "Wir verwenden Cookies, um Inhalte zu personalisieren, Werbeanzeigen anzupassen, diese zu messen und die Sicherheit für unsere Besucher zu steigern.";

    return (
      <>
        <input
          type="checkbox"
          className="cookies__checkbox"
          id="cookies__checkbox"
          defaultChecked={this.state.checked}
          onChange={this.handlerLabel}
        />
        <label className="cookies__checkbox__label" htmlFor="cookies__checkbox">
          <div className="container-sm">
            <div className="cookies__checkbox__text">
              <p className="m-0 text-sm">{description}</p>
            </div>
            <Button
              tag="button"
              color="primary"
              className="cookies__checkbox__button"
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
