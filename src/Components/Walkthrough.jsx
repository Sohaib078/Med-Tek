import React from "react";
import dashboard from "../assets/images/dashboard.png";
const Walkthrough = () => {
  return (
    <div className="bg-primary">
      <div className="  w-[80%] lg:w-[70%]   mx-auto  flex  flex-col lg:flex-row items-center justify-center py-10 gap-10 text-white px-4 mt-5">
        <div className="space-y-4 w-full    ">
          <p className="text-lg lg:text-2xl">
            Your All-in-One Medical Billing Software Company
          </p>
          <p className="text-sm lg:text-md">
            Whether you’re a physician seeking medical billing solutions or a
            hospital outsourcing full-cycle RCM, MedTek handles it all. From
            billing services to clearinghouse solutions, we ensure a smooth
            process every step of the way. You also have the flexibility to
            choose your preferred medical billing software or opt for our
            in-house solution, which includes a free EHR system and powerful
            features to streamline your entire revenue cycle management (RCM)
            process.
          </p>
          <button className="border border-white px-3 py-2 text-sm lg:text-md">
            Get a FREE Walkthrough
          </button>
        </div>
        <div className="w-full">
          <img src={dashboard} alt="Dashboard image"></img>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
