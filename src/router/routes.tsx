import { JSX } from "react";

import AppLayout from "../layout/AppLayout";
import { Error404, Login } from "../pages";

type JSXComponent = () => JSX.Element;

interface RouteType {
  to?: string;
  path: string;
  name?: string;
  Component: JSXComponent;
}

const routes: RouteType[] = [
  {
    path: "/login",
    name: "login",
    Component: Login,
  },
  {
    path: "/home/*",
    to: "/home/",
    name: "home",
    Component: AppLayout,
  },
  {
    path: "/*",
    name: "",
    Component: Error404,
  },
];

export default routes;
