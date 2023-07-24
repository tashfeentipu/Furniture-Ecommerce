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