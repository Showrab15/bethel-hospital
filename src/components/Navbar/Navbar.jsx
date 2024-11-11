import logo from "../../assets/bethel-hospital.png";
import callIcon from '../../assets/Vector.png'
import background from '../../assets/background.png'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Banner from "../Banner/Banner";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div  style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center mx-auto object-fill  w-[1929px]  h-[906.95px] ">
      <div className="grid grid-cols-3  items-center py-8 mx-[101px]">
        <Link className="flex items-center gap-4" rel="canonical" to="/">
          <img
            src={logo}
            className="md:w-[110px] md:h-[110px]"
            alt="bethel hospital logo"
          />
          <span className="text-[#8F3E97] text-[30px] poppins-semibold">
            Bethel Hospital
          </span>
        </Link>
      
          <ul className=" -ml-72 hidden md:flex items-center justify-center space-x-9 text-lg text-[#000000AB] poppins-regular ">
            <li>
              <NavLink
                rel="canonical"
                to="/home"
                aria-label="Home"
                title="Home"
                className="hover:text-[#8F3E97]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                rel="canonical"
                to="/services"
                aria-label="services"
                title="services"
                className="hover:text-[#8F3E97]"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                rel="canonical"
                to="/about"
                aria-label="about"
                title="about"
                className="hover:text-[#8F3E97]"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                rel="canonical"
                to="/about-Us"
                aria-label="about"
                title="about"
                className="hover:text-[#8F3E97]"
              >
                Our Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                rel="canonical"
                to="/about-Us"
                aria-label="about"
                title="about"
                className="hover:text-[#8F3E97]"
              >
               Contact Us
              </NavLink>
            </li>
          </ul>
      

        {/*----------------------- Mobile Menu -------------------------*/}
        <div className="md:hidden">
          {/* Mobile Menu Toggle Button */}
          <button id="menuButton" onClick={handleMenuToggle}>
            {menuOpen ? (
              <svg
                className="w-8 text-white font-bold mr-6 my-auto "
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            ) : (
              <svg
                className="w-8 mr-6 my-auto text-gray-700"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
          <div
            id="menuList"
            style={{
              left: menuOpen ? "0px" : "-230px",
              top: menuOpen ? "80px" : "80px",
              transitionDuration: "1000ms",
            }}
            className={` absolute  h-[410px] sm:h-[600px] w-full   z-50 p-8 ${
              menuOpen ? "bg-gray-700 mb-20 menuOpen" : ""
            }`}
          >
            <ul className="flex flex-col gap-4 text-left font-medium  leading-6 text-[16px] text-white">
              <li>
                <NavLink
                  rel="canonical"
                  to="/home"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/products"
                  aria-label="products"
                  title="products"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  products
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/investors"
                  aria-label="investors"
                  title="investors"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  Investors
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="about-Us"
                  aria-label="about"
                  title="about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " font-semibold" : " "
                  }
                  onClick={closeMenu} // Close menu when clicked
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div>
            <button className="-ml-28 2xl:-ml-0 max-w-xs sm:max-w-full bg-[#8F3E97] text-[24px] leading-[36px] text-[#FFFEFD] rounded-[14px] w-[292px] h-[52px]  font-poppins font-semibold flex items-center justify-evenly"><img src={callIcon} alt="" /> +91-77080 61080 </button>
        </div>

        
      </div>
      <Banner/>
    </div>
  );
};

export default Navbar;
