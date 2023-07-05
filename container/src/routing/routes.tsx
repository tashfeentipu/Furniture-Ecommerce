import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Layout from "../containers/layout";
import { Auth, Home } from "./constants";

const AuthMS = lazy(() => import("auth/auth"));
const HomeMS = lazy(() => import("home/home"));

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
        path: `/${Auth}/*`,
        element: <Suspense> Auth</Suspense>,
      },
      {
        path: `/${Home}/*`,
        element: <Suspense> Home</Suspense>,
      },
    ],
  }
];