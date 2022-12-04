import React, { FC, ReactNode } from "react";
import cn from "classnames";
import "./layout.scss";

import blockname from "../../utils/blockname";
import Header from "../Header";

const b = blockname("layout");

export type LayoutProps = {
  // Дополнительный класс контейнера
  className?: string;
  // Дочерний элемент
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={cn(className, b())}>
      <Header className={b("header")}/>
      {children}
    </div>
  );
};

export default Layout;