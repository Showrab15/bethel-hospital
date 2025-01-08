import logo from "../../assets/bethel-hospital.png";
import callIcon from "../../assets/Vector.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
    
  >
    <div className="flex justify-between gap- 20 items-center py-4 px-[50px]">
      {/* Logo */}
      <Link className="flex items-center gap-4" rel="canonical" to="/">
        <img
          src={logo}
          className="md:w-[110px] md:h-[110px]"
          alt="Bethel Hospital Logo"
        />
        <span className="text-[#8F3E97] text-[30px] font-semibold">
          Bethel Hospital
        </span>
      </Link>
  
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-9 text-lg text-[#000000AB] font-regular">
        <li>
          <NavLink
            rel="canonical"
            to="/home"
            aria-label="Home"
            className="hover:text-[#8F3E97]"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            rel="canonical"
            to="/services"
            aria-label="Services"
            className="hover:text-[#8F3E97]"
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            rel="canonical"
            to="/about-Us"
            aria-label="Our Doctors"
            className="hover:text-[#8F3E97] w-[5px]"
          >
            Our Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            rel="canonical"
            to="/about"
            aria-label="About"
            className="hover:text-[#8F3E97]"
          >
            About
          </NavLink>
        </li>
       
       
      </ul>
  
      {/* Call Button */}
    
      <div className="flex items-center justify-center p-4">
  {/* <button className="bg-[#8F3E97] text-white rounded-md px-6 py-4 text-lg shadow-lg flex items-center">
    <img src={callIcon} alt="Call Icon" className="w-5 h-5 mr-2" />
   <span> +91-77080 61080</span>
  </button> */}
  <button className=" bg-[#8F3E97] text-[20px] xl:text-[24px]
   leading-[36px] text-[#FFFEFD] rounded-[10px] w-[292px] h-[52px]  font-poppins font-semibold flex items-center justify-evenly">
            <img src={callIcon} alt="" /> +91-77080 61080{" "}
          </button>
</div>
  
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button id="menuButton" onClick={handleMenuToggle}>
          {menuOpen ? (
            <svg
              className="w-8 text-gray-700"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
              />
            </svg>
          ) : (
            <svg
              className="w-8 text-gray-700"
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
        {menuOpen && (
          <div className="absolute bg-gray-700 w-full p-8 z-50 top-20 left-0">
            <ul className="flex flex-col gap-4 text-white">
              <li>
                <NavLink
                  to="/home"
                  className="hover:text-[#8F3E97]"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="hover:text-[#8F3E97]"
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-doctors"
                  className="hover:text-[#8F3E97]"
                  onClick={closeMenu}
                >
               Our Doctors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-[#8F3E97]"
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              
            </ul>
          </div>
        )}
      </div>

    </div>
    {/* <Banner /> */}
  </div>
  
  );
};

export default Navbar;
