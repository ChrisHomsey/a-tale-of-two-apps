import React from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>A Tale of Two Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* Where the pages go */}
      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default PageLayout;
