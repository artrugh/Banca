import React, { Component } from "react";
import Head from "next/head";

import Contact from "../../components/pages/Contact/Contact";
import { contact } from "../../data/staticData";

class ContactPage extends Component<{}> {
  public constructor(props: {}) {
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