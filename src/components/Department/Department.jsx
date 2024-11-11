import { useState } from "react";
import Orthopaedics from "../../assets/Orthopaedics.png";
import Obstetrics from "../../assets/Obstetrics.png";
import PlasticSurgery from "../../assets/plastic surgery 1.png";
import Paediatrics from "../../assets/Paediatrics   1.png";
import daibatology from "../../assets/daibatology 1.png";
import rightarrow from "../../assets/rightarrow.png";
import { FaAngleRight } from "react-icons/fa";

const Department = () => {
  const items = [
    {
      title: "Orthopaedics & Traumatology",
      description:
        "Our team of experienced orthopaedic surgeons and specialists utilizes advanced diagnostic techniques and state-of-the-art treatments",
      image: `${Orthopaedics}`
     
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
        "Our Plastic Surgery department is committed to delivering the highest standard of care in reconstructive and cosmetic surgery.",
      image: `${Paediatrics}`,
    },
    {
      title: "Plastic Surgery",
      description:
        "Our Pediatrics department is dedicated to providing exceptional medical care for infants, children, and adolescents.",
      image: `${PlasticSurgery}`,
    },
    {
      title: "daibatology",
      image: `${daibatology}`,
      description:
        "Our Diabetology department is dedicated to providing comprehensive care for individuals with diabetes and related metabolic disorders.",
    }
    
    // Add more items as needed
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
    <div className="-mt-14 mx-[101px]">
      <dir className="flex flex-col justify-center">
        <p className="text-[26px] leading-[20px] font-bold font-manrope text-[#8F3E97] text-center">
          Department
        </p>
        <h5 className="my-3 w-[105 7px] text-[48px] leading-[51px] font-bold font-manrope text-[#121212] text-center">
          We offer a comprehensive coverage of more <br /> than 80+ medical
          tests with reliable results
        </h5>
      </dir>
      <div className=" mt-10 flex items-center justify-center space-x-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className={`  p-2 flex items-center justify-center text-center rounded-full bg-[#8F3E97] text-white ${
            startIndex === 0 ? " cursor-not-allowed" : ""
          }`}
          disabled={startIndex === 0}
        >
          <img className="rotate-180" src={rightarrow} alt="" />
        </button>

        {/* Carousel Items */}
        <div className="flex space-x-8 overflow-hidden">
          {items
            .slice(startIndex, startIndex + visibleItems)
            .map((item, index) => (
              <div
                key={index}
                className="group hover:cursor-pointer hover:bg-[#8F3E97]  hover:rounded-bl-[10px] hover:rounded-br-[10px] font-manrope   w-[331.92px] h-[261.37px] p-4 bg-white shadow-md border border-t-4 border-t-[#8F3E97]  flex flex-col items-center justify-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 object-cover rounded-full group-hover:hidden"
                />
                <div className={`mt-2 text-lg font-semibold text-gray-700 group-hover:hidden ${
    item.title === "Orthopaedics & Traumatology"
      ? "-mb-10 text-[15px] font-bold"  // Adjust width and add extra margin-top for this title
     
      : ""
  }`}>
                  {item.title}
                </div>
                <div className="mt-2 items-start justify-start text-[16px] leading-[30px] font-normal font-manrope text-white text-left group-hover:flex hidden">
                  {item.description}
                </div>
                <div className="group-hover:flex hidden ml-auto gap-2 items-center">
                  <span className="text-white text-[10px]  mt-4 items-center justify-center   font-normal -">
                    {" "}
                    Know More
                  </span>
                  <span className=" text-center  mt-4 group-hover:flex items-center justify-center  bg-white w-[30px] h-[30px] rounded-[16px]  font-semibold - r otate-90">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className={` p-2 flex items-center justify-center text-center rounded-full bg-[#8F3E97] text-white ${
            startIndex + visibleItems >= items.length
              ? " cursor-not-allowed"
              : ""
          }`}
          disabled={startIndex + visibleItems >= items.length}
        >
          <img src={rightarrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Department;
