


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
      role: "M.D.S (Maxillo-facial)",
      role2: "DENTAL SURGEON",
      image: visitingDoctor,
    },
    {
      id: 5,
      name: "Dr. Rajesh Rathnam",
      role: "M.D (Anaesthesia)",
      role2: "ANAESTHESIOLOGIST",
      image: visitingDoctor,
    },
    {
      id: 6,
      name: "Dr. Karthikeyan",
      role: "M.B.B.S., D.A (Anaesthesia) ",
      role2: "ANAESTHESIOLOGIST",
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
      role2: "Fellowship in spine surgery SPINE SURGEON",
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
          {visitingDoctors.map((visitingDoctor, index) => (
            <div
              key={index}
              className="relative bg-[#8F3E97] text-white p-4 rounded-lg overflow-hidden group" // Added 'group' for hover effect
            >
              <img
                src={visitingDoctor.image}
                alt={visitingDoctor.name}
                className="flex  filter-none justify-center mx-auto w-20 h- 72 object-cover rounded-lg mb-4" // Reduced size and added rounded corners
              />
                            <div className="absolute top-0 left-0 w-full h-full bg-[#8F3E97] bg-opacity-30 transform translate-x-full group-hover:translate-x-0 transition-all duration-500"></div>

              <div className="text-center">
                <h2 className="text-lg font-semibold">{visitingDoctor.name}</h2>
                <p className="text-sm ">{visitingDoctor.role} <br /> {visitingDoctor.role2 ? visitingDoctor.role2 : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitingDoctors;
