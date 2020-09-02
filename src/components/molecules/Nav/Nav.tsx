import React, { Component, ReactNode } from "react";

// STYLE

// BASE CLASS

// COMMON
import { HeaderItemType } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import ButtonLanguage from "../../atoms/ButtonLanguage/ButtonLanguage";
import Link from "../../atoms/Link/Link";
import SmoothScroll from "../../atoms/SmoothScroll/SmoothScroll";
// DATA
import { headerData } from "../../../data/staticData/staticDataHeader";

interface IProps {
  handlerOnClick?(): void;
  classesAnchor?: string;
  withLeng?: boolean;
}

export default class Nav extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public get listOfItems(): Array<ReactNode> {
    const { handlerOnClick, classesAnchor, withLeng } = this.props;
    const listItems: Array<ReactNode> | void = headerData.map((li: any) => {
      let item: ReactNode;

      if (li.role === HeaderItemType.button) {
        item = (
          <li key={Math.random()}>
            <Link href={`/${li.title}`} activeClassName="active-link">
              <a
                role="button"
                onKeyDown={handlerOnClick}
                onClick={handlerOnClick}
                tabIndex={0}
                className={classesAnchor}
              >
                {li.title}
              </a>
            </Link>
          </li>
        );
      } else if (li.role === HeaderItemType.anchor) {
        item = (
          <li key={Math.random()}>
            <SmoothScroll
              to={li.title}
              className={classesAnchor}
              handlerOnClick={handlerOnClick}
            >
              {li.title}
            </SmoothScroll>
          </li>
        );
      } else if (li.role === HeaderItemType.checkbox && withLeng) {
        item = (
          <li key={Math.random()} className="button-lang">
            <ButtonLanguage
              id="button-language"
              className="button button-dark button-wide-mobile button-sm"
              dataOn={li.on}
              dataOff={li.off}
            />
          </li>
        );
      }

      return item;
    });

    return listItems;
  }

  public render(): JSX.Element {
    return <>{this.listOfItems}</>;
  }
}
