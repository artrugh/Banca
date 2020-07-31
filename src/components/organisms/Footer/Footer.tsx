import React, { Component } from "react";
import classNames from "classnames";

import { Iclasses } from "../../../common/interfaces";

import Logo from "../../atoms/Logo/Logo";
import FooterNav from "../../molecules/FooterNav/FooterNav";
import FooterSocial from "../../molecules/FooterSocial/FooterSocial";

interface IProps {
  topOuterDivider?: boolean;
  topDivider?: boolean;
  [propName: string]: boolean | string;
}

const DefaultProps: IProps = {
  topOuterDivider: false,
  topDivider: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Footer extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  private get classes(): Iclasses {
    const { className, topOuterDivider, topDivider } = this.props;
    const outerClasses = classNames(
      "site-footer center-content-mobile",
      topOuterDivider && "has-top-divider",
      className
    );

    const innerClasses = classNames("site-footer-inner", topDivider && "has-top-divider");

    return { outerClasses, innerClasses };
  }

  public render(): JSX.Element {
    const { className, topOuterDivider, topDivider, ...rest } = this.props;

    return (
      <footer {...rest} className={this.classes.outerClasses}>
        <div className="container">
          <div className={this.classes.innerClasses}>
            <div className="footer-top space-between text-xxs">
              <Logo />
              <FooterSocial />
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <FooterNav />
              <div className="footer-copyright">
                Made by <a href="https://cruip.com">Cruip</a>. All right reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;