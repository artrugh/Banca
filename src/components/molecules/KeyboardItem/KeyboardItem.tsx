import React, { Component } from "react";
import Link from "next/link";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { Env } from "../../../common/enums";
import { IPropsItem } from "../../../common/interfacesProps";
// HELPERS

// UTILS
import checkLengthPropsData from "../../../utils/checkLengthPropsData";
// COMPONENTS

interface IProps extends IPropsItem {
  config: { [key: string]: number[] };
}

class KeyboardItem extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);

    if (process.env.NODE_ENV === Env.dev) {
      checkLengthPropsData.check(this.props.item, this.props.config);
    }
  }

  public render(): JSX.Element {
    const { title } = this.props.item;
    const { delay, bgColor, underline, underlineRounded, density } = this.props;

    return (
      <div
        className={cn("tiles-item reveal-from-bottom m-24", bgColor)}
        data-reveal-delay={`${delay * 200}`}
      >
        <div className="tiles-item-inner">
          <div className="features-tiles-item-content">
            <Link href={`/career/#${title.toLowerCase()}`}>
              <a>
                <h4
                  className={cn(
                    "heading mt-0 mb-8 keyboard-item",
                    underline,
                    underlineRounded
                  )}
                  data-density={density}
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
