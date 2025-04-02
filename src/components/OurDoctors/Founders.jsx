// import founder1 from "../../assets/founder1-removebg-preview.png";
// import founder2 from "../../assets/founder2.png";

// const Founders = () => {
//     const foundersData = [
//         { id: 1, name: "Dr. John Doe", role: "Co-Founder & CEO", image: founder1 },
//         { id: 2, name: "Dr. Jane Smith", role: "Co-Founder & CTO", image: founder2 },
//       ];
//   return (
//     <div>
//     <h1 className="mt-20 md:text-[36px] text-center text-[#496A75] font-yeseva">
//       Our Founders
//     </h1>
//     <div className="mt-10 flex gap-10 justify-around mx-auto">
//       {foundersData.map((founder) => (
//         <div key={founder.id} className="relative bg-[#211516] group overflow-hidden">
//           <img src={founder.image} alt={founder.name} className="w-full filter grayscale group-hover:grayscale-0 transition-all duration-300" />
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 h-32">
//             <h2 className="text-lg font-semibold">{founder.name}</h2>
//             <p className="text-sm">{founder.role}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default Founders;



import founder1 from "../../assets/founder1-removebg-preview.png";
import founder2 from "../../assets/founder2.png";

const Founders = () => {

    const foundersData = [
                 { id: 1, name: "Dr Rajapandian", role: "MS (Ortho)., D Ortho", image: founder1 },
                 { id: 2, name: "Dr Sheela Rajapandian", role: "M.D D.G.O", image: founder2 },
               ];
  return (
    <div>
      <h1 className="mt-10 md:mt-20 md:text-[36px] text-[28px] text-center text-[#496A75] font-yeseva">
        Our Founders
      </h1>
      <div className="mx-auto mt-10 px-10">
      <div className=" md:flex-row flex flex-col gap-10 justify-around ">
        {foundersData.map((founder, index) => (
          <div
            key={index}
            className="  relative bg-[#211516] hover:bg-[#8F3E97] group overflow-hidden"
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
      </div>
    </div>
  );
};

export default Founders;