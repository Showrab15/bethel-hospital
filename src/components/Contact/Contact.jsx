import callIcon from '../../assets/callICon.png'
import locationIcon from '../../assets/location.png'
import clockIcon from '../../assets/callICon.png'
import emailIcon from '../../assets/email.png'

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
        <div className="bg-[#DDDDDD] hover:bg-[#8F3E97] group  rounded-[5px] w-[252px] h-[245px] flex flex-col justify-center items-center my-auto">
            <img className="group-hover:text-white" src={callIcon} alt="" />
            <h2 className="text-[#8F3E97] font-poppins font-bold group-hover:text-white  text-[18px] mt-2"> Emergency</h2>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">(237) 681-812-255</p>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">(237) 666-331-894</p>
        </div>
        <div className="bg-[#DDDDDD] hover:bg-[#8F3E97] group  rounded-[5px] w-[252px] h-[245px] flex flex-col justify-center items-center my-auto">
            <img className="group-hover:text-white" src={locationIcon} alt="" />
            <h2 className="text-[#8F3E97] font-poppins font-bold group-hover:text-white  text-[18px] mt-2"> Location</h2>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">0123 Some place</p>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">0123 Some place</p>
        </div>
        <div className="bg-[#DDDDDD] hover:bg-[#8F3E97] group  rounded-[5px] w-[252px] h-[245px] flex flex-col justify-center items-center my-auto">
            <img className="group-hover:text-white" src={emailIcon} alt="" />
            <h2 className="text-[#8F3E97] font-poppins font-bold group-hover:text-white  text-[18px] mt-2"> Email</h2>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">fildineeesoe@gmil.com</p>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">fildineeesoe@gmil.com</p>
        </div>
        <div className="bg-[#DDDDDD] hover:bg-[#8F3E97] group  rounded-[5px] w-[252px] h-[245px] flex flex-col justify-center items-center my-auto">
            <img className="group-hover:text-white" src={clockIcon} alt="" />
            <h2 className="text-[#8F3E97] font-poppins font-bold group-hover:text-white  text-[18px] mt-2"> Working Hours</h2>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">Mon-Sat 09:00-20:00</p>
            <p className="text-[#8F3E97] font-poppins font-regular group-hover:text-white my-1 text-[16px]">Sunday Emergency only</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
