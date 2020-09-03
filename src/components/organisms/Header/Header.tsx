import React, { Component, createRef, KeyboardEvent } from "react";
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
import Nav from "../../molecules/Nav/Nav";
import Logo from "../../atoms/Logo/Logo";
import Link from "../../atoms/Link/Link";
// DATA

interface IProps {
  navPosition?: string;
  underline?: Underline;
  underlineRounded?: boolean;
  hideNav?: boolean;
  hideSignin?: boolean;
  bottomOuterDivider?: boolean;
  bottomDivider?: boolean;
  bgTransparent?: boolean;
  containerSize?: Size;
  [propName: string]: any;
}

const DefaultProps: IProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
  bgTransparent: false,
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

    if (this.props.bgTransparent) {
      ScrollManagerDisplayer("scroll-behavior-header-bg");
      ScrollManagerDisplayer("scroll-behavior-main-underline-bg");
    }

    ScrollManagerDisplayer("scroll-behavior-hero-statement-color-pages");
    ScrollManagerDisplayer("scroll-behaviour-cookies");
    ScrollManagerDisplayer("scroll-behavior-hero-statement-color");

    document.addEventListener("keydown", this.handlerKeyPress);
    document.addEventListener("click", this.handleClickOutside);
  }

  public componentDidUpdate(): void {
    if (this.props.bgTransparent) {
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
      underlineRounded,
      navPosition,
      bgTransparent,
      containerSize,
    } = this.props;

    const header = classNames(
      "site-header",
      bgTransparent && "has-bg-transparent",
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
      underline && underline,
      underlineRounded && "has-underline-rounded"
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
      hideNav,
      hideSignin,
      bottomOuterDivider,
      bottomDivider,
      bgTransparent,
      underlineRounded,
      ...rest
    } = this.props;

    return (
      <header {...rest} className={this.classes.header}>
        <div className={this.classes.container} id="header">
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
                      <Nav
                        classesAnchor={this.classes.anchor}
                        handlerOnClick={this.handleCloseMenu}
                        withLeng
                      />
                    </ul>
                    {!hideSignin && (
                      <ul className="list-reset header-nav-right">
                        <li>
                          <Link href="/signup" activeClassName="active">
                            <a
                              role="button"
                              className="button button-primary button-wide-mobile button-sm"
                              onClick={this.handleCloseMenu}
                              onKeyDown={this.handleCloseMenu}
                              tabIndex={0}
                            >
                              signup
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
