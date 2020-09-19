import React, { ReactNode, Component } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IconName, Size, Color } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Icon from "../../atoms/Icon/Icon";
// DATA
import { social } from "../../../data/staticData/staticDataSocial";

interface IProps {
  className?: string;
  [propName: string]: any;
}

class FooterSocial extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  private get socialList(): Array<ReactNode> {
    const items = social.map((item) => (
      <li key={Math.random()}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <Icon
            name={IconName[item.title]}
            size={Size.md}
            className="social-icon"
            color={Color.primary}
          />
        </a>
      </li>
    ));

    return items;
  }

  public render(): JSX.Element {
    const { className, ...rest } = this.props;

    return (
      <div {...rest} className={cn("footer-social", className)}>
        <ul className="list-reset">{this.socialList}</ul>
      </div>
    );
  }
}

export default FooterSocial;
