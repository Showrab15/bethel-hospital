// import ScheduleBAnner from "../../assets/Schedule.png";
// import rightIcon from "../../assets/rightIcon.png";
// const Schedule = () => {
//   return (
//     <div className="px-[50px] mt-20 flex gap-10 justify-between items-center ">
//       <div>
//         <img className="w-full h-full" src={ScheduleBAnner} alt="" />
//       </div>
//       <div className="w-[744px]">
//         <h6 className="my-2 text-[18px] leading-[20px] font-bold font-manrope  text-[#8F3E97]">
//           Make A Schedule
//         </h6>
//         <h3 className="w-[832px] text-[50px]  leading-[70px]  font-manrope font-bold text-[#121212]">
//           We Value Your Health and Trust
//         </h3>
//         <p className="w-[734px] my-4  text-[22px] leading-[30px] font-normal font-manrope  text-[#696969]">
//           These statistics reflect our dedication to providing quality
//           healthcare and improving patient outcomes. We are committed to
//           continuous growth and development in order to meet the evolving needs
//           of our patients.
//         </p>

//         <ul className="space-y-[14px] mt-8 font-manrope font-semibold text-[22px]  leading-[20px] text-[#121212]">
//           <li className="flex gap-2">
//             <img src={rightIcon} alt="" />
//             Make a schedule online is easy
//           </li>
//           <li className="flex gap-2">
//             <img src={rightIcon} alt="" />
//             Easy to connect with nearest lab
//           </li>
//         </ul>

//         <div>
//           <button className="mt-[26px] bg-[#8F3E97] text-[#FFFFFF] text-[18px] leading-[20px] rounded-[10px] w-[257px] h-[52px] font-manrope font-medium flex items-center justify-evenly">
//        Make A Schedule Now!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Schedule;



import ScheduleBAnner from "../../assets/Schedule.png";
import rightIcon from "../../assets/rightIcon.png";

const Schedule = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[50px] mt-20 flex flex-col lg:flex-row gap-10 justify-between items-center">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img className="w-full h-auto object-cover" src={ScheduleBAnner} alt="Schedule Banner" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <h6 className="my-2 text-[16px] md:text-[18px] font-bold font-manrope text-[#8F3E97]">
          Make A Schedule
        </h6>

        <h3 className="text-[28px] md:text-[36px] lg:text-[50px] leading-snug font-manrope font-bold text-[#121212] max-w-2xl">
          We Value Your Health and Trust
        </h3>

        <p className="my-4 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed font-normal font-manrope text-[#696969] max-w-2xl">
          These statistics reflect our dedication to providing quality healthcare and improving patient outcomes. We are committed to continuous growth and development in order to meet the evolving needs of our patients.
        </p>

        <ul className="space-y-4 mt-6 font-manrope font-semibold text-[18px] md:text-[20px] text-[#121212]">
          <li className="flex gap-3 items-start">
            <img src={rightIcon} alt="check" className="w-5 h-5 mt-1" />
            <span>Make a schedule online is easy</span>
          </li>
          <li className="flex gap-3 items-start">
            <img src={rightIcon} alt="check" className="w-5 h-5 mt-1" />
            <span>Easy to connect with nearest lab</span>
          </li>
        </ul>

        <div>
          <button className="mt-6 bg-[#8F3E97] text-white text-[16px] md:text-[18px] rounded-[10px] w-full md:w-[157px] h-[52px] font-manrope font-medium flex items-center justify-center   transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
           Call Now 

          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
