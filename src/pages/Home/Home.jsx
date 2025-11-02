/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Department from "../../components/Department/Department";
import Schedule from "../../components/Schedule/Schedule";
import Statistics from "../../components/Statistics/Statistics";
import Testimonial from "../../components/Testimonial/Testimonial";
import Contact from "../../components/Contact/Contact";
import BannerNew from "../../components/Banner/bannerNew";
import Insurance from "../../components/Insurance/Insurance";
import MobileBanner from './../../components/Banner/MobileBanner';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // speed of animation
      easing: "ease-in-out", // smooth easing
      once: true, // only animate once
      offset: 50, // smaller offset for faster trigger
      disable: () => window.innerWidth < 800, // disable on small screens
    });
  }, []);

  return (
    <>
      {/* <Banner /> */}
      <BannerNew />
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Department />
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Statistics />
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Schedule />
      </div>

      <div data-aos="fade-in" data-aos-anchor-placement="center-bottom">
        <Testimonial />
      </div>

      <Insurance />

      <Contact />
    </>
  );
};

export default Home;
