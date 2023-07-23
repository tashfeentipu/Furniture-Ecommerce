import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

interface IProps {

}

const Layout = (props: IProps) => {
    return (<>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </>);
};

export default Layout;
