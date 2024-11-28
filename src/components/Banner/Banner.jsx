const Banner = () => {
  return (
    <div className="lg:mx-[101px] mx-[50px]  mt-4 lg:mt-10 ">
      <h1 className="lg:w-[720px] w-[350px] font-semibold   text-[#121212] lg:text-[48px] text-[32px]  lg:leading-[51px]">
        we are dedicated to providing exceptional{" "}
        <span className="text-[#8F3E97]">
          {" "}
          healthcare to you and your family.
        </span>
      </h1>
      <p className="lg:w-[710px] w-[350px]  my-6 text-[18px] lg:leading-[22px] font-manrope font-medium  text-[#121212]">
        With state-of-the-art medical technology, expert doctors, and a
        compassionate team, we strive to deliver personalized care that meets
        your needs and supports your well-being every step of the way.
      </p>
      <div>
        <button className="bg-[#8F3E97] text-[#FFFEFD] rounded-[10px] text-[17px] w-[222px] h-[52px]  poppins-medium flex items-center justify-evenly">
          Book An Appointment{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
