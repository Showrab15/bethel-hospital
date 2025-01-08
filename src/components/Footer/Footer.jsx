import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:px-[50px] mt-20">
      <div className="lg:h-[400px] bg-[#8F3E97] px-[100px] py-[80px] mx-auto items-cent er">
        <div className="grid lg:grid-cols-4 gap-10 ">
        <div>
          {" "}
          <h2 className="text-[#BFD2F8] text-[36px] font-normal font-poppins">
            Medical
          </h2>
          <p className="text-[#FCFEFE] font-normal text-[18px]">
            Leading the Way in Medical Execellence, Trusted Care.
          </p>
        </div>

        <div>
          {" "}
          <h2 className="text-[#BFD2F8] text-[18px] font-semibold font-poppins mt-2">
          Important Links
          </h2>
        <ul className="text-[16px] font-normal text-[#FCFEFE] mt-4 space-y-2">
            <li>Appointment</li>
            <li>Doctors</li>
            <li>Services</li>
            <li>About Us</li>
        </ul>
        </div>

        <div>
          {" "}
          <h2 className="text-[#BFD2F8] text-[18px] font-semibold font-poppins mt-2">
       Contact Us
          </h2>
        <ul className="text-[16px] font-normal text-[#FCFEFE] mt-4 space-y-2">
            <li><strong>Call</strong>: (237) 681-812-255</li>
            <li><strong>Email</strong>: fildineesoe@gmail.com</li>
            <li className="w-[300px]"><strong>Address:</strong>: 223, Dr Rajendra Prasad Rd,
Tatabad, Gandhipuram, Coimbatore, 
Tamil Nadu 641012</li>
        </ul>
        </div>

        <div>
          {" "}
          <h2 className="text-[#BFD2F8] text-[18px] font-semibold font-poppins mt-2">
          Newsletter
          </h2>
          
    <div className="flex items-center bg-purple-200 text-purple-900 rounded-md px-3 py-2 w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email address"
        className="bg-transparent focus:outline-none w-full placeholder-purple-600"
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
<hr  className="mt-10 text-[#BFD2F8]"/>
<div className="flex my-4">
        <p  className="justify-start text-[#FCFEFE]">© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
    <ul className="justify-end ml-auto flex gap-4">
        <li className="bg-[#BFD2F8] rounded-full p-2"><FaLinkedinIn  className="text-[#8F3E97]"/>
        </li>
        <li className="bg-[#BFD2F8] rounded-full p-2"><FaFacebookF  className="text-[#8F3E97]"/>
        </li>
        <li className="bg-[#BFD2F8] rounded-full p-2"><FaInstagram  className="text-[#8F3E97]"/>
        </li>
    </ul>
</div>
      </div>

    </div>
  );
};

export default Footer;
