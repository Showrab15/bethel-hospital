import { useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import servicesBanner from "../../assets/servicesBanner.png";

const Banner = () => {
  const location = useLocation();

  // Get all the path segments
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <div className="relative w-full">
      <img
        className="w-full h-[300px] md:h-[400px] lg:h-[534px] object-cover"
        src={servicesBanner}
        alt="Banner"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="flex items-center text-white text-2xl md:text-4xl font-semibold space-x-2">
          <span>Bethel</span>
          {pathSegments.map((segment, index) => (
            <span key={index} className="flex items-center space-x-2">
              <FiChevronRight />
              <span className="capitalize">{segment}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
