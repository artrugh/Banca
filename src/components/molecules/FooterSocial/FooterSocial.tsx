import React, { ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import SocialLogos from "../../../utils/SocialLogos";
// DATA
import { social } from "../../../data/staticData/staticDataSocial";

interface IProps {
  className?: string;
  [propName: string]: any;
}

class FooterSocial extends SocialLogos<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  private get socialList(): Array<ReactNode> {
    const items = social.map((item) => (
      <li key={Math.random()}>
        <a href={item.link} target="_blank" rel="noreferrer">
          {this.SVGLogos(item.title)}
        </a>
      </li>
    ));

    return items;
  }

  public render(): JSX.Element {
    const { className, ...rest } = this.props;
    const classes = classNames("footer-social", className);

    return (
      <div {...rest} className={classes}>
        <ul className="list-reset">{this.socialList}</ul>
      </div>
    );
  }
}

export default FooterSocial;
