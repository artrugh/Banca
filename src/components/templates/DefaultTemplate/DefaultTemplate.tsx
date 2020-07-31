import React, { Component, ReactNode } from "react";
import Head from "next/head";

import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

interface IProps {
  children?: ReactNode;
  pageTitle?: string;
  [index: string]: any;
}

export default class DefaultTemplate extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
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
