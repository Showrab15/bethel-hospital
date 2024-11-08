import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Orthopaedics from '../../assets/Orthopaedics.png'
import Obstetrics from '../../assets/Obstetrics.png'
import Paediatrics from '../../assets/Paediatrics.png'
import rightarrow from '../../assets/rightarrow.png'
const Department = () => {
  const items = [
    { title: 'Orthopaedics & Traumatology', image: `${Orthopaedics}`},
    { title: 'Obstetrics & Gynaecology', image:`${Obstetrics}` },
    { title: 'Paediatrics', image: `${Paediatrics}` },
    { title: 'Plastic Surgery',  image: `${Paediatrics}` },
    { title: 'Dermatology', image:`${Obstetrics}` },
    { title: 'Neurology',image:`${Obstetrics}` },
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
   <div className="mt-10 mx-20">
    <dir className="flex flex-col justify-center">
    <p className="text-[22px] leading-[20px] font-bold font-manrope text-[#8F3E97] text-center">Department</p>
    <h5  className="my-3 w-[105 7px] text-[48px] leading-[51px] font-bold font-manrope text-[#121212] text-center">We offer a comprehensive coverage of more <br /> than 80+ medical tests with reliable results</h5>
    </dir>
     <div className=" mt-20 flex items-center justify-center space-x-10">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className={`ml-  w-[40.57px] h-[35.57px] flex items-center justify-center text-center rounded-full bg-[#8F3E97] text-white ${startIndex === 0 ? ' cursor-not-allowed' : ''}`}
        disabled={startIndex === 0}
      >
       <img className="rotate-180" src={rightarrow} alt="" />
       </button>

      {/* Carousel Items */}
      <div className="flex space-x-8 overflow-hidden">
        {items.slice(startIndex, startIndex + visibleItems).map((item, index) => (
          <div
            key={index}
            className="w-[331.92px] h-[261.37px] p-4 bg-white shadow-md border border-t-2 border-t-[#8F3E97]  flex flex-col items-center justify-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="  mb-2 object-cover rounded-full"
            />
            <div className="mt-2 text-lg font-semibold text-gray-700">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className={` w-[40.57px] h-[35.57px] flex items-center justify-center text-center rounded-full bg-[#8F3E97] text-white ${startIndex + visibleItems >= items.length ? ' cursor-not-allowed' : ''}`}
        disabled={startIndex + visibleItems >= items.length}
      >
       <img src={rightarrow} alt="" />
      </button>
    </div>
   </div>
  );
};

export default Department;
