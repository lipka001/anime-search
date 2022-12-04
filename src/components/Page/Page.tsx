import React, { FC } from "react";
import cn from "classnames";
import "./page.scss";

import blockname from "../../utils/blockname";
import Header from "../Header";

const b = blockname("page");

export type PageProps = {
  // Дополнительный класс контейнера
  className?: string;
}

const Page: FC<PageProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(className, b())}>
      <Header/>
    </div>
  );
};

export default Page;