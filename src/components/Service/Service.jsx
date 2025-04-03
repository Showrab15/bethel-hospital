// import servicesBanner from "../../assets/servicesBanner.png";
// import orthopedics from "../../assets/orthopedics-services.png";
// import Paediatrics from "../../assets/Paediatrics-services.png";
// import obstetrics from "../../assets/Obstetrics-Gynecology 1.png";
// import Diabetology from "../../assets/Diabetics_GV 1.png";

// const Service = () => {
//   return (
//     <div>
//       <div>
//         <img
//           className="w-full md:h-[350px] h-[400px] lg:h-[534px] 2xl:h-[510px]  "
//           src={servicesBanner}
//           alt=""
//         />
//       </div>

//       <div className="flex flex-col gap-10 items-center justify-center">
//         {/* first box */}

//         <div className="lg:flex items-start gap-4 mt-[50px]">
//           {/* left side */}
//           <div className="lg:w-6/12  px-[50px]">
//             <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope lg:w-[720px]">
//               Orthopaedics & Traumatology
//             </h1>
//             <p className="text-[22px] text-[#696969] font-manrope font-normal ">
//               Our Orthopaedics & Traumatology department is dedicated to
//               providing world-class care for patients with musculoskeletal
//               conditions and injuries. Our team of experienced orthopedic
//               surgeons and specialists is committed to restoring function,
//               reducing pain, and enhancing the quality of life for patients of
//               all ages. <br /> <br />
//               Expertise in hip, knee, and shoulder replacements using the latest
//               minimally invasive techniques to ensure faster recovery and
//               optimal outcomes. Comprehensive care for sports-related injuries,
//               including ACL reconstruction, meniscus repair, and rotator cuff
//               surgery, helping athletes return to their peak performance. <br />{" "}
//               <br />
//               Advanced treatment for fractures, dislocations, and other
//               traumatic injuries, with a focus on rapid and effective recovery.
//               Specialized care for spine disorders, including herniated discs,
//               spinal stenosis, and scoliosis, utilizing both surgical and
//               non-surgical approaches.
//             </p>
//           </div>
//           {/* right side  */}
//           <div className="md:w-6/12">
//             <hr className="text-[#8F3E97] border-2 border-[#8F3E97] lg:ml-32 my-8" />
//             <img className=" px-[50px]" src={orthopedics} alt="" />
//           </div>
//         </div>
//         {/* second box */}
//         <div className="lg:flex items-start gap-4 mt-[50px]">
//           {/* left side */}
//           <div className="md:w-6/12">
//             <hr className="text-[#8F3E97] border-2 border-[#8F3E97] lg: m l-32 my-8" />
//             <img className=" px-[50px]" src={Paediatrics} alt="" />
//           </div>

//           {/* right side  */}
//           <div className="lg:w-6/12  px-[50px]">
//             <h1 className="lg:my-0 my-4 text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope lg:w-[720px]">
//               Paediatrics
//             </h1>
//             <p className="text-[22px] text-[#696969] font-manrope font-normal ">
//               Our Pediatrics department is dedicated to providing exceptional
//               medical care for infants, children, and adolescents. Our team of
//               compassionate and experienced pediatricians is committed to
//               ensuring the health and well-being of young patients, offering a
//               comprehensive range of services tailored to meet their unique
//               needs. <br /> <br />
//               Comprehensive care for newborns, from routine newborn screenings
//               to management of neonatal conditions.Regular check-ups and
//               preventive care to monitor growth and development, administer
//               vaccinations, and provide guidance on nutrition and healthy
//               lifestyle choices. <br /> <br />
//               Access to a wide range of pediatric subspecialties, including
//               pediatric cardiology, neurology, gastroenterology, and more,
//               ensuring comprehensive care for complex medical conditions.
//             </p>
//           </div>
//         </div>

//         {/* third box */}
//         <div className="lg:flex items-start gap-4 mt-[50px]">
//           {/* left side */}
//           <div className="lg:w-6/12  px-[50px]">
//             <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope lg:w-[720px]">
//               Obstetrics & Gynecology
//             </h1>
//             <p className="text-[22px] text-[#696969] font-manrope font-normal ">
//               Our Obstetrics & Gynecology department is committed to providing
//               comprehensive and compassionate care for women at every stage of
//               life. Our team of highly skilled obstetricians, gynecologists, and
//               nurses work together to offer personalized treatment and support,
//               ensuring the health and well-being of our patients
//               <br /> <br />
//               From preconception counseling to postpartum support, we offer
//               complete care for expectant mothers. We provide a full range of
//               gynecologic services, including annual well-woman exams,
//               contraceptive counseling, menopause management, and treatment for
//               gynecologic conditions such as endometriosis, fibroids, and pelvic
//               pain. <br /> <br />
//               Our department is equipped with state-of-the-art technology to
//               perform minimally invasive surgical procedures, such as
//               laparoscopy and hysteroscopy.We work closely with other
//               departments to provide multidisciplinary care and support for our
//               patients.
//             </p>
//           </div>
//           {/* right side  */}
//           <div className="md:w-6/12">
//             <hr className="text-[#8F3E97] border-2 border-[#8F3E97] lg:ml- 32 my-8" />
//             <img className=" px-[50px]" src={obstetrics} alt="" />
//           </div>
//         </div>

//         {/* fourth-box */}
//         <div className="lg:flex items-start gap-4 mt-[50px]">
//           {/* left side */}
//           <div className="md:w-6/12">
//             <hr className="text-[#8F3E97] border-2 border-[#8F3E97] lg: m l-32 my-8" />
//             <img className=" px-[50px]" src={Paediatrics} alt="" />
//           </div>

//           {/* right side  */}
//           <div className="lg:w-6/12  px-[50px]">
//             <h1 className="lg:my-0 my-4 text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope lg:w-[720px]">
//               Plastic Surgery
//             </h1>
//             <p className="text-[22px] text-[#696969] font-manrope font-normal ">
//               Our Plastic Surgery department is dedicated to enhancing your
//               natural beauty and restoring function with precision and care. Our
//               team of board-certified plastic surgeons combines advanced
//               techniques with a compassionate approach to deliver outstanding
//               results tailored to each {`patient's`} unique needs and goals. <br />{" "}
//               <br />
//               Specialized care for conditions affecting the hands, including
//               carpal tunnel syndrome, tendon repairs, and arthritis-related
//               issues, ensuring restored function and improved quality of life.
//               <br /> <br />
//               Our skilled surgeons are experts in reconstructive procedures that
//               restore form and function following trauma, surgery, or congenital
//               conditions. Services include breast reconstruction, cleft lip and
//               palate repair, burn reconstruction, and hand surgery.
//             </p>
//           </div>
//         </div>

//         {/* fifth box */}
//         <div className="lg:flex items-start gap-4 mt-[50px]">
//           {/* left side */}
//           <div className="lg:w-6/12  px-[50px]">
//             <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope lg:w-[720px]">
//               Diabetology
//             </h1>
//             <p className="text-[22px] text-[#696969] font-manrope font-normal ">
//               Our Diabetology department is dedicated to providing comprehensive
//               care for patients with diabetes and related metabolic disorders.
//               Our team of highly skilled diabetologists and specialists is
//               committed to offering personalized treatment plans to manage and
//               control diabetes effectively, ensuring a better quality of life
//               for our patients.
//               <br /> <br />
//               We offer individualized treatment plans tailored to the specific
//               needs of each patient, including lifestyle modifications,
//               medication management, and regular monitoring of blood glucose
//               levels.
//               <br /> <br />
//               Specialized care and support for patients with both Type 1 and
//               Type 2 diabetes, including education on self-management techniques
//               and prevention strategies.
//             </p>
//           </div>
//           {/* right side  */}
//           <div className="md:w-6/12">
//             <hr className="text-[#8F3E97] border-2 border-[#8F3E97] lg:m l-32 my-8" />
//             <img className=" px-[50px]" src={Diabetology} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

import orthopedics from "../../assets/orthopedics-services.png";
import Paediatrics from "../../assets/Paediatrics-services.png";
import obstetrics from "../../assets/Obstetrics-Gynecology 1.png";
import Diabetology from "../../assets/Diabetics_GV 1.png";

const Service = () => {
  return (
    <div>
      {/* Top Banner with Heading */}
      

      {/* Content */}
      <div className="flex flex-col gap-10 items-center justify-center px-4 md:px-8 lg:px-[50px] py-10">
        {/* Service Box Template */}
        {/* Repeat below block with different data */}

        {/* Orthopaedics */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mt-10">
          <div className="lg:w-6/12">
            <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope">
              Orthopaedics & Traumatology
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4">
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
            </p>
          </div>
          <div className="lg:w-6/12">
            <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />
            <img
              src={orthopedics}
              className="w-full object-cover"
              alt="Orthopaedics"
            />
          </div>
        </div>

        {/* Paediatrics */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-6 mt-10">
          <div className="lg:w-6/12">
            <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope">
              Paediatrics
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4">
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
            </p>
          </div>
          <div className="lg:w-6/12">
            <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />
            <img
              src={Paediatrics}
              className="w-full object-cover"
              alt="Paediatrics"
            />
          </div>
        </div>

        {/* Obstetrics */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mt-10">
          <div className="lg:w-6/12">
            <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope">
              Obstetrics & Gynecology
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4">
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
            </p>
          </div>
          <div className="lg:w-6/12">
            <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />
            <img
              src={obstetrics}
              className="w-full object-cover"
              alt="Obstetrics"
            />
          </div>
        </div>

        {/* Plastic Surgery */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-6 mt-10">
          <div className="lg:w-6/12">
            <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope">
              Plastic Surgery
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4">
            Our Plastic Surgery department is dedicated to enhancing your
               natural beauty and restoring function with precision and care. Our
               team of board-certified plastic surgeons combines advanced
               techniques with a compassionate approach to deliver outstanding
               results tailored to each {`patient's`} unique needs and goals. <br />{" "}
               <br />
               Specialized care for conditions affecting the hands, including
               carpal tunnel syndrome, tendon repairs, and arthritis-related
               issues, ensuring restored function and improved quality of life.
               <br /> <br />
               Our skilled surgeons are experts in reconstructive procedures that
               restore form and function following trauma, surgery, or congenital
               conditions. Services include breast reconstruction, cleft lip and
               palate repair, burn reconstruction, and hand surgery.
            </p>
          </div>
          <div className="lg:w-6/12">
            <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />
            <img
              src={Paediatrics}
              className="w-full object-cover"
              alt="Plastic Surgery"
            />
          </div>
        </div>

        {/* Diabetology */}
        <div className="flex flex-col lg:flex-row items-start gap-6 mt-10">
          <div className="lg:w-6/12">
            <h1 className="text-[#8F3E97] font-bold text-[24px] lg:text-[48px] font-manrope">
              Diabetology
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[22px] text-[#696969] font-manrope mt-4">
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
            </p>
          </div>
          <div className="lg:w-6/12">
            <hr className="text-[#8F3E97] border-2 border-[#8F3E97] my-6" />
            <img
              src={Diabetology}
              className="w-full object-cover"
              alt="Diabetology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
