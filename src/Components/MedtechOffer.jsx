import React from "react";
import { FaBookMedical, FaLaptopMedical, FaFileInvoice } from "react-icons/fa";
import { IoIosMedkit } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MedtechOffer = () => {
  const offers = [
    {
      title: "Medical Billing Services",
      icon: <FaBookMedical aria-label="Medical Billing Icon" />,
      des: "From patient intake to final payment, we manage every step of the billing cycle—handling check-in, claims submission, payments, and denials efficiently.",
    },
    {
      icon: <FaLaptopMedical aria-label="Medical Coding Icon" />,
      title: "Medical Coding Services",
      des: "Our certified coders convert patient services into accurate ICD-10 and CPT codes for error-free billing, ensuring clean claims and quick reimbursements.",
    },
    {
      icon: <FaFileInvoice aria-label="Credentialing Icon" />,
      title: "Credentialing Services",
      des: "We simplify provider enrollment by connecting healthcare providers with top insurance networks and managing credentialing paperwork.",
    },
    {
      icon: <IoIosMedkit aria-label="Healthcare RCM Icon" />,
      title: "Healthcare RCM Services",
      des: "Tailored RCM services meet the specific needs of each specialty, ensuring smooth cash flow, timely reimbursements, and minimized claim denials.",
    },
  ];

  return (
    <div className="py-4 pb-20 bg-slate-50">
      <div className="lg:w-[60%] mx-auto p-10">
        <p className="text-3xl pb-4 font-semibold text-center">
          <span className="text-primary">Why Choose MedTek?</span>
        </p>
        <div>
          <ul className="whychoose flex flex-col gap-2">
            <li>
              Certified Experts: Over 250 certified coders and billing
              specialists ensure accuracy and compliance.
            </li>
            <li>
              Trusted by Providers Nationwide: 1,200+ providers across 50+
              specialties with top-notch medical billing solutions.
            </li>
            <li>
              High First-Submission Pass Rate: 97% of claims approved on the
              first submission.
            </li>
            <li>
              Significant Revenue Improvement: Clients experience an average
              10-15% increase in revenue.
            </li>
            <li>
              24/7 Support: Real-time assistance from our dedicated technical
              support team, ensuring zero downtime.
            </li>
          </ul>
        </div>
        <br />
        <div className="text-center">
          <p className="text-xl font-semibold text-center">
            <span className="text-primary">Our Services at a Glance</span>
          </p>
        </div>
      </div>
      <div className="lg:w-[80%] mx-auto">
        <div className="flex gap-4 flex-col lg:flex-row">
          {offers.map((val) => {
            return (
              <div
                key={val.title}
                className="shadow-lg w-[80%] mx-auto hover:shadow-primary flex flex-col justify-between border py-10 px-6 text-center lg:w-[33%]"
              >
                <p className="text-center flex justify-center text-primary text-3xl">
                  {val.icon}
                </p>
                <p className="py-4 font-semibold">{val.title}</p>
                <p className="pb-4 text-sm">{val.des}</p>
                <NavLink to="/services">
                  <button className="px-4 py-2 border border-primary hover:bg-primary hover:text-white rounded-full">
                    Explore More
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MedtechOffer;
