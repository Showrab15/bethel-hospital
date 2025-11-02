    


import orthopedics from "../../assets/orthopedics-services.png";
import Paediatrics from "../../assets/Paediatrics-services.png";
import obstetrics from "../../assets/Obstetrics-Gynecology 1.png";
import Diabetology from "../../assets/Diabetics_GV 1.png";
import plasticSergery from "../../assets/plasticsergery.png";
import physiotherapy from "../../assets/Physiotherapy.png";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      {/* Top Banner with Heading */}

      {/* Content */}
      <div className="flex flex-col gap-10 items-center justify-center px-4 md:px-8 lg:px-[50px] py-10">
        {/* Service Box Template */}
        {/* Repeat below block with different data */}

        {/* Orthopaedics */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:mt-10 ">
          {/* left side text */}

          <motion.div
            className="lg:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Orthopaedics & Traumatology
            </h2>
            <motion.p
              className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3, // Adjust the delay if necessary
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              Orthopaedics & Traumatology Department is dedicated to
              providing world-class care for patients with musculoskeletal
              conditions and injuries. Our team of experienced Orthopedic
              surgeons and other Specialists are committed in restoring function,
              reducing pain, and early recovery for patients of
              all ages. <br /> <br /> 
              Expertise in Hip, knee, and Shoulder Replacements use the latest techniques for faster recovery and
              optimal outcomes. Sports-injury treatement,
              including Arthroscopic, ACL Reconstruction, Meniscus repair, and Rotator cuff
              surgery help Athletes return to their peak performance at the earliest . <br />{" "}
              <br />
              State of art treatment for Fractures, Dislocations, and other
              traumatic conditions, with a focus on rapid recovery are done.
              Specialized care for Spine disorders, including Slipped discs,
              Spinal stenosis, and Scoliosis utilizing both surgical and
              non-surgical approaches are being done.
            </motion.p>
          </motion.div>

          {/* right side image */}

          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[orthopedics].map((img, index) => (
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
                <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />

                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Paediatrics */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-6 md:mt-10">
          {/* left side text */}
          <motion.div
            className="lg:w-6/12"
            initial={{ opacity: 0, x: 50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Paediatrics
            </h2>
            <motion.p
              className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4"
              initial={{ opacity: 0, x: 30 }} // Opposite of the first box
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              The Pediatrics Department is provides exceptional
              medical care for infants, children, and adolescents. Our team of
              compassionate and experienced Pediatricians are committed in
              ensuring the health and well-being of young patients, offering a
              Golbal range of services tailored to meet their unique
              needs. <br /> <br />
              Comprehensive care for newborns, from routine newborn screenings.
              Regular check-ups and
              preventive care to monitor growth and development, Administer
              vaccinations and provide guidance on nutrition and healthy
              lifestyle. <br /> <br />
              Access to a wide range of Pediatric subspecialties including
              Pediatric Cardiology, Neurology, Gastroenterology and more.
             
            </motion.p>
          </motion.div>

          {/* right side image */}
          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[Paediatrics].map((img, index) => (
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
                <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />

                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Obstetrics */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:mt-10">
          {/* left side text */}

          <motion.div
            className="lg:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Obstetrics & Gynecology
            </h2>
            <motion.p
              className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3, // Adjust the delay if necessary
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              The Obstetrics & Gynecology department is committed to providing
              comprehensive and compassionate care for women at every stage of
              life. Our team of highly skilled obstetricians, gynecologists and
              nurses work together to offer personalized treatment and support,
              ensuring the health and well-being.
              <br /> <br />
              From Preconception counselling to postpartum support, we offer
              complete care for expectant mothers. We provide a full range of
              gynecologic services, including annual well-woman examinations,
              contraceptive counselling, Menopause management, and treatment for
              gynecologic conditions such as endometriosis, fibroids, and pelvic
              pain. <br /> <br />
              The department is equipped with state-of-the-art technology to
              perform minimally invasive surgical procedures, such as
              laparoscopy and hysteroscopy.We work closely with other
              departments to provide multidisciplinary care and support to the
              patients.
            </motion.p>
          </motion.div>

          {/* right side image */}

          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[obstetrics].map((img, index) => (
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
                <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />

                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ----------------------------- */}
        {/* Plastic Surgery */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-6 md:mt-10">
          {/* left side text */}

          <motion.div
            className="lg:w-6/12"
            initial={{ opacity: 0, x: 50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Plastic Surgery
            </h2>
            <motion.p
              className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4"
              initial={{ opacity: 0, x: 30 }} // Opposite of the first box
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              Plastic Surgery department  enhances your
              natural beauty and restoring function with precision and care. Our
              team of board-certified plastic surgeons combines advanced
              techniques with a compassionate approach to deliver outstanding
              results tailored to each {`patient's`} unique needs.{" "}
              <br /> <br />
              Specialized care for conditions affecting the hands, including
              carpal tunnel syndrome, tendon repairs, and arthritis-related
              issues are done.Microvascular surgeries including Vascularized free flaps
              are done for cancer and trauma patients.
              <br /> <br />
              Our skilled surgeons are experts in reconstructive procedures 
              restore form and function following trauma, surgery, or congenital
              conditions. Services include breast reconstruction, cleft lip and
              palate repair, burn reconstruction, and hand surgery.
            </motion.p>
          </motion.div>

          {/* right side image */}

          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[plasticSergery].map((img, index) => (
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
                <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />

                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --------------------------------------- */}

        {/* Diabetology */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:mt-10">
          {/* left side texts */}

          <motion.div
            className="lg:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Diabetology
            </h2>
            <motion.p
              className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3, // Adjust the delay if necessary
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              Our Diabetology department provides comprehensive
              care for patients with diabetes and related metabolic disorders.
              Our team of highly skilled diabetologists and specialists are
              committed to offering personalized treatment plans to manage and
              control diabetes effectively, ensuring a better quality of life.
              <br /> <br />
              We offer individualized treatment plans tailored to the specific
              needs of each patient, including lifestyle modifications,
              medication management, and regular monitoring of blood glucose
              levels.
              <br /> <br />
              Specialized care and support for patients with both Type 1 and
              Type 2 diabetes, including education on self-management techniques
              and prevention strategies.
            </motion.p>
          </motion.div>

          {/* right side image */}

          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[Diabetology].map((img, index) => (
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
                <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />

                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Physiotherapy */}

        <div className="flex flex-col lg:flex-row-reverse items-start gap-6 md:mt-10">
       

          <motion.div
            className="lg:w-6/12"
            initial={{ opacity: 0, x: 50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#8F3E97] font-bold text-[18px] lg:text-[30px] font-manrope">
              Physiotherapy
            </h2>
            <motion.p
              className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4"
              initial={{ opacity: 0, x: 30 }} // Opposite of the first box
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
               <strong>Physiotheraphy -Orthopedics</strong> <br /> The Physical
              Theraphy is very important to manage majority of ailments
              Orthopaedic surgery, Allergic Lung Disease, Neurological problems
              and Prolonged bed rest. <br />
              The Physiotheraphy department has got all the modalities including
              Laser therapy Heat therapy, Massages and
              exercise therapy.
              <br /> <br /> <strong>
                Physiotheraphy - Obstetrics
              </strong> <br /> Antenatal exercises are being taught regularly to
              the expectant mothers by an experienced Obstetrics <br />{" "}
              Physiotherapist. Guidance is provided with regards to post natal
              physical care.
            </motion.p>
          </motion.div>







       





          <motion.div
            className="mt-4 md:mt-0 lg:w-6/12 flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }} // Opposite of the first box
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[physiotherapy].map((img, index) => (
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
                <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />

                <img
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt="Image"
                />
              </motion.div>
            ))}
          </motion.div>






        </div>
      </div>
    </div>
  );
};

export default Service;