/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import logo from "../../assets/bethel-hospital.png"; // Replace with the path to your logo file
import curveBackground from "../../assets/curve.png"; // Replace with the path to your curved background image
import dottedCIrcle from '../../assets/doted-circle.png'
import Navbar from "./../Navbar/Navbar";

const BannerNew = () => {
  return (
    <div
      className="relative ml-[400px] h-[400px] bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${curveBackground})` }}
    >
      <div className="-ml-[400px]">
        <Navbar />
        <h3 className="mt-10 ml-[103px] text-[#8F3E97] text-lg lg:text-[35px] md:leading-[28px] lg:leading-normal font-bold text-left px-2 md:px-0">
          We are dedicated to <br /> providing exceptional <br />{" "}
          <span className="">healthcare to you and your family.</span>
        </h3>
        <p className="mt-4 ml-[103px] text-[#8F3E97] font-manrope text-[18px] w-[620px]">
          With state-of-the-art medical technology, expert doctors, and a
          compassionate team, we strive to deliver personalized care that meets
          your needs and supports your well-being every step of the way.
        </p>
        <button
          className="ml-[103px] mt-8 bg-[#8F3E97] text-[17px] 
   ] text-[#FFFEFD] rounded-[5px] w-[222px] h-[52px]  font-poppins font-medium flex items-center justify-evenly"
        >
          Book AN Appointment
        </button>
      </div>
    </div>
  );
};

export default BannerNew;
