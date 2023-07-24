import { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routing/routes";
import { LOGIN, SIGN_UP } from "./types";

interface NavigationManagerProps {
    children: ReactElement;
}

export function NavigationManager({ children }: NavigationManagerProps) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        function shellNavigationHandler(event: Event) {
            const pathname = (event as CustomEvent<string>).detail;
            if (location.pathname === pathname || !matchRoutes(routes, { pathname })) {
                return;
            }
            navigate(pathname);
        }

        window.addEventListener("container navigated", shellNavigationHandler);

        return () => {
            window.removeEventListener("container navigated", shellNavigationHandler);
        };
    }, [location]);

    useEffect(() => {
        window.dispatchEvent(
            new CustomEvent("auth navigated", { detail: location.pathname })
        );
    }, [location]);


    return <div>
        <Link to={`/${LOGIN}`} style={{ marginRight: "1rem" }}>
            Login
        </Link>
        <Link to={`/${SIGN_UP}`} >
            Sign Up
        </Link>
        {children}
    </div>;
}