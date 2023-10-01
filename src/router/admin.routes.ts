import { JSX, LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface RouteType {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Dashboard = lazy(
  () =>
    import(/* webpackChunkName: "Dashboard" */ "../modules/dashboard/Dashboard")
);
const Clients = lazy(
  () =>
    import(/* webpackChunkName: "Clients" */ "../modules/clients/pages/List")
);

const routes: RouteType[] = [
  {
    to: "dashboard",
    path: "dashboard",
    name: "login",
    Component: Dashboard,
  },
  {
    to: "clients",
    path: "clients",
    name: "Clientes",
    Component: Clients,
  },
];

export default routes;
