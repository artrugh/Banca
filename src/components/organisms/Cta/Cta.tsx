import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultP,
  IPropsClasses,
  IPropsFeatureItem,
} from "../../../common/interfacesProps";
import { InputTypes, ItemBgDark } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Input from "../../molecules/Input/Input";
import ButtonAnchor from "../../atoms/ButtonAnchor/ButtonAnchor";

export interface IProps extends IPropsFeatureItem {
  split: boolean;
  color?: string;
  input?: boolean;
}

export const DefaultProps: IProps = {
  ...DefaultP,
  split: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Cta extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      itemBgDark,
      bottomDivider,
      hasBgColor,
      invertColor,
      split,
    } = this.props;

    const outerClasses = classNames(
      "cta section center-content-mobile reveal-from-bottom",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "cta-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider",
      split && "cta-split",
      itemBgDark === ItemBgDark.heigh && "has-bg-dark-heigh",
      itemBgDark === ItemBgDark.medium && "has-bg-dark-medium",
      itemBgDark === ItemBgDark.low && "has-bg-dark-low"
    );

    return { outerClasses, innerClasses };
  }

  public render(): JSX.Element {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      color,
      invertColor,
      itemBgDark,
      input,
      split,
      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses}>
        <div className="container">
          <div className={this.classes.innerClasses}>
            <div className="cta-slogan">
              <h3 className="m-0 text-color-high">Contact us to work on it!</h3>
            </div>
            <div className="cta-action">
              {input ? (
                <Input
                  id="newsletter"
                  type={InputTypes.email}
                  label="Subscribe"
                  labelHidden
                  hasIcon="right"
                  placeholder="Your best email"
                >
                  <svg
                    width="16"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                      fill="#376DF9"
                    />
                  </svg>
                </Input>
              ) : (
                <ButtonAnchor href="/contact" color={color} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
