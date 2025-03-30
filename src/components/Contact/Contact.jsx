import callIcon from "../../assets/Ringer_Volume.png";
import callIconWhite from "../../assets/Ringer Volume_white.png"; // White version of the icon
import locationIcon from "../../assets/location.png";
import locationIconWhite from "../../assets/Location_white.png";
import clockIcon from "../../assets/Ringer_Volume.png";
import clockIconWhite from "../../assets/Ringer Volume_white.png";
import emailIcon from "../../assets/email.png";
import emailIconWhite from "../../assets/LetterIcon_white.png";

const Contact = () => {
  return (
    <div className="mt-10 px-[50px]">
      <h2 className="text-[#159EEC] font-bold text-[18px] text-center">
        Get in touch
      </h2>
      <h3 className="text-[#8F3E97] font-regular font-poppins text-[32px] text-center">
        Contact
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-10 ml-10">
        {[
          {
            icon: callIcon,
            hoverIcon: callIconWhite,
            title: "Emergency",
            lines: ["(237) 681-812-255", "(237) 666-331-894"],
          },
          {
            icon: locationIcon,
            hoverIcon: locationIconWhite,
            title: "Location",
            lines: ["0123 Some place", "0123 Some place"],
          },
          {
            icon: emailIcon,
            hoverIcon: emailIconWhite,
            title: "Email",
            lines: ["fildineeesoe@gmil.com", "fildineeesoe@gmil.com"],
          },
          {
            icon: clockIcon,
            hoverIcon: clockIconWhite,
            title: "Working Hours",
            lines: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#DDDDDD] hover:bg-[#8F3E97] group rounded-[5px] w-[252px] h-[245px] flex flex-col justify-center items-center my-auto transition-all duration-300"
          >
            {/* Image Swap on Hover */}
            <img
              src={item.icon}
              className="group-hover:hidden block"
              alt=""
            />
            <img
              src={item.hoverIcon}
              className="hidden group-hover:block"
              alt=""
            />

            {/* Text Elements */}
            <h2 className="text-[#8F3E97] font-poppins font-bold group-hover:text-white text-[18px] mt-2">
              {item.title}
            </h2>
            {item.lines.map((line, i) => (
              <p
                key={i}
                className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]"
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
