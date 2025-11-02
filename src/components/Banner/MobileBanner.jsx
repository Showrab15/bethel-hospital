
import home from "../../assets/Group 500.png";
import home2 from "../../assets/rectangle2.png";
import Navbar from "./../Navbar/Navbar";
import mobileCUrved from '../../assets/mobilecurve.png'

const MobileBanner = () => {
    return (
        <div
        className="md:hidden relative  md:ml-[400px] h-auto md:h-[400px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${mobileCUrved})` }}
      >
        <div className="md:-ml-[400px]">
          <Navbar />
          
          {/* Left Text */}
          <div className="mt-10 ml-[20px] md:ml-[50px] px-4 md:px-0">
            <h3 className="text-[#8F3E97] text-lg sm:text-2xl md:text-[35px] font-bold leading-snug md:leading-normal font-manrope text-left">
              We are dedicated to <br /> providing exceptional <br />
              <span>healthcare to you and your family.</span>
            </h3>
            <p className="mt-4 text-[#8F3E97] font-manrope text-base sm:text-[16px] md:text-[18px] max-w-[620px]">
              With state-of-the-art medical technology, expert doctors, and a compassionate team, we strive to deliver personalized care that meets your needs and supports your well-being every step of the way.
            </p>
  
            <button
              className="mt-8 bg-[#8F3E97] text-[16px] text-[#FFFEFD] rounded-[5px] w-[180px] md:w-[222px] h-[48px] md:h-[52px] font-poppins font-medium flex items-center justify-center 
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Book AN Appointment
            </button>
          </div>
  
          {/* Images */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 gap-6 md:gap-0">
            <div className="relative md:-top-[430px] md:ml-[600px] w-[250px] md:w-[350px] md:h-[350px]">
              <img
                className="mx-auto mt-4 animate-float"
                src={home}
                alt="Decorative"
              />
            </div>
            <div className="relative md:-top-96 w-[250px] md:w-[350px] md:h-[350px]">
              <img
                className="mx-auto mt-4 animate-float"
                src={home2}
                alt="Decorative"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default MobileBanner;