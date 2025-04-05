// /* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars

// import curveBackground from "../../assets/curve1.png"; // Replace with the path to your curved background image
// import home from "../../assets/Group 500.png";
// import home2 from "../../assets/rectangle2.png";
// import Navbar from "./../Navbar/Navbar";

// const BannerNew = () => {
//   return (
//     <div
//       className="relative ml-[400px] h-[400px]  bg-cover bg-no-repeat "
//       style={{ backgroundImage: `url(${curveBackground})` }}
//     >
//       <div className="-ml-[400px]">
//         <Navbar />
//         {/* left text */}
//         <div className="mt-10 ml-[50px]">
//           <h3 className="  text-[#8F3E97] text-lg lg:text-[35px] md:leading-[28px] lg:leading-normal font-bold text-left px-2 md:px-0">
//             We are dedicated to <br /> providing exceptional <br />{" "}
//             <span className="">healthcare to you and your family.</span>
//           </h3>
//           <p className="mt-4  text-[#8F3E97] font-manrope text-[18px] w-[620px]">
//             With state-of-the-art medical technology, expert doctors, and a
//             compassionate team, we strive to deliver personalized care that
//             meets your needs and supports your well-being every step of the way.
//           </p>
//           <button
//   className="mt-8 bg-[#8F3E97] text-[17px] text-[#FFFEFD] rounded-[5px] w-[222px] h-[52px] font-poppins font-medium flex items-center justify-evenly 
//   transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
// >
//   Book AN Appointment
// </button>

//         </div>
//         {/* images */}
//         <div className="flex ">
//           <div className="relative -top-[450px] ml-[600px] w-[350px] h-[-350px]">
//             <img
//               className="flex justify-center mx-auto items-center mt-10 animate-float "
//               src={home}
//               alt=""
//             />
//           </div>
//           <div className="relative -top-96   w-[350px] h-[-350px]">
//             <img
//               className="flex justify-center mx-auto items-center mt-10  animate-float "
//               src={home2}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerNew;


import curveBackground from "../../assets/curve1.png"; // Replace with the path to your curved background image
import home from "../../assets/Group 500.png";
import home2 from "../../assets/rectangle2.png";
import Navbar from "./../Navbar/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerNew = () => {
  return (
    <div
      className="  relative md:ml-[400px] h-auto md:h-[400px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${curveBackground})` }}
    >
      <div className="md:-ml-[400px]">
        <Navbar />
        
        {/* Left Text */}
        <div className="mt-10 ml-[20px] md:ml-[50px] px-4 md:px-0">
          <h1 className="text-[#8F3E97] text-lg sm:text-2xl md:text-[35px] font-bold leading-snug md:leading-normal font-manrope text-left">
            We are dedicated to <br /> providing exceptional <br />
            <span>healthcare to you and your family.</span>
          </h1>
          <p className="mt-4 text-[#8F3E97] font-manrope text-base sm:text-[16px] md:text-[18px] max-w-[620px]">
            With state-of-the-art medical technology, expert doctors, and a compassionate team, we strive to deliver personalized care that meets your needs and supports your well-being every step of the way.
          </p>

          <Link
           to="/services"
            className="mt-8 bg-[#8F3E97] text-[16px] text-[#FFFEFD] rounded-[5px] w-[180px] md:w-[222px] h-[48px] md:h-[52px] font-poppins font-medium flex items-center justify-center 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
        Explore More <FaArrowRight className="ml-4"/>

          </Link>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 gap-6 md:gap-0">
          <div className="relative md:-top-[430px] md:ml-[600px] w-[250px] md:w-[350px] md:h-[350px]">
            <img
              className="mx-auto mt-4 animate-float"
              src={home}
              alt="Decorative"
            />
          </div>
          <div className="relative md:-top-96 w-[250px] md:w-[350px] md:h-[350px]">
            <img
              className="mx-auto mt-4 animate-float"
              src={home2}
              alt="Decorative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerNew;