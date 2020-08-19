import React, { Component, ReactNode } from "react";
import { withRouter, SingletonRouter } from "next/router";
import Head from "next/head";

// STYLE

// BASE CLASS

// COMMON
import { Sizes, ItemBgDark, Underline } from "../../../common/enums";
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
          <title>Teclead {pageTitle ? `| ${pageTitle}` : ""}</title>
        </Head>
        <CookiesModal itemBgDark={ItemBgDark.medium} />
        <Header
          containerSize={Sizes.big}
          navPosition="right"
          scrollBg
          hideSignin
          underline={Underline.leftUnderline}
        />
        <main className="site-content">{children}</main>
        <Footer pathname={pathname} />
      </>
    );
  }
}

export default withRouter(DefaultTemplate);
