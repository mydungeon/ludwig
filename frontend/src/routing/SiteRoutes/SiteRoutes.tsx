import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTING } from "./SiteRoutes.constants";

function buildRoute(route: any) {
  const { key, index, path } = route;
  if (!index) {
    return <Route key={key} path={path} element={<route.element />} />;
  } else {
    return <Route key={key} index element={<route.element />} />;
  }
}

function buildRoutes(routing: any) {
  return routing.map((route: any) => {
    const { key, path, roles, routes } = route;
    if (routes && !roles) {
      return (
        <Route key={key} path={path} element={<route.element />}>
          {buildRoutes(routes)}
        </Route>
      );
    } else if (routes && roles) {
      return (
        <Route key={key} element={<route.authorize allowedRoles={roles} />}>
          {buildRoutes(routes)}
        </Route>
      );
    } else {
      return buildRoute(route);
    }
  });
}

export default function SiteRoutes() {
  return <Routes>{buildRoutes(ROUTING)}</Routes>;
}
