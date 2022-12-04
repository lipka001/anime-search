import React, { FC } from "react";
import "./app.scss";

import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";
import Layout from "./components/Layout";

const App: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <RouterConfig/>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
