// import newservicesBanner from "../../assets/newservicesbanner.png";

// const Banner = () => {
//   return (
//     <div
//       className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] bg-cover bg-no-repeat"
//       style={{ backgroundImage: `url(${newservicesBanner})` }}
//     >
//       {/* Center Text */}
//       <div className="absolute inset-0 flex items-center justify-end">
//        <p className="text-ri ght text-[24px] font-semibold font-manrope w-[8 50px] text-white  mt-32 mr-[30px]">
//        This emphasizes both the quality of the care provided and <br /> <span className="ml-[68px] text-right">the trust patients  can have in our hospital’s services</span>
//        </p>
//       </div>

//       {/* Right-Aligned Text Above Center */}
//       <div className="absolute top-16 right-4 sm:top-20 sm:right-8 md:top-28 md:right-12 lg:top-44 lg:right-20">
//   <h2 className="text-white text-xl sm:text-2xl md:text-[34px] font-semibold leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.4] font-manrope">
//     Expert Care, Trusted <br /> Services
//   </h2>
// </div>

//     </div>
//   );
// };

// export default Banner;
import aboutusBanner from "../../assets/aboutusBanner.png";

const Banner = () => {
  return (
    <div
      className="relative w-[430px] h-[170px] sm:h-[400px] md:h-[500px] md:w-full lg:h-[600px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${aboutusBanner})` }}
    >
      {/* Left-Aligned Text */}
      <div className="absolute inset-0 flex items-center justify-start px-4">
        <p
          className="text-left text-[8px] sm:text-[22px] md:text-[24px] font-semibold font-manrope text-white 
          md:w-[85%] lg:w-[75%] mt-2 sm:mt-16 md:mt-4 0 ml-[8px] sm:ml-[40px] md:ml-[50px]"
        >
          <span className="sm:ml-[20px] -ml-[6px] text-left sm:text-right">At Bethel Hospital, we are committed to delivering exceptional</span>
          <br />
          <span className="sm:ml-[20px] -ml-[6px] text-left sm:text-right">
            healthcare services, supported by advanced technology, skilled
          </span>
          <br />
          <span className="sm:ml-[20px] -ml-[6px]  text-left sm:text-right">
            professionals, and compassionate care.
          </span>
        </p>
      </div>

      {/* Right-Aligned Text Above Center */}
      <div className="absolute top-4 sm:top-20 md:top-28 lg:top-24 left-4 sm:left-8 md:left-12 lg:left-20">
        <h2 className="text-white text-lg sm:text-2xl md:text-[48px] font-semibold leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.4] font-manrope text-left">
          Welcome to <br />
          Bethel Hospital
        </h2>
      </div>
    </div>
  );
};

export default Banner;
