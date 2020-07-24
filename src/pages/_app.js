import React, { createRef } from "react";
import App from "next/app";

import "./../assets/scss/style.scss";
// import ReactGA from 'react-ga';

import DefaultTemplate from "./../components/templates/DefaultTemplate/DefaultTemplate";
import ScrollReveal from "./../utils/ScrollReveal";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

class MyApp extends App {
  constructor(props) {
    super(props);
    this.childRef = createRef();
    this.state = { path: undefined };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFromProps");    
    return state;
  }

  componentDidMount() {
    console.log("App DidMount");

    // check if it posible to access to the body in NextJs before render
    // if it is delete body from _scroll-reveal.scsss and update the hook
    document.body.classList.add("has-animations");
    document.body.classList.remove("is-loaded");

    this.childRef.current.init();
    this.setState({ path: this.props.router.pathname });

    // this is used for Google Analytics
    // const page = this.props.router.pathname;
    // trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  componentWillUnMount() {
    console.log("App componentWillUnmount()");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App DidUpdate");
    document.body.classList.add("is-loaded");
    if (this.state.path !== this.props.router.pathname) {
      this.childRef.current.init();
      this.setState({ path: this.props.router.pathname });

      // this is used for Google Analytics
      // const page = this.props.router.pathname;
      // trackPage(page);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App shouldUpdate");
    document.body.classList.remove("is-loaded");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("App SnapshotBeforeUpdate");
    return { snapshot: this.state.isActive };
  }

  render() {    
    const { pageProps, Component } = this.props;
    return (
      <ScrollReveal
        ref={this.childRef}
        children={() => (
          <DefaultTemplate>
            <Component {...pageProps} />
          </DefaultTemplate>
        )}
      />
    );
  }
}

export default MyApp;