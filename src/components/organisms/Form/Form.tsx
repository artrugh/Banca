import React, { Component } from "react";

import { InputTypes } from "../../../common/interfaces";

import Button from "../../atoms/Button/Button";
import ButtonGroup from "../../atoms/ButtonGroup/ButtonGroup";
import Input from "../../molecules/Input/Input";

class Form extends Component<{}> {
  public constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <form>
        <Input
          id="newsletter"
          type={InputTypes.email}
          label="Email"
          hasIcon="right"
          placeholder="Your email"
          hint="Some Err"
          status="error"
          size="sm"
          formGroup="vhvn"
          required
        >
          input props: size=sm, hasIcon= false, labbelHiden= false, status=error, hint=SomeErr,
          formGroup=displayFlex
        </Input>
        <Input
          id="user-name"
          type={InputTypes.text}
          label="Name"
          placeholder="Your Name"
          hint="warning"
          status="warning"
          formGroup="desktop"
          required
        >
          props: requiered=true, formGroup= desktop
        </Input>
        <Input
          id="user-phone"
          type={InputTypes.tel}
          label="Your phone"
          placeholder="Your phone-number"
        >
          validators-info
        </Input>
        <Input
          id="textarea"
          type={InputTypes.textarea}
          label="Message"
          placeholder="Your Message"
          hint="Great success"
          status="success"
          rows={7}
          required
        >
          props: row=7, default=3
        </Input>
        <ButtonGroup>
          <Button tag="a" color="primary" wide href="https://cruip.com/">
            WIDE props
          </Button>
          <Button tag="a" color="primary" href="https://cruip.com/" wideMobile>
            SEND EMAIL / wideMobile
          </Button>
          <Button tag="button" color="secondary" size="sm" href="https://cruip.com/" wideMobile>
            SEND EMAIL / size= sm
          </Button>
        </ButtonGroup>
      </form>
    );
  }
}

export default Form;
