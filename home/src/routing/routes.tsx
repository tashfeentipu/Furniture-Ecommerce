import { Outlet, RouteObject } from "react-router-dom";
import { Home } from "../App";
import { NavigationManager } from "./NavigationManager";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NavigationManager>
      <Outlet />
    </NavigationManager>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  }
];