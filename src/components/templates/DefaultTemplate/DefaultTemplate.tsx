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
  LogoType,
} from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import CookiesModal from "../../molecules/CookiesModal/CookiesModal";

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
        <CookiesModal bgColor={BgColor.darkMedium} />
        <Header
          containerSize={Size.big}
          navPosition="right"
          hideSignin
          underline={Underline.leftUnderline}
          underlineRounded
          bgColor={BgHeader.light}
          logoId={LogoType.mainLogoAr}
        />
        <main id="main" className="site-content">
          {children}
        </main>
        <Footer pathname={pathname} logoId={LogoType.miniLogoAr} />
      </>
    );
  }
}

export default withRouter(DefaultTemplate);
