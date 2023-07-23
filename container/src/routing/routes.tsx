import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Layout from "../containers/layout";
import { CAuth, CHome } from "./constants";
import { Auth, Home } from "../remoteMS";

// const AuthMS = lazy(() => import("auth/auth"));
// const HomeMS = lazy(() => import("home/home"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/'} />,
      },
      {
        path: `/${CAuth}/*`,
        element: <Suspense><Auth /></Suspense>,
      },
      {
        path: `/${CHome}/*`,
        element: <Suspense> <Home /></Suspense>,
      },
    ],
  }
];