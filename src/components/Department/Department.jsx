



import { useState } from "react";
import Orthopaedics from "../../assets/Orthopaedics.png";
import Obstetrics from "../../assets/Obstetrics.png";
import PlasticSurgery from "../../assets/plastic surgery 1.png";
import Paediatrics from "../../assets/Paediatrics   1.png";
import daibatology from "../../assets/daibatology 1.png";
import rightarrow from "../../assets/rightarrow (2).png";
import general  from "../../assets/General surgery.png";
// import laparoscopic from "../../assets/laparoscopic.png";
// import pain from "../../assets/pain.png";
// import arthroscopic from "../../assets/arthroscopic.png";
import spine from "../../assets/Spine Surgery.png";

const Department = () => {
  const items = [
    {
      title: "Orthopaedics & Traumatology",
      description:
        "Our team of experienced orthopaedic surgeons and specialists utilizes advanced diagnostic techniques and state-of-the-art treatments",
      image: `${Orthopaedics}`,
    },
    {
      title: "Obstetrics & Gynaecology",
      description:
        "Our Obstetrics & Gynecology department is committed to providing comprehensive and compassionate care for women at every stage of life.",
      image: `${Obstetrics}`,
    },

    {
      title: "Paediatrics",
      description:
        "Our Pediatrics department is dedicated to providing exceptional medical care for infants, children, and adolescents.",
      image: `${Paediatrics}`,
    },
    {
      title: "Plastic Surgery",
      description:
        "Our Plastic Surgery department is committed to delivering the highest standard of care in reconstructive and cosmetic surgery.",
      image: `${PlasticSurgery}`,
    },
    {
      title: "Diabetology",
      image: `${daibatology}`,
      description:
        "Our Diabetology department is dedicated to providing comprehensive care for individuals with diabetes and related metabolic disorders.",
    },
    {
      title: "General surgery",
      image: `${general}`,
      description:
        " Our General Surgery involves the diagnosis and surgical treatment of a wide range of conditions affecting various parts of the human body.",
    },
    {
      title: "Laparoscopic Surgery",
      image: `${daibatology}`,
      description:
        "Laparoscopic Surgery is a minimally invasive procedure performed using small incisions, a camera, and specialized instruments to treat conditions within the abdomen or pelvis.",
    },
    {
      title: "Pain Management Procedure",
      image: `${daibatology}`,
      description:
        "Pain Management Procedures are specialized techniques designed to alleviate chronic or acute pain through targeted treatments such as injections, nerve blocks, or minimally invasive interventions.",
    },
    {
      title: "Arthroscopic Surgery",
      image: `${daibatology}`,
      description:
        "Arthroscopic Surgery is a minimally invasive procedure that uses a small camera and instruments to diagnose and treat joint conditions.",
    },
    {
      title: "Spine Surgery",
      image: `${spine}`,
      description:
        "Spine Surgery involves surgical interventions to treat spinal disorders, injuries, or deformities, aiming to alleviate pain and restore function.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 4;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleItems < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="md:mt-40 mt-10 px-4 md:px-[50px] mx-auto">
      <div className="flex flex-col md:justify-center">
        <p className="text-[26px] leading-[20px] font-bold font-manrope text-[#8F3E97] text-center">
        Departments
        </p>
        {/* <h5 className="text-center md:text-center my-3 md:w-full w-full text-[22px] md:text-[48px] leading-[30px]
         md:leading-[51px] font-semibold font-manrope text-[#121212]">
          We offer a comprehensive coverage of more{" "}
          <br className="hidden md:block" /> than 80+ medical tests with
          reliable results
        </h5> */}
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className={`p-2 md:p-3 flex items-center justify-center text-center rounded-full bg-white text-white ${
            startIndex === 0 ? "cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <img className="rotate-180 w-4 h-4 md:w-[35px] md:h-[70px]" src={rightarrow} alt="" />
        </button>

        {/* Carousel Items */}
        <div className="flex flex-wrap md:flex-nowrap md:space-x-8 space-y-6 md:space-y-0 overflow-hidden justify-center">
          {items
            .slice(startIndex, startIndex + visibleItems)
            .map((item, index) => (
              <div
                key={index}
                className="group hover:cursor-pointer transform hover:scale-105 transition duration-300
                 hover:bg-[#8F3E97] hover:rounded-bl-[10px] hover:rounded-br-[10px] font-manrope w-full md:w-[331.92px] h-auto min-h-[250px] p-4 bg-white shadow-md border border-t-4 border-t-[#8F3E97] flex flex-col items-center justify-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 object-cover w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full group-hover:hidden"
                />
                <div
                  className={`mt-2 text-lg font-semibold text-gray-700 group-hover:hidden ${
                    item.title === "Orthopaedics & Traumatology"
                      ? "-mb-10 text-[15px] font-bold"
                      : ""
                  }`}
                >
                  {item.title}
                </div>
                <div className="text-center mt-2 items-start justify-start text-[16px] leading-[30px] font-normal font-manrope text-white  group-hover:flex hidden">
                  {item.description}
                </div>
               
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className={`p-2 md:p-3 flex items-center justify-center text-center rounded-full bg-white text-white ${
            startIndex + visibleItems >= items.length ? "cursor-not-allowed" : ""
          }`}
          disabled={startIndex + visibleItems >= items.length}
        >
          <img className="w-4 h-4 md:w-[35px] md:h-[70px]" src={rightarrow} alt="rightarrow" />
        </button>
      </div>
    </div>
  );
};

export default Department;