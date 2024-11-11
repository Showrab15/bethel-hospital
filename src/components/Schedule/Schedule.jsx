import ScheduleBAnner from "../../assets/Schedule.png";
import rightIcon from "../../assets/rightIcon.png";
const Schedule = () => {
  return (
    <div className="mx-[101px] mt-20 flex gap-10 justify-between items-center ">
      <div>
        <img className="w-full h-full" src={ScheduleBAnner} alt="" />
      </div>
      <div className="w-[744px]">
        <h6 className="my-2 text-[18px] leading-[20px] font-bold font-manrope  text-[#8F3E97]">
          Make A Schedule
        </h6>
        <h3 className="w-[832px] text-[50px]  leading-[70px]  font-manrope font-bold text-[#121212]">
          We Value Your Health and Trust
        </h3>
        <p className="w-[734px] my-4  text-[22px] leading-[30px] font-normal font-manrope  text-[#696969]">
          These statistics reflect our dedication to providing quality
          healthcare and improving patient outcomes. We are committed to
          continuous growth and development in order to meet the evolving needs
          of our patients.
        </p>

        <ul className="space-y-[14px] mt-8 font-manrope font-semibold text-[22px]  leading-[20px] text-[#121212]">
          <li className="flex gap-2">
            <img src={rightIcon} alt="" />
            Make a schedule online is easy
          </li>
          <li className="flex gap-2">
            <img src={rightIcon} alt="" />
            Easy to connect with nearest lab
          </li>
        </ul>

        <div>
          <button className="mt-[26px] bg-[#8F3E97] text-[#FFFFFF] text-[18px] leading-[20px] rounded-[10px] w-[257px] h-[52px] font-manrope font-medium flex items-center justify-evenly">
       Make A Schedule Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
