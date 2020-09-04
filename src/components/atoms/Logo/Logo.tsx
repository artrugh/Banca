import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { LogoType } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import MiniLogoAr from "../../../assets/logos/MiniLogoAr";
import MainLogoAr from "../../../assets/logos/MainLogoAr";
import MiniLogoTeclead from "../../../assets/logos/MiniLogoTeclead";
import MainLogoTeclead from "../../../assets/logos/MainLogoTeclead";
import MiniLogoBanca from "../../../assets/logos/MiniLogoBanca";
import MainLogoBanca from "../../../assets/logos/MainLogoBanca";

interface IProps {
  logoId: LogoType;
  className?: string;
}

class Logo extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  private get logoType(): JSX.Element {
    const { logoId } = this.props;

    if (logoId === LogoType.miniLogoAr) {
      return <MiniLogoAr />;
    }

    if (logoId === LogoType.mainLogoAr) {
      return <MainLogoAr />;
    }

    if (logoId === LogoType.miniLogoTeclead) {
      return <MiniLogoTeclead />;
    }

    if (logoId === LogoType.mainLogoTeclead) {
      return <MainLogoTeclead />;
    }

    if (logoId === LogoType.miniLogoBanca) {
      return <MiniLogoBanca />;
    }

    if (logoId === LogoType.mainLogoBanca) {
      return <MainLogoBanca />;
    }

    return null;
  }

  public render(): JSX.Element {
    const { logoId, className, ...rest } = this.props;

    return (
      <div {...rest} className={classNames(className)}>
        {this.logoType}
      </div>
    );
  }
}

export default Logo;
