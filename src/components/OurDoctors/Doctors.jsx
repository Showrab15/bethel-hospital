// import doctor1 from "../../assets/doctor1.png";
// import doctor2 from "../../assets/doctor2.png";
// import doctor3 from "../../assets/doctor3.png";
// import doctor4 from "../../assets/doctor4.png";
// import doctor5 from "../../assets/doctor5.png";
// import doctor6 from "../../assets/doctor6.png";
// import doctor7 from "../../assets/doctor7.png";

// const Doctors = () => {
//   const foundersData = [
//     {
//       id: 1,
//       name: "Dr.Namachivayam",
//       role: "M.Ch (Plastic Surgery)",
//       image: doctor1,
//     },
//     { id: 2, name: "Dr JayaPrakash", role: " D.Ortho", image: doctor2 },
//     { id: 3, name: "Dr.Sujatha", role: "MS (Ortho)., D Ortho", image: doctor3 },
//     {
//       id: 4,
//       name: "Dr Samuel Anantharaj",
//       role: "MS (Ortho)., M.R.C.S. (Edin)",
//       image: doctor4,
//     },
//     {
//       id: 5,
//       name: "Dr Rebecca Ranjini",
//       role: `D.N.B (Obg & Gyn)
// M.R.C.O.G (UK)`,
//       image: doctor5,
//     },
//     {
//       id: 6,
//       name: "Dr.Nirupa Daya",
//       role: `MS (Ortho)., D Ortho`,
//       image: doctor6,
//     },
//     {
//       id: 7,
//       name: "Dr.Dayanand Jairaj",
//       role: `M.Ch (Plastic Surgery)`,
//       image: doctor7,
//     },
//   ];
//   return (
//     <div className="px-10 mt-10">
//       <h1 className="   md:text-[36px] text-[28px] text-center text-[#496A75] font-yeseva">
//         Our Doctors
//       </h1>
//       <div className="mx-auto mt-6">
//         {/* first three  */}
//         <div className="grid md:grid-cols-3  flex-col gap-6 md:gap-10 justify-center place-items-center">
//           {foundersData.slice(0, 3).map((founder, index) => (
//             <div
//               key={index}
//               className="  relative bg-[#211516] hover:bg-[#04212f] group overflow-hidden"
//             >
//               <img
//                 src={founder.image}
//                 alt={`Founder ${index + 1}`}
//                 className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-[#8F3E97] bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
//                 <h2 className="text-lg font-semibold">{founder.name}</h2>
//                 <p className="text-sm">{founder.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
// {/* separate two */}
//         <div className="md:mt-20 mt-6 md:flex-row flex-col flex  gap-6 md:gap-10 justify-evenly">
//           {foundersData.slice(3, 5).map((founder, index) => (
//             <div
//               key={index}
//               className="  relative bg-[#211516] hover:bg-[#8F3E97] group overflow-hidden"
//             >
//               <img
//                 src={founder.image}
//                 alt={`Founder ${index + 1}`}
//                 className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-[#8F3E97] bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
//                 <h2 className="text-lg font-semibold">{founder.name}</h2>
//                 <p className="text-sm">{founder.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>


//         {/* /last two  */}

//         <div className="md:mt-20 mt-6 md:flex-row flex-col flex  gap-6 md:gap-20 justify-evenly">
//           {foundersData.slice(5, 7).map((founder, index) => (
//             <div
//               key={index}
//               className="  relative bg-[#211516] hover:bg-[#8F3E97] group overflow-hidden"
//             >
//               <img
//                 src={founder.image}
//                 alt={`Founder ${index + 1}`}
//                 className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-[#8F3E97] bg-opacity-70 text-white text-center p -6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
//                 <h2 className="text-lg font-semibold">{founder.name}</h2>
//                 <p className="text-sm">{founder.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Doctors;






import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";
import doctor5 from "../../assets/doctor5.png";
import doctor6 from "../../assets/doctor6.png";
import doctor7 from "../../assets/doctor7.png";

const Doctors = () => {
  const foundersData = [
    {
      id: 1,
      name: "Dr.Namachivayam",
      role: "M.Ch (Plastic Surgery)",
      image: doctor1,
    },
    { id: 2, name: "Dr JayaPrakash", 
      role: " D.Ortho", 
      image: doctor2
     },
    { id: 3, name: "Dr.Sujatha",
       role: "M.D",
        image: doctor3
       },
    {
      id: 4,
      name: "Dr Samuel Anantharaj",
      role: "MS (Ortho), M.R.C.S. (Edin)",
      image: doctor4,
    },
    {
      id: 5,
      name: "Dr Rebecca Ranjini",
      role: `D.N.B (Obg & Gyn)
M.R.C.O.G (UK)`,
      image: doctor5,
    },
    {
      id: 6,
      name: "Dr.Nirupa Daya",
      role: `MS (Ortho)., D Ortho`,
      image: doctor6,
    },
    {
      id: 7,
      name: "Dr.Dayanand Jairaj",
      role: `M.Ch (Plastic Surgery)`,
      image: doctor7,
    },
  ];

  return (
    <div className="px-10 mt-10">
      <h1 className="md:text-[36px] text-[28px] text-center text-[#8F3E97] font-yeseva">
        Our Doctors
      </h1>
      <div className="mx-auto mt-6">
        {/* First three */}
        <div className="grid md:grid-cols-3 flex-col gap-6 md:gap-10 justify-center place-items-center">
          {foundersData.slice(0, 3).map((founder, index) => (
            <div
              key={index}
              className="relative bg-[#211516] hover:bg-[#8F3E97] group overflow-hidden"
            >
              <img
                src={founder.image}
                alt={`Founder ${index + 1}`}
                className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8F3E97] bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <h2 className="text-lg font-semibold">{founder.name}</h2>
                <p className="text-sm">{founder.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Separate two */}
        <div className="md:mt-20 mt-6 md:flex-row flex-col flex gap-6 md:gap-10 justify-evenly">
          {foundersData.slice(3, 5).map((founder, index) => (
            <div
              key={index}
              className="relative bg-[#211516] hover:bg-[#8F3E97] group overflow-hidden"
            >
              <img
                src={founder.image}
                alt={`Founder ${index + 1}`}
                className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8F3E97] bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <h2 className="text-lg font-semibold">{founder.name}</h2>
                <p className="text-sm">{founder.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last two */}
        <div className="md:mt-20 mt-6 md:flex-row flex-col flex gap-6 md:gap-20 justify-evenly">
          {foundersData.slice(5, 7).map((founder, index) => (
            <div
              key={index}
              className={`relative bg-[#211516] hover:bg-[#8F3E97] group overflow-hidden `}
            >
              <img
                src={founder.image}
                alt={`Founder ${index + 1}`}
                className={`w-full filter grayscale group-hover:grayscale-0 transition-all duration-300 ${founder.id === 7 ? 'top-2 relative' : ''}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#8F3E97] bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <h2 className="text-lg font-semibold">{founder.name}</h2>
                <p className="text-sm">{founder.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
