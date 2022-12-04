import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Link as DefaultLink } from "react-router-dom";
import "./link.scss";

import blockname from "../../utils/blockname";

const b = blockname("link");

export type LinkProps = {
  // Дополнительный класс контейнера
  className?: string;
  // Путь для перехода
  path: string;
  // Дочерний элемент
  children?: ReactNode;
}

const Link: FC<LinkProps> = (props) => {
  const { className, path, children } = props || {};
  console.log({ className });

  return (
    <DefaultLink className={cn(className, b())} to={path}>
      {children}
    </DefaultLink>
  );
};

export default Link;