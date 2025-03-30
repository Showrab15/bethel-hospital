import banner from '../../assets/doctor_page_banner.png'
const Banner = () => {
    return (
        <div>
            <div className="relative w-full">
  {/* Banner Image */}
  <img
    src={banner}
    alt="Banner"
    className="w-full h-auto"
  />

  {/* Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#496A75]/80 to-transparent  flex items-center ">
    <div className="max-w-[800px]  px-10 text-white">
      <h1 className="text-3xl md:text-7xl md:leading-tight pb-14  font-manrope">
        You know where to go  If you need answers
      </h1>
     
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;