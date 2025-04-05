// // import founder1 from "../../assets/founder1-removebg-preview.png";
// // import founder2 from "../../assets/founder2.png";

// // const Founders = () => {
// //     const visitingDoctors = [
// //         { id: 1, name: "Dr. John Doe", role: "Co-Founder & CEO", image: founder1 },
// //         { id: 2, name: "Dr. Jane Smith", role: "Co-Founder & CTO", image: founder2 },
// //       ];
// //   return (
// //     <div>
// //     <h1 className="mt-20 md:text-[36px] text-center text-[#496A75] font-yeseva">
// //       Our Founders
// //     </h1>
// //     <div className="mt-10 flex gap-10 justify-around mx-auto">
// //       {visitingDoctors.map((founder) => (
// //         <div key={founder.id} className="relative bg-[#211516] group overflow-hidden">
// //           <img src={founder.image} alt={founder.name} className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300" />
// //           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 h-32">
// //             <h2 className="text-lg font-semibold">{founder.name}</h2>
// //             <p className="text-sm">{founder.role}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// //   );
// // };

// // export default Founders;

// import visitingDoctor from "../../assets/visitingDoctors.png";

// const VisitingDoctors = () => {
//   const visitingDoctors = [
//     {
//       id: 1,
//       name: "Dr. MUGUNDHAN",
//       role: "M.S (Ortho) D (Ortho) ORTHOPAEDIC SURGEON",
//       image: visitingDoctor,
//     },
//     {
//       id: 2,
//       name: "DR. NAMACHIVAYAM",
//       role: "M.Ch (Plastic) PLASTIC SURGEON",
//       image: visitingDoctor,
//     },
//     {
//       id: 3,
//       name: "DR. SELVAKUMAR",
//       role: "M.D., D.M (Neuro) NEUROLOGIST",
//       image: visitingDoctor,
//     },
//     {
//       id: 4,
//       name: "DR. SENTHIL",
//       role: "M.D.S Maxillo facial DENTAL  SURGEON",
//       image: visitingDoctor,
//     },
//     {
//       id: 5,
//       name: "DR. RAJESH RATHNAM",
//       role: "M.D (Anaesthesia) Anaesthesiologist",
//       image: visitingDoctor,
//     },
//     {
//       id: 6,
//       name: "DR. KARTHIKEYAN",
//       role: "D.AANAESTHATIST",
//       image: visitingDoctor,
//     },
//     {
//       id: 7,
//       name: "DR. KUMAR KEMPAN",
//       role: "M.D., (Mos)  (Dip-Diab) CCIH DIABETOLOGIST",
//       image: visitingDoctor,
//     },
//     {
//       id: 8,
//       name: "DR. KARTHIKEYAN",
//       role: "D (Ortho) DNB (Ortho) fellow in spine surgery SPINE SURGEON",
//       image: visitingDoctor,
//     },
//     {
//       id: 9,
//       name: "DR. GOWTHAMAN",
//       role: "M.D ( Respiratory Medicine) RESPIRATORY MEDICINE",
//       image: visitingDoctor,
//     },
//   ];
//   return (
//     <div>
//       <h1 className="mt-10 md:mt-20 md:text-[36px] text-[28px] text-center text-[#496A75] font-yeseva">
//         Visitng Doctors
//       </h1>
//       <div className="mx-auto mt-10 px-10">
//         <div className="grid grid-cols-3 gap-10 justify-around ">
//           {visitingDoctors.map((founder, index) => (
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
//       </div>
//     </div>
//   );
// };

// export default VisitingDoctors;


import visitingDoctor from "../../assets/doctor .png";

const VisitingDoctors = () => {
  const visitingDoctors = [
    {
      id: 1,
      name: "Dr. Mugundhan",
      role: "M.S (Ortho) D (Ortho)",
      role2: "ORTHOPAEDIC SURGEON",
      image: visitingDoctor,
    },
    {
      id: 2,
      name: "Dr. Namachivayam",
      role: "M.Ch (Plastic)",
      role2: "PLASTIC SURGEON",
      image: visitingDoctor,
    },
    {
      id: 3,
      name: "Dr. Selvakumar",
      role: "M.D., D.M (Neuro)",
      role2: "NEUROLOGIST",
      image: visitingDoctor,
    },
    {
      id: 4,
      name: "Dr. Senthil",
      role: "M.D.S Maxillo facial",
      role2: "DENTAL SURGEON",
      image: visitingDoctor,
    },
    {
      id: 5,
      name: "Dr. Rajesh Rathnam",
      role: "M.D (Anaesthesia)",
      role2: "Anaesthesiologist",
      image: visitingDoctor,
    },
    {
      id: 6,
      name: "Dr. Karthikeyan",
      role: "DA",
      role2: "ANAESTHATIST",
      image: visitingDoctor,
    },
    {
      id: 7,
      name: "Dr. Kumar Kempan",
      role: "M.D., (Mos)  (Dip-Diab) CCIH",
      role2: "DIABETOLOGIST",
      image: visitingDoctor,
    },
    {
      id: 8,
      name: "Dr. Karthikeyan",
      role: "D (Ortho) DNB (Ortho)",
      role2: "fellow in spine surgery SPINE SURGEON",
      image: visitingDoctor,
    },
    {
      id: 9,
      name: "Dr. Gowthaman",
      role: "M.D ( Respiratory Medicine)",
      role2: "RESPIRATORY MEDICINE",
      image: visitingDoctor,
    },
  ];

  return (
    <div>
      <h1 className="font-yeseva mt-10 md:mt-20 md:text-[36px] text-[28px] text-center text-[#8F3E97]">
        Visiting Doctors
      </h1>
      <div className="mx-auto mt-10 px-10">
        <div className="cursor-pointer grid md:grid-cols-3 gap-10 justify-around">
          {visitingDoctors.map((doctor, index) => (
            <div
              key={index}
              className="relative bg-[#8F3E97] text-white p-4 rounded-lg overflow-hidden group" // Added 'group' for hover effect
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="flex  filter-none justify-center mx-auto w-20 h- 72 object-cover rounded-lg mb-4" // Reduced size and added rounded corners
              />
                            <div className="absolute top-0 left-0 w-full h-full bg-[#8F3E97] bg-opacity-30 transform translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>

              <div className="text-center">
                <h2 className="text-lg font-semibold">{doctor.name}</h2>
                <p className="text-sm">{doctor.role} <br /> {doctor.role2 ? doctor.role2 : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitingDoctors;
