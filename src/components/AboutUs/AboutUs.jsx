import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import about5 from "../../assets/about5.png";
import about6 from "../../assets/about6.png";
import about7 from "../../assets/about7.png";
import about8 from "../../assets/about8.png";
import about9 from "../../assets/about9.png";
import about10 from "../../assets/about10.png";
import about11 from "../../assets/about11.png";
import about12 from "../../assets/about12.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="mt-8 flex flex-col gap-10 items-center justify-center">
        {/* First Box - Image on Right, Text on Left */}
        <div className="lg:flex items-start gap-8 md:mt-[50px] mt-[20px] md:px-[50px] px-6">
          {/* Left Side (Text) */}
          <motion.div
            className="lg:w-6/12 pl-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Basement: Advanced Diagnostics and Therapy
            </h2>
            <ul className="mt-4 list-disc font-medium font-poppins text-[16px] lg:text-[18px] space-y-4">
              {[
                "Radiology Department: Cutting-edge imaging services including Digital X-ray, Mobile X-ray, Ultrasonogram.",
                "Prayer Hall: A serene sanctuary for solace and spiritual reflection.",
                "Physiotherapy: Comprehensive rehabilitation services, including Laser Therapy for pain relief, injury recovery, and post-surgical care.",
                "Medical Records Room: Secure, organized, and efficient management of patient health records & insurance.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side (Images) */}
          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[about1, about2].map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
               
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Box - Image on Left, Text on Right */}
        <div className="lg:flex items-start gap-8 md:mt-[50px] mt-[20px] md:px-[50px] px-6">
          {/* Left Side (Images) */}
          <motion.div
            className="lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[about3, about4, about5].map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, x: -50 }} // Opposite of the first box
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
               
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side (Text) */}
          <motion.div
            className="lg:w-6/12 md:pl-10 pl-6"
            initial={{ opacity: 0, x: 50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="mt-4 md:mt-0 text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Ground Floor: Patient Services Hub
            </h2>
            <ul className="mt-4 list-disc font-medium font-poppins text-[16px] lg:text-[18px] space-y-4">
              {[
                "Reception: Friendly and professional assistance to ensure a smooth experience.",
                "Laboratory: Precision testing in Bio-Chemistry, Hematology, Microbiology, and Immunology.",
                "Emergency Department: 24/7 emergency care by skilled professionals and rapid team.",
                "Orthopedic OPD: Expert care for fractures, arthritis, sports injuries, joint replacements, Scopy & Spine.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }} // Opposite of the first box
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Third Box - Image on Right, Text on Left */}
        <div className="lg:flex items-start gap-8 md:mt-[50px] mt-[20px]  md:px-[50px] px-6">
          {/* Left Side (Text) */}
          <motion.div
            className="lg:w-6/12 pl-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              First Floor:Specialty Outpatient Services
            </h2>
            <ul className="mt-4 list-disc font-medium font-poppins text-[16px] lg:text-[18px] space-y-4">
              {[
                "Obstetrics & Gynaecology OPD : Comprehensive {`women’s`} health services, including prenatal, postnatal, gynecological, an high-risk pregnancy management",
                "Neonatal intensive care unit.",
                "Birthing suite",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side (Images) */}
          <motion.div
            className="lg:w-6/12 flex flex-col gap-4 md:mt-0 mt-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[about6, about7, about8].map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
               
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* fourth box */}

        <div className="lg:flex items-start gap-8 md:mt-[50px] mt-[20px] md:px-[50px] px-6">
          {/* Left Side (Images) */}
          <motion.div
            className="lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[about9, about10].map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, x: -50 }} // Opposite of the first box
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
               
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side (Text) */}
          <motion.div
            className="lg:w-6/12 md:pl-10 pl-6"
            initial={{ opacity: 0, x: 50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="md:mt-0 mt-4 text-left text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Advanced Care Units
            </h2>
            <ul className="mt-4 list-disc font-medium font-poppins text-[16px] lg:text-[18px] space-y-4">
              {[
                "Neonatal Intensive Care Unit (NICU): Specialized care for newborns requiring intensive treatment.",
                "Operation Theatre Complex: Fully equipped twin operation theaters with laminar air flow system. Operating microscope , 'C'Arm, and post operative recovery facilities.",
                "Intensive Care Unit (ICU): State-of-the-art Critical care management",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }} // Opposite of the first box
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* fifth box */}
        <div className="lg:flex items-start gap-8 md:mt-[50px] mt-[20px] lg:px-[50px] px-6 ">
          {/* Left Side (Text) */}
          <motion.div
            className="lg:w-6/12 pl-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Facilities and Amenities
            </h2>
            <ul className="mt-4 list-disc font-medium font-poppins text-[16px] lg:text-[18px] space-y-4">
              {[
                "Types of patient rooms: Deluxe A/C, Single A/C,Single non-A/C, and General wards",
                "Nursing Staff Hostel.",
                "Conference Hall with Library.",
                "In-house Canteen and Pharmacy.",
                "24/7 Ambulance Services.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side (Images) */}
          <motion.div
            className="lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[about11, about12].map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <img
                  className="md:mt-0 mt-4 w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
               
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
