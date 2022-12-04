import React, { FC } from "react";
import cn from "classnames";
import "./header.scss";

import { ABOUT, ROOT } from "../../navigation";
import blockname from "../../utils/blockname";
import Link from "../Link";

const b = blockname("header");

export type HeaderProps = {
  // Дополнительный класс контейнера
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(className, b())}>
      <div className={b("item")}>
        <Link path={ABOUT} className={b("link")}>
          <span className={b("text-shadow")}>
            {"О"}
          </span>
          <span className={b("text")}>
            {"ПРОЕКТЕ"}
          </span>
        </Link>
      </div>
      <div className={b("item")}>
        <Link path={ROOT} className={b("text")}>
          <div className={b("icon")}>
            <span className={b("text")}>
              {"АНИМЕ"}
            </span>
            <span className={b("text-shadow")}>
              {"ПОИСК"}
            </span>
          </div>
        </Link>
      </div>
      <div className={b("item")}>
        <a className={b("link-telegram")}
          target="_blank"
          rel="noreferrer"
          aria-label="Link to Telegram"
          href={"telegram"}>
        </a>
      </div>
    </div>
  );
};

export default Header;