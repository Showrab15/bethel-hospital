





// import { useState } from "react";
// import { CheckCircle, XCircle } from "lucide-react";

// const insuranceCompanies = [
//   { name: "DEDICATED HEALTHCARE SERVICE (TPA) PRIVATE LTD", eligible: true },
//   { name: "MANIPAL CIGNA TIK HEALTH CARE", eligible: true },
//   { name: "FAMILY HEALTH PLAN INSURANCE (TPA) LTD. (FHPL)", eligible: true },
//   { name: "GOOD HEALTH (TPA) SERVICES LTD", eligible: true },
//   { name: "MEDSAVE HEALTH CARE (TPA) PRIVATE LTD", eligible: true },
//   { name: "MD INDIA HEALTHCARE SERVICES (TPA) PRIVATE LTD", eligible: true },
//   { name: "RAKSHA HEALTH INSURANCE TPA PVT. LTD", eligible: true },
//   { name: "MEDVANTAGE INSURANCE TPA (FORMERLY UNITED HEALTH CARE)", eligible: true },
//   { name: "VIDAL HEALTHCARE INSURANCE (TPA) PRIVATE LTD", eligible: true },
//   { name: "VIPUI. MEDCORP PVT LTD.", eligible: true },
//   { name: "PARAMOUNT HEALTH SERVICE & INSURANCE TPA PVT. LTD", eligible: true },
//   { name: "HERITAGE HEALTH INSURANCE TPA PVT. LTD", eligible: true },
//   { name: "HEALTH INSURANCE TPA OF INDIA LTD", eligible: true },
//   { name: "HEALTH INDIA INSURANCE TPA SERVICES PVT LTD", eligible: true },
//   { name: "THE NEW INDIA ASSURANCE CO. LTD", eligible: true },
//   { name: "UNITED INDIA INSURANCE CO. LTD.", eligible: true },
//   { name: "NATIONAL INSURANCE CO. LTD.", eligible: true },
//   { name: "ORIENTAL GENERAL INSURANE CO. LTD", eligible: true },
//   { name: "ACKO GENERAL INSURANCE COMPANY", eligible: true },
//   { name: "ADITYA BIRLA SUNLIFE INSURANCE", eligible: true },
//   { name: "APOLLO MUNICH HEALTH INSURANCE", eligible: true },
//   { name: "APPLE ONE NATIONAL INSURANCE CO. LTD", eligible: true },
//   { name: "BAJAJ ALLIAZL GENERAL INSURANCE.", eligible: true },
//   { name: "CHOLAMANDALAM MS GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "EDEL WEISS GENERAL INSURANCE COMPANY.", eligible: true },
//   { name: "FUTURE GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "HDFC ERGO GENERAL INSURANCE.", eligible: true },
//   { name: "IFFCO-TOKIO GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "RELIANCE GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "STAR HEALTH AND ALLIED INSURANCE CO. LTD", eligible: true },
//   { name: "NAVI GENERAL INSURANCE CO. LTD.", eligible: true },
//   { name: "MAGMA HDI GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "TATA AIG GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "KOTAK GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "LIBERTY GENERAL INSURANCE", eligible: true },
//   { name: "NIVA BUBA HEALTH INSURANCE", eligible: true },
//   { name: "SBI GENERAL INSURANCE", eligible: true },
//   { name: "ROYAL SUNDARAM GENERAL INSURANCE", eligible: true },
//   { name: "GO DIGIT GENERAL INSURANCE", eligible: true },
//   { name: "UNIVERSAL SOMPO GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "ICICI LOMBARD GENERAL INSURANCE CO. LTD", eligible: true },
//   { name: "ERICSON TPA PVT. LTD", eligible: true },
//   { name: "GALAXY HEALTH INSURANCE", eligible: true },
//   { name: "MEDIASSIST INDIA INSURANCE TPA PRIVATE LTD", eligible: true },
// ];

// const Insurance = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   const handleSearch = (e) => {
//     const input = e.target.value;
//     setSearchTerm(input);

//     if (input.trim() === "") {
//       setSelectedCompany(null);
//       return;
//     }

//     const filtered = insuranceCompanies
//       .filter((company) =>
//         company.name.toLowerCase().startsWith(input.toLowerCase())
//       )
//       .sort((a, b) => a.name.localeCompare(b.name));

//     setSelectedCompany(filtered[0] || null);
//   };

//   return (
//     <div className="px-4 md:px-8 lg:px-16 mt-10">
//        <div className="bg-white text-[#8F3E97] w-full px-4 md:px-6 py-10 md:py-[81px] ">
//       <div className="max-w-7xl mx-auto">
//       <h3 className="font-manrope font-medium text-xl md:text-2xl lg:text-[30px] text-center leading-snug">
//   Tamil Nadu Government New Health Insurance Scheme <br /> For Pensioners
// </h3>


//         <div className="flex flex-col lg:flex-row gap-6 mt-10 justify-center items-center">
//           {/* Selected Company Name */}
//           <h6 className=" font-bold text-base md:text-lg text-center lg:text-left min-w-[200px]">
//             {selectedCompany ? selectedCompany.name : "INSURANCE COMPANY"}
//           </h6>

//           {/* Search Input */}
//           <div className="flex w-full max-w-md bg-[white] rounded-lg shadow-md overflow-hidden">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Type insurance company name..."
//               className="flex-grow p-3 pl-4 text-gray-800 bg-white border-2 border-[#8F3E97] focus:outline-double"
//             />
//             <button className="bg-[#8F3E97] text-white px-5 py-2 text-sm md:text-base hover:bg-purple-700 focus:outline-none">
//               Search
//             </button>
//           </div>

//           {/* Eligibility Display */}
//           <div className="text-center lg:text-left min-w-[150px]">
//             {selectedCompany ? (
//               selectedCompany.eligible ? (
//                 <div className="flex items-center gap-2 text-[#1D9D09] font-bold text-sm md:text-base justify-center lg:justify-start">
//                   <CheckCircle className="w-5 h-5" /> Eligible
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-2 text-red-600 font-bold text-sm md:text-base justify-center lg:justify-start">
//                   <XCircle className="w-5 h-5" /> Not Eligible
//                 </div>
//               )
//             ) : (
//               <div className="text-gray-500 font-medium"></div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
   
//   );
// };

// export default Insurance;
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const insuranceCompanies = [
  { name: "DEDICATED HEALTHCARE SERVICE (TPA) PRIVATE LTD", eligible: true },
  { name: "MANIPAL CIGNA TIK HEALTH CARE", eligible: true },
  { name: "FAMILY HEALTH PLAN INSURANCE (TPA) LTD. (FHPL)", eligible: true },
  { name: "GOOD HEALTH (TPA) SERVICES LTD", eligible: true },
  { name: "MEDSAVE HEALTH CARE (TPA) PRIVATE LTD", eligible: true },
  { name: "MD INDIA HEALTHCARE SERVICES (TPA) PRIVATE LTD", eligible: true },
  { name: "RAKSHA HEALTH INSURANCE TPA PVT. LTD", eligible: true },
  { name: "MEDVANTAGE INSURANCE TPA (FORMERLY UNITED HEALTH CARE)", eligible: true },
  { name: "VIDAL HEALTHCARE INSURANCE (TPA) PRIVATE LTD", eligible: true },
  { name: "VIPUI. MEDCORP PVT LTD.", eligible: true },
  { name: "PARAMOUNT HEALTH SERVICE & INSURANCE TPA PVT. LTD", eligible: true },
  { name: "HERITAGE HEALTH INSURANCE TPA PVT. LTD", eligible: true },
  { name: "HEALTH INSURANCE TPA OF INDIA LTD", eligible: true },
  { name: "HEALTH INDIA INSURANCE TPA SERVICES PVT LTD", eligible: true },
  { name: "THE NEW INDIA ASSURANCE CO. LTD", eligible: true },
  { name: "UNITED INDIA INSURANCE CO. LTD.", eligible: true },
  { name: "NATIONAL INSURANCE CO. LTD.", eligible: true },
  { name: "ORIENTAL GENERAL INSURANE CO. LTD", eligible: true },
  { name: "ACKO GENERAL INSURANCE COMPANY", eligible: true },
  { name: "ADITYA BIRLA SUNLIFE INSURANCE", eligible: true },
  { name: "APOLLO MUNICH HEALTH INSURANCE", eligible: true },
  { name: "APPLE ONE NATIONAL INSURANCE CO. LTD", eligible: true },
  { name: "BAJAJ ALLIAZL GENERAL INSURANCE.", eligible: true },
  { name: "CHOLAMANDALAM MS GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "EDEL WEISS GENERAL INSURANCE COMPANY.", eligible: true },
  { name: "FUTURE GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "HDFC ERGO GENERAL INSURANCE.", eligible: true },
  { name: "IFFCO-TOKIO GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "RELIANCE GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "STAR HEALTH AND ALLIED INSURANCE CO. LTD", eligible: true },
  { name: "NAVI GENERAL INSURANCE CO. LTD.", eligible: true },
  { name: "MAGMA HDI GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "TATA AIG GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "KOTAK GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "LIBERTY GENERAL INSURANCE", eligible: true },
  { name: "NIVA BUBA HEALTH INSURANCE", eligible: true },
  { name: "SBI GENERAL INSURANCE", eligible: true },
  { name: "ROYAL SUNDARAM GENERAL INSURANCE", eligible: true },
  { name: "GO DIGIT GENERAL INSURANCE", eligible: true },
  { name: "UNIVERSAL SOMPO GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "ICICI LOMBARD GENERAL INSURANCE CO. LTD", eligible: true },
  { name: "ERICSON TPA PVT. LTD", eligible: true },
  { name: "GALAXY HEALTH INSURANCE", eligible: true },
  { name: "MEDIASSIST INDIA INSURANCE TPA PRIVATE LTD", eligible: true },
];

const Insurance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.trim() === "") {
      setFilteredCompanies([]);
      setSelectedCompany(null);
      setNotFound(false);
      return;
    }

    const filtered = insuranceCompanies
      .filter((company) =>
        company.name.toLowerCase().startsWith(input.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredCompanies(filtered);
    setSelectedCompany(filtered[0] || null); // Auto-select first company

    // Check if no companies are found
    if (filtered.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };

  const handleSelectCompany = (company) => {
    setSearchTerm(company.name);
    setFilteredCompanies([]);
    setSelectedCompany(company);
    setNotFound(false); // Reset 'not found' when a company is selected
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-10">
      <div className="bg-white text-[#8F3E97] w-full px-4 md:px-6 py-10 md:py-[81px] ">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-manrope font-medium text-xl md:text-2xl lg:text-[30px] text-center leading-snug">
            Tamil Nadu Government New Health Insurance Scheme <br /> For Pensioners
          </h3>

          <div className="flex flex-col lg:flex-row gap-6 mt-10 justify-center items-center">
            {/* Selected Company Name */}
            <h6 className="font-bold text-base md:text-lg text-center lg:text-left min-w-[200px]">
              {selectedCompany ? selectedCompany.name : "INSURANCE COMPANY"}
            </h6>

            {/* Search Input */}
            <div className="flex w-full max-w-md bg-[white] rounded-lg shadow-md overflow-hidden">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Type insurance company name..."
                className="flex-grow p-3 pl-4 text-gray-800 bg-white border-2 border-[#8F3E97] focus:outline-double"
              />
              <button className="bg-[#8F3E97] text-white px-5 py-2 text-sm md:text-base hover:bg-purple-700 focus:outline-none">
                Search
              </button>
            </div>

            {/* Eligibility Display */}
            <div className="text-center lg:text-left min-w-[150px]">
              {selectedCompany ? (
                selectedCompany.eligible ? (
                  <div className="flex items-center gap-2 text-[#1D9D09] font-bold text-sm md:text-base justify-center lg:justify-start">
                    <CheckCircle className="w-5 h-5" /> Eligible
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm md:text-base justify-center lg:justify-start">
                    <XCircle className="w-5 h-5" /> Not Eligible
                  </div>
                )
              ) : (
                <div className="text-gray-500 font-medium"></div>
              )}
            </div>
          </div>

          {/* Display filtered companies when user types */}
          {filteredCompanies.length > 0 && (
            <div className="mt-4 fl ex justify-center w-full">
              <ul className="max-h-60 overflow-y-auto bg-white shadow-lg rounded-lg p-2">
                {filteredCompanies.map((company) => (
                  <li
                    key={company.name}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectCompany(company)}
                  >
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* "Not Found" message when no companies match */}
          {notFound && (
            <div className="text-center mt-4 text-red-600 font-bold text-lg">
              No insurance companies found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Insurance;
