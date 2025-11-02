

import callIcon from "../../assets/Ringer_Volume.png";
import callIconWhite from "../../assets/Ringer Volume_white.png";
import clockIcon from "../../assets/clock-icon-pink.png";
import clockIconWhite from "../../assets/clock-icon.png";
import emailIcon from "../../assets/email.png";
import emailIconWhite from "../../assets/email-icon-white.png";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-[#8F3E97] font-medium text-[36px] text-center font-yeseva ">
        Get in touch
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 place-items-center">
        {[
          {
            icon: callIcon,
            hoverIcon: callIconWhite,
            title: "Emergency",
            lines: ["+91-77080 61080", "+91-9791259333"],
          },
          {
            icon: `${<FaLocationDot size={20}/>}`,
            hoverIcon: <FaLocationDot />,
            title: "Location",
            lines: [
              "223, Dr Rajendra Prasad Rd, Tatabad, Gandhipuram",
              "Coimbatore, Tamil Nadu 641012",
            ],
          },
          {
            icon: emailIcon,
            hoverIcon: emailIconWhite,
            title: "Email",
            lines: ["bethelhospital2006@gmail.com"],
          },
          {
            icon: clockIcon,
            hoverIcon: clockIconWhite,
            title: "24 Hours"
            
          },
        ].map((item, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 hover:scale-90 bg-[#DDDDDD]
             hover:bg-[#8F3E97] group rounded-[5px] w-full max-w-[280px] h-[245px] flex flex-col 
             justify-center items-center transition-all duration-300"
          >
            {/* Image Swap on Hover */}
            <img
              src={item.icon}
              className="group-hover:hidden block w-10 h-10"
              alt=""
            />
            <img
              src={item.hoverIcon}
              className="hidden group-hover:block w-10 h-8"
              alt=""
            />

            {/* Text */}
            <h2 className="text-[#8F3E97] group-hover:text-white font-poppins font-bold text-[18px] mt-2 text-center">
              {item.title}
            </h2>
            {item.lines?.map((line, i) => (
              <p
                key={i}
                className="px-4 text-[#8F3E97] group-hover:text-white font-poppins text-[15px] text-center mt-1"
              >
                {line ? line : ''}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex mx-auto justify-center mt-8">
        {/* Responsive Map Container */}
        <div className="relative w-full h-[450px] max-w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.262706240189!2d76.95869007377843!3d11.018905654676889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fc682045b5%3A0x1970acda5572343e!2sBethel%20Hospital%20Pvt%20Ltd!5e0!3m2!1sen!2sbd!4v1743790793802!5m2!1sen!2sbd"
            width="100%" 
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
