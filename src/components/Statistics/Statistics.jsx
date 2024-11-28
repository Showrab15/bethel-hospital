import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import border from "../../assets/border.png";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="w-[1918px] h-[881px] bg-[#FAFAFA]  my-auto  md:mt-20 -mt-20">
      <div className=" mx-[50px] md:mx-[101px] flex-col md:flex   my-auto items-center">
        {/* left side */}
        <div className="mt-60 w-[744px]">
          <p className="my-2 text-[18px] leading-[20px] font-bold font-manrope  text-[#8F3E97]">
            Quick Facts
          </p>
          <h5 className="md:w-[737px] w-[390px] md:text-[44px] text-[24px]  md:leading-[70px]  font-manrope font-bold text-[#121212]">
            Patient Admission Statistics
          </h5>
          <p className="my-2 w-[350px] md:w-[674px] text-base md:text-[22px] md:leading-[30px] font-normal font-manrope  text-[#696969]">
            At Bethel Hospital, we believe in transparency and accountability.
            Our commitment to providing excellent care is reflected in the trust
            that our patients place in us. Below are the latest statistics
            regarding patient admissions, showcasing the breadth and quality of
            services we provide.
          </p>
        </div>

        {/* right side */}
        <div>
          {/* left side box */}
          <div className="md:mt-60 mt-10 md:flex gap-10 ml-5"> 
            <div className="flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
              <img className="w-[129px]  h-[136px]" src={icon1} alt="" />
              <h3 className="flex flex-col  justify-center items-end text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
                 <CountUp
                 end={170822}
                 duration={3.75}
                 >  170822  </CountUp><span className="-mr-8 -mt-4">+ </span>
              
              </h3>
              <img className="mt-4" src={border} alt="" />
              <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
                Satisfied Patients
              </p>
            </div>

            <div className="md:-mt-48 mt-10 flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
              <img className="w-[129px]  h-[136px]" src={icon3} alt="" />
              <h3 className="flex flex-col justify-center items-end text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
                <CountUp
                 end={9770}
                 duration={3.75}
                 > 9770 </CountUp><span className="-mr-8 -mt-4">+ </span>

               
              </h3>
              <img className="mt-4" src={border} alt="" />
              <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
                Orthopedic Surgeries
              </p>
            </div>
          </div>

          <div className="mt-[60px]  md:flex  gap-10 ml-5">
            <div className="flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
              <img className="w-[129px]  h-[136px]" src={icon2} alt="" />
              <h3 className="flex flex-col justify-center items-end  text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
                  <CountUp
                  className="flex"
                 end={5297}
                 duration={3.75}
                 >  5297 </CountUp>
               <span className="-mr-8 -mt-4">+ </span>
              </h3>
              <img className="mt-4" src={border} alt="" />
              <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
                Normal Deliveries
              </p>
            </div>

            <div className="md:-mt-48 mt-10 flex items-center flex-col gap-2 text-center w-[275.92px] h-[251.37px] bg-[#8F3E97] rounded-[10px]">
              <img className="w-[129px]  h-[136px]" src={icon4} alt="" />
              <h3 className=" flex flex-col justify-center items-end text-center text-[45px] font-manrope font-semibold leading-[16px] text-white">
                 <CountUp
                 end={6821}
                 duration={3.75}
                 > 6821   </CountUp>
                 <span className="-mr-8 -mt-4">+ </span>
              </h3>
              <img className="mt-4" src={border} alt="" />

              <p className="text-[20px] leading-[16px] font-semibold font-manrope text-white  ">
                Obstetrics & Gynaecology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
