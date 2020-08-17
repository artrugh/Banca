import React, { Component } from "react";
import Link from "next/link";

// STYLE

// BASE CLASS

// COMMON
import { IItem } from "../../../common/interfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS

interface IProps extends IItem {
  underline: string;
  config: { [key: string]: number[] };
}

class KeyboardItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
    checkLenghPropsData.check(this.props.item, this.props.config);
  }

  public render(): JSX.Element {
    const { title } = this.props.item;
    const { delay, underline } = this.props;

    return (
      <div
        className="tiles-item reveal-from-bottom"
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          <div className="features-tiles-item-content">
            <Link href={`/career/#${title.toLowerCase()}`}>
              <a>
                <h4
                  className={`mt-0 mb-8 keyboard-item ${
                    underline && underline
                  }`}
                >
                  {title}
                </h4>
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default KeyboardItem;
