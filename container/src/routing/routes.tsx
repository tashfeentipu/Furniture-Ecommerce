import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
// import { Layout } from "../components/Layout";
import { Auth, Home } from "./constants";

// const App1Lazy = lazy(() => import("../components/App1"));
// const App2Lazy = lazy(() => import("../components/App2"));

export const routes: RouteObject[] = [
  {
    path: '/',
    // element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${Auth}`} />,
      },
      {
        path: `/${Auth}/*`,
        element: <Suspense fallback="Loading App1..."></Suspense>,
      },
      {
        path: `/${Home}/*`,
        element: <Suspense fallback="Loading App2..."></Suspense>,
      },
    ],
  }
];