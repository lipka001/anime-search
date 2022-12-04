import { ABOUT, ANIME, ROOT, NOT_FOUND } from "./contants";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFountPage from "../pages/NotFountPage";

const routes = [
  {
    name: "home",
    path: ROOT,
    element: HomePage,
  },
  {
    name: "anime",
    path: ANIME,
    element: HomePage,
  },
  {
    name: "about",
    path: ABOUT,
    element: AboutPage,
  },
  {
    name: "notFount",
    path: NOT_FOUND,
    element: NotFountPage,
  }
];

export default routes;