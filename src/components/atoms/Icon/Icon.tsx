/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

import React from "react";
import cn from "classnames";

// STYLE
// import { Size } from '@hurrado/common/src/types/enums';
// import st from './icon.module.scss';

// COMMON
import { IconName, Color, Size } from "../../../common/enums";

interface IIcon {
  name?: IconName;
  size?: Size;
  color?: Color;
  strokeColor?: Color;
  circleColor?: Color;
  ellipseColor?: Color;
  className?: string;
  animationHover?: boolean;
}

export default class Icon extends React.Component<IIcon> {
  private generalIcons: { [key: string]: string } = {
    [IconName.chevron]: require("./images/general/chevron.svg?include"),
  };

  private logoIcons: { [key: string]: string } = {
    [IconName.mainAr]: require("./images/logos/main-ar.svg?include"),
    [IconName.mainBanca]: require("./images/logos/main-banca.svg?include"),
    [IconName.mainTeclead]: require("./images/logos/main-teclead.svg?include"),
    [IconName.miniAr]: require("./images/logos/mini-ar.svg?include"),
    [IconName.miniBanca]: require("./images/logos/mini-banca.svg?include"),
    [IconName.miniTeclead]: require("./images/logos/mini-teclead.svg?include"),
  };

  private techIcons: { [key: string]: string } = {
    [IconName.ai]: require("./images/tech/logo_tech-ai.svg?include"),
    [IconName.css]: require("./images/tech/logo_tech-css.svg?include"),
    [IconName.express]: require("./images/tech/logo_tech-express.svg?include"),
    [IconName.figma]: require("./images/tech/logo_tech-figma.svg?include"),
    [IconName.html]: require("./images/tech/logo_tech-html.svg?include"),
    [IconName.js]: require("./images/tech/logo_tech-js.svg?include"),
    [IconName.mongodb]: require("./images/tech/logo_tech-mongodb.svg?include"),
    [IconName.nextjs]: require("./images/tech/logo_tech-nextjs.svg?include"),
    [IconName.nodejs]: require("./images/tech/logo_tech-nodejs.svg?include"),
    [IconName.premiere]: require("./images/tech/logo_tech-premiere.svg?include"),
    [IconName.ps]: require("./images/tech/logo_tech-ps.svg?include"),
    [IconName.pug]: require("./images/tech/logo_tech-pug.svg?include"),
    [IconName.nodejs]: require("./images/tech/logo_tech-nodejs.svg?include"),
    [IconName.premiere]: require("./images/tech/logo_tech-premiere.svg?include"),
    [IconName.react]: require("./images/tech/logo_tech-react.svg?include"),
    [IconName.sass]: require("./images/tech/logo_tech-sass.svg?include"),
    [IconName.stripe]: require("./images/tech/logo_tech-stripe.svg?include"),
    [IconName.ts]: require("./images/tech/logo_tech-ts.svg?include"),
  };

  private socialIcons: { [key: string]: string } = {
    [IconName.github]: require("./images/social/logo_social-github.svg?include"),
    [IconName.linkedin]: require("./images/social/logo_social-linkedin.svg?include"),
    [IconName.vimeo]: require("./images/social/logo_social-vimeo.svg?include"),
  };

  private tileIcons: { [key: string]: string } = {
    [IconName.tile1]: require("./images/tiles/feature-tile-icon-01.svg?include"),
    [IconName.tile2]: require("./images/tiles/feature-tile-icon-02.svg?include"),
    [IconName.tile3]: require("./images/tiles/feature-tile-icon-03.svg?include"),
    [IconName.tile4]: require("./images/tiles/feature-tile-icon-04.svg?include"),
    [IconName.tile5]: require("./images/tiles/feature-tile-icon-05.svg?include"),
    [IconName.tile6]: require("./images/tiles/feature-tile-icon-06.svg?include"),
  };

  private clientIcons: { [key: string]: string } = {
    [IconName.audi]: require("./images/clients/audi.svg?include"),
  };

  private icons = {
    ...this.generalIcons,
    ...this.logoIcons,
    ...this.techIcons,
    ...this.socialIcons,
    ...this.tileIcons,
    ...this.clientIcons,
  };

  public render(): JSX.Element {
    const {
      name,
      color,
      size,
      strokeColor,
      circleColor,
      ellipseColor,
      className,
      animationHover,
    } = this.props;

    return (
      <i
        className={cn(
          {
            [`size-${size}`]: size,
            [`color-${color}`]: color,
            [`stroke-color-${strokeColor}`]: strokeColor,
            [`circle-color-${circleColor}`]: circleColor,
            [`ellipse-color-${ellipseColor}`]: ellipseColor,
            [`has-animation-hover`]: animationHover,
          },
          className
        )}
        dangerouslySetInnerHTML={{ __html: this.icons[name] }}
      />
    );
  }
}
