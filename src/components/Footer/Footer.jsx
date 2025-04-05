// import { FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import logo from "../../assets/bethel-hospital.png";
// import { Link, NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="lg:px-[50px] mt-20">
//       <div className="lg:h-[400px] bg-[#8F3E97] px-[100px] py-[80px] mx-auto items-cent er">
//         <div className="grid lg:grid-cols-4 gap-10 ">
//           <div>
//             <img src={logo} alt="" />
//           </div>
//           {/* Important links */}
//           <div className="-ml-10">
//             {" "}
//             <h2 className="text-white text-[18px] font-semibold font-poppins mt-2">
//               Important Links
//             </h2>
//             <ul className="text-[16px] font-normal text-[#FCFEFE] mt-4 space-y-2">
//               <li>Appointment</li>
//               <li>
//                 {" "}
//                 <NavLink to="/our-doctors">Doctors</NavLink>{" "}
//               </li>
//               <li>
//                 {" "}
//                 <NavLink to="/services">Services</NavLink>{" "}
//               </li>{" "}
//               <li>
//                 {" "}
//                 <NavLink to="/about">About Us</NavLink>{" "}
//               </li>{" "}            </ul>
//           </div>
//           {/* Contact US */}
//           <div className="-ml-20">
//             {" "}
//             <h2 className="text-white text-[18px] font-semibold font-poppins mt-2">
//               Contact Us
//             </h2>
//             <ul className="text-[16px] font-normal text-[#FCFEFE] mt-4 space-y-2">
//               <li className="w-80">
//                 <strong>Call</strong>: 0422- 2499009\ 0422-2499339
//               </li>
//               <li>
//                 <strong>Email</strong>: bethel@yahoo.com
//               </li>
//               <li className="w-[300px]">
//                 <strong>Address:</strong>: 223, Dr Rajendra Prasad Rd,Tatabad,
//                 Gandhipuram, Coimbatore, Tamil Nadu 641012
//               </li>
//             </ul>
//           </div>
//           {/* Newsletter */}
//           <div>
//             {" "}
//             <h2 className="text-white text-[18px] font-semibold font-poppins mt-2">
//               Newsletter
//             </h2>
//             <div className="flex items-center bg-purple-200 text-purple-900 rounded-md px-3 py-2 w-full max-w-md">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="bg-transparent focus:outline-none w-full placeholder-purple-600"
//               />
//               <button className="ml-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                   className="w-5 h-5 text-purple-800"
//                 >
//                   <path d="M15.854 1.146a.5.5 0 0 0-.565-.062l-14 8a.5.5 0 0 0 .02.87l4.812 2.406 2.405 4.812a.5.5 0 0 0 .87.02l8-14a.5.5 0 0 0-.062-.566zM6.961 11.04l-3.517-1.759 9.582-5.46L6.961 11.04z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <hr className="mt-10 text-white" />
//         <div className="flex my-4">
//                   {/* copyright */}

//           <p className="justify-start text-[#FCFEFE]">
//             © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
//           </p>

//           {/* social icons */}
//           <ul className="justify-end ml-auto flex gap-4 cursor-help">
//   <li className="bg-white rounded-full p-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
//     <FaLinkedinIn className="text-[#8F3E97] transition duration-300" />
//   </li>
//   <li className="bg-white rounded-full p-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
//     <FaFacebookF className="text-[#8F3E97] transition duration-300" />
//   </li>
//   <li className="bg-white rounded-full p-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
//     <FaInstagram className="text-[#8F3E97] transition duration-300" />
//   </li>
// </ul>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/footerLogo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="bg-[#8F3E97] px-6 md:px-10 lg:px-[60px] py-10 md:py-16 lg:py-[80px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="flex items-start gap-4">
            <img src={logo} alt="Bethel Hospital" className="w-[100px] md:w-32" />
            <h2 className="text-white text-[20px] font-semibold font-poppins mt-12 w-[260px] whitespace-nowrap">
              Bethel Hospital
            </h2>
          </div>

          {/* Important links */}
          <div className="md:ml-10">
            <h2 className="text-white text-[18px] font-semibold font-poppins mt-2">
              Important Links
            </h2>
            <ul className="text-[16px] font-normal text-[#FCFEFE] mt-4 space-y-2">
            <li>
                <NavLink to="/">Home</NavLink>
              </li>              <li>
                <NavLink to="/our-doctors">Doctors</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="md:-ml-10  text-white text-[18px] font-semibold font-poppins mt-2">
              Contact Us
            </h2>
            <ul className="md:-ml-10 text-[16px] font-normal text-[#FCFEFE] mt-4 space-y-2">
              <li className="md:w-80">
                <strong>Call</strong>: 0422-2499009 / 0422-2499339
              </li>
              <li>
                <strong>Email</strong>: bethelhospital2006@gmail.com


              </li>
              <li>
                <strong>Address</strong>: 223, Dr Rajendra Prasad Rd, Tatabad,
                Gandhipuram, Coimbatore, Tamil Nadu 641012
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white text-[18px] font-semibold font-poppins mt-2">
              Newsletter
            </h2>
            <div className="flex items-center bg-purple-200 text-purple-900 rounded-md px-3 py-2 w-full max-w-md mt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent focus:outline-none w-full placeholder-purple-600 text-sm"
              />
              <button className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 text-purple-800"
                >
                  <path d="M15.854 1.146a.5.5 0 0 0-.565-.062l-14 8a.5.5 0 0 0 .02.87l4.812 2.406 2.405 4.812a.5.5 0 0 0 .87.02l8-14a.5.5 0 0 0-.062-.566zM6.961 11.04l-3.517-1.759 9.582-5.46L6.961 11.04z" />
                </svg>
              </button>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <hr className="mt-10 border-white" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
          <p className="text-[#FCFEFE] text-center md:text-left text-sm md:flex gap-2 ">
            © {new Date().getFullYear()} Bethel Hospital. All Rights Reserved by <br className="md:hidden block" />
            <a  href="https://www.linkedin.com/company/creative-lance" target="_blank" rel="noopener noreferrer">Creative Lance</a>
          </p>

          {/* Social Icons */}
          <ul className="flex gap-4 cursor-pointer">
            <li className="bg-white rounded-full p-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <FaLinkedinIn className="text-[#8F3E97] transition duration-300" />
            </li>
            <li className="bg-white rounded-full p-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <FaFacebookF className="text-[#8F3E97] transition duration-300" />
            </li>
            <li className="bg-white rounded-full p-2 transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <FaInstagram className="text-[#8F3E97] transition duration-300" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
