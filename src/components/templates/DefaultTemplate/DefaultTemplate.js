import React, { Component } from "react";
import Head from "next/head";

import Header from "./../../organisms/Header/Header";
import Footer from "./../../organisms/Footer/Footer";

export default class DefaultTemplate extends Component {
  render() {
    const { children, pageTitle } = this.props;
    return (
      <>
        <Head>
          <title>Teclead {pageTitle ? `| ${pageTitle}` : ""}</title>
        </Head>
        <Header navPosition="right" className="reveal-from-bottom" />
        <main className="site-content">{children}</main>
        <Footer />
      </>
    );
  }
}
