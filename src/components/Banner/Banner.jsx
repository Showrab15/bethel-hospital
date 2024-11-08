const Banner = () => {
  return (
    <div className="mx-14 mt-10 ">
      <h1 className="w-[720px] font-semibold   text-[#121212] text-[48px] leading-[51px]">
        we are dedicated to providing exceptional healthcare to you and your
        family.
      </h1>
      <p className="w-[710px] my-6 text-[18px] leading-[22px] font-manrope font-medium  text-[#121212]">
        With state-of-the-art medical technology, expert doctors, and a
        compassionate team, we strive to deliver personalized care that meets
        your needs and supports your well-being every step of the way.
      </p>
      <div>
        <button className="bg-[#8F3E97] text-[#FFFEFD] rounded-[14px] text-[17px] w-[222px] h-[52px]  poppins-medium flex items-center justify-evenly">
         Book An Appointment{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
