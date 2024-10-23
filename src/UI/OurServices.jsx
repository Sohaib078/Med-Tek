import React from "react";
import { AiOutlineAudit } from "react-icons/ai";
import { BsJournalMedical } from "react-icons/bs";
import { CiMedicalClipboard } from "react-icons/ci";
import { FaBookMedical, FaFileInvoice, FaLaptopMedical } from "react-icons/fa";
import { IoIosMedkit } from "react-icons/io";
import { MdOutlineMedicalInformation, MdOutlinePayment } from "react-icons/md";
import { TbReportMedical } from "react-icons/tb";

const OurServices = () => {
  const offers = [
    {
      title: "Patient Registration and Verification",
      icon: <FaBookMedical aria-label="Medical Billing Icon" />,
      des: "Streamline the onboarding process by capturing accurate patient demographics and ensuring insurance eligibility.",
      examp:
        "Our team handles the meticulous task of patient registration, verifying each patient's insurance details to prevent future billing issues and delays.",
    },
    {
      icon: <FaLaptopMedical aria-label="Medical Coding Icon" />,
      title: "Medical Coding",
      des: " Expert coding services using the latest CPT, ICD-10, and HCPCS standards to ensure compliance and maximize claim success.",
      examp:
        "Our certified coders utilize up-to-date coding practices to enhance accuracy and adherence to compliance protocols.",
    },
    {
      icon: <FaFileInvoice aria-label="Credentialing Icon" />,
      title: "Charge Entry",
      des: "Accurate financial capture through detailed charge entry processes, ensuring that each service is accounted for.",
      examp:
        "We ensure precision in charge entry, translating services rendered into billable amounts effectively.",
    },
    {
      icon: <IoIosMedkit aria-label="Healthcare RCM Icon" />,
      title: "Claims Submission",
      des: "Efficient claims processing with electronic submission capabilities, reducing turnaround time for reimbursements.",
      examp:
        "Submit claims seamlessly with our electronic submission system, designed to enhance speed and accuracy.",
    },
    {
      title: "Payment Posting",
      icon: <MdOutlinePayment aria-label="Medical Billing Icon" />,
      des: " Comprehensive payment reconciliation processes to keep your accounts precise and up-to-date.",
      examp:
        "Whether it's posting payments or identifying discrepancies, our keen attention to detail ensures financial accuracy.",
    },
    {
      icon: <FaLaptopMedical aria-label="Medical Coding Icon" />,
      title: "Denial Management and Appeals",
      des: "Proactive denial analysis and resolution, turning denied claims into successful collections.",
      examp:
        "Our specialists focus on analyzing denials and meticulously working towards successful appeals to recover owed revenue.",
    },
    {
      icon: <BsJournalMedical aria-label="Credentialing Icon" />,
      title: "Accounts Receivable Management",
      des: " Strategic follow-up on outstanding claims to shorten the revenue cycle and improve cash flow.",
      examp:
        "Stay ahead on collections with our dedicated AR management services. We ensure consistent follow-ups and reduce aging accounts.",
    },
    {
      icon: <MdOutlineMedicalInformation aria-label="Healthcare RCM Icon" />,
      title: "Patient Billing and Collections",
      des: "Transparent and patient-friendly billing practices, fostering trust and timely payments from patients.",
      examp:
        "Enhance the patient experience with clear, accurate billing statements and responsive collection services.",
    },
    {
      icon: <TbReportMedical aria-label="Medical Coding Icon" />,
      title: "Reporting and Analytics",
      des: " Dive deep into data with our analytical services to forecast trends and improve financial performance.",
      examp:
        "Leverage our cutting-edge reporting tools to gain insights into your practice’s financial health and identify areas for improvement.",
    },
    {
      icon: <AiOutlineAudit aria-label="Credentialing Icon" />,
      title: "Compliance and Risk Management",
      des: " Robust compliance measures to protect your practice from audits and fines.",
      examp:
        "Our compliance experts ensure your practice adheres to all necessary regulations, safeguarding against potential risks.",
    },
    {
      icon: <CiMedicalClipboard aria-label="Healthcare RCM Icon" />,
      title: "Consultation and Advisory Services",
      des: " Tailored advisory services to enhance your operational efficiency and strategic growth.",
      examp:
        "Benefit from our consultation services to mold a future-ready practice, optimize workflow, and reduce revenue leaks.",
    },
  ];
  return (
    <div className="lg:w-[80%] mx-auto pt-12 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row flex-col gap-8 w-11/12  lg:w-full mx-auto">
        {offers.map((val) => {
          return (
            <div
              key={val.title}
              className="shadow-lg w-full mx-auto hover:shadow-primary flex flex-col justify-between border py-10 px-6  lg:w-full"
            >
              <p className="text-center flex  text-primary text-3xl">
                {val.icon}
              </p>
              <p className="py-4 font-semibold">{val.title}</p>
              <p className="pb-4 text-sm">{val.des}</p>
              <p className="pb-4 text-sm">{val.examp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
