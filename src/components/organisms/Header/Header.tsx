import React, { Component, createRef, KeyboardEvent } from "react";
import Link from "next/link";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IEventHandler } from "../../../common/interfacesEvents";
import { Size, Color, Underline, Logo, BgHeader } from "../../../common/enums";
// HELPERS

// UTILS
import { ScrollManagerDisplayer } from "../../../utils/ScrollManagerDisplayer";
// COMPONENTS
import Nav from "../../molecules/Nav/Nav";
// import Logo from "../../atoms/Logo/Logo";
import Icon from "../../atoms/Icon/Icon";
import ActiveLink from "../../atoms/Link/Link";
// DATA

interface IProps {
  navPosition?: string;
  underline?: Underline;
  underlineRounded?: boolean;
  hideNav?: boolean;
  hideSignin?: boolean;
  bottomOuterDivider?: boolean;
  bottomDivider?: boolean;
  containerSize?: Size;
  bgColor?: BgHeader;
  logoName?: Logo;
  logoColor?: Color;
  logoSize?: Size;
  [propName: string]: any;
}

const DefaultProps: IProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;
type State = { isActive: boolean };

class Header extends Component<IProps, State> {
  public static defaultProps: Partial<Props> = DefaultProps;

  private nav = createRef<HTMLElement>();
  private hamburger = createRef<HTMLButtonElement>();

  public constructor(props: IProps, public state: State) {
    super(props);
    this.state = { isActive: false };
  }

  public componentDidMount(): void {
    if (this.state.isActive) {
      this.handleOpenMenu();
    }

    const { bgColor } = this.props;

    if (
      bgColor === BgHeader.transparentToDarkTypoDarkToLight ||
      bgColor === BgHeader.transparentToDarkTypoLightToLight ||
      bgColor === BgHeader.transparentToDarkTypoLightToLightUnderlineChange ||
      bgColor === BgHeader.transparentToLightTypoLightToDark ||
      bgColor === BgHeader.transparentToLightTypoDarkToDark ||
      bgColor === BgHeader.transparentToLightTypoDarkToDarkUnderlineChange
    ) {
      ScrollManagerDisplayer("scroll-behaviour-underline");
      ScrollManagerDisplayer("scroll-behaviour-main-underline-bg");
    }

    ScrollManagerDisplayer("scroll-behaviour-cookies");
    ScrollManagerDisplayer("scroll-behaviour-hero-statement-color");
    ScrollManagerDisplayer("scroll-behaviour-header-nav-color");

    document.addEventListener("keydown", this.handlerKeyPress);
    document.addEventListener("click", this.handleClickOutside);
  }

  public componentDidUpdate(): void {
    const { bgColor } = this.props;

    if (
      bgColor === BgHeader.transparentToDarkTypoDarkToLight ||
      bgColor === BgHeader.transparentToDarkTypoLightToLight ||
      bgColor === BgHeader.transparentToLightTypoLightToDark ||
      bgColor === BgHeader.transparentToLightTypoDarkToDark
    ) {
      ScrollManagerDisplayer("scroll-behaviour-underline");
      ScrollManagerDisplayer("scroll-behaviour-main-underline-bg");
      ScrollManagerDisplayer("scroll-behaviour-hero-statement-color");
      ScrollManagerDisplayer("scroll-behaviour-header-nav-color");
    }
  }

  private handleOpenMenu = (): void => {
    document.body.classList.add("off-nav-is-active");
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + "px";
    this.setState({ isActive: true });
  };

  private handleCloseMenu = (): void => {
    document.body.classList.remove("off-nav-is-active");

    if (this.nav.current) {
      this.nav.current.style.maxHeight = null;
    }

    this.setState({ isActive: false });
  };

  private handlerKeyPress: IEventHandler<Event | KeyboardEvent> = (
    e: KeyboardEvent
  ): void => {
    const { keyCode } = e;

    if (this.state.isActive && keyCode === 27) {
      this.handleCloseMenu();
    }
  };

  private handleClickOutside: IEventHandler<Event> = (e: Event): void => {
    if (!this.nav.current) {
      return;
    }

    if (
      !this.state.isActive ||
      this.nav.current.contains(e.target as HTMLElement) ||
      e.target === this.hamburger.current
    ) {
      return;
    }

    this.handleCloseMenu();
  };

  public render(): JSX.Element {
    const {
      className,
      navPosition,
      containerSize,
      bgColor,
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      logoName,
      logoColor,
      logoSize,
      underline,
      underlineRounded,
      ...rest
    } = this.props;

    return (
      <header
        {...rest}
        className={cn("site-header", bgColor, className, {
          "has-bottom-divider": bottomOuterDivider,
        })}
      >
        <div
          className={cn("container", {
            [`container-${containerSize}`]: containerSize,
          })}
          id="header"
        >
          <div
            className={cn("site-header-inner", {
              "has-bottom-divider": bottomDivider,
            })}
          >
            <Link href="/">
              <a>
                <Icon
                  name={logoName}
                  color={logoColor}
                  size={logoSize}
                  className="main-logo"
                />
              </a>
            </Link>
            {!hideNav && (
              <>
                <button
                  type="button"
                  tabIndex={0}
                  ref={this.hamburger}
                  className="header-nav-toggle"
                  onClick={
                    this.state.isActive
                      ? this.handleCloseMenu
                      : this.handleOpenMenu
                  }
                >
                  <span className="screen-reader">Menu</span>
                  <span className="hamburger">
                    <span className="hamburger-inner" />
                  </span>
                </button>
                <nav
                  ref={this.nav}
                  className={cn("header-nav", {
                    "is-active": this.state.isActive,
                  })}
                >
                  <div className="header-nav-inner">
                    <ul
                      className={cn("list-reset text-xs", {
                        [`header-nav-${navPosition}`]: navPosition,
                      })}
                    >
                      <Nav
                        classesAnchor={cn("header-nav-toggle", underline, {
                          "has-underline-rounded": underlineRounded,
                        })}
                        handlerOnClick={this.handleCloseMenu}
                        withLeng
                      />
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <ActiveLink href="/signup" activeClassName="active">
                            <a
                              role="button"
                              className="button button-primary button-wide-mobile button-sm"
                              onClick={this.handleCloseMenu}
                              onKeyDown={this.handleCloseMenu}
                              tabIndex={0}
                            >
                              signup
                            </a>
                          </ActiveLink>
                        </li>
                      </ul>
                    )}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
