// import icon1 from "../../assets/icon1.png";
// import icon2 from "../../assets/icon2.png";
// import icon3 from "../../assets/icon3.png";
// import icon4 from "../../assets/icon4.png";
// import border from "../../assets/border.png";
// import CountUp from "react-countup";

// const Statistics = () => {
//   return (
//     <div className="md:w-[] lg:w-[1 918px] h-[881px] bg-[#FAFAFA]  my-auto  mt-20 ">
//       <div className=" lg: px-[50px] flex justify-around  gap-10  my-auto items-center">
//         {/* left side */}
//         <div className="mt-60 lg:w-[74 4px]">
//           <p className="my-2 text-[18px] leading-[20px] font-bold font-manrope  text-[#8F3E97]">
//             Quick Facts
//           </p>
//           <h5 className="lg:w-[73 7px] text-[44px]  leading-[70px]  font-manrope font-bold text-[#121212]">
//             Patient Admission Statistics
//           </h5>
//           <p className="my-2 lg:w-[67 4px] text-[22px] leading-[30px] font-normal font-manrope  text-[#696969]">
//             At Bethel Hospital, we believe in transparency and accountability.
//             Our commitment to providing excellent care is reflected in the trust
//             that our patients place in us. Below are the latest statistics
//             regarding patient admissions, showcasing the breadth and quality of
//             services we provide.
//           </p>
//         </div>

//         {/* right side */}
//         <div>
//           {/* left side box */}
//           <div className="mt-60 flex gap-10 ">
//             <div className="flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
//               <img className="w-[129px]  h-[136px]" src={icon1} alt="" />
//               <h3 className="flex flex-col  justify-center items-center text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
//                  <CountUp
//                  end={170822}
//                  duration={3.75}
//                  >  170822 + </CountUp>
//                 <img className="mt-4" src={border} alt="" />
//               </h3>
//               <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
//                 Satisfied Patients
//               </p>
//             </div>

//             <div className="-mt-48 flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
//               <img className="w-[129px]  h-[136px]" src={icon3} alt="" />
//               <h3 className="flex flex-col justify-center items-center text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
//                 <CountUp
//                  end={9770}
//                  duration={3.75}
//                  > 9770 +</CountUp>

//                 <img className="mt-4" src={border} alt="" />
//               </h3>
//               <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
//                 Orthopedic Surgeries
//               </p>
//             </div>
//           </div>

//           <div className="mt-[60px] flex gap-10 0 w-[33 5px]">
//             <div className="flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
//               <img className="w-[129px]  h-[136px]" src={icon2} alt="" />
//               <h3 className="flex flex-col justify-center items-center text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
//                   <CountUp
//                  end={5297}
//                  duration={3.75}
//                  >  5297 + </CountUp>
//                 <img className="mt-4" src={border} alt="" />
//               </h3>
//               <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
//                 Normal Deliveries
//               </p>
//             </div>

//             <div className="-mt-48 flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
//               <img className="w-[129px]  h-[136px]" src={icon4} alt="" />
//               <h3 className=" flex flex-col justify-center items-center text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
//                  <CountUp
//                  end={6821}
//                  duration={3.75}
//                  > 6821 +  </CountUp>
//                 <img className="mt-4" src={border} alt="" />
//               </h3>
//               <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
//                 Obstetrics & Gynaecology
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;


import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import border from "../../assets/border.png";
import CountUp from "react-countup";

const stats = [
  {
    icon: icon1,
    count: 170822,
    label: "Satisfied Patients",
  },
  {
    icon: icon3,
    count: 9770,
    label: "Orthopedic Surgeries",
  },
  {
    icon: icon2,
    count: 5297,
    label: "Normal Deliveries",
  },
  {
    icon: icon4,
    count: 6821,
    label: "Obstetrics & Gynaecology",
  },
];

const Statistics = () => {
  return (
    <div className="bg-[#FAFAFA] py-16 px-4 md:px-10 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#8F3E97] text-[18px] font-bold font-manrope mb-2">Quick Facts</p>
          <h2 className="text-[#121212] text-[32px] md:text-[40px] lg:text-[44px] font-bold font-manrope leading-tight mb-4">
            Patient Admission Statistics
          </h2>
          <p className="text-[#696969] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed font-manrope">
            At Bethel Hospital, we believe in transparency and accountability. Our commitment to providing excellent care is reflected in the trust that our patients place in us. Below are the latest statistics regarding patient admissions, showcasing the breadth and quality of services we provide.
          </p>
        </div>

        {/* Right section (stats grid) */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((item, index) => (
          <div
          key={index}
          className="bg-[#8F3E97] rounded-[10px] px-4 py-6 flex flex-col items-center text-center shadow-md"
        >
          <img src={item.icon} alt="icon" className="w-[80px] h-[80px] mb-3" />
          <div className="text-white text-[28px] md:text-[36px] font-semibold font-manrope flex flex-col items-center">
           <h6> <CountUp end={item.count} duration={2.5} /> +</h6>
            <img src={border} alt="divider" className="mt-2 w-[80px]" />
          </div>
          <p className="text-white text-[14px] md:text-[16px] font-semibold mt-2 leading-snug">
            {item.label}
          </p>
        </div>
        
         
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
