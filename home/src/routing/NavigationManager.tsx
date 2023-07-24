import { ReactElement, useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routing/routes";

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
            new CustomEvent("home navigated", { detail: location.pathname })
        );
    }, [location]);


    return <div>
        {children}
    </div>;
}