import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import BackToTopbtn from "../components/BackToTopbtn/BackToTopbtn";

const MainLayOut = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            {!isHome && <Navbar />}
            <Outlet />
            <Footer />
            <BackToTopbtn/>

        </>
    );
};

export default MainLayOut;
