import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "src/ui/features/Layout";
import AdminPage from "src/ui/pages/Admin";
import HomePage from "src/ui/pages/Home";
import LoginPage from "src/ui/pages/Login";
import ProfilePage from "src/ui/pages/Profile";
import RegisterPage from "src/ui/pages/Register";
import RequireUser from "src/ui/components/requireUser";
import UnauthorizedPage from "src/ui/pages/Unauthorized";
import { UserRoles } from "src/ui/features/User/User.types";

const routing = [
  {
    path: "/",
    element: Layout,
    routes: [
      {
        index: true,
        element: HomePage,
      },
      {
        roles: [UserRoles.USER, UserRoles.ADMIN],
        routes: [
          {
            path: "profile",
            element: ProfilePage,
          },
        ],
      },
      {
        roles: [UserRoles.ADMIN],
        routes: [
          {
            path: "admin",
            element: AdminPage,
          },
        ],
      },
      {
        path: "unauthorized",
        element: UnauthorizedPage,
      },
    ],
  },
  {
    path: "login",
    element: LoginPage,
  },
  {
    path: "register",
    element: RegisterPage,
  },
];

function buildPublicRoute(rte: any) {
  if (rte.index) {
    <Route key="index" index element={<rte.element />} />;
  } else {
    return <Route key={rte.path} path={rte.path} element={<rte.element />} />;
  }
}

function buildPrivateRoute(rte: any) {
  if (rte.index) {
    <Route key={rte.path} element={<RequireUser allowedRoles={rte.roles} />}>
      <Route key="index" index element={<rte.element />} />;
    </Route>;
  } else {
    return (
      <Route key={rte.path} element={<RequireUser allowedRoles={rte.roles} />}>
        <Route key={rte.path} path={rte.path} element={<rte.element />} />;
      </Route>
    );
  }
}

function buildPrivateRoutes(rte: any) {
  return (
    <Route key={rte.path} element={<RequireUser allowedRoles={rte.roles} />}>
      {buildRoutes(rte.routes)}
    </Route>
  );
}

function buildPublicRoutes(rte: any) {
  return (
    <Route key={rte.path} element={<rte.element />}>
      {buildRoutes(rte.routes)}
    </Route>
  );
}

function buildRoutes(rtes: any) {
  return rtes.map((route: any) => {
    if (route.routes) {
      if (route.roles) {
        return buildPrivateRoutes(route.routes);
      } else {
        return buildPublicRoutes(route.routes);
      }
    } else {
      if (rtes.roles) {
        return buildPrivateRoute(route);
      } else {
        return buildPublicRoute(route);
      }
    }
  });
}

export default function SiteRoutes() {
  return (
    <Routes>
      {/* {routes.map((route) => (
        <Route path={route.path} element={<route.element />} />
      ))} */}
      {buildRoutes(routing)}
    </Routes>
  );
}
