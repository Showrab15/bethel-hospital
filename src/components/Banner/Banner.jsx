// const Banner = () => {
//   return (
//     <div className="lg px-[50px] mx-[5 0px]  mt-4 lg:mt-10 ">
//       <h1 className="lg:w-[720px] w-[350px] font-semibold   text-[#121212] lg:text-[48px] text-[32px]  lg:leading-[51px]">
//         we are dedicated to providing exceptional{" "}
//         <span className="text-[#8F3E97]">
//           {" "}
//           healthcare to you and your family.
//         </span>
//       </h1>
//       <p className="lg:w-[710px] w-[350px]  my-6 text-[18px] lg:leading-[22px] font-manrope font-medium  text-[#121212]">
//         With state-of-the-art medical technology, expert doctors, and a
//         compassionate team, we strive to deliver personalized care that meets
//         your needs and supports your well-being every step of the way.
//       </p>
//       <div>
//         <button className="bg-[#8F3E97] text-[#FFFEFD] rounded-[10px] text-[17px] w-[222px] h-[52px]  poppins-medium flex items-center justify-evenly">
//           Book An Appointment{" "}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import banner from "../../assets/banner.png";
import "./banner.css";

const Services = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full font-manrope  md:h-[350px] h-[400px] lg:h-[534px] 2xl:h-[510px]  mx-auto flex flex-col justify-center items-ce nter"
      >
        <h3 className="ml-[103px] text-white text-lg lg:text-[35px] md:leading-[28px] lg:leading-normal font-bold text-left px-2 md:px-0">
          We are dedicated to <br /> providing exceptional <br />{" "}
          <span className="text-[#8F3E97]">
            healthcare to you and your family.
          </span>
        </h3>
        <p className="mt-8 ml-[103px] text-white font-manrope text-[18px] w-[720px]">
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
    </>
  );
};

export default Services;
