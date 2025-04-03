import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayOut = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            {!isHome && <Navbar />}
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayOut;
