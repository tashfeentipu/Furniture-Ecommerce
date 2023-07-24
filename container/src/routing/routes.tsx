import { Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Layout from "../containers/layout";
import { Auth, Home } from "../remoteMS";
import { CAuth, CHome } from "./constants";

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
        path: `/${CAuth}`,
        element: <Suspense><Auth /></Suspense>,
      },
      {
        path: `/${CHome}`,
        element: <Suspense> <Home /></Suspense>,
      },
    ],
  }
];