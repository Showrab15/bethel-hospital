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
import newservicesBanner from "../../assets/newservicesbanner1.png";

const Banner = () => {
  return (
    <div
      className="relative w-[430px] h-[170px] sm:h-[400px] md:h-[500px] md:w-full lg:h-[600px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${newservicesBanner})` }}
    >
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p className=" text-right text-[8px] sm:text-[22px] md:text-[24px] font-semibold font-manrope text-white 
          md:w-[85%] lg:w-[75%] mt-[46px] sm:mt-16 md:mt-40 md:-mr-[200px] ml-[124px] md:ml-0">
          This emphasizes both the quality of the care provided and <br className="" />
          <span className="  sm:ml-[20px] lg:ml-[68px] text-left sm:text-right">
            the trust patients can have in our hospital’s services
          </span>
        </p>
      </div>

      {/* Right-Aligned Text Above Center */}
      <div className="absolute top-6 sm:top-20 md:top-28 lg:top-36 right-4 sm:right-8 md:right-12 lg:right-20">
        <h2 className="text-white text-lg sm:text-2xl md:text-[48px] font-semibold leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.4] font-manrope text-right">
          Expert Care, Trusted <br /> Services
        </h2>
      </div>
    </div>
  );
};

export default Banner;
