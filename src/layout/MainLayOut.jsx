import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
    return (
        <>
       <Navbar/>
        <ComingSoon/>   
        <Outlet/> 
        <Footer/>
        </>
    );
};

export default MainLayOut;