import React, { Component, ReactNode } from "react";
import { withRouter, SingletonRouter } from "next/router";
import Head from "next/head";

import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

interface IProps {
  router: SingletonRouter;
  children?: ReactNode;
  pageTitle?: string;
  [index: string]: any;
}

class DefaultTemplate extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { children, pageTitle, router } = this.props;
    const { pathname } = router;

    return (
      <>
        <Head>
          <title>Teclead {pageTitle ? `| ${pageTitle}` : ""}</title>
        </Head>
        <Header navPosition="right" className="reveal-from-bottom" />
        <main className="site-content">{children}</main>
        <Footer pathname={pathname} />
      </>
    );
  }
}

export default withRouter(DefaultTemplate);
