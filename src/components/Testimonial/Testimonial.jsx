

import { useState } from "react";
import testimonial1 from "../../assets/testimonial1.png";
import rightArrow from "../../assets/long_right.png";

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    text: "Bethel gave me the best service with home collection and timely reports. My doctor  confirmed the reports are very accurate. Thanks Bethel!",
    author: "Naufal Hidayat",
  },
  {
    id: 2,
    image: testimonial1,
    text: "The service was excellent! Prompt results and professional staff. Would recommend to everyone.",
    author: "Amina Saleh",
  },
  {
    id: 3,
    image: testimonial1,
    text: "The service was excellent! Prompt results and professional staff. Would recommend to everyone.",
    author: "Amina Saleh",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="mt-[200px] font-manrope text-center">
      <h2 className="font-semibold text-[54px] leading-[40px] text-center text-[#121212]">
        Our patients feedback about us
      </h2>
      <p className="my-4 text-[22px] leading-[20px] font-normal text-center text-[#8F3E97]">
        Their impression after using our service
      </p>

      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mt-[66px] bg-[#8F3E9742] min-w-full h-[350px] flex gap-[165px] items-center justify-center"
            >
              <img className="ml-[245px]" src={testimonial.image} alt="testimonial" />
              <div>
                <p className="mt-8 w-[500px] h-[200px] text-left text-[25px] leading-[40px] font-normal text-[#121212]">
                  {testimonial.text}
                </p>
                <h6 className="font-semibold text-[20px] my-4">{testimonial.author}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mr-9 my-4 justify-end items-center gap-4">
        <img
          className={`rotate-180 cursor-pointer ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          src={rightArrow}
          alt="Previous"
          onClick={handlePrev}
        />
        <img
          className={`cursor-pointer ${
            currentIndex === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          src={rightArrow}
          alt="Next"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Testimonial;

