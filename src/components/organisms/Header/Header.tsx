import React, { Component, createRef, KeyboardEvent } from "react";
// import Link from "next/link";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { IEventHandler } from "../../../common/interfacesEvents";
import { Size, Underline } from "../../../common/enums";
// HELPERS

// UTILS
import { ScrollManagerDisplayer } from "../../../utils/ScrollManagerDisplayer";
// COMPONENTS
import Logo from "../../atoms/Logo/Logo";
import ButtonLeng from "../../atoms/ButtonLeng/ButtonLeng";
import Link from "../../atoms/Link/Link";

export interface IProps {
  navPosition?: string;
  underline?: Underline;
  hideNav?: boolean;
  hideSignin?: boolean;
  bottomOuterDivider?: boolean;
  bottomDivider?: boolean;
  scrollBg?: boolean;
  containerSize?: Size;
  [propName: string]: any;
}

export const DefaultProps: IProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
  scrollBg: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;
type State = { isActive: boolean };

class Header extends Component<IProps, State> {
  public static defaultProps: Partial<Props> = DefaultProps;

  private nav = createRef<HTMLElement>();
  private hamburger = createRef<HTMLButtonElement>();

  public constructor(props: Readonly<IProps>, public state: State) {
    super(props);
    this.state = { isActive: false };
  }

  public componentDidMount(): void {
    if (this.state.isActive) {
      this.handleOpenMenu();
    }

    if (this.props.scrollBg) {
      ScrollManagerDisplayer("scroll-behavior-header-bg");
      ScrollManagerDisplayer("scroll-behavior-main-underline-bg");
    }

    ScrollManagerDisplayer("scroll-behavior-hero-statement-color-pages");
    ScrollManagerDisplayer("scroll-behaviour-cookies");
    ScrollManagerDisplayer("scroll-behavior-hero-statement-color");

    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("click", this.handleClickOutside);
  }

  public componentDidUpdate(): void {
    if (this.props.scrollBg) {
      ScrollManagerDisplayer("scroll-behavior-header-bg");
      ScrollManagerDisplayer("scroll-behavior-main-underline-bg");
      ScrollManagerDisplayer("scroll-behavior-hero-statement-color");
      ScrollManagerDisplayer("scroll-behavior-hero-statement-color-pages");
    }
  }

  public get classes(): IPropsClasses {
    const {
      bottomOuterDivider,
      bottomDivider,
      className,
      underline,
      navPosition,
      scrollBg,
      containerSize,
    } = this.props;

    const header = classNames(
      "site-header",
      scrollBg && "has-bg-transparent",
      bottomOuterDivider && "has-bottom-divider",
      className
    );

    const container = classNames(
      containerSize ? `container-${containerSize}` : "container"
    );

    const inner = classNames(
      "site-header-inner",
      bottomDivider && "has-bottom-divider"
    );

    const nav = classNames("header-nav", this.state.isActive && "is-active");

    const ul = classNames(
      "list-reset text-xs",
      navPosition && `header-nav-${navPosition}`
    );

    const anchor = classNames(
      "header-nav-toggle",
      underline === Underline.centerUnderline && "has-center-underline",
      underline === Underline.rightUnderline && "has-right-underline",
      underline === Underline.leftUnderline && "has-left-underline"
    );

    return { header, container, inner, nav, ul, anchor };
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

  private handleKeyPress: IEventHandler<Event | KeyboardEvent> = (
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
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      scrollBg,
      ...rest
    } = this.props;

    return (
      <header {...rest} className={this.classes.header}>
        <div className={this.classes.container}>
          <div className={this.classes.inner}>
            <Logo />
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
                <nav ref={this.nav} className={this.classes.nav}>
                  <div className="header-nav-inner">
                    <ul className={this.classes.ul}>
                      <li>
                        <Link href="/contact" activeClassName="active-link">
                          <a
                            role="button"
                            onKeyDown={this.handleCloseMenu}
                            onClick={this.handleCloseMenu}
                            tabIndex={0}
                            className={this.classes.anchor}
                          >
                            Contact
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/career" activeClassName="active-link">
                          <a
                            role="button"
                            onKeyDown={this.handleCloseMenu}
                            onClick={this.handleCloseMenu}
                            tabIndex={0}
                            className={this.classes.anchor}
                          >
                            Career
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" activeClassName="active-link">
                          <a
                            role="button"
                            onKeyDown={this.handleCloseMenu}
                            onClick={this.handleCloseMenu}
                            tabIndex={0}
                            className={this.classes.anchor}
                          >
                            Products
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/tec" activeClassName="active-link">
                          <a
                            role="button"
                            onKeyDown={this.handleCloseMenu}
                            onClick={this.handleCloseMenu}
                            tabIndex={0}
                            className={this.classes.anchor}
                          >
                            Tec
                          </a>
                        </Link>
                      </li>
                      <li className="button-lang">
                        <ButtonLeng
                          id="leng"
                          className="button button-dark button-wide-mobile button-sm"
                        />
                      </li>
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link href="/career" activeClassName="active">
                            <a
                              role="button"
                              className="button button-primary button-wide-mobile button-sm"
                              onClick={this.handleCloseMenu}
                              onKeyDown={this.handleCloseMenu}
                              tabIndex={0}
                            >
                              Career
                            </a>
                          </Link>
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
