import servicesBanner from "../../assets/servicesBanner.png";

const Banner = () => {
    return (
        <div>
        <img
          className="w-full md:h-[350px] h-[400px] lg:h-[534px] 2xl:h-[510px]  "
          src={servicesBanner}
          alt=""
        />
      </div>
    );
};

export default Banner;