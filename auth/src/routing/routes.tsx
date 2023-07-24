import { Outlet, RouteObject } from "react-router-dom";
import { LOGIN, SIGN_UP } from "../routing/types";
import { Login, SignUp } from "../screens";
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
        element: <Login />,
      },
      {
        path: `${LOGIN}`,
        element: <Login />,
      },
      {
        path: `${SIGN_UP}`,
        element: <SignUp />,
      },
    ],
  }
];