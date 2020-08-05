import React from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultPropsClasses,
  InputTypes,
  Iclasses,
  Iouter,
  Iinner,
} from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import Input from "../../molecules/Input/Input";
import BaseClassesGetter from "../../../helpers/BaseGetterClasses";

export interface IProps extends Iouter, Iinner {
  split: boolean;
  className?: string;
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  split: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Cta<P extends IProps = IProps, S = {}> extends BaseClassesGetter<P, S> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: P) {
    super(props);
  }

  public get classes(): Iclasses {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
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
      split && "cta-split"
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
      invertColor,
      split,
      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses}>
        <div className="container">
          <div className={this.classes.innerClasses}>
            <div className="cta-slogan">
              <h3 className="m-0">For previewing layouts and visual?</h3>
            </div>
            <div className="cta-action">
              <Input
                id="newsletter"
                type={InputTypes.email}
                label="Subscribe"
                labelHidden
                hasIcon="right"
                placeholder="Your best email"
              >
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                    fill="#376DF9"
                  />
                </svg>
              </Input>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cta;
