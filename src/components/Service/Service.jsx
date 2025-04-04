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
              Our Orthopaedics & Traumatology department is dedicated to
              providing world-class care for patients with musculoskeletal
              conditions and injuries. Our team of experienced orthopedic
              surgeons and specialists is committed to restoring function,
              reducing pain, and enhancing the quality of life for patients of
              all ages. <br /> <br />
              Expertise in hip, knee, and shoulder replacements using the latest
              minimally invasive techniques to ensure faster recovery and
              optimal outcomes. Comprehensive care for sports-related injuries,
              including ACL reconstruction, meniscus repair, and rotator cuff
              surgery, helping athletes return to their peak performance. <br />{" "}
              <br />
              Advanced treatment for fractures, dislocations, and other
              traumatic injuries, with a focus on rapid and effective recovery.
              Specialized care for spine disorders, including herniated discs,
              spinal stenosis, and scoliosis, utilizing both surgical and
              non-surgical approaches.
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
              Our Pediatrics department is dedicated to providing exceptional
              medical care for infants, children, and adolescents. Our team of
              compassionate and experienced pediatricians is committed to
              ensuring the health and well-being of young patients, offering a
              comprehensive range of services tailored to meet their unique
              needs. <br /> <br />
              Comprehensive care for newborns, from routine newborn screenings
              to management of neonatal conditions.Regular check-ups and
              preventive care to monitor growth and development, administer
              vaccinations, and provide guidance on nutrition and healthy
              lifestyle choices. <br /> <br />
              Access to a wide range of pediatric subspecialties, including
              pediatric cardiology, neurology, gastroenterology, and more,
              ensuring comprehensive care for complex medical conditions.
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
              Our Obstetrics & Gynecology department is committed to providing
              comprehensive and compassionate care for women at every stage of
              life. Our team of highly skilled obstetricians, gynecologists, and
              nurses work together to offer personalized treatment and support,
              ensuring the health and well-being of our patients
              <br /> <br />
              From preconception counseling to postpartum support, we offer
              complete care for expectant mothers. We provide a full range of
              gynecologic services, including annual well-woman exams,
              contraceptive counseling, menopause management, and treatment for
              gynecologic conditions such as endometriosis, fibroids, and pelvic
              pain. <br /> <br />
              Our department is equipped with state-of-the-art technology to
              perform minimally invasive surgical procedures, such as
              laparoscopy and hysteroscopy.We work closely with other
              departments to provide multidisciplinary care and support for our
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
              Our Plastic Surgery department is dedicated to enhancing your
              natural beauty and restoring function with precision and care. Our
              team of board-certified plastic surgeons combines advanced
              techniques with a compassionate approach to deliver outstanding
              results tailored to each {`patient's`} unique needs and goals.{" "}
              <br /> <br />
              Specialized care for conditions affecting the hands, including
              carpal tunnel syndrome, tendon repairs, and arthritis-related
              issues, ensuring restored function and improved quality of life.
              <br /> <br />
              Our skilled surgeons are experts in reconstructive procedures that
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
              Our Diabetology department is dedicated to providing comprehensive
              care for patients with diabetes and related metabolic disorders.
              Our team of highly skilled diabetologists and specialists is
              committed to offering personalized treatment plans to manage and
              control diabetes effectively, ensuring a better quality of life
              for our patients.
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
              Laser therapy in addition to Traction, Heat therapy, Massages and
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
