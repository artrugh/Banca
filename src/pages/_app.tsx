import React, { createRef } from "react";
import App, { AppProps, AppInitialProps } from "next/app";

import "../assets/scss/style.scss";
// import ReactGA from 'react-ga';

import DefaultTemplate from "../components/templates/DefaultTemplate/DefaultTemplate";
import ScrollReveal from "../utils/ScrollReveal";

// import DefaultTemplate from "./.."
// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

interface IProps {
  Component: AppProps;
  pageProps: AppInitialProps;
  router: AppProps;
}

interface IRef {
  init(): void;
}

interface IState {
  path: string | undefined;
}
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
// <P extends IBasePageProps = IBasePageProps, S = {}> extends Component<P, S>

// export default function App({ Component, pageProps }: AppProps) {
class MyApp extends App<AppProps, IState> {
  private childRef = createRef<IRef>();
  public state = { path: this.props.router.pathname };
  // public constructor(props: AppProps) {
  //   super(props);
  // }

  public componentDidMount(): void {
    // check if it posible to access to the body in NextJs before render
    // if it is delete body from _scroll-reveal.scsss and update the hook
    document.body.classList.add("has-animations");
    document.body.classList.remove("is-loaded");

    if (this.childRef.current) {
      this.childRef.current.init();
    }

    // this.setState({ path: this.props.router.pathname });

    // this is used for Google Analytics
    // const page = this.props.router.pathname;
    // trackPage(page);
  }

  public componentDidUpdate(): void {
    document.body.classList.add("is-loaded");
  }

  public shouldComponentUpdate(): boolean {
    document.body.classList.remove("is-loaded");

    if (this.state.path !== this.props.router.pathname) {
      // this.childRef.current!.init();
      const path: string = this.props.router.pathname;
      this.setState({ path });

      // this is used for Google Analytics
      // const page = this.props.router.pathname;
      // trackPage(page);
    }

    return true;
  }

  // public getSnapshotBeforeUpdate(prevProps: AppProps, prevState: state): snapshot {
  //   console.log("App SnapshotBeforeUpdate");
  //   return { snapshot: this.state.path };
  // }

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
