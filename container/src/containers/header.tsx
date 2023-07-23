import { Link } from "react-router-dom";
import { CAuth, CHome } from "../routing/constants";

interface IProps {

}

const Header = (props: IProps) => {
    return (<nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${CHome}/*`} style={{ marginRight: "1rem" }}>
            Home
        </Link>
        <Link to={`/${CAuth}/*`} >
            Auth
        </Link>
    </nav>);
};

export default Header;
