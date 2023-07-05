import { Link } from "react-router-dom";
import { Auth, Home } from "../routing/constants";

interface IProps {

}

const Header = (props: IProps) => {
    return (<nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${Home}/*`} style={{ marginRight: "1rem" }}>
            Home
        </Link>
        <Link to={`/${Auth}/*`} >
            Auth
        </Link>
    </nav>);
};

export default Header;
