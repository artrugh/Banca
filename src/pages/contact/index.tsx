import React, { Component } from "react";
import Head from "next/head";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import Contact from "../../components/pages/Contact/Contact";
// DATA
import { contact } from "../../data/staticData";

class ContactPage extends Component<{}> {
  private constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Contact</title>
        </Head>
        <Contact data={contact} />
      </>
    );
  }
}

export default ContactPage;
