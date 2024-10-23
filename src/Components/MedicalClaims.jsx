import React from "react";
import doc from "../assets/Doctors.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const MedicalClaims = () => {
  return (
    <div className="bg-primary pt-10">
      <div className="lg:w-[80%] mx-auto">
        <div className=" text-4xl  text-white font-medium"></div>
        <div className="flex   flex-col lg:flex-row">
          <div className="w-full">
            <img src={doc} alt="" className="w-[70%]" />
          </div>
          <div className="flex justify-center items-center">
            <div className=" w-full ">
              <p className="text-4xl font-semibold text-white pb-8 ">
                Why MedTek Stands Out
              </p>

              <div className=" flex gap-2 flex-col text-white">
                <p className="text-Secondary font-medium">
                  HIPAA-Compliant Security
                </p>
                <p>
                  We protect sensitive patient data with advanced encryption
                  technology.
                </p>
              </div>
              <div className=" flex gap-2 flex-col text-white">
                <p className="text-Secondary font-medium">
                  Electronic Billing & Claim Submission
                </p>
                <p>
                  Claims are processed electronically, reducing delays and
                  boosting efficiency
                </p>
              </div>
              <div className=" flex gap-2 flex-col text-white">
                <p className="text-Secondary font-medium">
                  Real-Time Monitoring
                </p>
                <p>
                  Track claims and payments wi th up-to-date reporting tools on
                  your dashboard.
                </p>
              </div>
              <div className=" flex gap-2 flex-col text-white">
                <p className="text-Secondary font-medium">
                  Dedicated Insurance Expertise
                </p>
                <p>
                  We work with major insurance companies—Aetna, Blue Cross Blue
                  Shield, Medicare, and Medicaid—and ensure compliance with CMS
                  forms (CMS-1500, CMS-1450, and more).
                </p>
              </div>
              <div className=" ">
                <button className="bg-Secondary p-2 my-8 px-4 rounded-md flex items-center gap-2 text-white font-medium">
                  Book Free Consultation <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalClaims;
