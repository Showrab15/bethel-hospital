// const Insurance = () => {
//   return (
//     <div className="bg-[#CDB0D0]">
//       <div className="flex flex-col justify-center py-[30px] md:py-[81px]">
//         <h3 className="font-manrope font-semibold text-[20px] md:text-[30px] text-center">
//           TAMIL NADU GOVERNMENT NEW HEALTH INSURANCE SCHEME - FOR PENSIONERS/
//         </h3>
//         <div className="flex md:flex-row flex-col gap-10 justify-center items-center pt-6 md:pt-10 ">
//           <h6 className="text-[#121212] text-[18px] font-bold">
//             INSURANCE COMPANY
//           </h6>
//           <div className="  flex items-center md:w-full max-w-lg bg-gray-200 rounded-lg shadow-md overflow-hidden">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-grow p-3 pl-4 text-gray-800 bg-white border-none focus:outline-none rounded-l-lg"
//             />
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-r-lg hover:bg-purple-700 focus:outline-none">
//               Search
//             </button>
//           </div>
//           <h6 className="text-[#1D9D09] text-[18px] font-bold">Eligible</h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Insurance;



import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // You can use heroicons/lucide/etc.

const insuranceCompanies = [
    { name: "DEDICATED HEALTHCARE SERVICE (TPA) PRIVATE LTD", eligible: false },
    { name: "MANIPAL CIGNA TIK HEALTH CARE", eligible: false },
    { name: "FAMILY HEALTH PLAN INSURANCE (TPA) LTD. (FHPL)", eligible: false },
    { name: "GOOD HEALTH (TPA) SERVICES LTD", eligible: false },
    { name: "MEDSAVE HEALTH CARE (TPA) PRIVATE LTD", eligible: false },
    { name: "MD INDIA HEALTHCARE SERVICES (TPA) PRIVATE LTD", eligible: false },
    { name: "RAKSHA HEALTH INSURANCE TPA PVT. LTD", eligible: false },
    { name: "MEDVANTAGE INSURANCE TPA (FORMERLY UNITED HEALTH CARE)", eligible: false },
    { name: "VIDAL HEALTHCARE INSURANCE (TPA) PRIVATE LTD", eligible: false },
    { name: "VIPUI. MEDCORP PVT LTD.", eligible: false },
    { name: "PARAMOUNT HEALTH SERVICE & INSURANCE TPA PVT. LTD", eligible: false },
    { name: "HERITAGE HEALTH INSURANCE TPA PVT. LTD", eligible: false },
    { name: "HEALTH INSURANCE TPA OF INDIA LTD", eligible: false },
    { name: "HEALTH INDIA INSURANCE TPA SERVICES PVT LTD", eligible: false },
    { name: "THE NEW INDIA ASSURANCE CO. LTD", eligible: false },
    { name: "UNITED INDIA INSURANCE CO. LTD.", eligible: true },
    { name: "NATIONAL INSURANCE CO. LTD.", eligible: false },
    { name: "ORIENTAL GENERAL INSURANE CO. LTD", eligible: false },
    { name: "ACKO GENERAL INSURANCE COMPANY", eligible: false },
    { name: "ADITYA BIRLA SUNLIFE INSURANCE", eligible: true },
    { name: "APOLLO MUNICH HEALTH INSURANCE", eligible: false },
    { name: "APPLE ONE NATIONAL INSURANCE CO. LTD", eligible: false },
    { name: "BAJAJ ALLIAZL GENERAL INSURANCE.", eligible: false },
    { name: "CHOLAMANDALAM MS GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "EDEL WEISS GENERAL INSURANCE COMPANY.", eligible: false },
    { name: "FUTURE GENERAL INSURANCE CO. LTD", eligible: true },
    { name: "HDFC ERGO GENERAL INSURANCE.", eligible: false },
    { name: "IFFCO-TOKIO GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "RELIANCE GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "STAR HEALTH AND ALLIED INSURANCE CO. LTD", eligible: false },
    { name: "NAVI GENERAL INSURANCE CO. LTD.", eligible: false },
    { name: "MAGMA HDI GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "TATA AIG GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "KOTAK GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "LIBERTY GENERAL INSURANCE", eligible: false },
    { name: "NIVA BUBA HEALTH INSURANCE", eligible: true },
    { name: "SBI GENERAL INSURANCE", eligible: false },
    { name: "ROYAL SUNDARAM GENERAL INSURANCE", eligible: false },
    { name: "GO DIGIT GENERAL INSURANCE", eligible: false },
    { name: "UNIVERSAL SOMPO GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "ICICI LOMBARD GENERAL INSURANCE CO. LTD", eligible: false },
    { name: "ERICSON TPA PVT. LTD", eligible: false },
    { name: "GALAXY HEALTH INSURANCE", eligible: false },
    { name: "MEDIASSIST INDIA INSURANCE TPA PRIVATE LTD", eligible: false },

  ];
  

const Insurance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.trim() === "") {
      setSelectedCompany(null);
      return;
    }

    // Find alphabetically first match starting with the typed letters
    const filtered = insuranceCompanies
      .filter((company) =>
        company.name.toLowerCase().startsWith(input.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    setSelectedCompany(filtered[0] || null);
  };

  return (
    <div className="bg-[#CDB0D0] min-h-[300px]">
      <div className="flex flex-col justify-center py-[30px] md:py-[81px]">
        <h3 className="font-manrope font-semibold text-[20px] md:text-[30px] text-center">
          TAMIL NADU GOVERNMENT NEW HEALTH INSURANCE SCHEME - FOR PENSIONERS/
        </h3>

        <div className="flex md:flex-row flex-col gap-6 justify-center items-center pt-6 md:pt-10 px-4">
          <h6 className="text-[#121212] text-[18px] font-bold min-w-[250px] text-center">
            {selectedCompany ? selectedCompany.name : "INSURANCE COMPANY"}
          </h6>

          <div className="flex items-center w-full max-w-lg bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Type insurance company name..."
              className="flex-grow p-3 pl-4 text-gray-800 bg-white border-none focus:outline-none rounded-l-lg"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-r-lg hover:bg-purple-700 focus:outline-none">
              Search
            </button>
          </div>

          <div className="min-w-[150px] text-center">
            {selectedCompany ? (
              selectedCompany.eligible ? (
                <div className="flex items-center gap-2 text-[#1D9D09] font-bold text-[18px] justify-center">
                  <CheckCircle className="w-5 h-5" /> Eligible
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-bold text-[18px] justify-center">
                  <XCircle className="w-5 h-5" /> Not Eligible
                </div>
              )
            ) : (
              <div className="text-gray-500 font-medium">—</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
