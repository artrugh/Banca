import React, { createRef } from "react";
import App, { AppProps } from "next/app";

import "../assets/scss/style.scss";
// import ReactGA from 'react-ga';

import DefaultTemplate from "../components/templates/DefaultTemplate/DefaultTemplate";
import ScrollReveal from "../utils/ScrollReveal";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

interface IRef {
  init(): void;
}

interface IState {
  path: string | undefined;
}
class MyApp extends App<AppProps, IState> {
  private childRef = createRef<IRef>();
  public state = { path: this.props.router.pathname };

  public componentDidMount(): void {
    // document.body.classList.add("has-animations");
    document.body.classList.add("is-loaded");

    if (this.childRef.current) {
      this.childRef.current.init();
    }
    // this is used for Google Analytics
    // const page = this.props.router.pathname;
    // trackPage(page);
  }

  public componentDidUpdate(): void {
    document.body.classList.add("is-loaded");

    if (this.childRef.current) {
      this.childRef.current.init();
    }
  }

  public shouldComponentUpdate(): boolean {
    if (this.state.path !== this.props.router.pathname) {
      const path: string = this.props.router.pathname;
      this.setState({ path });
      // this is used for Google Analytics
      // const page = this.props.router.pathname;
      // trackPage(page);
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
