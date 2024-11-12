/* eslint-disable no-unused-vars */
import Banner from "../../components/Banner/Banner";
import Department from "../../components/Department/Department";
import Schedule from "../../components/Schedule/Schedule";
import Statistics from "../../components/Statistics/Statistics";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Home = () => {
  return (
    <>
      {/* <Banner/> */}
      {/* <ComingSoon/> */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        {" "}
        <Department />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        {" "}
        <Statistics />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        {" "}
        <Schedule />
      </div>
    </>
  );
};

export default Home;
