import React, { Component } from "react";
import Link from "next/link";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Env } from "../../../common/enums";
import { IPropsClasses, IPropsItem } from "../../../common/interfacesProps";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS

interface IProps extends IPropsItem {
  config: { [key: string]: number[] };
}

class KeyboardItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.prod) {
      checkLenghPropsData.check(this.props.item, this.props.config);
    }
  }

  public get classes(): IPropsClasses {
    const { underline, bgColor } = this.props;

    const container = classNames(
      "tiles-item reveal-from-bottom",
      bgColor && bgColor,
      "m-24"
    );

    const heading = classNames(
      "heading",
      "mt-0 mb-8 keyboard-item",
      underline && underline
    );

    const parragraph = classNames("m-0 text-sm");

    return { heading, container, parragraph };
  }

  public render(): JSX.Element {
    const { title } = this.props.item;
    const { delay } = this.props;

    return (
      <div
        className={this.classes.container}
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          <div className="features-tiles-item-content">
            <Link href={`/career/#${title.toLowerCase()}`}>
              <a>
                <h4 className={this.classes.heading}>{title}</h4>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyboardItem;
