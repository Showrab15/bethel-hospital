
import { useState } from "react";
import testimonial1 from "../../assets/testimonial1.png";
import rightArrow from "../../assets/long_right.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    text: "My aunt had severe ankle pain and she was diagnosed as rheumatoid. The doctor (Dr Sam) gave proper explanation and helped me understand my problem. Also, he gave a pain block which drastically reduced my symptoms!!",
    author: "karthi keyan",
  },
 
  {
    id: 2,
    image: testimonial1,
    text: "I had a wonderful experience with Dr. Rajapandian, Dr. Samuel Anantharaj and team who operated upon my mother's elbow.They were very thorough in their treatment and very courteous as well. Kudos to the team, wishing them success!!",
    author: "Rani Venugopal",
  },
 
  {
    id: 3,
    image: testimonial1,
    text: "I went to Bethel hospital for my mother in law's knee pain treatment.... Dr. Rajapandian treated her very well... He was very kind to us economical treatment. All the staff members were kind and polite. All over good experience.",
    author: "Romila S",
  },
  {
    id: 4,
    image: testimonial1,
    text: "Good Hospital. The Manager Mr.Austin was very helpful in guiding us. Good doctors and helpful nurses. Would recommend for all type of surgery and hospitalization.",
    author: "Joshua Daniel",
  },
  
  {
    id: 5,
    image: testimonial1,
    text: "Treatment is provided very well. Hospital facilities are very modern and convenient. Cost affordable and kind Doctors, Caring Workers. Good Hospital for instant recovery and Treatment.",
    author: "Nirmal Kumar",
  },
  {
    id: 6,
    image: testimonial1,
    text: "Very professional and well experienced team of doctors and staff. Sufficient time is given to patients. Very reassuring and helpful. Under their care we are in safe hands.",
    author: "Rakesh B",
  },
  {
    id: 7,
    image: testimonial1,
    text: "Best orthopaedic hospital.Doctors are experienced, polite and helpful.Staff efficiency is also good. Especially mentioning about an physio doctors, they are so kind and providing us excellent service.",
    author: "Ezhilarasi J",
  },
 
  {
    id: 8,
    image: testimonial1,
    text: "One of the best hospital I ever seen before in this district of coimbatore best for ladies and very clean and fast worker in hospital plus good working girls so proud of those ladies and girls gave a treatment TQ...",
    author: "Vishnu Vijay",
  },
  {
    id: 9,
    image: testimonial1,
    text: "Good hospital for maternity. Dr Sheela is the best maternity specialist in the city I believe. For refund of insurance excess amount paid, took a bit longer than expected but overall had a great experience and satisfactory.",
    author: "Moi Dheen",
  },
];



const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < groupedTestimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Group testimonials into chunks of 3
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <div className="mt-32 px-4 md:px-8 lg:px-16 font-manrope text-center">
      <h2 className="font-semibold text-3xl md:text-4xl lg:text-[54px] leading-tight text-[#121212]">
        Our patients feedback about us
      </h2>
      <p className="my-4 text-lg md:text-xl text-[#8F3E97]">
        Their impression after using our service
      </p>

      {/* Testimonial slider */}
      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${groupedTestimonials.length * 100}%`,
          }}
        >
          {groupedTestimonials.map((group, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-full gap-6 sm:gap-8 lg:gap-8 px-6 sm:px-8 py-10 bg-[#8F3E9742]"
            >
              {group.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative text-center p-4 sm:p-6 lg:p-8 bg-[#F8F0FF] border border-[#8F3E97] rounded-lg"
                >
                  {/* Top Left Quotation Marks */}
                  <div className="absolute top-[-25px] left-[-25px] text-5xl text-[#8F3E97]">
                    &ldquo;
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[12px] sm:text-base md:text-lg lg:text-[18px] leading-relaxed text-[#121212]">
                    {testimonial.text}
                  </p>

                  {/* Bottom Right Quotation Marks */}
                  <div className="absolute bottom-[-25px] right-[-25px] text-5xl text-[#8F3E97]">
                    &rdquo;
                  </div>

                  <h6 className="font-semibold text-[16px] sm:text-[18px] lg:text-[20px] mt-4">{testimonial.author}</h6>
                  <div className="flex gap-3 mx-auto justify-center py-2 text-[#8F3E97]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center md:justify-end gap-4 mt-6 md:mr-10">
        <img
          src={rightArrow}
          alt="Previous"
          onClick={handlePrev}
          className={`w-6 h-6 rotate-180 cursor-pointer transition ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <img
          src={rightArrow}
          alt="Next"
          onClick={handleNext}
          className={`w-6 h-6 cursor-pointer transition ${
            currentIndex === groupedTestimonials.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Testimonial;
