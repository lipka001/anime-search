import React, { FC } from "react";
import "./app.scss";

import Page from "./сomponents/Page";

const App: FC = () => {
  return (
    <div className="app">
      <Page className="page"/>
    </div>
  );
};

export default App;
