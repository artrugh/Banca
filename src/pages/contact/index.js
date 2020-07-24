import React, { Component } from "react";
import Head from "next/head";

import Contact from "../../components/pages/Contact/Contact";

class ContactPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Contact</title>
        </Head>
        <Contact />
      </>
    );
  }
}

export default ContactPage;
