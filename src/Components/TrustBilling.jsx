import React from "react";
import clean from "../assets/clean.webp";
import rate from "../assets/rate.webp";
import increase from "../assets/increase.webp";
import { FaCheckCircle } from "react-icons/fa";
const TrustBilling = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="text-3xl font-semibold text-center">
        <p>Comprehensive Billing with MedTek</p>
        <p className="text-primary">“More Than Just Claims Processing”</p>
      </div>
      <div className="flex py-10   flex-col lg:flex-row gap-10 w-[70%] mx-auto justify-between">
        <div className=" bg-primary p-4 rounded-md w-full">
          <p className="text-white text-4xl font-medium">Almost 99%</p>
          <div className="flex items-end p-4">
            <div className="text-white text-xl font-medium">
              <p>Clean </p>
              <p>Claim Ratio</p>
            </div>
            <div className="">
              <img src={clean} alt="" />
            </div>
          </div>
        </div>
        <div className=" bg-primary p-4 rounded-md w-full">
          <p className="text-white text-4xl font-medium">Almost 99%</p>
          <div className="flex items-end p-4 gap-4">
            <div className="text-white text-xl font-medium">
              <p>1st submission </p>
              <p> pass rate</p>
            </div>
            <div className="">
              <img src={rate} alt="" />
            </div>
          </div>
        </div>
        <div className=" bg-primary p-4 rounded-md w-full">
          <p className="text-white text-4xl font-medium">Almost 99%</p>
          <div className="flex items-end p-4 gap-4">
            <div className="text-white text-2xl">
              <p>Revenue </p>
              <p>Increase</p>
            </div>
            <div className="">
              <img src={increase} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[70%] w-[80%]  mx-auto">
        <div className="flex   flex-col lg:flex-row">
          <div className="w-full">
            <div className="space-y-4 pb-4">
              <div className="">
                Managing medical billing is complex, but MedTek simplifies it.
                Our cloud-based platform instantly validates patient insurance
                eligibility and submits claims electronically, ensuring faster
                payments. We maintain full-cycle oversight—from claim submission
                to payment recovery—so no dollar is left behind.
              </div>
              <div className="">
                Our partnerships with major payers ensure seamless processing
                and error-free submissions. From Medicare to private insurance
                carriers, we make sure you get paid fully and promptly.
              </div>
            </div>
          
          </div>
          <div className="flex flex-col py-4 lg:flex-row gap-6 w-full px-10">
            <div className="border rounded-md space-y-8 bg-white   flex flex-col shadow-lg p-4">
              <div className="  font-semibold text-primary ">
                Happiness Score
              </div>
              <p className="text-6xl font-semibold">96%</p>
              <p>
                Based on a 4.8-star rating from 350+ providers across the
                states.
              </p>
            </div>
            <div className="border rounded-md  space-y-8  bg-white  shadow-lg p-4">
              <div className=" text-lg font-semibold text-primary">
                Billing Experts
              </div>
              <p className="text-6xl font-semibold">
                1.2 <span>k</span>
              </p>
              <p>
                we are your trusted partner for efficient, accurate billing
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="">
        <div className="font-semibold pb-2">
              Discover the MedTek Advantage
            </div>
            <div className="flex justify-between">
              <div>
                <div className="flex  gap-2">
                  <FaCheckCircle className="text-primary text-2xl" />
                  <p>
                    <span className="font-medium">
                      Flexible Software Solutions:
                    </span>{" "}
                    Use your existing billing software or switch to our in-house
                    system, complete with free EHR and practice management
                    tools.
                  </p>
                </div>
                <div className="flex   gap-2">
                  <FaCheckCircle className="text-primary text-2xl" />
                  <p>
                    <span className="font-medium"> 24/7 Customer Support:</span>{" "}
                    Whether you need help managing a claim or resolving
                    technical issues, our support team is always available to
                    assist.
                  </p>
                </div>
                <div className="flex   gap-2">
                  <FaCheckCircle className="text-primary text-xl" />
                  <p>
                    <span className="font-medium">Transparent Reporting:</span>{" "}
                    Access your financial performance anytime with real-time
                    dashboards and detailed reports.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBilling;
