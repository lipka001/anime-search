import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "./routes";

const RouterConfig: FC = () => {
  return (
    <Routes>
      {routes.map(route => {
        const Page = route.element;
      
        return <Route key={route.name} path={route.path} element={<Page/>}/>;
      })}
    </Routes>
  );
};

export default RouterConfig;