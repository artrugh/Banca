import React, { Component, ReactNode } from "react";
import { withRouter, SingletonRouter } from "next/router";
import Head from "next/head";

// STYLE

// BASE CLASS

// COMMON
import {
  Size,
  BgColor,
  Underline,
  BgHeader,
  Logo,
  Color,
} from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
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
          <title>ArturoRugh {pageTitle ? `| ${pageTitle}` : ""}</title>
        </Head>
        <Header
          containerSize={Size.lg}
          navPosition="right"
          hideSignin
          underline={Underline.leftUnderline}
          bgColor={BgHeader.transparentToDarkTypoLightToLightUnderlineChange}
          logoName={Logo.mainBanca}
        />
        <main id="main" className="site-content">
          {children}
        </main>
        <Footer
          pathname={pathname}
          logoName={Logo.miniBanca}
          logoColor={Color.primary}
          logoSize={Size.lg}
        />
      </>
    );
  }
}

export default withRouter(DefaultTemplate);
