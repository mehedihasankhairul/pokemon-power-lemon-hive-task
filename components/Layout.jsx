import Head from "next/head";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pokemon Power Task by Lemon Hive" />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
