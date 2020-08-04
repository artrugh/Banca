import React, { createRef } from "react";
import App, { AppProps } from "next/app";

// import ReactGA from 'react-ga';

// STYLE
import "../assets/scss/style.scss";
// BASE CLASS

// COMMON

// HELPERS

// UTILS
import ScrollReveal from "../utils/ScrollReveal";
// COMPONENTS
import DefaultTemplate from "../components/templates/DefaultTemplate/DefaultTemplate";

type IRef = { init(): void };
type State = {
  path?: string;
};

class MyApp extends App<AppProps, State> {
  private childRef = createRef<IRef>();

  private constructor(props: AppProps, public state: State) {
    super(props);
    this.state = { path: this.props.router.pathname };
  }

  public componentDidMount(): void {
    document.body.classList.add("is-loaded");

    if (this.childRef.current) {
      this.childRef.current.init();
    }
  }

  public componentDidUpdate(): void {
    document.body.classList.add("is-loaded");

    if (this.childRef.current) {
      this.childRef.current.init();
    }
  }

  public shouldComponentUpdate(): boolean {
    if (this.state.path !== this.props.router.pathname) {
      const path = this.props.router.pathname as string;
      this.setState({ path });
    }

    return true;
  }

  public render(): JSX.Element {
    const { pageProps, Component } = this.props;

    return (
      <ScrollReveal ref={this.childRef}>
        <DefaultTemplate>
          <Component {...pageProps} />
        </DefaultTemplate>
      </ScrollReveal>
    );
  }
}

export default MyApp;
