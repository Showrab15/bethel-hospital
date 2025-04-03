/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import logo from "../../assets/bethel-hospital.png"; // Replace with the path to your logo file
import curveBackground from "../../assets/curve1.png"; // Replace with the path to your curved background image
import dottedCIrcle from "../../assets/doted-circle.png";
import home from "../../assets/Group 500.png";
import home2 from "../../assets/rectangle2.png";
import Navbar from "./../Navbar/Navbar";

const BannerNew = () => {
  return (
    <div
      className="relative ml-[400px] h-[400px]  bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${curveBackground})` }}
    >
      <div className="-ml-[400px]">
        <Navbar />
        {/* left text */}
        <div className="mt-10 ml-[50px]">
          <h3 className="  text-[#8F3E97] text-lg lg:text-[35px] md:leading-[28px] lg:leading-normal font-bold text-left px-2 md:px-0">
            We are dedicated to <br /> providing exceptional <br />{" "}
            <span className="">healthcare to you and your family.</span>
          </h3>
          <p className="mt-4  text-[#8F3E97] font-manrope text-[18px] w-[620px]">
            With state-of-the-art medical technology, expert doctors, and a
            compassionate team, we strive to deliver personalized care that
            meets your needs and supports your well-being every step of the way.
          </p>
          <button
  className="mt-8 bg-[#8F3E97] text-[17px] text-[#FFFEFD] rounded-[5px] w-[222px] h-[52px] font-poppins font-medium flex items-center justify-evenly 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
>
  Book AN Appointment
</button>

        </div>
        {/* images */}
        <div className="flex ">
          <div className="relative -top-[450px] ml-[600px] w-[350px] h-[-350px]">
            <img
              className="flex justify-center mx-auto items-center mt-10 animate-float "
              src={home}
              alt=""
            />
          </div>
          <div className="relative -top-96   w-[350px] h-[-350px]">
            <img
              className="flex justify-center mx-auto items-center mt-10  animate-float "
              src={home2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNew;
