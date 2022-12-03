import React, { FC } from "react";
import cn from "classnames";

import blockname from "../../utils/blockname";

const b = blockname("page");

export type PageProps = {
  // Дополнительный класс контейнера
  className: string;
}

const Page: FC<PageProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(className, b())}>
      {"Страница"}
    </div>
  );
};

export default Page;