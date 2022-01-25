import React from "react";
import PageLayout from "../layouts/PageLayout";
import "../styles/global.css";
import "../styles/big-global.css";

const App = ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
